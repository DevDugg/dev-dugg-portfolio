'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const OfficeModel = dynamic(() => import('@/components/3d/OfficeModel').then((mod) => mod.default), { ssr: false })

const Experience = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={1} />
      <OfficeModel />
    </Suspense>
  )
}
export default Experience
