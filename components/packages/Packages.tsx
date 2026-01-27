'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { PackageCard } from './PackageCard'
import { cn } from '@/lib/utils'

const packages = [
  {
    title: 'Basic Spanish Lessons (Group)',
    description: 'Learn Spanish in a supportive group environment with other students at your level.',
    features: [
      'Interactive group sessions',
      'Structured curriculum',
      'Peer practice opportunities',
      'Affordable pricing'
    ]
  },
  {
    title: 'One-on-One Phone Calls',
    description: 'Personalized Spanish lessons tailored to your specific needs and schedule.',
    features: [
      'Customized lesson plans',
      'Flexible scheduling',
      'Individual attention',
      'Focus on your weak areas'
    ]
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.title}
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
