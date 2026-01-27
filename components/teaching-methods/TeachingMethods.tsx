'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { MessageCircle, Mic, PenTool } from 'lucide-react'
import { cn } from '@/lib/utils'

const methods = [
  {
    icon: MessageCircle,
    title: 'Speaking',
    description: 'Engage in real conversations from day one. Practice speaking Spanish through interactive dialogues, role-playing, and guided conversations that build your confidence and fluency.'
  },
  {
    icon: Mic,
    title: 'Pronunciation',
    description: 'Master the sounds of Spanish with focused pronunciation practice. Learn proper accent, intonation, and rhythm to sound natural and be understood by native speakers.'
  },
  {
    icon: PenTool,
    title: 'Writing',
    description: 'Develop your writing skills through structured exercises, creative assignments, and practical applications. From simple sentences to complex compositions, we build your written Spanish step by step.'
  }
]

export function TeachingMethods() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="teaching-methods" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Teach
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach covers all aspects of language learning to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {methods.map((method, index) => {
            const Icon = method.icon
            const { ref, isVisible } = useScrollAnimation()
            return (
              <div
                key={method.title}
                ref={ref}
                className={cn(
                  'animate-on-scroll text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300',
                  isVisible && 'visible'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 rounded-full">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-700">{method.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
