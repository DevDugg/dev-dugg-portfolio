import CanvasProvider from '@/providers/CanvasProvider'
import Interface from '@/components/ui/Interface'

export default function Page() {
  return (
    <CanvasProvider>
      <main className='main'>
        <Interface />
      </main>
    </CanvasProvider>
  )
}
