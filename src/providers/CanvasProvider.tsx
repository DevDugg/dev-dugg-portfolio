'use client'

import { Scroll, ScrollControls } from '@react-three/drei'

import { Canvas } from '@react-three/fiber'
import Experience from '@/components/3d/Experience'
import { MotionConfig } from 'framer-motion'
import { PropsWithChildren } from 'react'
import ScrollManager from './ScrollManager'
import { transition } from '@/motion/transition'

const CanvasProvider = ({ children }: PropsWithChildren) => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
      <ScrollControls pages={4} damping={0.1}>
        <MotionConfig transition={transition}>
          <ScrollManager />
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>{children}</Scroll>
        </MotionConfig>
      </ScrollControls>
    </Canvas>
  )
}
export default CanvasProvider
