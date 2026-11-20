import type { Metadata } from 'next'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { FlashcardDemo } from '@/components/anki/FlashcardDemo'
import { CONTACT_EMAIL } from '@/lib/content'
import { display } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anki Deck - Playa Spanish',
  description:
    'Spanish flashcard decks made by your Playa Spanish teacher, built to match your course. Learn a few minutes a day with Anki and spaced repetition. Coming soon.',
  alternates: { canonical: '/anki' }
}

const DISPLAY = '[font-family:var(--font-d-display),var(--font-inter),sans-serif] tracking-[-0.02em]'
const HAND = '[font-family:var(--font-caveat)] font-semibold leading-none'

const decks = [
  {
    titleEs: 'Lo que ves en clase',
    title: 'Your course deck',
    body: 'The words, phrases and grammar from your lessons, in the order you learn them.'
  },
  {
    titleEs: 'Español conversacional',
    title: 'Conversation & travel',
    body: 'What you actually say on the road: ordering, asking, chatting, and real Mexican slang.'
  },
  {
    titleEs: 'Español técnico',
    title: 'For your profession',
    body: 'Vocabulary for doctors, nurses, lawyers and job interviews, to go with the technical course.'
  }
]

export default function AnkiPage() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Anki deck')}`

  return (
    <div className={display.variable}>
      <Header />
      <main className="bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50 pt-20 text-gray-900">
        {/* Intro, with a card to try */}
        <section className="container mx-auto px-4 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <span className="inline-flex -rotate-2 items-center rounded-full bg-pink-500 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white shadow-sm">
                Coming soon
              </span>
              {/* Two phrases, each kept whole on its own line: sized so the
                  longer one fits from phones up */}
              <h1 className={cn(DISPLAY, 'mt-6 text-[clamp(1.875rem,8.4vw,3.75rem)] font-bold leading-[1.05]')}>
                <span className="block whitespace-nowrap">Spanish that sticks,</span>
                <span className="block whitespace-nowrap text-orange-600">a few minutes a day</span>
              </h1>
              <p lang="es" className={cn(HAND, 'mt-4 -rotate-1 text-4xl text-pink-500')}>
                ¡Ya casi está listo!
              </p>
              <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-gray-700">
                We are making our own Spanish flashcard decks for <strong>Anki</strong>, built by your teacher to go
                with your course. Review between lessons, and walk into the next one a step ahead.
              </p>
            </div>
            <FlashcardDemo />
          </div>
        </section>

        {/* What Anki is, in one breath */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <p className="mx-auto max-w-3xl rounded-3xl bg-white/80 px-8 py-7 text-center text-lg leading-relaxed text-gray-700 shadow-sm ring-1 ring-orange-100 md:text-xl">
            <strong className={cn(DISPLAY, 'text-gray-900')}>What is Anki?</strong> A flashcard app for your phone
            or computer. It brings each card back just before you would forget it, so the words stick.
          </p>
        </section>

        {/* Our decks */}
        <section className="container mx-auto px-4 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <h2 className={cn(DISPLAY, 'text-3xl md:text-5xl font-bold leading-tight')}>
              Our decks, made to match the course
            </h2>
            <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-gray-700">
              Most Anki decks are made by strangers for a general textbook. Ours are written by Playa Spanish
              teachers, so the cards follow what you see in class, Mexican Spanish included.
            </p>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {decks.map((deck, i) => (
                <li
                  key={deck.title}
                  className={cn(
                    'rounded-3xl p-7 shadow-sm',
                    ['bg-orange-500 text-white', 'bg-white ring-1 ring-orange-100', 'bg-pink-500 text-white'][i]
                  )}
                >
                  <p lang="es" className={cn(HAND, 'text-3xl', i === 1 ? 'text-orange-600' : 'text-white/85')}>
                    {deck.titleEs}
                  </p>
                  <h3 className={cn(DISPLAY, 'mt-2 text-2xl font-bold')}>{deck.title}</h3>
                  <p className={cn('mt-3 leading-relaxed', i === 1 ? 'text-gray-700' : 'text-white/90')}>
                    {deck.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Launch note */}
        <section className="container mx-auto px-4 pb-24 md:pb-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={cn(DISPLAY, 'text-3xl md:text-4xl font-bold leading-tight')}>
              Want it the day it launches?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              The decks will come with your course, and on their own for anyone who wants extra practice. Send
              us a line and we will let you know when they are ready.
            </p>
            <a
              href={mailto}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(234,88,12,0.3)] transition-colors hover:bg-orange-600"
            >
              Tell me when it is ready
              <ArrowRight aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
