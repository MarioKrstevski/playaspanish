'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { MessageCircle, Headphones, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const methods = [
  {
    icon: MessageCircle,
    title: 'Speaking',
    description: 'Engage in real conversations from day one. Practice speaking Spanish through interactive dialogues, role-playing, and guided conversations that build your confidence and fluency.'
  },
  {
    icon: Headphones,
    title: 'Listening',
    description: 'Develop your listening comprehension skills through authentic audio materials, conversations, and exercises. Learn to understand native speakers at natural speeds and in various contexts.'
  }
]

const teachingFeatures = [
  'Transparent objectives',
  'Key language skills',
  'Appropriate time limits',
  'A pace calculated',
  'Interaction',
  'Feedback on progress',
  'Private study exercises',
  'Classroom activities'
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            A Results-driven Teaching Style
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Playa Spanish lessons are based on the premise that clear aims and hard work yield the best results. All lessons focus on the following key features:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Key Features of Our Teaching Style
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {teachingFeatures.map((feature, index) => {
                const { ref, isVisible } = useScrollAnimation()
                return (
                  <div
                    key={feature}
                    ref={ref}
                    className={cn(
                      'animate-on-scroll flex items-center gap-2',
                      isVisible && 'visible'
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
