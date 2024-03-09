import { Transition } from 'framer-motion'

export const transition: Transition = {
  duration: 1,
  ease: 'easeInOut',
  type: 'spring',
  stiffness: 500,
  damping: 50,
  restDelta: 0.0001,
  mass: 5,
}
