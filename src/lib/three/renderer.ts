import * as THREE from 'three';
// import { RefObject } from "react";

export const createRenderer = () => {
  const canvas = document.getElementById('app-canvas')
  if (!(canvas instanceof HTMLCanvasElement)) throw new Error('canvas janaiyo');
  // if (canvas.current == null) return null;
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.xr.enabled = true;
  return renderer;
};

