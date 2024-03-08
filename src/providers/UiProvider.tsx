'use client'

import { PropsWithChildren, useMemo, useState } from 'react'

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
  section: SectionContext
  menu: MenuContext
}

const UiContext = createContext({} as UiContext)

const UiProvider = ({ children }: PropsWithChildren) => {
  const [section, setSection] = useState<number>(0)
  const [menu, setMenu] = useState<boolean>(false)

  const sectionMemo = useMemo(() => ({ section, setSection }), [section, setSection])
  const menuMemo = useMemo(() => ({ menu, setMenu }), [menu, setMenu])

  return <UiContext.Provider value={{ menu: menuMemo, section: sectionMemo }}>{children}</UiContext.Provider>
}
export default UiProvider
