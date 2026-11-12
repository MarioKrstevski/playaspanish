import { Alegreya, Alegreya_Sans } from 'next/font/google'

// Version A, "Con Angelica": Alegreya (Huerta Tipográfica) for display and the
// Spanish lines, Alegreya Sans for everything you read.
export const display = Alegreya({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-a-display',
  display: 'swap'
})

export const body = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-a-body',
  display: 'swap'
})

export const fontVariables = `${display.variable} ${body.variable}`
