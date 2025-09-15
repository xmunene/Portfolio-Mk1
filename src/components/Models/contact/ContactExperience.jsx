import React from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three'
import { Dance } from './Models/Dance_male.jsx'

const ContactExperience = () => {
  return (
    <Canvas>
      <group scale={0.03} position={[0, -1.5, -2]}>
         
      <Dance />
      
      </group>
    </Canvas>
  )
}

export default ContactExperience