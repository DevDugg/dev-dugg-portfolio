'use client'

import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { transition } from '@/motion/transition'

const Section = ({ children }: PropsWithChildren) => {
  return (
    <motion.section
      className='h-screen w-full py-8'
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={transition}
    >
      {children}
    </motion.section>
  )
}
export default Section
