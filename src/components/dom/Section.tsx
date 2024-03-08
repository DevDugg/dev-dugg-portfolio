'use client'

import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

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
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}
export default Section
