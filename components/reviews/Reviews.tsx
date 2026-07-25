'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QuoteCorner } from '@/components/decor/CornerArt'

const MOON_LIGHT = '#fecdd3'
const MOON_DARK = '#4c0519'
const MOON_RIM = '#9f1239'

type Phase = 'new' | 'waxing' | 'full' | 'waning'

const phaseBackground: Record<Phase, string> = {
  new: MOON_DARK,
  waxing: `linear-gradient(to left, ${MOON_LIGHT} 50%, ${MOON_DARK} 50%)`,
  full: MOON_LIGHT,
  waning: `linear-gradient(to right, ${MOON_LIGHT} 50%, ${MOON_DARK} 50%)`
}

function MoonPhase({ phase, className }: { phase: Phase; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('w-10 h-10 rounded-full flex-shrink-0', className)}
      style={{
        background: phaseBackground[phase],
        border: `1px solid ${MOON_RIM}`,
        boxShadow: phase === 'full' ? '0 0 16px 2px rgba(254, 205, 211, 0.6)' : 'none'
      }}
    />
  )
}

// Four reviews, four phases of the same journey. The pull quote carries the
// message; the full review sits quietly underneath.
const reviews: Array<{
  name: string
  phase: Phase
  quote: string
  review: string
}> = [
  {
    name: 'Sarah M.',
    phase: 'new',
    quote: 'Exactly what I needed to get started.',
    review:
      'Angelica is an amazing teacher! Her personalized approach helped me improve my Spanish quickly in one-on-one sessions.'
  },
  {
    name: 'Michael T.',
    phase: 'waxing',
    quote: 'It made such a difference on my trip.',
    review:
      'Before visiting Mexico I took travel-focused lessons. I could order food, ask for directions, and hold real conversations.'
  },
  {
    name: 'John D.',
    phase: 'full',
    quote: 'I now speak confidently with my Spanish-speaking clients.',
    review:
      'The business Spanish course was perfect for my work, tailored exactly to the situations I face every week.'
  },
  {
    name: 'Emily R.',
    phase: 'waning',
    quote: 'Great progress, wonderful people along the way.',
    review:
      'The classes are fun and engaging, and learning kept going between lessons. Highly recommend!'
  }
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="w-4 h-4 text-rose-400 fill-rose-400" />
      ))}
    </div>
  )
}

export function Reviews() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="reviews" className="relative py-24 bg-rose-50 overflow-hidden">
      {/* A large quiet quote mark, bottom-left */}
      <QuoteCorner className="hidden lg:block absolute -bottom-24 left-6 text-[240px] pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll text-center mb-16',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t just take our word for it. Hear from our students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {reviews.map((review, index) => {
            const isLeft = index % 2 === 0
            return (
              <ReviewRow
                key={review.name}
                review={review}
                isLeft={isLeft}
                isLast={index === reviews.length - 1}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ReviewRow({
  review,
  isLeft,
  isLast
}: {
  review: (typeof reviews)[number]
  isLeft: boolean
  isLast: boolean
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'grid md:grid-cols-[1fr_80px_1fr]',
        isLeft ? 'animate-slide-left' : 'animate-slide-right',
        isVisible && 'visible'
      )}
    >
      {/* Content cell — alternates sides on desktop (yin-yang rhythm) */}
      <div
        className={cn(
          'pb-12 md:row-start-1',
          isLeft
            ? 'md:col-start-1 md:text-right md:pr-2'
            : 'md:col-start-3 md:pl-2'
        )}
      >
        {/* Mobile: moon inline above the quote */}
        <div className="flex items-center gap-3 mb-3 md:hidden">
          <MoonPhase phase={review.phase} className="w-8 h-8" />
          <Stars />
        </div>
        <blockquote className="text-2xl font-semibold text-gray-900 leading-snug mb-3">
          &ldquo;{review.quote}&rdquo;
        </blockquote>
        <p className="text-sm text-gray-500 leading-relaxed mb-3">{review.review}</p>
        <div
          className={cn(
            'flex items-center gap-3',
            isLeft && 'md:justify-end'
          )}
        >
          <span className="font-semibold text-rose-700">{review.name}</span>
          <span className="hidden md:block">
            <Stars />
          </span>
        </div>
      </div>

      {/* Center rail: moon phase on a thin line */}
      <div className="hidden md:flex flex-col items-center md:col-start-2 md:row-start-1">
        <MoonPhase phase={review.phase} />
        {!isLast && <div className="w-px flex-1 bg-rose-200 mt-2" />}
      </div>
    </div>
  )
}
