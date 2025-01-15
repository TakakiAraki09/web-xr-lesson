import { RefObject, useEffect, useMemo } from 'react';
import { createCamera } from './camera';
import { createScene } from './scene';
import { useRafLoop, useWindowSize } from 'react-use';
import { VRButton } from 'three/examples/jsm/Addons.js';
import { createRenderer } from './renderer';
import { useEffectiveMemo } from '../../uses/useEffectiveMemo';

export const useCreateThree = () => {
  const size = useWindowSize();
  const renderer = useEffectiveMemo(() => createRenderer(), []);
  const camera = useMemo(createCamera, []);
  const scene = useMemo(createScene, []);

  /* resizable window effect */
  useEffect(() => {
    const { width, height } = size;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    if (renderer == null) return;
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
  }, [size, renderer, camera]);

  /* rerendering effect */
  useEffect(() => {
    if (renderer == null) return;
    const element = VRButton.createButton(renderer);
    document.body.appendChild(element);
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
    return () => {
      document.body.removeChild(element);
    }
  }, [renderer]);

  /* main rendering effect */
  // useRafLoop(() => {
  //   if (renderer == null) return;
  //   renderer.render(scene, camera);
  // });
};

