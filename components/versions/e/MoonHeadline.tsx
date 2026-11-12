'use client'

import { useEffect, useRef, type PointerEvent } from 'react'
import { hero } from '@/lib/content'
import s from './e.module.css'

/** Three lines, the same split in both languages, so each Spanish line sits on its English one. */
function threeLines(text: string) {
  const words = text.split(' ')
  const per = Math.ceil(words.length / 3)
  return [0, 1, 2].map((i) => words.slice(i * per, (i + 1) * per).join(' ')).filter(Boolean)
}

/*
 * The headline that hides Spanish inside the English. A violet moon rises
 * across it once, then rests beside the first line; under the pointer (or a
 * tap) it comes back, and wherever the moon is the headline reads in Spanish.
 * The moon's position lives in --mx / --my on the lens, so nothing re-renders.
 */
export function MoonHeadline() {
  const wrap = useRef<HTMLDivElement>(null)
  const lens = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )

  const hold = (clientX: number, clientY: number) => {
    if (!wrap.current || !lens.current) return
    const box = lens.current.getBoundingClientRect()
    lens.current.style.setProperty('--mx', `${Math.round(clientX - box.left)}px`)
    lens.current.style.setProperty('--my', `${Math.round(clientY - box.top)}px`)
    wrap.current.dataset.moon = 'held'
  }

  const park = () => {
    if (!wrap.current || !lens.current) return
    lens.current.style.removeProperty('--mx')
    lens.current.style.removeProperty('--my')
    wrap.current.dataset.moon = 'parked'
  }

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    hold(event.clientX, event.clientY)
  }

  const onDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'touch') return
    hold(event.clientX, event.clientY)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(park, 2600)
  }

  const onLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return
    park()
  }

  return (
    <div
      ref={wrap}
      className={s.reveal}
      onPointerMove={onMove}
      onPointerDown={onDown}
      onPointerLeave={onLeave}
    >
      <h1 className={s.display}>
        {threeLines(hero.headline).map((line) => (
          <span key={line} className={s.displayLine}>
            {line}{' '}
          </span>
        ))}
      </h1>
      <div ref={lens} aria-hidden className={s.lens}>
        <p lang="es" className={s.display}>
          {threeLines(hero.headlineEs).map((line) => (
            <span key={line} className={s.displayLine}>
              {line}
            </span>
          ))}
        </p>
      </div>
      <p lang="es" className={s.srOnly}>
        {hero.headlineEs}
      </p>
    </div>
  )
}
