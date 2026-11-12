import { Bricolage_Grotesque } from 'next/font/google'

// Version D only: a friendly grotesque with some hand in it for the heads and
// the big numerals. Body copy stays on the site's Inter, Spanish asides on the
// site's Caveat (both loaded in the root layout).
export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-d-display',
  display: 'swap'
})
