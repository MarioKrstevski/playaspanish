import { Archivo, Faustina } from 'next/font/google'

// Both families come from Omnibus-Type, a Latin American foundry.
// Archivo carries a width axis: the Spanish display voice is its condensed
// black cut, the English body its regular width.
export const sans = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--b-font-sans',
  display: 'swap'
})

// The English "translation" voice that sits beside each Spanish display word.
export const serif = Faustina({
  subsets: ['latin'],
  style: ['italic'],
  variable: '--b-font-serif',
  display: 'swap'
})
