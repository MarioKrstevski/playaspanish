import { CONTACT_EMAIL, footer } from '@/lib/content'
import { cn } from '@/lib/utils'
import { ScallopEdge } from './Motifs'
import { C, container } from './ui'
import s from './b.module.css'

const links = [
  { href: '#buffet', label: 'Who it’s for' },
  { href: '#course', label: 'The course' },
  { href: '#in-class', label: 'In class' },
  { href: '#about', label: 'Teachers' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#reviews', label: 'Reviews' }
]

const linkClass =
  'decoration-[#ffc233] decoration-[3px] underline-offset-[6px] hover:underline'

export function SiteFooter() {
  return (
    <footer className={cn(s.onDark, 'bg-[#16123b] text-[#fff8ec]')}>
      <ScallopEdge id="b-edge-footer" color={C.cobalt} hole={C.ink} />

      <div className={cn(container, 'grid gap-10 pb-12 pt-12 lg:grid-cols-12 lg:gap-14 lg:pt-16')}>
        <div className="lg:col-span-6">
          <p className={cn(s.display, 'text-[clamp(3rem,6.4vw,5.5rem)] text-[#ffc233]')}>
            Playa Spanish
          </p>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed">{footer.blurb}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-lg font-semibold lg:grid-cols-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-lg lg:col-span-3">
          <p className={cn(s.serif, 'text-2xl text-[#ffc233]')}>Say hola</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={cn(linkClass, 'mt-3 inline-block break-all font-semibold underline')}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className={cn(container, 'pb-8')}>
        <p className="border-t-2 border-[#fff8ec]/25 pt-6">
          © {new Date().getFullYear()} Playa Spanish
        </p>
      </div>
    </footer>
  )
}
