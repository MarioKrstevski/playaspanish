// The descent, crown to root. Seven colours, ten sections: every section
// belongs to one colour and is either a night (dark) or a day (light) ground,
// alternating all the way down.
export type Zone = 'violet' | 'indigo' | 'blue' | 'green' | 'gold' | 'orange' | 'red'
export type Tone = 'dark' | 'light'

export const ZONES: { key: Zone; label: string; href: string }[] = [
  { key: 'violet', label: 'Start', href: '#hero' },
  { key: 'indigo', label: 'The course', href: '#course' },
  { key: 'blue', label: 'Why Spanish', href: '#why-spanish' },
  { key: 'green', label: 'Teachers', href: '#about' },
  { key: 'gold', label: 'How it works', href: '#how-it-works' },
  { key: 'orange', label: 'Pricing', href: '#pricing' },
  { key: 'red', label: 'Reviews', href: '#reviews' }
]

export const SECTIONS: { id: string; zone: Zone; tone: Tone }[] = [
  { id: 'hero', zone: 'violet', tone: 'dark' },
  { id: 'buffet', zone: 'violet', tone: 'light' },
  { id: 'course', zone: 'indigo', tone: 'dark' },
  { id: 'in-class', zone: 'indigo', tone: 'light' },
  { id: 'why-spanish', zone: 'blue', tone: 'dark' },
  { id: 'about', zone: 'green', tone: 'light' },
  { id: 'how-it-works', zone: 'gold', tone: 'dark' },
  { id: 'pricing', zone: 'orange', tone: 'light' },
  { id: 'reviews', zone: 'red', tone: 'dark' },
  { id: 'contact', zone: 'red', tone: 'light' }
]

export const NAV_LINKS = [
  { href: '#buffet', label: 'Courses' },
  { href: '#about', label: 'Teachers' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' }
]

/** The ground colour of a section, as a CSS value. */
export const ground = (zone: Zone, tone: Tone) =>
  `var(--${zone}-${tone === 'dark' ? 'night' : 'paper'})`
