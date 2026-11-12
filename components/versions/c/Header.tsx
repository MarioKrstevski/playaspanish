'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Spectrum } from './Spectrum'
import { STATIONS } from './tones'
import s from './c.module.css'

const LINKS = [
  { href: '#buffet', label: 'Who it’s for' },
  { href: '#about', label: 'Teachers' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' }
]

// The design switcher bar that sits under this header (PLA-17)
const BAR = 44

export function Header() {
  const [open, setOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  // The line under the header draws itself one colour per section: it reaches
  // the end of a colour when that section's last line passes under the header.
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const header = headerRef.current
      const line = lineRef.current
      if (!header || !line) return
      const mark = header.getBoundingClientRect().bottom + BAR
      let progress = 0
      STATIONS.forEach((station, index) => {
        const rect = document.getElementById(station.id)?.getBoundingClientRect()
        if (!rect || rect.height === 0 || rect.top > mark) return
        const inside = Math.min(1, (mark - rect.top) / rect.height)
        progress = (index + inside) / STATIONS.length
      })
      line.style.setProperty('--p', progress.toFixed(4))
    }
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header ref={headerRef} className={s.header}>
      <div className={cn(s.wrap, s.headerRow)}>
        <a href="#hero" className={s.logo} aria-label="Playa Spanish, back to the top">
          <Image
            src="/playaspanish_logowithtext.png"
            alt=""
            width={2399}
            height={343}
            priority
            className={s.logoImg}
          />
        </a>
        <nav aria-label="Sections" className={s.nav}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={cn(s.btn, s.btnSmall)}>
          Email Angelica
        </a>
        <button
          type="button"
          className={s.menuBtn}
          aria-expanded={open}
          aria-controls="c-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          <span className={s.srOnly}>{open ? 'Close the menu' : 'Open the menu'}</span>
        </button>
      </div>
      <nav id="c-menu" aria-label="Sections, small screens" hidden={!open} className={cn(s.wrap, s.menu)}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <div ref={lineRef} aria-hidden="true" className={s.line}>
        <Spectrum />
        <div className={s.lineCover} />
      </div>
    </header>
  )
}
