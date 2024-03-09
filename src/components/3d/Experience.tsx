'use client'

import OfficeModel from './OfficeModel'
import { Suspense } from 'react'
import { motion } from 'framer-motion-3d'
import { transition } from '@/motion/transition'
import { useUi } from '@/providers/UiProvider'

// import dynamic from 'next/dynamic'

// const OfficeModel = dynamic(() => import('@/components/3d/OfficeModel').then((mod) => mod.default), { ssr: false })

const Experience = () => {
  const { section } = useUi().sectionContext
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={3} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation={[0, -Math.PI / 4, 0]}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
        transition={transition}
      >
        <OfficeModel />
      </motion.group>
    </Suspense>
  )
}
export default Experience
