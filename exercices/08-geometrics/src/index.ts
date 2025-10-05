import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
// const geometry = new three.BoxGeometry(1, 1, 1, 5, 5, 5);

// Create a triangle geometry
//const geometry = new three.BufferGeometry();

// const positionArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);
//const positionsAttribute = new three.BufferAttribute(positionArray, 3);

// geometry.setAttribute("position", positionsAttribute);

// Create an empty BufferGeometry
const geometry = new three.BufferGeometry();

// Create 50 triangles (450 values)
const count = 50;
const positionsArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
  positionsArray[i] = (Math.random() - 0.5) * 4;
}

// Create the attribute and name it 'position'
const positionsAttribute = new three.BufferAttribute(positionsArray, 3);
geometry.setAttribute("position", positionsAttribute);

const material = new three.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
});
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
