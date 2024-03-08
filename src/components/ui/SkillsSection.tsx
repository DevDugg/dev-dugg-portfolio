'use client'

import Container from '../dom/Container'
import Section from '../dom/Section'
import { motion } from 'framer-motion'
import { transition } from '@/motion/transition'

interface Skill {
  title: string
  level: number
}

const skills: Skill[] = [
  {
    title: 'React.js',
    level: 90,
  },
  {
    title: 'Next.js',
    level: 90,
  },
  {
    title: 'TypeScript',
    level: 100,
  },
  {
    title: 'Node.js',
    level: 80,
  },
  {
    title: 'Three.js / React Three Fiber',
    level: 60,
  },
  {
    title: 'Redux Toolkit',
    level: 80,
  },
  {
    title: 'Framer Motion',
    level: 90,
  },
]

const languages: Skill[] = [
  {
    title: '🇬🇧 English',
    level: 100,
  },
  {
    title: '🇷🇺 Russian',
    level: 100,
  },
  {
    title: '🇹🇲 Turkmen',
    level: 100,
  },
  {
    title: '🇯🇵 Japanese',
    level: 20,
  },
]

const SkillsSection = () => {
  return (
    <Section>
      <Container className='flex flex-col items-start justify-center'>
        <motion.div whileInView={'visible'} transition={transition}>
          <h2 className='text-5xl font-bold'>Skills</h2>
          <div className=' mt-8 space-y-4'>
            {skills.map((skill, index) => (
              <div className='w-64' key={index}>
                <motion.h3
                  className='text-xl font-bold text-gray-800'
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        ...transition,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className='mt-2 h-2 w-full rounded-full bg-gray-200'>
                  <motion.div
                    className='h-full rounded-full bg-indigo-500 '
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          ...transition,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className='mt-10 text-5xl font-bold'>Languages</h2>
            <div className=' mt-8 space-y-4'>
              {languages.map((lng, index) => (
                <div className='w-64' key={index}>
                  <motion.h3
                    className='text-xl font-bold text-gray-800'
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          ...transition,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className='mt-2 h-2 w-full rounded-full bg-gray-200'>
                    <motion.div
                      className='h-full rounded-full bg-indigo-500 '
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            ...transition,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default SkillsSection
