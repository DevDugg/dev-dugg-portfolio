import '@/global.css'

import { Layout } from '@/components/dom/Layout'

export const metadata = {
  title: 'Dugg Dev Portfolio',
  description: 'Dugg Dev Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body className='bg-BG'>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
