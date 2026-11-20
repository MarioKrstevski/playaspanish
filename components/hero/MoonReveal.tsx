'use client'

import { Fragment, useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'

// The hero headline with a moon crossing it: it rises on the left, arcs
// slowly over the line and sets on the right, and wherever it passes the
// Spanish shows through, deep purple on the moon's cream face. Then it rests
// and goes again. On desktop a hover catches the moon and it follows the
// mouse; let go and it carries on along its path. With reduced motion the
// moon stays away and only hover reveals.
//
// The moon's centre and radius live in CSS variables on the wrapper, set
// every frame without React re-renders.

const CROSS_MS = 9000 // one pass across
const REST_MS = 3000 // dark sky between passes
const START_DELAY_MS = 1200 // let the headline slide in first

const TYPE = 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide'

// The English sets the line with its normal spacing. Each Spanish word is
// then measured and centred on the English word it translates (the headline
// is written word for word), nudged sideways only when it would touch its
// neighbour, so "Tu" lands on "Your", "camino" on "path", and so on, at any
// width and on wrapped lines too.
function placeSpanish(wrap: HTMLElement) {
  const en = wrap.querySelectorAll<HTMLElement>('[data-en]')
  const es = wrap.querySelectorAll<HTMLElement>('[data-es]')
  const box = wrap.getBoundingClientRect()
  const gap = parseFloat(getComputedStyle(en[0] ?? wrap).fontSize) * 0.22
  type Slot = { el: HTMLElement; top: number; centre: number; width: number; left: number }
  const lines = new Map<number, Slot[]>()
  en.forEach((word, i) => {
    const target = es[i]
    if (!target) return
    const r = word.getBoundingClientRect()
    const top = Math.round(r.top - box.top)
    const width = target.offsetWidth
    const centre = r.left - box.left + r.width / 2
    const slot = { el: target, top, centre, width, left: centre - width / 2 }
    lines.set(top, [...(lines.get(top) ?? []), slot])
  })
  lines.forEach((slots) => {
    // push right where a word would run into the one before it...
    const ideal = slots.map((slot) => slot.left)
    for (let j = 1; j < slots.length; j++) {
      const min = slots[j - 1].left + slots[j - 1].width + gap
      if (slots[j].left < min) slots[j].left = min
    }
    // ...then shift the line back by the average push, so the words sit as
    // close to their English as they can on both sides
    const shift = slots.reduce((sum, slot, j) => sum + slot.left - ideal[j], 0) / slots.length
    slots.forEach((slot) => {
      slot.el.style.left = `${slot.left - shift}px`
      slot.el.style.top = `${slot.top}px`
    })
  })
}

export function MoonReveal({ en, es }: { en: string; es: string }) {
  const enWords = en.split(' ')
  const esWords = es.split(' ')
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const place = () => placeSpanish(wrap)
    place()
    document.fonts?.ready.then(place)
    const observer = new ResizeObserver(place)
    observer.observe(wrap)
    return () => observer.disconnect()
  }, [en, es])

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let frame = 0
    let start = performance.now() + START_DELAY_MS
    let pointer: { x: number; y: number } | null = null
    const pos = { x: -9999, y: 0 }

    // English words fade out as the moon covers them, so a half-covered word
    // never reads as a mix of both languages ("Tuour")
    const words = Array.from(wrap.querySelectorAll<HTMLElement>('[data-en]'))
    const fadeWords = (x: number, y: number, r: number) => {
      const box = wrap.getBoundingClientRect()
      words.forEach((word) => {
        const b = word.getBoundingClientRect()
        const left = b.left - box.left
        const top = b.top - box.top
        // how much of the word's middle band the moon's disc spans
        const dy = Math.abs(top + b.height / 2 - y)
        const half = dy < r ? Math.sqrt(r * r - dy * dy) : 0
        const covered = Math.max(0, Math.min(left + b.width, x + half) - Math.max(left, x - half)) / b.width
        word.style.opacity = String(Math.max(0, 1 - covered * 2.2))
      })
    }

    const set = (x: number, y: number, r: number) => {
      wrap.style.setProperty('--mx', `${x}px`)
      wrap.style.setProperty('--my', `${y}px`)
      wrap.style.setProperty('--mr', `${r}px`)
    }

    const tick = (now: number) => {
      const w = wrap.clientWidth
      const h = wrap.clientHeight
      const r = w < 640 ? 64 : 88
      if (pointer) {
        // ease toward the mouse so the moon drifts rather than snaps
        pos.x += (pointer.x - pos.x) * 0.22
        pos.y += (pointer.y - pos.y) * 0.22
      } else if (!reduce) {
        const span = w + r * 2.4
        const elapsed = now - start
        const cycle = CROSS_MS + REST_MS
        const t = elapsed < 0 ? -1 : (elapsed % cycle) / CROSS_MS
        if (t < 0 || t > 1) {
          pos.x = -r * 1.5 // resting below the horizon, out of sight
        } else {
          pos.x = -r * 1.2 + t * span
          // a real arch: rises from well below the line, crests just above
          // its middle, and sets low again on the right
          pos.y = h / 2 - r * 0.15 + r * 1.7 * (1 - Math.sin(Math.PI * t))
        }
      } else {
        pos.x = -r * 1.5
      }
      if (pos.y === 0) pos.y = h / 2
      set(pos.x, pos.y, r)
      fadeWords(pos.x, pos.y, r)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const rect = wrap.getBoundingClientRect()
      if (!pointer) {
        // pick up from where the moon is, so it glides to the cursor
        pointer = { x: pos.x, y: pos.y }
      }
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
    }
    const onLeave = () => {
      if (!pointer) return
      pointer = null
      // carry on along the path from roughly where it was let go
      const w = wrap.clientWidth
      const r = w < 640 ? 64 : 88
      const t = Math.min(Math.max((pos.x + r * 1.2) / (w + r * 2.4), 0), 1)
      start = performance.now() - t * CROSS_MS
    }
    wrap.addEventListener('pointermove', onMove)
    wrap.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(frame)
      wrap.removeEventListener('pointermove', onMove)
      wrap.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative select-none py-6 md:py-8"
      style={{ '--mx': '-9999px', '--my': '50%', '--mr': '88px' } as CSSProperties}
    >
      {/* English, with a moon-shaped hole wherever the moon is */}
      <h1
        className={`${TYPE} text-center text-white [text-shadow:0_2px_18px_rgba(40,16,70,0.45)] [text-wrap:balance]`}
        style={{
          WebkitMaskImage:
            'radial-gradient(circle var(--mr) at var(--mx) var(--my), transparent calc(var(--mr) - 1px), black var(--mr))',
          maskImage:
            'radial-gradient(circle var(--mr) at var(--mx) var(--my), transparent calc(var(--mr) - 1px), black var(--mr))'
        }}
      >
        {enWords.map((word, i) => (
          <Fragment key={i}>
            <span data-en>{word}</span>
            {i < enWords.length - 1 && ' '}
          </Fragment>
        ))}
      </h1>

      {/* The moon */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          left: 'var(--mx)',
          top: 'var(--my)',
          width: 'calc(var(--mr) * 2)',
          height: 'calc(var(--mr) * 2)',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle at 38% 34%, #fffaf0 0%, #fff3d1 55%, #f3dca2 100%)',
          boxShadow: '0 0 46px 14px rgba(255, 233, 180, 0.32)'
        }}
      />

      {/* Spanish, only on the moon's face */}
      <p
        aria-hidden
        className={`${TYPE} absolute inset-0 text-[#3b0764]`}
        style={{
          clipPath: 'circle(var(--mr) at var(--mx) var(--my))',
          WebkitClipPath: 'circle(var(--mr) at var(--mx) var(--my))'
        }}
      >
        {esWords.map((word, i) => (
          <span key={i} data-es lang="es" className="absolute left-0 top-0 whitespace-nowrap">
            {word}
          </span>
        ))}
      </p>
    </div>
  )
}
