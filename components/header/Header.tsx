'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// Kept to two links plus the Get Started button (Mario, 2026-11-20); the
// logo goes home and the footer still lists every section
const navItems = [
  { label: 'Teachers', href: '#about' },
  { label: 'Pricing', href: '#pricing' }
]

const navLinkClass =
  'rounded-md px-2 py-1 text-indigo-950 transition-colors hover:bg-primary-50 hover:text-primary-700'

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) {
  e.preventDefault()
  // Check if it's an anchor link (starts with #)
  if (href.startsWith('#')) {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    // Regular link navigation
    window.location.href = href
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  // The design versions under /v/* are homepages too (PLA-17)
  const onHomepage = pathname === '/' || pathname.startsWith('/v/')

  return (
    <>
      {/* Backdrop dimmer when mobile menu is open */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden
      />
      {/* Solid warm white: see-through never sat right over the page's
          many colours */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fffcf7] border-b border-black/5 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/#hero"
            onClick={(e) => {
              if (onHomepage) {
                e.preventDefault()
                handleSmoothScroll(e, '#hero')
              }
            }}
            className="text-2xl font-bold text-primary-600"
          >
            <Image width={300} height={500} src="/playaspanish_logowithtext.png" alt="Playa Spanish" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              if (item.href.startsWith('#')) {
                return (
                  <a
                    key={item.href}
                    href={onHomepage ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      if (onHomepage) {
                        e.preventDefault()
                        handleSmoothScroll(e, item.href)
                      }
                    }}
                    className={cn(navLinkClass, '-mx-2 -my-1')}
                  >
                    {item.label}
                  </a>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    navLinkClass,
                    '-mx-2 -my-1',
                    pathname === item.href && 'bg-primary-50 font-semibold text-primary-700'
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button
              onClick={(e) => {
                e.preventDefault()
                handleSmoothScroll(e, '#contact')
              }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={(e) => {
                e.preventDefault()
                handleSmoothScroll(e, '#contact')
              }}
            >
              Get Started
            </Button>
            <button
              className="p-2 text-indigo-950"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              'md:hidden overflow-hidden transition-all duration-300',
              mobileMenuOpen ? 'max-h-96 mt-3' : 'max-h-0'
            )}
          >
            <div className="flex flex-col divide-y divide-black/5 border-t border-black/5 pb-1">
              {navItems.map((item) => {
                if (item.href.startsWith('#')) {
                  return (
                    <a
                      key={item.href}
                      href={onHomepage ? item.href : `/${item.href}`}
                      onClick={(e) => {
                        if (onHomepage) {
                          e.preventDefault()
                          handleSmoothScroll(e, item.href)
                        }
                        setMobileMenuOpen(false)
                      }}
                      className="block px-2 py-4 text-lg font-semibold text-indigo-950 transition-colors hover:text-primary-700"
                    >
                      {item.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      navLinkClass,
                      pathname === item.href && 'bg-primary-50 font-semibold text-primary-700'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
