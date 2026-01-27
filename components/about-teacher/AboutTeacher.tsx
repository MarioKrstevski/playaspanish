'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function AboutTeacher() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your Teacher
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Image */}
          <div
            ref={imageRef}
            className={cn(
              'animate-slide-left',
              imageVisible && 'visible'
            )}
          >
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400" />
              <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                Angelica
              </div>
              {/* Replace with actual image:
              <Image
                src="/images/angelica.jpg"
                alt="Angelica - Spanish Teacher"
                fill
                className="object-cover"
              />
              */}
            </div>
          </div>

          {/* Right Content */}
          <div
            ref={contentRef}
            className={cn(
              'animate-slide-right space-y-6',
              contentVisible && 'visible'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Hi, nice to meet you. I&apos;m Angelica Torres
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Founder of Playa Spanish school with more than 15 years of experience teaching Spanish and Mexican culture.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Credentials</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Lic. in English Language</li>
                  <li>• Certified Level C1</li>
                  <li>• More than 15 years of teaching experience</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">My Expertise</h4>
                <p className="text-gray-700">
                  As the founder of Playa Spanish, I bring extensive experience in teaching Spanish and Mexican culture. My passion for language education and cultural immersion has helped countless students achieve their Spanish learning goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
