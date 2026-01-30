import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Playa Spanish - Online Spanish School',
  description: 'Learn Spanish online with personalized, customized lessons from experienced native teachers. Choose from group classes, one-on-one sessions, business Spanish, or travel Spanish.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
