'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { PackageCard } from './PackageCard'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const packages = [
  {
    title: '1-on-1 Lessons',
    description: 'Personalized Spanish lessons tailored to your specific needs and schedule.',
    features: [
      'Customized lesson plans',
      'Flexible scheduling',
      'Individual attention',
      'Focus on your weak areas'
    ],
    isPopular: true
  },
  {
    title: 'Customized Business Spanish',
    description: 'Professional Spanish training designed for business communication and workplace success.',
    features: [
      'Business vocabulary',
      'Professional communication',
      'Industry-specific terms',
      'Cultural business etiquette'
    ]
  },
  {
    title: 'Traveling Spanish',
    description: 'Essential Spanish phrases and vocabulary for travelers visiting Spanish-speaking countries.',
    features: [
      'Travel-specific vocabulary',
      'Common phrases for tourists',
      'Cultural tips',
      'Practical conversation skills'
    ]
  }
]

const courseOptions = [
  'Start with a structured curriculum and follow topics in a clear order',
  'Adjust pace and length to your stay or schedule',
  'Dive deeper into specific grammar or topics you need',
  'Add technical or professional vocabulary when relevant'
]

export function Packages() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll text-center mb-12',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose what you want to learn
          </h2>
          <p className="text-xl text-gray-600">
            with customized lessons at <span className="text-primary-600 font-semibold">Playa Spanish</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              delay={index * 0.1}
              isPopular={'isPopular' in pkg && pkg.isPopular}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Start with a clear path, customize as you go
            </h3>
            <p className="text-gray-600">
              Each course follows a structured curriculum so you always know where you&apos;re headed—with room to focus on what matters most to you.
            </p>
          </div>
          <ul className="space-y-3">
            {courseOptions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
