import './globals.scss'
import type { Metadata } from 'next'
import Header from './Header/Header'
import { header } from '@/assets/texts'
import Footer from './Footer/Footer'

export const metadata: Metadata = {
  title: 'CodeChronicles',
  description: 'The Web Developer Guide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Header {...header}/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
