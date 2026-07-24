'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function AboutTeacher() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()
  const { ref: secondRef, isVisible: secondVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every teacher at Playa Spanish is Mexican — and every student starts with Angelica.
          </p>
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
              <Image
                src="/angelica-professional.jpg"
                alt="Angelica Torres - Spanish Teacher and Founder of Playa Spanish"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
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
              <p className="text-base text-gray-600 mb-4">
                Real connection, real conversations—and lessons shaped around your life and goals.
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

        {/* Second teacher — swap in photo + bio when the client sends them.
            Layout mirrors Angelica's (image right, text left) for the yin-yang rhythm. */}
        <div
          ref={secondRef}
          className={cn(
            'animate-on-scroll max-w-3xl mx-auto mt-16 bg-white rounded-lg border border-emerald-100 shadow-sm p-8 text-center',
            secondVisible && 'visible'
          )}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            …and a second guide is joining soon
          </h3>
          <p className="text-gray-600 leading-relaxed">
            A fellow Mexican teacher is joining Playa Spanish. Angelica is always your first
            hello — after your intro call, she pairs you with the teacher who fits your goals
            best.
          </p>
        </div>
      </div>
    </section>
  )
}
