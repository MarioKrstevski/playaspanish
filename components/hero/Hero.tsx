'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-left visible">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Learn Spanish
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Have you always wanted to learn a second language?{' '}
              <span className="text-primary-600 font-semibold">Now is the time.</span>
            </p>
            <Button
              size="lg"
              onClick={handleSmoothScroll}
              className="text-lg px-8 py-6"
            >
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="animate-slide-right visible" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-1/2 ml-auto h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-transparent" />

             
              <Image
                src="/angelica-playa-spanish.png"
                alt="Spanish teacher"
                fill
                // i want this image to contain within the box around it
                className="object-cover"
              />
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
