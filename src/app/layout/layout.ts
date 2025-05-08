import type { Metadata } from 'next'
import HomeLayer from './layout/HomeLayer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Revolute App',
  description: 'Your financial companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HomeLayer>
          {children}
        </HomeLayer>
      </body>
    </html>
  )
}