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

// Search snippet (PLA-31): what people type, then what makes us different,
// under ~160 characters so Google shows it whole
const title = 'Online Spanish Lessons with Native Mexican Teachers | Playa Spanish'
const description =
  'Learn Spanish online with native Mexican teachers. 1:1 video lessons around your goals, with Mexican culture and real conversation from day one. $25 a lesson.'

// The link preview in chats and social apps (Instagram, WhatsApp, iMessage…):
// public/og-image.jpg, 1200x630.
export const metadata: Metadata = {
  metadataBase: new URL('https://playaspanish.com'),
  title,
  description,
  applicationName: 'Playa Spanish',
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
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
    <html lang="en" className={`${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
