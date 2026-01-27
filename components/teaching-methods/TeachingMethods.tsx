'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { MessageCircle, Headphones } from 'lucide-react'
import { MethodCard } from './MethodCard'
import { FeatureItem } from './FeatureItem'
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
          {methods.map((method, index) => (
            <MethodCard
              key={method.title}
              icon={method.icon}
              title={method.title}
              description={method.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Key Features of Our Teaching Style
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {teachingFeatures.map((feature, index) => (
                <FeatureItem
                  key={feature}
                  feature={feature}
                  delay={index * 50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
