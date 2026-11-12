'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { hero } from '@/lib/content'
import { NAV_LINKS, SECTIONS, ZONES } from './zones'
import s from './d.module.css'

// Which of the seven colours is under the reader right now.
function useZoneIndex() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    let frame = 0
    const read = () => {
      frame = 0
      const line = window.innerHeight * 0.45
      let zone = SECTIONS[0].zone
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= line) zone = section.zone
      }
      setIndex(ZONES.findIndex((z) => z.key === zone))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  return index
}

// The descent drawn as what it is: a pyramid of seven terraces, crown at the
// top, root at the base. The terrace you are on is lit.
function Tiers({ active, unit, height }: { active: number; unit: number; height: number }) {
  return (
    <span className={s.tiers} style={{ gap: Math.max(2, Math.round(height / 3)) }}>
      {ZONES.map((zone, i) => (
        <span
          key={zone.key}
          data-zone={zone.key}
          className={cn(s.tier, i === active && s.tierOn)}
          style={{ width: unit * (i + 2), height }}
        />
      ))}
    </span>
  )
}

export function Header() {
  const active = useZoneIndex()
  const zone = ZONES[active]

  return (
    <>
      <header className={s.header} data-zone={zone.key}>
        <div className={cn(s.wrap, 'flex h-full items-center gap-4 lg:gap-7')}>
          <a href="#hero" className="mr-auto block shrink-0" aria-label="Playa Spanish, back to the top">
            <Image
              src="/playaspanish_logowithtext.png"
              alt="Playa Spanish"
              width={2399}
              height={343}
              priority
              className="h-6 w-auto sm:h-7"
            />
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={s.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
          {/* below the width where the side pyramid fits, a small one lives here */}
          <span aria-hidden className={cn(s.mini, 'shrink-0')} title={zone.label}>
            <Tiers active={active} unit={4} height={3} />
          </span>
          <a href="#contact" className={s.headerCta}>
            {hero.cta}
          </a>
        </div>
      </header>

      <nav aria-label="Where you are on the page" className={s.rail}>
        <ul>
          {ZONES.map((z, i) => (
            <li key={z.key}>
              <a
                href={z.href}
                className={s.railLink}
                aria-label={z.label}
                aria-current={i === active ? 'true' : undefined}
                title={z.label}
              >
                <span
                  data-zone={z.key}
                  className={cn(s.tier, i === active && s.tierOn)}
                  style={{ width: 8 * (i + 2), height: 9 }}
                />
              </a>
            </li>
          ))}
        </ul>
        <span className={s.railLabel} data-zone={zone.key}>
          {zone.label}
        </span>
      </nav>
    </>
  )
}
