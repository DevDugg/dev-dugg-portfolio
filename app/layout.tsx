import '@/global.css'

import { Layout } from '@/components/dom/Layout'
import UiProvider from '@/providers/UiProvider'

export const metadata = {
  title: 'Dugg Dev Portfolio',
  description: 'Dugg Dev Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className='bg-BG'>
        <Layout>
          <UiProvider>{children}</UiProvider>
        </Layout>
      </body>
    </html>
  )
}
