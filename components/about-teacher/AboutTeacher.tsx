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
                Hi, nice to meet you. I&apos;m Angelica
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                I come from [Location], and I have a [Degree] in [Field]. With years of experience teaching Spanish to students from all over the world, I bring both expertise and passion to every lesson.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">My Background</h4>
                <p className="text-gray-700">
                  [Degree details and professional background/portfolio information]
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">My Passion</h4>
                <p className="text-gray-700">
                  Teaching Spanish is not just my profession—it&apos;s my passion. I love helping students discover the beauty of the Spanish language and culture, and I&apos;m committed to making your learning journey enjoyable and effective.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Students Helped</h4>
                <p className="text-gray-700">
                  I&apos;ve had the privilege of helping hundreds of students achieve their Spanish learning goals, from beginners taking their first steps to advanced learners perfecting their fluency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
