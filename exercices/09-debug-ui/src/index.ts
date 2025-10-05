import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gui from "lil-gui";
import gsap from "gsap";

/**
 * Debug
 */
const graphicUI = new gui({
  width: 300,
  title: "Nice debug UI",
  closeFolders: true,
});
const debugObject = {
  color: 0xff0000,
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 });
  },
  subdivision: 2,
};
//graphicUI.close();
//graphicUI.hide();
const cubeTweaks = graphicUI.addFolder("Awesome cube");
cubeTweaks.close();

/**
 * Base
 */
// Canvas
// Extended canvas interface with webkit fullscreen support
interface ExtendedHTMLCanvasElement extends HTMLCanvasElement {
  webkitRequestFullscreen?: () => Promise<void>;
}

// Extended document interface with webkit fullscreen support
interface ExtendedDocument extends Document {
  webkitExitFullscreen?: () => Promise<void>;
  webkitFullscreenElement?: Element | null;
}

const canvas = document.querySelector(
  "canvas.webgl",
) as ExtendedHTMLCanvasElement;

// Scene
const scene = new three.Scene();

/**
 * Object
 */
const geometry = new three.BoxGeometry(1, 1, 1, 2, 2, 2);
const material = new three.MeshBasicMaterial({
  color: debugObject.color,
  wireframe: true,
});
const mesh = new three.Mesh(geometry, material);
scene.add(mesh);

cubeTweaks.add(mesh.position, "y").min(-3).max(3).step(0.01).name("elevation");
cubeTweaks.add(mesh.position, "x").min(-3).max(3).step(0.01).name("rotation");
cubeTweaks.add(mesh, "visible");
cubeTweaks.add(material, "wireframe");
cubeTweaks
  .addColor(debugObject, "color")
  .onChange(() => {
    material.color.set(debugObject.color);
  })
  .onFinishChange(() => {
    console.log("Color changed");
  });
graphicUI.add(debugObject, "spin");
cubeTweaks
  .add(debugObject, "subdivision")
  .min(1)
  .max(20)
  .step(1)
  .onFinishChange(() => {
    mesh.geometry.dispose();
    mesh.geometry = new three.BoxGeometry(
      1,
      1,
      1,
      debugObject.subdivision,
      debugObject.subdivision,
      debugObject.subdivision,
    );
  });

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  const extendedDocument = document as ExtendedDocument;
  const fullscreenElement =
    extendedDocument.fullscreenElement ||
    extendedDocument.webkitFullscreenElement;

  if (!fullscreenElement) {
    // Enter fullscreen
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    // Exit fullscreen
    if (extendedDocument.exitFullscreen) {
      extendedDocument.exitFullscreen();
    } else if (extendedDocument.webkitExitFullscreen) {
      extendedDocument.webkitExitFullscreen();
    }
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    graphicUI.hide();
  }
  if (event.key === "s") {
    graphicUI.show();
  }
});

/**
 * Camera
 */
// Base camera
const camera = new three.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new three.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

/**
 * Animate
 */
const clock = new three.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
