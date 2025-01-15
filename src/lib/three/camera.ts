import { PerspectiveCamera } from "three"

export const createCamera = () => {
  const camera = new PerspectiveCamera(1);
  camera.position.z = 0;
  return camera;
}
