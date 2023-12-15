import DictAppProvider from '@/context/DictAppProvider'

import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <DictAppProvider>
          <nav>Fake navbar in layout</nav>
          {children}
        </DictAppProvider>
      </body>
    </html>
  )
}
