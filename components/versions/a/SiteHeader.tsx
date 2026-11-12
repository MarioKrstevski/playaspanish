'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { hero } from '@/lib/content'
import { NAV_LINKS } from './nav'
import styles from './a.module.css'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={styles.header}>
      <div className={cn(styles.container, styles.headerInner)}>
        <a href="#hero" className={styles.logo} aria-label="Playa Spanish, back to the top">
          <Image
            src="/playaspanish_logowithtext.png"
            alt="Playa Spanish"
            width={2399}
            height={343}
            priority
          />
        </a>

        <nav aria-label="Main" className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <a href="#contact" className={cn(styles.btn, styles.btnSmall, styles.btnPrimary)}>
            {hero.cta}
          </a>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="a-mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="a-mobile-menu" aria-label="Main, mobile" className={styles.mobileMenu}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
