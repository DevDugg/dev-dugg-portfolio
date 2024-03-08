'use client'

import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { useUi } from './UiProvider'

const ScrollManager = () => {
  const { menuContext, sectionContext } = useUi()

  const { section, setSection } = sectionContext
  const { setMenu } = menuContext

  const data = useScroll()
  const lastScroll = useRef(0)
  const isAnimating = useRef(false)

  data.fill.classList.add('top-0')
  data.fill.classList.add('absolute')

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => (isAnimating.current = true),
      onComplete: () => (isAnimating.current = false),
    })
  }, [section, data.el])

  useEffect(() => {
    setMenu(false)
  }, [section, setMenu])

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset
      return
    }

    const curSection = Math.floor(data.offset * data.pages)
    if (data.offset > lastScroll.current && curSection === 0) {
      setSection(1)
    }
    if (data.offset < lastScroll.current && data.offset < 1 / (data.pages - 1)) {
      setSection(0)
    }
    lastScroll.current = data.offset
  })

  return null
}
export default ScrollManager
