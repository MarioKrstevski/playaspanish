import { Bricolage_Grotesque } from 'next/font/google'

// A friendly grotesque with some hand in it, from version D: big section
// heads where the layout leans on type (the language buffet). Body copy stays
// on the site's Inter, Spanish asides on Caveat (both in the root layout).
export const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-d-display',
  display: 'swap'
})
