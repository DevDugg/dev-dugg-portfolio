import CanvasProvider from '@/providers/CanvasProvider'
import Experience from '@/components/3d/Experience'
import Interface from '@/components/ui/Interface'
import Menu from '@/components/ui/Menu'

export default function Page() {
  return (
    <>
      <CanvasProvider>
        <Experience />
        <main className='main'>
          <Interface />
        </main>
      </CanvasProvider>
      <Menu />
    </>
  )
}
