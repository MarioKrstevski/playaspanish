'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { QuoteCorner } from '@/components/decor/CornerArt'

const MOON_LIGHT = '#fecaca'
const MOON_DARK = '#450a0a'
const MOON_RIM = '#991b1b'

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
        <Star key={i} className="w-4 h-4 text-red-400 fill-red-400" />
      ))}
    </div>
  )
}

export function Reviews() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="reviews" className="relative pt-24 pb-10 bg-red-50 overflow-hidden">
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

        {/* Two by two, as in version E: each review under a rule with its
            moon half risen over it, in this page's type and reds */}
        <div className="grid max-w-5xl mx-auto gap-x-16 gap-y-14 pt-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review, delay }: { review: (typeof reviews)[number]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <figure
      ref={ref}
      className={cn('animate-on-scroll relative flex flex-col border-t-2 border-red-300 pt-6', isVisible && 'visible')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* the moon, half risen over the rule */}
      <div aria-hidden className="absolute left-0 bottom-full h-5 w-10 overflow-hidden">
        <MoonPhase phase={review.phase} />
      </div>
      <blockquote className="flex-1">
        <p className="text-2xl font-semibold text-gray-900 leading-snug">&ldquo;{review.quote}&rdquo;</p>
        <p className="mt-3 text-gray-600 leading-relaxed">{review.review}</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="font-semibold text-red-700">{review.name}</span>
        <Stars />
      </figcaption>
    </figure>
  )
}
