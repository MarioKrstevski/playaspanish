'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { PackageCard } from './PackageCard'
import { PersonalizedFeatureItem } from './PersonalizedFeatureItem'
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

const personalizedFeatures = [
  'PERSONALIZED COURSE = LENGTH OF STAY',
  'Follow the order of the topics in the material',
  'Choose specific grammar topics',
  'Design a program for specific technical language'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-50 rounded-lg p-8 border-2 border-primary-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Personalized Course Options
            </h3>
            <p className="text-lg text-gray-700 mb-6 text-center">
              All courses can be customized to match your specific needs and learning goals
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {personalizedFeatures.map((feature, index) => (
                <PersonalizedFeatureItem
                  key={feature}
                  feature={feature}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
