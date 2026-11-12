'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { PIGMENTS } from './pigments'
import s from './e.module.css'

/*
 * The descent, kept at the edge of the page: seven glazed tiles, crown to
 * root. The tile of the section being read turns onto its point. Wide screens
 * only; on smaller ones each section carries its own strip of tiles.
 */
export function TileRail() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const line = window.innerHeight * 0.45
      let current = 0
      PIGMENTS.forEach((pigment, index) => {
        const el = document.getElementById(pigment.id)
        if (el && el.getBoundingClientRect().top <= line) current = index
      })
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <nav aria-label="Page sections" className={s.rail}>
      <ol>
        {PIGMENTS.map((pigment, index) => (
          <li key={pigment.key}>
            <a
              href={`#${pigment.id}`}
              aria-label={pigment.label}
              aria-current={index === active ? 'true' : undefined}
              className={cn(s.railLink, index < active && s.railPassed)}
              style={{ '--tile': `var(--${pigment.key})` } as CSSProperties}
            >
              <span aria-hidden className={s.railTile} />
              <span aria-hidden className={s.railLabel}>
                {pigment.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
