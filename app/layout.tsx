import { Inter } from 'next/font/google'
import MainHeader from '@/components/layout/MainHeader'
import './globals.css'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJS Events',
  description: 'Fullstack application that uses a backend API made with GO, a frontend made with NextJS and a SQLite database.',
}

export default function RootLayout({ children, }: {children: React.ReactNode}) {

  return (
    <html lang="en"> 
      <body className={inter.className}>
        <MainHeader />
          {children}
      </body>
    </html>
  )
}
