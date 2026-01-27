'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
              'animate-slide-left space-y-6',
              contentVisible && 'visible'
            )}
          >
            <p className="text-lg text-gray-700 mb-4">
              Learning Spanish isn&apos;t just about grammar and vocabulary—it&apos;s about immersing yourself in the rich culture that makes the language come alive. As Angelica, I believe that understanding food and culture is essential to truly mastering Spanish.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Cultural Immersion</h3>
                <p className="text-gray-700">
                  In my classes, we explore the vibrant food culture of Spanish-speaking countries. From learning the names of traditional dishes to understanding dining customs, you&apos;ll gain practical vocabulary while discovering the heart of Spanish-speaking cultures.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Real-World Application</h3>
                <p className="text-gray-700">
                  Whether you&apos;re ordering at a restaurant in Mexico, shopping at a local market, or cooking traditional recipes, you&apos;ll use Spanish in authentic, meaningful ways. Food brings people together, and learning Spanish through food culture makes the language memorable and enjoyable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            ref={imageRef}
            className={cn(
              'animate-slide-right',
              imageVisible && 'visible'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-primary-400" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold text-center px-4">
                Food & Culture
              </div>
              {/* Replace with actual image:
              <Image
                src="/images/food-culture.jpg"
                alt="Spanish food and culture"
                fill
                className="object-cover"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
