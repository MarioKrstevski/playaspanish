import Image from 'next/image'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONTACT_EMAIL, contact, footer, reviews, teachers } from '@/lib/content'
import { TeacherPhoto } from '@/components/teachers/TeacherPhoto'
import { Moon, type Phase } from './Moon'
import { NAV_LINKS, ZONES } from './zones'
import s from './d.module.css'

// The moon fills as the students get further along.
const REVIEW_PHASES: Phase[] = ['waxing-crescent', 'first-quarter', 'waxing-gibbous', 'full']

const ROSE_MOON = {
  lit: 'color-mix(in oklab, var(--moon) 84%, var(--red))',
  shade: 'color-mix(in oklab, var(--red) 22%, var(--red-night))',
  ring: 'color-mix(in oklab, var(--red-soft) 55%, var(--red-night))'
}

// Red night, under a blood moon. Each review carries the moon at a fuller phase.
export function Reviews() {
  return (
    <section id="reviews" data-zone="red" data-tone="dark" className={cn(s.zone, 'overflow-hidden')}>
      <span aria-hidden className={cn(s.bloodMoon, '-right-40 -top-28 h-[520px] w-[520px] md:-right-24 md:h-[640px] md:w-[640px]')} />
      <div className={cn(s.wrap, 'relative pb-20 pt-12 md:pb-28 md:pt-16')}>
        <h2 className={cn(s.h2, 'max-w-[12ch]')}>{reviews.title}</h2>
        <p className={cn(s.lede, 'mt-6 max-w-[30ch]')}>{reviews.sub}</p>

        <ul className="mt-14 grid gap-x-14 gap-y-12 md:mt-20 md:grid-cols-2 md:gap-y-16">
          {reviews.items.map((item, index) => (
            <li key={item.name} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 md:gap-x-7">
              <Moon
                phase={REVIEW_PHASES[index]}
                {...ROSE_MOON}
                className={cn('h-14 w-14 md:h-[88px] md:w-[88px]', index === 3 && s.moonGlow)}
              />
              <figure>
                <blockquote>
                  <p className={cn(s.display, 'text-2xl font-bold leading-[1.12] md:text-[1.9rem]')}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-[color:var(--muted)]">{item.review}</p>
                </blockquote>
                <figcaption className="mt-3 font-semibold text-[color:var(--accent)]">{item.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Root, red day. One email, and the person who answers it.
export function Contact() {
  const angelica = teachers[0]
  return (
    <section id="contact" data-zone="red" data-tone="light" className={cn(s.zone, 'overflow-hidden')}>
      <span aria-hidden className={cn(s.settingMoon, 'max-md:hidden')} />
      <div className={cn(s.wrap, 'relative pb-16 pt-12 md:pb-20 md:pt-16')}>
        <div className="max-w-[820px]">
          <div className="flex items-center gap-4">
            <div className={cn(s.smallMoon, 'h-[84px] w-[84px] shrink-0')}>
              <TeacherPhoto teacher="angelica" sizes="84px" />
            </div>
            <p>
              <span className={cn(s.hand, 'block text-4xl text-[color:var(--accent)]')}>{angelica.name}</span>
              <span className="mt-1 block text-[0.9375rem] font-semibold">{angelica.role}</span>
            </p>
          </div>
          <h2 className={cn(s.h2, 'mt-8')}>{contact.title}</h2>
          <p className={cn(s.lede, 'mt-6 max-w-[48ch]')}>{contact.body}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={cn(s.cta, s.mailCta, 'mt-9')}>
            <Mail aria-hidden className="h-6 w-6 shrink-0" />
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6 max-w-[48ch] text-[0.9375rem] text-[color:var(--muted)]">{contact.note}</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer data-zone="red" data-tone="dark" className="bg-[var(--root-night)] text-white">
      <div className={cn(s.wrap, 'grid gap-x-12 gap-y-10 pb-10 pt-6 md:grid-cols-12 md:pt-10')}>
        <div className="md:col-span-6">
          <a href="#hero" className="inline-block rounded-xl bg-white px-4 py-3" aria-label="Playa Spanish, back to the top">
            <Image
              src="/playaspanish_logowithtext.png"
              alt="Playa Spanish"
              width={2399}
              height={343}
              className="h-7 w-auto"
            />
          </a>
          <p className="mt-5 max-w-[44ch] text-[color:var(--muted)]">{footer.blurb}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-4">
            {CONTACT_EMAIL}
          </a>
          {/* the seven colours once more, as the pyramid they made */}
          <div aria-hidden className={cn(s.tiers, 'mt-7 w-fit gap-[3px]')}>
            {ZONES.map((zone, index) => (
              <span
                key={zone.key}
                data-zone={zone.key}
                className={cn(s.tier, s.tierOn)}
                style={{ width: 12 * (index + 2), height: 7, transform: 'none' }}
              />
            ))}
          </div>
        </div>
        <p className="text-sm text-[color:var(--muted)] md:col-span-12">© 2026 Playa Spanish</p>
      </div>
    </footer>
  )
}
