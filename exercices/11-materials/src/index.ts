import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { HDRLoader } from "three/examples/jsm/loaders/HDRLoader.js";

const gui = new GUI();

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new three.Scene();

const textureLoader = new three.TextureLoader();

const doorColorTexture = textureLoader.load("/static/textures/door/color.jpg");
const doorAlphaTexture = textureLoader.load("/static/textures/door/alpha.jpg");
const doorHeightTexture = textureLoader.load(
  "/static/textures/door/height.jpg",
);
const doorNormalTexture = textureLoader.load(
  "/static/textures/door/normal.jpg",
);
const doorAmbientOcclusionTexture = textureLoader.load(
  "/static/textures/door/ambientOcclusion.jpg",
);
const doorMetalnessTexture = textureLoader.load(
  "/static/textures/door/metalness.jpg",
);
const doorRoughnessTexture = textureLoader.load(
  "/static/textures/door/roughness.jpg",
);
const matcapTexture = textureLoader.load("/static/textures/matcaps/1.png");
const gradientTexture = textureLoader.load("/static/textures/gradients/5.jpg");

doorColorTexture.colorSpace = three.SRGBColorSpace;
matcapTexture.colorSpace = three.SRGBColorSpace;

/**
 * Objects
 */

// MeshBasicMaterial
//const material = new three.MeshBasicMaterial();
//material.map = doorColorTexture;
//material.color = new three.Color(0xff0000);
//material.wireframe = true;
//material.transparent = true;
//material.opacity = 0.9;
//material.alphaMap = doorAlphaTexture;
//material.side = three.DoubleSide;

//const material = new three.MeshNormalMaterial();
//const material = new three.MeshMatcapMaterial();
// material.matcap = matcapTexture;
//const material = new three.MeshDepthMaterial();
//const material = new three.MeshLambertMaterial();
//const material = new three.MeshPhongMaterial();
//material.shininess = 100;
//material.specular = new three.Color(0x1188ff);
//const material = new three.MeshToonMaterial();
//gradientTexture.minFilter = three.NearestFilter;
//gradientTexture.magFilter = three.NearestFilter;
//gradientTexture.generateMipmaps = false;
//material.gradientMap = gradientTexture;

//const material = new three.MeshStandardMaterial();
//material.metalness = 1;
//material.roughness = 1;
//material.map = doorColorTexture;
//material.aoMap = doorAmbientOcclusionTexture;
//material.aoMapIntensity = 1;
//material.displacementMap = doorHeightTexture;
//material.displacementScale = 0.1;
//material.metalnessMap = doorMetalnessTexture;
//material.roughnessMap = doorRoughnessTexture;
//material.normalMap = doorNormalTexture;
//material.normalScale.set(0.5, 0.5);
//material.alphaMap = doorAlphaTexture;
//material.transparent = true;

const material = new three.MeshPhysicalMaterial();
material.metalness = 0;
material.roughness = 0;
//material.map = doorColorTexture;
//material.aoMap = doorAmbientOcclusionTexture;
//material.aoMapIntensity = 1;
//material.displacementMap = doorHeightTexture;
//material.displacementScale = 0.1;
//material.metalnessMap = doorMetalnessTexture;
//material.roughnessMap = doorRoughnessTexture;
//material.normalMap = doorNormalTexture;
//material.normalScale.set(0.5, 0.5);
//material.alphaMap = doorAlphaTexture;
//material.transparent = true;
//material.clearcoat = 1;
//material.clearcoatRoughness = 1;

gui.add(material, "metalness").min(0).max(1).step(0.0001).name("Metalness");
gui.add(material, "roughness").min(0).max(1).step(0.0001).name("Roughness");
//gui.add(material, "clearcoat").min(0).max(1).step(0.0001).name("Clearcoat");
//gui
//.add(material, "clearcoatRoughness")
//  .min(0)
//  .max(1)
//  .step(0.0001)
//  .name("Clearcoat Roughness");

//material.sheen = 1;
//material.sheenRoughness = 0.5;
//material.sheenColor.set(1, 1, 1);

//gui.add(material, "sheen").min(0).max(1).step(0.0001).name("Sheen");
//gui
//.add(material, "sheenRoughness")
//  .min(0)
//  .max(1)
//  .step(0.0001)
//  .name("Sheen Roughness");
//gui.addColor(material, "sheenColor").name("Sheen Color");

//material.iridescence = 1;
//material.iridescenceIOR = 1;
//material.iridescenceThicknessRange = [100, 100];

//gui.add(material, "iridescence").min(0).max(1).step(0.0001);
//gui.add(material, "iridescenceIOR").min(1).max(2.333).step(0.0001);
//gui.add(material.iridescenceThicknessRange, "0").min(1).max(1000).step(1);
//gui.add(material.iridescenceThicknessRange, "1").min(1).max(1000).step(1);

material.transmission = 1;
material.ior = 1.5;
material.thickness = 0.5;

gui
  .add(material, "transmission")
  .min(0)
  .max(1)
  .step(0.0001)
  .name("Transmission");
gui.add(material, "thickness").min(0).max(1).step(0.0001).name("Thickness");
gui.add(material, "ior").min(1).max(2.417).step(0.0001).name("IOR");

const sphere = new three.Mesh(new three.SphereGeometry(0.5, 64, 64), material);

sphere.position.set(-1.5, 0, 0);

const plane = new three.Mesh(new three.PlaneGeometry(1, 1, 100, 100), material);

plane.position.set(0, 0, 0);

const torus = new three.Mesh(
  new three.TorusGeometry(0.3, 0.2, 64, 128),
  material,
);

torus.position.set(1.5, 0, 0);

scene.add(sphere, plane, torus);

/**
 * Lights
 */

//const ambientLight = new three.AmbientLight(0xffffff, 0.1);
//scene.add(ambientLight);

//const pointLight = new three.PointLight(0xffffff, 30);
//pointLight.position.x = 2;
//pointLight.position.y = 3;
//pointLight.position.z = 4;
//scene.add(pointLight);

/**
 * Environment Map
 */

const hdrLoader = new HDRLoader();
hdrLoader.load("/static/textures/environmentMap/2k.hdr", (texture) => {
  console.log(texture);
  texture.mapping = three.EquirectangularReflectionMapping;

  scene.background = texture;

  scene.environment = texture;
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

  sphere.rotation.y = 0.1 * elapsedTime;
  sphere.rotation.x = 0.15 * elapsedTime;
  plane.rotation.y = 0.1 * elapsedTime;
  plane.rotation.x = 0.15 * elapsedTime;
  torus.rotation.y = 0.1 * elapsedTime;
  torus.rotation.x = 0.15 * elapsedTime;

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
