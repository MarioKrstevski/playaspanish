'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

/*
 * TEMPORARY (PLA-17): a slim row pinned under each page's header so the
 * homepage designs can be shown to Angelica side by side. Switching keeps your
 * place: the same section, the same way through it. Remove once one is chosen.
 *
 * Every version uses the same section ids (hero, buffet, course, in-class,
 * why-spanish, about, how-it-works, pricing, reviews, contact) so the place
 * can be carried over.
 */
export const VERSIONS = [
  { href: '/', label: 'Now', name: 'Current design, Ascension' },
  { href: '/v/c', label: 'C', name: 'Version C, Ascension distilled' },
  { href: '/v/d', label: 'D', name: 'Version D, Ascension redrawn' },
  { href: '/v/e', label: 'E', name: 'Version E, Con Angelica with the Ascension ideas' }
]

const PLACE_KEY = 'ps-version-place'
const BAR_HEIGHT = 44

export function VersionBar() {
  // Static export may serve /v/c/ with a trailing slash
  const pathname = (usePathname() || '/').replace(/(.)\/$/, '$1')
  const show = VERSIONS.some((v) => v.href === pathname)
  const [top, setTop] = useState(0)
  const topRef = useRef(0)

  // Sit right under whatever header this version has; if that header scrolls
  // away, stick to the top of the screen.
  useEffect(() => {
    if (!show) return
    const header = document.querySelector('header')
    const update = () => {
      const bottom = header ? header.getBoundingClientRect().bottom : 0
      const next = Math.max(0, Math.round(bottom))
      topRef.current = next
      setTop(next)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    const observer = header ? new ResizeObserver(update) : null
    if (header && observer) observer.observe(header)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      observer?.disconnect()
    }
  }, [show, pathname])

  // Arriving from another version: go to the same place in the same section.
  useEffect(() => {
    if (!show) return
    let place: { id: string; fraction: number } | null = null
    try {
      const raw = window.sessionStorage.getItem(PLACE_KEY)
      window.sessionStorage.removeItem(PLACE_KEY)
      place = raw ? JSON.parse(raw) : null
    } catch {
      place = null
    }
    const frame = requestAnimationFrame(() => {
      const section = place ? document.getElementById(place.id) : null
      if (!place || !section) {
        window.scrollTo({ top: 0, behavior: 'instant' })
        return
      }
      const header = document.querySelector('header')
      const line = Math.max(0, header ? header.getBoundingClientRect().bottom : 0) + BAR_HEIGHT
      const rect = section.getBoundingClientRect()
      window.scrollTo({
        top: rect.top + window.scrollY + place.fraction * rect.height - line,
        behavior: 'instant'
      })
    })
    return () => cancelAnimationFrame(frame)
  }, [show, pathname])

  // Leaving: remember which section sits just under the bar, and how far in.
  const rememberPlace = () => {
    const line = topRef.current + BAR_HEIGHT
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'))
    const current = sections.find((section) => {
      const rect = section.getBoundingClientRect()
      return rect.top <= line + 1 && rect.bottom > line + 1
    })
    try {
      if (current && window.scrollY > 0) {
        const rect = current.getBoundingClientRect()
        window.sessionStorage.setItem(
          PLACE_KEY,
          JSON.stringify({ id: current.id, fraction: (line - rect.top) / rect.height })
        )
      } else {
        window.sessionStorage.removeItem(PLACE_KEY)
      }
    } catch {
      // storage blocked: the next version opens at the top
    }
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-x-0 z-40 flex items-center justify-center border-b border-black/10 backdrop-blur-md transition-colors duration-300"
      style={{ top, height: BAR_HEIGHT, backgroundColor: 'var(--chrome-bg, rgb(255 255 255 / 0.85))' }}
    >
      <nav
        aria-label="Homepage designs"
        className="flex items-center gap-0.5 text-sm font-semibold text-gray-600"
      >
        <span aria-hidden className="pr-2 text-xs font-medium uppercase tracking-wider text-gray-400">
          Design
        </span>
        {VERSIONS.map((v) => {
          const current = v.href === pathname
          return (
            <Link
              key={v.href}
              href={v.href}
              scroll={false}
              onClick={current ? undefined : rememberPlace}
              title={v.name}
              aria-label={v.name}
              aria-current={current ? 'page' : undefined}
              className={cn(
                'whitespace-nowrap rounded-full px-3.5 py-1.5 transition-colors duration-150',
                current ? 'bg-gray-900 text-white' : 'hover:bg-gray-100 hover:text-gray-900'
              )}
            >
              {v.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
