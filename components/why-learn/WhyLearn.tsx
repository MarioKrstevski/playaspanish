'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Globe, Briefcase, Heart, Users, MapPin, Coffee } from 'lucide-react'
import { BenefitCard } from './BenefitCard'
import { cn } from '@/lib/utils'

const benefits = [
  {
    icon: Globe,
    title: 'Connect with Millions',
    description: 'Spanish is spoken by over 500 million people worldwide, opening doors to rich cultures and communities.'
  },
  {
    icon: MapPin,
    title: 'Travel to Mexico',
    description: 'Enhance your travel experience in Mexico by communicating with locals and understanding the culture deeply.'
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    description: 'Spanish speakers have access to more job opportunities, especially in international business and tourism.'
  },
  {
    icon: Heart,
    title: 'Cultural Understanding',
    description: 'Learn about Mexican traditions, customs, and way of life through language immersion.'
  },
  {
    icon: Users,
    title: 'Build Relationships',
    description: 'Form meaningful connections with Spanish-speaking friends, colleagues, and community members.'
  },
  {
    icon: Coffee,
    title: 'Enjoy Local Experiences',
    description: 'Order food, ask for directions, and engage in authentic conversations during your travels.'
  }
]

export function WhyLearn() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="why-learn" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Learn Spanish?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Discover the incredible benefits of learning Spanish, especially for those interested in Mexico and Spanish-speaking cultures.
          </p>
          <div className="bg-primary-50 rounded-lg p-6 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Playa Spanish Location</h3>
            <p className="text-lg text-gray-700 mb-4">
              Playa Spanish is located in <span className="font-semibold">Playa del Carmen</span>, an affluent international city to the south of Mexico.
            </p>
            <p className="text-gray-700">
              We offer guests the opportunity to experience and explore the language through:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Online schools</li>
              <li>• Certified teachers</li>
              <li>• Free Wi-Fi Access</li>
              <li>• Native Spanish speaker</li>
              <li>• Online material</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
