'use client'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Mail } from 'lucide-react'

const CONTACT_EMAIL = 'info@playaspanish.com'

const pricingGuidelines = [
  { name: '1-on-1 Lessons', price: '$35–$45 / hour' },
  { name: 'Business Spanish', price: '$50–$65 / hour' },
  { name: 'Travel Spanish', price: '$40–$50 / hour' }
]

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll text-center mb-12',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600">
            Reach out directly to begin your Spanish learning journey
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Pricing Guidelines */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Pricing Guidelines
            </h3>
            <p className="text-sm text-gray-500 text-center mb-4">
              Rates vary based on lesson type and frequency. Contact for a personalized quote.
            </p>
            <ul className="space-y-3">
              {pricingGuidelines.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
                >
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-medium text-gray-900">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Email CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Send an email to get started or ask any questions
            </p>
            <Button size="lg" asChild>
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="mr-2 h-5 w-5" />
                {CONTACT_EMAIL}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
