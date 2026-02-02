'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { ReviewCard } from './ReviewCard'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: 'Sarah M.',
    rating: 5,
    review: 'Angelica is an amazing teacher! Her personalized approach helped me improve my Spanish quickly. The one-on-one sessions were exactly what I needed.'
  },
  {
    name: 'John D.',
    rating: 5,
    review: 'I took the Business Spanish course and it was perfect for my work. I can now communicate confidently with my Spanish-speaking clients.'
  },
  {
    name: 'Emily R.',
    rating: 5,
    review: 'The group classes are fun and engaging. I\'ve made great progress and met wonderful people along the way. Highly recommend!'
  },
  {
    name: 'Michael T.',
    rating: 5,
    review: 'Before my trip to Mexico, I took the Traveling Spanish course. It made such a difference! I could order food, ask for directions, and have basic conversations.'
  },
  
]

export function Reviews() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll text-center mb-12',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t just take our word for it—hear from our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard
              key={review.name}
              name={review.name}
              rating={review.rating}
              review={review.review}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
