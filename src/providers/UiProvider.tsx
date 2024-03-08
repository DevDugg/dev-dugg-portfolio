'use client'

import { PropsWithChildren, useContext, useMemo, useState } from 'react'

import { createContext } from 'react'

interface SectionContext {
  section: number
  setSection: (section: number) => void
}

interface MenuContext {
  menu: boolean
  setMenu: (menu: boolean) => void
}

interface UiContext {
  sectionContext: SectionContext
  menuContext: MenuContext
}

export const UiContext = createContext({
  menuContext: {
    menu: false,
    setMenu: (menu: boolean) => menu,
  },
  sectionContext: {
    section: 0,
    setSection: (section: number) => section,
  },
} as UiContext)

const UiProvider = ({ children }: PropsWithChildren) => {
  const [section, setSection] = useState<number>(0)
  const [menu, setMenu] = useState<boolean>(false)

  const sectionMemo = useMemo(() => ({ section, setSection }), [section, setSection])
  const menuMemo = useMemo(() => ({ menu, setMenu }), [menu, setMenu])

  return (
    <UiContext.Provider value={{ menuContext: menuMemo, sectionContext: sectionMemo }}>{children}</UiContext.Provider>
  )
}

export const useUi = () => {
  return useContext(UiContext)
}

export default UiProvider
