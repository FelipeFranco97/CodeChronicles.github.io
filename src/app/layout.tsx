import './globals.scss'
import type { Metadata } from 'next'
import Navbar from './nav/nav'
import { navBar } from '@/assets/texts'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const navBarData = navBar[0]
  return (
    <html lang="en">
      <body>
        <Navbar {...navBarData}/>
        {children}
      </body>
    </html>
  )
}
