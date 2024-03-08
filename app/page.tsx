import CanvasProvider from '@/providers/CanvasProvider'
import Interface from '@/components/ui/Interface'
import Menu from '@/components/ui/Menu'

export default function Page() {
  return (
    <>
      <CanvasProvider>
        <main className='main'>
          <Interface />
        </main>
      </CanvasProvider>
      <Menu />
    </>
  )
}
