'use client'

// import Image from 'next/image' // restore when uncommenting teacher image below
import { useState, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HEADLINE_EN = 'Your path to Spanish starts here'
const HEADLINE_ES = 'Tu camino al español empieza aquí'
const CURSOR_CIRCLE_RADIUS = 125

function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  const cursorRevealRef = useRef<HTMLDivElement>(null)
  const [cursorReveal, setCursorReveal] = useState({ x: 0, y: 0, isHovering: false })

  const handleCursorRevealMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cursorRevealRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setCursorReveal({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true
    })
  }, [])

  const handleCursorRevealLeave = useCallback(() => {
    setCursorReveal((prev) => ({ ...prev, isHovering: false }))
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left visible md:col-span-2 max-w-4xl mx-auto text-center">
            {/* Cursor reveal: English with circular cutout, Spanish visible only in circle on hover */}
            <div
              ref={cursorRevealRef}
              className="relative min-h-[5rem] flex items-center justify-start cursor-default select-none mb-12"
              onMouseMove={handleCursorRevealMove}
              onMouseLeave={handleCursorRevealLeave}
            >
              {/* Spanish layer: hidden by default, revealed only inside circle on hover */}
              <h1
                className="absolute inset-0 flex items-center justify-start text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-nowrap"
                style={{
                  opacity: cursorReveal.isHovering ? 1 : 0,
                  WebkitMaskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${CURSOR_CIRCLE_RADIUS}px at ${cursorReveal.x}px ${cursorReveal.y}px, black 0, black ${CURSOR_CIRCLE_RADIUS}px, transparent ${CURSOR_CIRCLE_RADIUS}px)`
                    : 'none',
                  maskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${CURSOR_CIRCLE_RADIUS}px at ${cursorReveal.x}px ${cursorReveal.y}px, black 0, black ${CURSOR_CIRCLE_RADIUS}px, transparent ${CURSOR_CIRCLE_RADIUS}px)`
                    : 'none'
                }}
                aria-hidden={!cursorReveal.isHovering}
              >
                {HEADLINE_ES}
              </h1>
              {/* English layer: always visible, with circular cutout on hover */}
              <h1
                className="absolute inset-0 flex items-center justify-start text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-nowrap"
                style={{
                  WebkitMaskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${CURSOR_CIRCLE_RADIUS}px at ${cursorReveal.x}px ${cursorReveal.y}px, transparent 0, transparent ${CURSOR_CIRCLE_RADIUS}px, black ${CURSOR_CIRCLE_RADIUS}px)`
                    : 'none',
                  maskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${CURSOR_CIRCLE_RADIUS}px at ${cursorReveal.x}px ${cursorReveal.y}px, transparent 0, transparent ${CURSOR_CIRCLE_RADIUS}px, black ${CURSOR_CIRCLE_RADIUS}px)`
                    : 'none'
                }}
              >
                {HEADLINE_EN}
              </h1>
              {/* Visible circle at cursor (250x250) */}
              {cursorReveal.isHovering && (
                <div
                  className="pointer-events-none absolute w-[250px] h-[250px] rounded-full border-2 border-primary-400 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: cursorReveal.x, top: cursorReveal.y }}
                  aria-hidden
                />
              )}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Personalized lessons with a native teacher.{' '}
              <span className="text-primary-600 font-semibold">For travel, work, or the joy of learning.</span>
            </p>
            <Button
              size="lg"
              onClick={handleSmoothScroll}
              className="text-lg px-8 py-6"
            >
              Start now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Image - teacher (commented out for now, kept for future use) */}
          {/* <div className="animate-slide-right visible" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-1/2 ml-auto h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-transparent" />
              <Image
                src="/angelica-playa-spanish.png"
                alt="Spanish teacher"
                fill
                className="object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
