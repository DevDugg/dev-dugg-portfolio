'use client'

import { use, useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

const ScrollManager = () => {
  const [section, setSection] = useState<number>(0)

  const data = useScroll()
  const lastScroll = useRef(0)
  const isAnimating = useRef(false)

  data.fill.classList.add('top-0')
  data.fill.classList.add('absolute')

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset
      return
    }

    const activeSection = Math.floor(data.offset / data.pages)
    if (data.offset > lastScroll.current && activeSection === 0) {
      setSection(1)
    }

    if (data.offset < lastScroll.current && data.offset < 1 / (data.pages - 1)) {
      setSection(0)
    }
    lastScroll.current = data.offset
  })

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => (isAnimating.current = true),
      onComplete: () => (isAnimating.current = false),
    })
  }, [section, data.el])
  return null
}
export default ScrollManager
