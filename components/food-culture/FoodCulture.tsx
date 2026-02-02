'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { StackedImageCarousel } from './StackedImageCarousel'
import { cn } from '@/lib/utils'

const foodCultureImages = [
  { src: '/foodculture/food1.jpg', alt: 'Spanish and Mexican food' },
  { src: '/foodculture/food2.avif', alt: 'Traditional dishes' },
  { src: '/foodculture/culture1.jpg', alt: 'Mexican culture' },
  { src: '/foodculture/culture2.avif', alt: 'Spanish-speaking culture' }
]

export function FoodCulture() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section id="food-culture" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Food & Culture
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div
            ref={contentRef}
            className={cn(
              'animate-slide-left',
              contentVisible && 'visible'
            )}
          >
            <p className="text-lg text-gray-700">
              Spanish and Mexican culture go hand in hand—food, traditions, and everyday life. A bit of that context makes the language more meaningful and gives you something to look forward to, whether you&apos;re planning a trip or simply curious.
            </p>
          </div>

          {/* Right: stacked looping image carousel */}
          <div
            ref={imageRef}
            className={cn(
              'animate-slide-right',
              imageVisible && 'visible'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <StackedImageCarousel images={foodCultureImages} />
          </div>
        </div>
      </div>
    </section>
  )
}
