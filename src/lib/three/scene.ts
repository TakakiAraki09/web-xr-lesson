import image from './assets/pointlight.png';
import { AmbientLight, Scene, Mesh, PlaneGeometry, TextureLoader, MeshStandardMaterial } from "three"

const textureLoader = new TextureLoader();
const texture = textureLoader.load(image);

export const createScene = () => {
  const scene = new Scene();
  const light = new AmbientLight(0xaaaaaa);
  scene.add(light);

  const particles = createParticles()
  scene.add(...particles);
  return scene;
};

const createPoint = () => {
  return new Mesh(
    new PlaneGeometry(10, 10),
    new MeshStandardMaterial({
      map: texture,
      transparent: true,
      opacity: Math.random()
    })
  );
}

const createParticles = () => {
  // 形状データを作成
  const SIZE = 300;
  // 配置する個数
  const LENGTH = 10000;
  // 頂点情報を格納する配列
  const vertices = [];
  for (let i = 0; i < LENGTH; i++) {
    const x = SIZE * (Math.random() - 0.5);
    const y = SIZE * (Math.random() - 0.5);
    const z = SIZE * (Math.random() - 0.5) * 10;
    vertices.push([x, y, z]);
  }

  return vertices.map(([x, y, z]) => {
    const mesh = createPoint();
    mesh.position.x = x;
    mesh.position.y = y;
    mesh.position.z = z;
    return mesh;
  });
}


