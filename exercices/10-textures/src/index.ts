import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// Using Vite public directory - no import needed, access via URL

/**
 * Textures
 */
// Load texture using Three.js TextureLoader
const textureLoader = new three.TextureLoader();
const colorTexture = textureLoader.load("/static/textures/door/color.jpg");

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
const geometry = new three.BoxGeometry(1, 1, 1);
const material = new three.MeshBasicMaterial({ map: colorTexture });
const mesh = new three.Mesh(geometry, material);
scene.add(mesh);

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
