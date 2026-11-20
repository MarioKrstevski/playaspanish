import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap'
})

const description =
  'Learn Spanish as it is lived: language, culture, and people. Native Mexican teachers, an unlimited course that moves at your pace, plus custom courses for professionals.'

// The link preview in chats and social apps (Instagram, WhatsApp, iMessage…):
// public/og-image.jpg, 1200x630.
export const metadata: Metadata = {
  metadataBase: new URL('https://playaspanish.com'),
  title: 'Playa Spanish - Online Spanish School',
  description,
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Playa Spanish',
    title: 'Start your Spanish classes | Playa Spanish',
    description: '1:1 online Spanish lessons with native Mexican teachers.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Playa Spanish: start your Spanish classes' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start your Spanish classes | Playa Spanish',
    description: '1:1 online Spanish lessons with native Mexican teachers.',
    images: ['/og-image.jpg']
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
