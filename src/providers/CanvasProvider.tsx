'use client'

import { Scroll, ScrollControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import { PropsWithChildren } from 'react'
import ScrollManager from './ScrollManager'

const CanvasProvider = ({ children }: PropsWithChildren) => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager />
        <Scroll html>{children}</Scroll>
      </ScrollControls>
    </Canvas>
  )
}
export default CanvasProvider
