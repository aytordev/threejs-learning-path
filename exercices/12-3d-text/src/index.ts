import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
/**
 * Base
 */
// Debug
// const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl") as HTMLCanvasElement;

// Scene
const scene = new three.Scene();

/**
 * Textures
 */
const textureLoader = new three.TextureLoader();

const matcapTexture = textureLoader.load(
  "/static/textures/matcaps/12.png",
  (matcapTexture) => {
    matcapTexture.magFilter = three.NearestFilter;
    matcapTexture.minFilter = three.NearestFilter;
  },
);

matcapTexture.colorSpace = three.SRGBColorSpace;

/**
 * Fonts
 */
const fontLoader = new FontLoader();

fontLoader.load("/static/fonts/helvetiker_regular.typeface.json", (font) => {
  // Text lines to display
  const textLines = ["last lesson", "of the basics"];

  const textMaterial = new three.MeshMatcapMaterial({ matcap: matcapTexture });
  const lineHeight = 0.7; // Space between lines

  // Create a group to hold all text lines
  const textGroup = new three.Group();

  textLines.forEach((line, index) => {
    const textGeometry = new TextGeometry(line, {
      font: font,
      size: 0.5,
      depth: 0.2,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4,
    });

    // Align text to the left (no horizontal centering needed)

    const textMesh = new three.Mesh(textGeometry, textMaterial);

    // Position each line vertically
    textMesh.position.y = -index * lineHeight;

    textGroup.add(textMesh);
  });

  // Center the entire text group
  const groupBox = new three.Box3().setFromObject(textGroup);
  const centerOffset = groupBox
    .getCenter(new three.Vector3())
    .multiplyScalar(-1);
  textGroup.position.copy(centerOffset);

  scene.add(textGroup);

  const torusGeometry = new three.TorusGeometry(0.3, 0.2, 20, 45);
  const torusMaterial = new three.MeshMatcapMaterial({
    matcap: matcapTexture,
  });

  const cubeGeometry = new three.BoxGeometry(0.3, 0.3, 0.3);
  const cubeMaterial = new three.MeshMatcapMaterial({
    matcap: matcapTexture,
  });

  for (let i = 0; i < 40; i++) {
    const torus = new three.Mesh(torusGeometry, torusMaterial);
    torus.position.x = (Math.random() - 0.5) * 10;
    torus.position.y = (Math.random() - 0.5) * 10;
    torus.position.z = (Math.random() - 0.5) * 10;
    torus.rotation.x = Math.random() * Math.PI;
    torus.rotation.y = Math.random() * Math.PI;
    torus.rotation.z = Math.random() * Math.PI;
    scene.add(torus);
  }

  for (let i = 0; i < 40; i++) {
    const cube = new three.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = (Math.random() - 0.5) * 10;
    cube.position.y = (Math.random() - 0.5) * 10;
    cube.position.z = (Math.random() - 0.5) * 10;
    cube.rotation.x = Math.random() * Math.PI;
    cube.rotation.y = Math.random() * Math.PI;
    cube.rotation.z = Math.random() * Math.PI;
    scene.add(cube);
  }
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
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas as HTMLElement);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new three.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
// const clock = new three.Clock();

const tick = () => {
  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
