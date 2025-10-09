import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new three.Scene();

const axesHelper = new three.AxesHelper(5);
scene.add(axesHelper);

/**
 * Textures
 */
const textureLoader = new three.TextureLoader();

const matcapTexture = textureLoader.load(
  "/static/textures/matcaps/8.png",
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
  const textGeometry = new TextGeometry("code is a therapy for me :)", {
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

  // textGeometry.computeBoundingBox();

  // textGeometry.translate(
  //  -(textGeometry.boundingBox.max.x - 0.02) * 0.5,
  //  -(textGeometry.boundingBox.max.y - 0.02) * 0.5,
  //  -(textGeometry.boundingBox.max.z - 0.03) * 0.5,
  // );

  textGeometry.center();

  const textMaterial = new three.MeshMatcapMaterial({ matcap: matcapTexture });
  const text = new three.Mesh(textGeometry, textMaterial);

  scene.add(text);

  const torusGeometry = new three.TorusGeometry(0.3, 0.2, 20, 45);
  const torusMaterial = new three.MeshMatcapMaterial({
    matcap: matcapTexture,
  });

  const cubeGeometry = new three.BoxGeometry(0.3, 0.3, 0.3);
  const cubeMaterial = new three.MeshMatcapMaterial({
    matcap: matcapTexture,
  });

  for (let i = 0; i < 50; i++) {
    const torus = new three.Mesh(torusGeometry, torusMaterial);
    torus.position.x = (Math.random() - 0.5) * 10;
    torus.position.y = (Math.random() - 0.5) * 10;
    torus.position.z = (Math.random() - 0.5) * 10;
    torus.rotation.x = Math.random() * Math.PI;
    torus.rotation.y = Math.random() * Math.PI;
    torus.rotation.z = Math.random() * Math.PI;
    scene.add(torus);
  }

  for (let i = 0; i < 100; i++) {
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
const controls = new OrbitControls(camera, canvas);
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
