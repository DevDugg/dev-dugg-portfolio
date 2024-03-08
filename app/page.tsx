import { Avatar } from '@/components/3d/Avatar'
import CanvasProvider from '@/providers/CanvasProvider'
import Interface from '@/components/ui/Interface'
import Menu from '@/components/ui/Menu'
import { Office } from '@/components/3d/Office'
import { Suspense } from 'react'
import { View } from '@/components/canvas/View'
import dynamic from 'next/dynamic'

// const Office = dynamic(() => import('@/components/3d/Office').then((mod) => mod.Office), { ssr: false })

export default function Page() {
  return (
    <>
      <CanvasProvider>
        <main className='main'>
          <View className='absolute top-0 z-20 flex h-screen w-full flex-col items-center justify-center'>
            <Office />
          </View>
          <Interface />
        </main>
      </CanvasProvider>
      <Menu />
    </>
  )
}
