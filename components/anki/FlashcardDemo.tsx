'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

// A tiny Anki in the page: flip the card, say how well you knew it, and see
// when it would come back. That one loop is the whole idea of the app.
const CARDS = [
  { front: '¿Qué onda?', back: "What's up?", note: 'Casual hello, very Mexican' },
  { front: '¡Qué padre!', back: 'How cool!', note: 'You will hear it everywhere in Mexico' },
  { front: 'la playa', back: 'the beach', note: 'As in Playa Spanish' },
  { front: 'tener ganas de…', back: 'to feel like…', note: 'Tengo ganas de tacos.' }
]

const RATINGS = [
  { label: 'Again', next: 'in 1 minute', className: 'bg-rose-100 text-rose-800 hover:bg-rose-200' },
  { label: 'Good', next: 'tomorrow', className: 'bg-amber-100 text-amber-900 hover:bg-amber-200' },
  { label: 'Easy', next: 'in 4 days', className: 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' }
]

export function FlashcardDemo() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [lastNext, setLastNext] = useState<string | null>(null)
  const card = CARDS[index]

  const rate = (next: string) => {
    setLastNext(next)
    setFlipped(false)
    // let the card turn back before the next word shows
    window.setTimeout(() => setIndex((i) => (i + 1) % CARDS.length), 180)
  }

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="relative h-60 [perspective:1200px]">
        {/* the rest of the deck, peeking out behind */}
        <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-3xl bg-pink-200" />
        <div aria-hidden className="absolute inset-0 -translate-x-2 translate-y-1.5 -rotate-2 rounded-3xl bg-amber-200" />
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-label={flipped ? `${card.back}. Tap to see the Spanish again` : `${card.front}. Tap to flip the card`}
          className={cn(
            'relative h-full w-full rounded-3xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] motion-reduce:transition-none',
            flipped && '[transform:rotateY(180deg)]'
          )}
        >
          <span className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white p-6 shadow-[0_14px_40px_rgba(234,88,12,0.18)] [backface-visibility:hidden]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Español</span>
            <span lang="es" className="mt-3 text-4xl font-bold text-gray-900">
              {card.front}
            </span>
            <span className="mt-6 text-sm text-gray-400">Tap to flip</span>
          </span>
          <span className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-orange-500 p-6 text-white shadow-[0_14px_40px_rgba(234,88,12,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">English</span>
            <span className="mt-3 text-4xl font-bold">{card.back}</span>
            <span className="mt-3 [font-family:var(--font-caveat)] text-2xl text-orange-50">{card.note}</span>
          </span>
        </button>
      </div>

      <div className="mt-8 min-h-[5.5rem] text-center">
        {flipped ? (
          <>
            <p className="text-sm font-medium text-gray-600">How well did you know it?</p>
            <div className="mt-3 flex justify-center gap-2">
              {RATINGS.map((r) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => rate(r.next)}
                  className={cn('rounded-full px-5 py-2 text-sm font-semibold transition-colors', r.className)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-gray-600" aria-live="polite">
            {lastNext ? (
              <>
                Got it. That card comes back <strong className="text-orange-600">{lastNext}</strong>. Here is the
                next one.
              </>
            ) : (
              'Try it: say the meaning out loud, then flip.'
            )}
          </p>
        )}
      </div>
    </div>
  )
}
