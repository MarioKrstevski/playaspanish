'use client'

import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Mail } from 'lucide-react'

const CONTACT_EMAIL = 'info@playaspanish.com'

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    // A closing panel of its own, so it reads apart from the reviews above;
    // the pink around it still runs into the footer pyramid
    <section id="contact" className="pt-10 pb-20 bg-red-50">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll max-w-4xl mx-auto rounded-[32px] bg-red-800 px-6 py-14 text-center text-white shadow-[0_20px_50px_rgba(127,29,29,0.25)] md:px-14 md:py-16',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            One email is the whole first step. Every message is read and answered personally. Tell us where
            you are with Spanish, or just say hola.
          </p>
          <Button
            size="lg"
            asChild
            className="mt-9 rounded-full bg-[#fff3d1] px-8 py-6 text-lg font-semibold text-red-900 hover:bg-white hover:text-red-900"
          >
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail className="mr-2 h-5 w-5" aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </Button>
          <p className="text-sm text-red-200 mt-5">
            Online classes via Zoom or Teams, flexible to your platform if needed.
          </p>
        </div>
      </div>
    </section>
  )
}
