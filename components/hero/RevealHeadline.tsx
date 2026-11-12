'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { hero } from '@/lib/content'

const MOBILE_BREAKPOINT = 768
const RADIUS_DESKTOP = 92
const RADIUS_MOBILE = 75

// The hero headline from the Ascension design, on its own so other heroes can
// use it: English by default, Spanish revealed inside a circle that follows
// the cursor (or a finger).
export function RevealHeadline({
  className,
  textClassName
}: {
  /** Layout of the hover area (alignment, margins) */
  className?: string
  /** Typography shared by both language layers */
  textClassName?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [reveal, setReveal] = useState({ x: 0, y: 0, active: false })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const moveTo = useCallback((clientX: number, clientY: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setReveal({ x: clientX - rect.left, y: clientY - rect.top, active: true })
  }, [])
  const stop = useCallback(() => setReveal((prev) => ({ ...prev, active: false })), [])

  const radius = isMobile ? RADIUS_MOBILE : RADIUS_DESKTOP
  const maskRadius = radius - 2
  const cx = reveal.active ? reveal.x : 0
  // On touch the circle sits above the finger so it stays visible
  const cy = reveal.active ? (isMobile ? reveal.y - radius : reveal.y) : 0
  const text = cn(
    'font-bold text-white [text-shadow:0_2px_18px_rgba(40,16,70,0.45)]',
    textClassName
  )

  return (
    <div
      ref={ref}
      className={cn('relative select-none py-6 hover:cursor-none touch-none', className)}
      onMouseMove={(e) => moveTo(e.clientX, e.clientY)}
      onMouseLeave={stop}
      onTouchStart={(e) => e.touches[0] && moveTo(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => e.touches[0] && moveTo(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={stop}
      onTouchCancel={stop}
    >
      {/* English: always there, with a circular cutout while revealing */}
      <h1
        className={cn(text, 'tracking-wide')}
        style={
          reveal.active
            ? {
                WebkitMaskImage: `radial-gradient(circle ${maskRadius}px at ${cx}px ${cy - 24}px, transparent ${maskRadius}px, black ${maskRadius}px)`,
                maskImage: `radial-gradient(circle ${maskRadius}px at ${cx}px ${cy - 24}px, transparent ${maskRadius}px, black ${maskRadius}px)`
              }
            : undefined
        }
      >
        {hero.headline}
      </h1>
      {/* Spanish: same box, visible only inside the circle */}
      <p
        aria-hidden
        lang="es"
        className={cn(text, 'absolute inset-x-0 top-6')}
        style={{
          opacity: reveal.active ? 1 : 0,
          clipPath: reveal.active ? `circle(${maskRadius}px at ${cx}px ${cy - 24}px)` : 'none',
          WebkitClipPath: reveal.active ? `circle(${maskRadius}px at ${cx}px ${cy - 24}px)` : 'none'
        }}
      >
        {hero.headlineEs}
      </p>
      {reveal.active && (
        <div
          aria-hidden
          className="pointer-events-none absolute rounded-full border-2 border-white/80 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: cx,
            top: cy,
            width: radius * 2,
            height: radius * 2,
            background:
              'radial-gradient(circle, transparent 60%, rgba(139, 92, 246, 0.15) 80%, rgba(139, 92, 246, 0.3) 100%)',
            boxShadow: 'inset 0 0 20px 8px rgba(139, 92, 246, 0.2), 0 0 15px 5px rgba(139, 92, 246, 0.15)'
          }}
        />
      )}
    </div>
  )
}
