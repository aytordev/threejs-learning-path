import * as three from "three";

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

const canvas = document.querySelector(".webgl") as HTMLCanvasElement;

const scene = new three.Scene();

const geometry = new three.BoxGeometry(1, 1, 1, 5, 5, 5);
const material = new three.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new three.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new three.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100,
);

/**
const aspectRatio = sizes.width / sizes.height;
const camera = new three.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100,
);
 */

camera.position.set(0, 0, 3);
camera.lookAt(mesh.position);
scene.add(camera);

const renderer = new three.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

const clock = new three.Clock();

// Animation
const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  camera.position.y = cursor.y * 5;
  camera.lookAt(mesh.position);

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
