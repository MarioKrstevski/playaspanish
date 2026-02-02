'use client'

// import Image from 'next/image' // restore when uncommenting teacher image below
import { useState, useCallback, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const HEADLINE_EN = 'Your path to Spanish starts here'
const HEADLINE_ES = 'Tu camino al español empieza aquí'
const CURSOR_CIRCLE_RADIUS_DESKTOP = 105 // 210px diameter
const CURSOR_CIRCLE_RADIUS_MOBILE = 52 // ~half on mobile (104px diameter)

function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function useCircleRadius() {
  const [radius, setRadius] = useState(CURSOR_CIRCLE_RADIUS_DESKTOP)
  useEffect(() => {
    const update = () => {
      setRadius(window.innerWidth < 768 ? CURSOR_CIRCLE_RADIUS_MOBILE : CURSOR_CIRCLE_RADIUS_DESKTOP)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return radius
}

export function Hero() {
  const cursorRevealRef = useRef<HTMLDivElement>(null)
  const [cursorReveal, setCursorReveal] = useState({ x: 0, y: 0, isHovering: false })
  const circleRadius = useCircleRadius()

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    const el = cursorRevealRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setCursorReveal({
      x: clientX - rect.left,
      y: clientY - rect.top,
      isHovering: true
    })
  }, [])

  const handleCursorRevealMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    updatePosition(e.clientX, e.clientY)
  }, [updatePosition])

  const handleCursorRevealLeave = useCallback(() => {
    setCursorReveal((prev) => ({ ...prev, isHovering: false }))
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    if (touch) updatePosition(touch.clientX, touch.clientY)
  }, [updatePosition])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    if (touch) updatePosition(touch.clientX, touch.clientY)
  }, [updatePosition])

  const handleTouchEnd = useCallback(() => {
    setCursorReveal((prev) => ({ ...prev, isHovering: false }))
  }, [])

  const circleDiameter = circleRadius * 2

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left w-full visible md:col-span-2 max-w-4xl mx-auto text-center">
            {/* Cursor reveal: English with circular cutout, Spanish visible only in circle on hover */}
            <div
              ref={cursorRevealRef}
              className="relative min-h-[5rem] flex items-center justify-center select-none mb-12 hover:cursor-none touch-none"
              onMouseMove={handleCursorRevealMove}
              onMouseLeave={handleCursorRevealLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
            >
              {/* Spanish layer: hidden by default, revealed only inside circle on hover/touch */}
              <h1
                className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-nowrap py-10"
                style={{
                  opacity: cursorReveal.isHovering ? 1 : 0,
                  WebkitMaskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${circleRadius}px at ${cursorReveal.x}px ${cursorReveal.y}px, black 0, black ${circleRadius}px, transparent ${circleRadius}px)`
                    : 'none',
                  maskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${circleRadius}px at ${cursorReveal.x}px ${cursorReveal.y}px, black 0, black ${circleRadius}px, transparent ${circleRadius}px)`
                    : 'none'
                }}
                aria-hidden={!cursorReveal.isHovering}
              >
                {HEADLINE_ES}
              </h1>
              {/* English layer: always visible, with circular cutout on hover/touch */}
              <h1
                className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 whitespace-nowrap py-10 tracking-wider"
                style={{
                  WebkitMaskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${circleRadius}px at ${cursorReveal.x}px ${cursorReveal.y}px, transparent 0, transparent ${circleRadius}px, black ${circleRadius}px)`
                    : 'none',
                  maskImage: cursorReveal.isHovering
                    ? `radial-gradient(circle ${circleRadius}px at ${cursorReveal.x}px ${cursorReveal.y}px, transparent 0, transparent ${circleRadius}px, black ${circleRadius}px)`
                    : 'none'
                }}
              >
                {HEADLINE_EN}
              </h1>
              {/* Visible circle at cursor/touch with smoky inner rim and black border */}
              {cursorReveal.isHovering && (
                <div
                  className="pointer-events-none absolute rounded-full border-2 border-gray-900 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: cursorReveal.x,
                    top: cursorReveal.y,
                    width: circleDiameter,
                    height: circleDiameter,
                    background: 'radial-gradient(circle, transparent 60%, rgba(249, 115, 22, 0.15) 80%, rgba(249, 115, 22, 0.3) 100%)',
                    boxShadow: 'inset 0 0 20px 8px rgba(249, 115, 22, 0.2), 0 0 15px 5px rgba(249, 115, 22, 0.15)'
                  }}
                  aria-hidden
                />
              )}
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 " >
              Personalized lessons with a native teacher.{' '} <br />
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
