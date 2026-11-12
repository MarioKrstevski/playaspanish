// Version E: the seven pigments of the descent, crown to root, each with the
// section it colours. The names match the CSS variables in e.module.css
// (--violet, --indigo, ...), so a tile can be glazed with `var(--${key})`.
export const PIGMENTS = [
  { key: 'violet', id: 'hero', label: 'Welcome' },
  { key: 'indigo', id: 'course', label: 'The course' },
  { key: 'blue', id: 'why-spanish', label: 'Why Spanish' },
  { key: 'green', id: 'about', label: 'Teachers' },
  { key: 'gold', id: 'how-it-works', label: 'How it works' },
  { key: 'orange', id: 'pricing', label: 'Pricing' },
  { key: 'red', id: 'reviews', label: 'Reviews' }
] as const

export type PigmentKey = (typeof PIGMENTS)[number]['key']

export const NAV_LINKS = [
  { href: '#buffet', label: 'Courses' },
  { href: '#about', label: 'Teachers' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' }
]
