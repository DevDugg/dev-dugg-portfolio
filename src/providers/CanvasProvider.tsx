'use client'

import { PropsWithChildren, useMemo, useState } from 'react'
import { Scroll, ScrollControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Experience from '@/components/3d/Experience'
import ScrollManager from './ScrollManager'

const CanvasProvider = ({ children }: PropsWithChildren) => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager />
        <Experience />
        <Scroll html>{children}</Scroll>
      </ScrollControls>
    </Canvas>
  )
}
export default CanvasProvider
