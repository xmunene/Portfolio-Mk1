import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Gamingroom } from './Gamingroom.jsx' 
import { HeroLights } from './HeroLights.jsx'
import Particles from './Particles.jsx'
import { CameraAnimation } from './CameraAnimation.jsx'

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px )' });
    

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45}}>
        <CameraAnimation />
        <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={25}
        minDistance={5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        target={[0, 1, 10]}
        />

        <HeroLights />
        {/*<Particles count={100} />*/}

        <group
        scale={isMobile? 3.0 : 1.5}
        position={[0, isMobile ? -1.8: -2.0, 0]}
        rotation={[0, Math.PI / 111, 0]}
        >
        <Gamingroom />
        </group>
    </Canvas>
  )
}

export default HeroExperience