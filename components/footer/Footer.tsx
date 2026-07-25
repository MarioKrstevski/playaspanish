'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'The Course', href: '#course' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Teachers', href: '#about' },
  { label: 'Anki', href: '/anki' },
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

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-[#450a0a] text-red-100/80 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Playa Spanish</h3>
            <p className="text-red-200/70">
              Learn Spanish as it is lived: language, culture, and people. Native Mexican
              teachers, for as long as your journey takes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => {
                if (link.href.startsWith('#')) {
                  return (
                    <li key={link.href}>
                      <a
                        href={pathname === '/' ? link.href : `/${link.href}`}
                        onClick={(e) => {
                          if (pathname === '/') {
                            handleSmoothScroll(e, link.href)
                          }
                        }}
                        className="hover:text-primary-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-red-200/70">
              <li>Email: info@playaspanish.com</li>
              <li>Online Classes via Zoom or Teams – flexible to your platform if needed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900 pt-8 text-center text-sm text-red-200/60">
          <p>&copy; {new Date().getFullYear()} Playa Spanish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
