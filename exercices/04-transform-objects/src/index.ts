import * as three from "three";

const canvas = document.querySelector(".webgl") as HTMLCanvasElement;

const scene = new three.Scene();

const group = new three.Group();
group.position.set(0, 1, 0);
group.scale.set(0.5, 1.85, 0.36);
group.rotation.set(0, Math.PI * 0.25, 0);
scene.add(group);

const firstCube = new three.Mesh(
  new three.BoxGeometry(1, 1, 1),
  new three.MeshBasicMaterial({ color: 0xff0000 }),
);
group.add(firstCube);

const secondCube = new three.Mesh(
  new three.BoxGeometry(1, 1, 1),
  new three.MeshBasicMaterial({ color: 0x00ff00 }),
);
secondCube.position.x = 2;
group.add(secondCube);

const thirdCube = new three.Mesh(
  new three.BoxGeometry(1, 1, 1),
  new three.MeshBasicMaterial({ color: 0x0000ff }),
);
thirdCube.position.x = -2;
group.add(thirdCube);

const axesHelper = new three.AxesHelper();
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new three.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

const renderer = new three.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
