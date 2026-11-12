'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { hero } from '@/lib/content'
import s from './d.module.css'

// The headline that hides Spanish inside the English. A small moon passes over
// the words; inside its disc they are Spanish. It follows the pointer (or a
// finger). On load it crosses the headline once so the idea is seen, then
// steps aside so the English reads clean until someone steers it.
// Both headlines are six words, so they are set on the same three lines and
// each Spanish word lands on top of its English one. If the copy ever changes
// length, the lines simply wrap on their own.
// How long the moon takes to cross the headline once on load
const INTRO_SECONDS = 3.4

function lines(text: string) {
  const words = text.split(' ')
  if (words.length !== 6) return [text]
  return [words.slice(0, 3), words.slice(3, 5), words.slice(5)].map((line) => line.join(' '))
}

function Lines({ text }: { text: string }) {
  const set = lines(text)
  if (set.length === 1) return <>{text}</>
  return (
    <>
      {set.map((line, index) => (
        <span key={line} className="block whitespace-nowrap">
          {line}
          {index < set.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  )
}

export function LensHeadline({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = el.offsetWidth
    let height = el.offsetHeight
    let x = width * -0.2
    let y = height * 0.5
    let targetX = x
    let targetY = y
    let steering = false
    let frame = 0
    let visible = true
    const started = performance.now()

    const paint = () => {
      el.style.setProperty('--lx', `${x.toFixed(1)}px`)
      el.style.setProperty('--ly', `${y.toFixed(1)}px`)
    }

    const tick = (now: number) => {
      if (!steering) {
        const t = (now - started) / 1000
        if (still || t > INTRO_SECONDS) {
          // nobody steering and the intro pass is over: hide the moon
          el.dataset.idle = 'true'
          frame = 0
          return
        }
        targetX = width * (-0.2 + 1.4 * (t / INTRO_SECONDS))
        targetY = height * 0.5
      }
      x += (targetX - x) * (steering ? 0.22 : 0.12)
      y += (targetY - y) * (steering ? 0.22 : 0.12)
      paint()
      frame = visible ? requestAnimationFrame(tick) : 0
    }
    const run = () => {
      if (!frame && visible) frame = requestAnimationFrame(tick)
    }

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      targetX = event.clientX - rect.left
      // a finger would cover the disc, so it rides just above the touch
      targetY = event.clientY - rect.top - (event.pointerType === 'touch' ? 56 : 0)
      steering = true
      el.dataset.idle = 'false'
      if (still) {
        x = targetX
        y = targetY
        paint()
      } else run()
    }
    const onLeave = () => {
      steering = false
      run()
    }

    const resize = new ResizeObserver(() => {
      width = el.offsetWidth
      height = el.offsetHeight
    })
    resize.observe(el)
    const watch = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) run()
    })
    watch.observe(el)

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerdown', onMove)
    el.addEventListener('pointerleave', onLeave)
    el.addEventListener('pointercancel', onLeave)
    paint()
    run()

    return () => {
      if (frame) cancelAnimationFrame(frame)
      resize.disconnect()
      watch.disconnect()
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerdown', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.removeEventListener('pointercancel', onLeave)
    }
  }, [])

  return (
    <div ref={ref} className={cn(s.lens, className)}>
      <h1 className={s.lensText}>
        <Lines text={hero.headline} />
      </h1>
      <span aria-hidden className={s.lensGlow} />
      <p aria-hidden lang="es" className={cn(s.lensText, s.lensEs)}>
        <Lines text={hero.headlineEs} />
      </p>
    </div>
  )
}
