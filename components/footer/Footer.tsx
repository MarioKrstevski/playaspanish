'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
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

export function Footer() {
  const pathname = usePathname()

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Playa Spanish</h3>
            <p className="text-gray-400">
              Learn Spanish online with personalized, customized lessons from experienced native teachers.
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
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@playaspanish.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Online Classes via Zoom</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Playa Spanish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
