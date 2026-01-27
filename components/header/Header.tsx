'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'Why Learn', href: '#why-learn' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' }
]

function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/#hero"
            onClick={(e) => {
              if (pathname === '/') {
                e.preventDefault()
                handleSmoothScroll(e, '#hero')
              }
            }}
            className="text-2xl font-bold text-primary-600"
          >
            Playa Spanish
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              if (item.href.startsWith('#')) {
                return (
                  <a
                    key={item.href}
                    href={pathname === '/' ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault()
                        handleSmoothScroll(e, item.href)
                      }
                    }}
                    className="text-gray-700 hover:text-primary-600 transition-colors"
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
                    'text-gray-700 hover:text-primary-600 transition-colors',
                    pathname === item.href && 'text-primary-600 font-semibold'
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

          {/* Mobile Navigation */}
          <div
            className={cn(
              'md:hidden overflow-hidden transition-all duration-300',
              mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            )}
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => {
                if (item.href.startsWith('#')) {
                  return (
                    <a
                      key={item.href}
                      href={pathname === '/' ? item.href : `/${item.href}`}
                      onClick={(e) => {
                        if (pathname === '/') {
                          e.preventDefault()
                          handleSmoothScroll(e, item.href)
                        }
                        setMobileMenuOpen(false)
                      }}
                      className="text-gray-700 hover:text-primary-600 transition-colors"
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
                      'text-gray-700 hover:text-primary-600 transition-colors',
                      pathname === item.href && 'text-primary-600 font-semibold'
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
                setMobileMenuOpen(false)
              }}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}
