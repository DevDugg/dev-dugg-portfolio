'use client'

import MenuButton from './MenuButton'
import { motion } from 'framer-motion'
import { transition } from '@/motion/transition'
import { useUi } from '@/providers/UiProvider'

const Menu = () => {
  const { menuContext, sectionContext } = useUi()
  const { menu, setMenu } = menuContext
  const { setSection } = sectionContext

  return (
    <>
      <button
        onClick={() => setMenu(!menu)}
        className='fixed right-12 top-12 z-20 size-11 rounded-md bg-indigo-600 p-3'
      >
        <motion.div
          className='h-0 w-full rounded-md border-b-2 border-white'
          transition={transition}
          animate={menu ? { translateY: 5, rotate: 45 } : {}}
        />
        <motion.div
          className='my-1 h-0 w-full rounded-md border-b-2 border-white'
          transition={transition}
          animate={menu ? { opacity: 0, x: -20 } : {}}
        />
        <motion.div
          className='h-0 w-full rounded-md border-b-2 border-white'
          transition={transition}
          animate={menu ? { translateY: -5, rotate: -45 } : {}}
        />
      </button>
      <motion.div
        className='fixed inset-y-0 right-0 z-10 flex flex-col overflow-hidden bg-white'
        transition={transition}
        initial={{ width: 0 }}
        animate={menu ? { width: 320 } : {}}
      >
        <div className='flex flex-1 flex-col items-start justify-center gap-6 p-8'>
          <MenuButton label='About' onClick={() => setSection(0)} />
          <MenuButton label='Skills' onClick={() => setSection(1)} />
          <MenuButton label='Projects' onClick={() => setSection(2)} />
          <MenuButton label='Contact' onClick={() => setSection(3)} />
        </div>
      </motion.div>
    </>
  )
}
export default Menu
