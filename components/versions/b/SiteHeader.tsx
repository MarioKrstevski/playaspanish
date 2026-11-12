'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { hero } from '@/lib/content'
import { cn } from '@/lib/utils'
import s from './b.module.css'

const links = [
  { href: '#buffet', label: 'Who it’s for' },
  { href: '#course', label: 'The course' },
  { href: '#about', label: 'Teachers' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' }
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(s.onLight, 'sticky top-0 z-50 border-b-[3px] border-[#16123b] bg-[#fbf1e2]')}
    >
      <div className="mx-auto flex h-[61px] w-full max-w-[1440px] items-center justify-between gap-3 px-5 sm:px-8 lg:px-14">
        <a href="#hero" className="flex-none" onClick={() => setOpen(false)}>
          <Image
            src="/playaspanish_logowithtext.png"
            alt="Playa Spanish"
            width={2399}
            height={343}
            priority
            className="h-6 w-auto sm:h-8"
          />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 font-semibold lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="decoration-[#d6006c] decoration-[3px] underline-offset-[7px] hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[#d6006c] px-4 py-2.5 text-[0.95rem] font-bold leading-none text-[#fff8ec] transition-colors duration-200 hover:bg-[#16123b] sm:px-6 sm:py-3 sm:text-base"
          >
            {hero.cta}
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="b-mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full lg:hidden"
          >
            {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="b-mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-full border-y-[3px] border-[#16123b] bg-[#fbf1e2] lg:hidden"
        >
          <ul className="px-5 py-2 sm:px-8">
            {links.map((l) => (
              <li key={l.href} className="border-b-2 border-[#16123b]/15 last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-xl font-bold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
