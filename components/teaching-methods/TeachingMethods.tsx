'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { MessageCircle, Headphones, BookOpen, PenLine } from 'lucide-react'
import { MethodCard } from './MethodCard'
import { cn } from '@/lib/utils'

const methods = [
  {
    icon: MessageCircle,
    title: 'Speaking',
    description: 'Real conversations from day one to build confidence and fluency.'
  },
  {
    icon: Headphones,
    title: 'Listening',
    description: 'Understand native speakers at natural speeds through authentic audio.'
  },
  {
    icon: BookOpen,
    title: 'Reading',
    description: 'Build vocabulary and comprehension with engaging texts at your level.'
  },
  {
    icon: PenLine,
    title: 'Writing',
    description: 'Express yourself clearly through guided writing practice and feedback.'
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Beyond words and grammar—we focus on speaking and listening so you really get the language.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Vocabulary and grammar matter, but the goal is to use Spanish. We emphasize conversation and comprehension so you build a real grasp of the language, not just theory.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
      </div>
    </section>
  )
}
