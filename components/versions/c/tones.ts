// The chakra sequence, crown to root. One tone per section between the hero
// and the contact band; the hero and the header line show all seven in order.
export const TONES = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'] as const
export type Tone = (typeof TONES)[number]

export const STATIONS: { id: string; label: string; tone: Tone }[] = [
  { id: 'buffet', label: 'Who it’s for', tone: 'violet' },
  { id: 'course', label: 'The course', tone: 'indigo' },
  { id: 'in-class', label: 'In class', tone: 'blue' },
  { id: 'about', label: 'Teachers', tone: 'green' },
  { id: 'how-it-works', label: 'How it works', tone: 'yellow' },
  { id: 'pricing', label: 'Pricing', tone: 'orange' },
  { id: 'reviews', label: 'Reviews', tone: 'red' }
]
