'use client'

import MenuButton from './MenuButton'
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
        <div
          className={`h-0.5 w-full rounded-md bg-white transition-all ${menu ? 'translate-y-0.5  rotate-45' : ''}`}
        />
        <div className={`my-1 h-0.5 w-full rounded-md bg-white ${menu ? 'hidden' : ''}`} />
        <div className={`h-0.5 w-full rounded-md bg-white transition-all ${menu ? '-rotate-45' : ''}`} />
      </button>
      <div
        className={`fixed inset-y-0 right-0 z-10 flex flex-col overflow-hidden bg-white transition-all
      ${menu ? 'w-80' : 'w-0'}`}
      >
        <div className='flex flex-1 flex-col items-start justify-center gap-6 p-8'>
          <MenuButton label='About' onClick={() => setSection(0)} />
          <MenuButton label='Skills' onClick={() => setSection(1)} />
          <MenuButton label='Projects' onClick={() => setSection(2)} />
          <MenuButton label='Contact' onClick={() => setSection(3)} />
        </div>
      </div>
    </>
  )
}
export default Menu
