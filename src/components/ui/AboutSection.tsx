'use client'

import Container from '../dom/Container'
import Section from '../dom/Section'
import { motion } from 'framer-motion'
import { transition } from '@/motion/transition'

const AboutSection = () => {
  return (
    <Section>
      <Container className='flex h-full flex-col items-start justify-center'>
        <h1 className='text-6xl font-extrabold leading-snug'>
          {"Hi, I'm"}
          <br />
          <span className='bg-white px-1 italic'>Aydogdy</span>
        </h1>
        <motion.p
          className='mt-4 text-2xl text-gray-600'
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ...transition,
            delay: 1.5,
          }}
        >
          I develop amazing web applications,
          <br />
          lift weights, and drink coffee
        </motion.p>
        <motion.button
          className='mt-16 rounded-lg bg-indigo-600 px-8 py-4 text-lg font-bold text-white'
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            ...transition,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
      </Container>
    </Section>
  )
}
export default AboutSection
