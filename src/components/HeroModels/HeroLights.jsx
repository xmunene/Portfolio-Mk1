import React from 'react';
import * as THREE from 'three';

export const HeroLights = () => {
  return (
    <>
      {/* Main ceiling strip lights - cool white */}
      <rectAreaLight 
        position={[0, 5, 0]}
        width={6}
        height={2}
        intensity={90}
        color="#000f89"
        rotation={[-Math.PI / 2, 0, 0]}
      />
      
      {/* Blue accent lighting from computer/monitors */}
      <spotLight 
        position={[0, 1, 3]}
        angle={0.8}
        intensity={40}
        penumbra={0.5}
        color="#00aaff"
        target-position={[0, 0, 0]}
      />
      
      {/* Warm light from screens */}
      <pointLight 
        position={[0, 1.5, 2]}
        intensity={60}
        color="#4488ff"
        distance={8}
        decay={2}
      />
      
      {/* Side lighting to simulate room glow */}
      <spotLight 
        position={[-3, 3, 5]}
        angle={1.2}
        intensity={50}
        penumbra={1}
        color="#2244aa"
      />
      
      <spotLight 
        position={[3, 3, 0]}
        angle={1.2}
        intensity={3}
        penumbra={1}
        color="#2244aa"
      />
      
      {/* Subtle fill lighting */}
      <ambientLight intensity={0.5} color="#0a0a20" />
      
      {/* Very subtle directional light for depth */}
      <directionalLight 
        position={[2, 4, 4]} 
        intensity={0.8} 
        color="#ffffff"
      />
    </>
  )
}