import { Alegreya, Hanken_Grotesk } from 'next/font/google'

// Version C only: a warm roman serif for heads and the Spanish lines, a quiet
// grotesk for everything else. Applied on the page's root wrapper.
export const display = Alegreya({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal', 'italic'],
  variable: '--font-c-display',
  display: 'swap'
})

export const body = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-c-body',
  display: 'swap'
})
