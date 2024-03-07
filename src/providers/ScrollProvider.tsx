'use client'

import { PropsWithChildren } from 'react'
import Scroll from '@/templates/Scroll'

const ScrollProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Scroll>{children}</Scroll>
    </>
  )
}
export default ScrollProvider
