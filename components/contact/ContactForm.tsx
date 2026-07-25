'use client'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Mail } from 'lucide-react'

const CONTACT_EMAIL = 'info@playaspanish.com'

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-24 bg-red-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll text-center mb-10',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            One email is the whole first step. Angelica reads every message and answers
            personally. Tell her where you are with Spanish, or just say hola.
          </p>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" />
              {CONTACT_EMAIL}
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Online classes via Zoom or Teams, flexible to your platform if needed.
          </p>
        </div>
      </div>
    </section>
  )
}
