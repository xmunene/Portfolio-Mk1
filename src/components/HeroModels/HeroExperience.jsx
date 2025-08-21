import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room.jsx' 
import { HeroLights } from './HeroLights.jsx'
import Particles from './Particles.jsx'
import { CameraAnimation } from './CameraAnimation.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Canvas camera={{ position: [0.15, -1.5, 15], fov: 45}}>
        <CameraAnimation />
        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        target={[-0.15, -1.5, -1]}
        />

        <HeroLights />
        {/*<Particles count={100} />*/}

        <group
        scale={isMobile? 2.5 : 2.5}
        position={[1, -1.7, 0]}
        rotation={[0, Math.PI / 111, 0]}
        >
        <Room />
        </group>
    </Canvas>
  )
}

export default HeroExperience