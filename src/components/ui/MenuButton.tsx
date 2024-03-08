'use client'

import { motion } from 'framer-motion'
import { transition } from '@/motion/transition'

interface Props {
  label: string
  onClick: () => void
}

const MenuButton = ({ label, onClick }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      className='cursor-pointer text-2xl font-bold'
      whileHover={{ color: '#4F46E5' }}
      transition={{ ...transition, duration: 0.3 }}
    >
      {label}
    </motion.button>
  )
}

export default MenuButton
