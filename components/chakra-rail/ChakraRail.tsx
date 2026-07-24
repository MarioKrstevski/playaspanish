'use client'

import { useEffect, useState } from 'react'

// Fixed rail of seven chakra dots, one per section of the descent.
// A soft halo travels down the rail and takes on the color of the
// section currently in view. Dots scroll to their section on click.
const SECTIONS = [
  { id: 'hero', color: '#8b5cf6', label: 'Top' },
  { id: 'course', color: '#6366f1', label: 'The Course' },
  { id: 'why-spanish', color: '#0ea5e9', label: 'Why Spanish' },
  { id: 'about', color: '#10b981', label: 'Teachers' },
  { id: 'how-it-works', color: '#f59e0b', label: 'How it works' },
  { id: 'pricing', color: '#f97316', label: 'Pricing' },
  { id: 'reviews', color: '#ef4444', label: 'Reviews' }
]

const DOT_PITCH = 30 // 10px dot + 20px gap

export function ChakraRail() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.5
      let current = 0
      SECTIONS.forEach((section, index) => {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = index
        }
      })
      setActiveIndex(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeColor = SECTIONS[activeIndex].color

  return (
    <nav
      aria-label="Page sections"
      className="fixed left-6 xl:left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="relative flex flex-col items-center gap-5 py-1">
        <div className="absolute inset-y-1 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-violet-300 via-emerald-300 to-red-300 opacity-40" />
        {/* Traveling halo: slides to the active dot, adopts its color */}
        <div
          aria-hidden
          className="absolute left-1/2 w-[18px] h-[18px] rounded-full border transition-all duration-500 ease-out"
          style={{
            top: activeIndex * DOT_PITCH,
            transform: 'translateX(-50%)',
            borderColor: activeColor,
            backgroundColor: `${activeColor}26`,
            boxShadow: `0 0 10px 1px ${activeColor}59`
          }}
        />
        {SECTIONS.map((section, index) => (
          <button
            key={section.id}
            type="button"
            aria-label={section.label}
            onClick={() => {
              document.getElementById(section.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
            className="relative w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: section.color,
              opacity: index === activeIndex ? 1 : 0.4,
              transform: index === activeIndex ? 'scale(1.15)' : 'scale(1)'
            }}
          />
        ))}
      </div>
    </nav>
  )
}
