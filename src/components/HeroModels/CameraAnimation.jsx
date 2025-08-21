import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraAnimation = () => {
  const { camera } = useThree();
  const startTime = useRef(Date.now());
  const animationDuration = 3000; 
  const animationCompleted = useRef(false);
  
 
  const startPos = useRef(new THREE.Vector3(12, 4, 10));
  const endPos = useRef(new THREE.Vector3(0.15, -1.5, 15));
  const lookTarget = useRef(new THREE.Vector3(-0.15, -1.5, -1));
  
  useFrame(() => {
    if (animationCompleted.current) return;
    
    const elapsed = Date.now() - startTime.current;
    const progress = Math.min(elapsed / animationDuration, 1);
    
    const easedProgress = progress * progress * (3.0 - 2.0 * progress);
    
    const currentPos = new THREE.Vector3().lerpVectors(
      startPos.current, 
      endPos.current, 
      easedProgress
    );
    
    camera.position.copy(currentPos);
    camera.lookAt(lookTarget.current);
    
    if (progress >= 1) {
      animationCompleted.current = true;
    }
  });
  
  return null;
};