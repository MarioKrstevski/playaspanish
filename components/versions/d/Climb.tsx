import type { CSSProperties } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { pricing } from '@/lib/content'
import s from './d.module.css'

type Plan = (typeof pricing.plans)[number]

// Quiet cheers from the sides of the climb, in the shoulders the upper
// terraces leave free.
const CHEERS: { text: string; className: string; tilt: number; delay: number }[] = [
  { text: '¡Vamos!', className: 'left-[2%] top-[5%] text-[2.6rem]', tilt: -8, delay: 0 },
  { text: '¡Tú puedes!', className: 'right-[1%] top-[3%] text-[2.1rem]', tilt: 6, delay: 0.8 },
  { text: '¡Ándale!', className: 'left-[7%] top-[20%] text-[1.9rem]', tilt: 5, delay: 1.6 },
  { text: '¡Sí se puede!', className: 'right-[2%] top-[19%] text-[1.8rem]', tilt: -5, delay: 2.4 },
  { text: '¡Órale!', className: 'left-0 top-[46%] text-[1.9rem] max-lg:hidden', tilt: -10, delay: 1.2 },
  { text: '¡Dale!', className: 'right-[0.5%] top-[50%] text-[2.2rem] max-lg:hidden', tilt: 9, delay: 2 }
]

function Terrace({ plan, className }: { plan: Plan; className: string }) {
  return (
    <li className={cn(s.terrace, className)}>
      <div className="grid items-center gap-x-9 gap-y-4 p-6 md:grid-cols-[auto_minmax(0,1fr)] md:p-8">
        <p>
          <span className={cn(s.display, 'block text-[4.2rem] font-extrabold leading-[0.9] md:text-[5.2rem]')}>
            {plan.price}
          </span>
          <span className="mt-2 block text-sm text-[color:var(--soft)]">{plan.unit}</span>
        </p>
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm font-semibold text-[color:var(--check)]">
            {plan.label}
            {plan.badge && (
              <span className="rounded-full bg-[var(--moon)] px-3 py-1 text-[0.8125rem] leading-none text-[color:var(--orange-night)]">
                {plan.badge}
              </span>
            )}
          </p>
          <h3 className={cn(s.display, 'mt-1 text-2xl font-bold leading-tight md:text-[1.75rem]')}>{plan.name}</h3>
          <p className="text-[color:var(--soft)]">{plan.tagline}</p>
          <ul className="mt-3.5 flex flex-col gap-x-6 gap-y-1.5 text-[0.9375rem] lg:flex-row lg:flex-wrap">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check aria-hidden className="mt-[3px] h-4 w-4 shrink-0 text-[color:var(--check)]" strokeWidth={3} />
                {feature}
              </li>
            ))}
          </ul>
          {plan.cta && (
            <a href="#contact" className={cn(s.cta, 'mt-6')}>
              {plan.cta}
            </a>
          )}
        </div>
      </div>
    </li>
  )
}

// Orange day. The price list is the pyramid: $30 is the summit everyone
// arrives at, and new students climb in from the two terraces below it.
export function Climb() {
  const [ten, five, lesson] = pricing.plans
  return (
    <section id="pricing" data-zone="orange" data-tone="light" className={cn(s.zone, 'overflow-hidden')}>
      <div className={cn(s.wrap, 'pb-20 pt-12 md:pb-28 md:pt-16')}>
        <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
          <h2 className={cn(s.h2, 'lg:col-span-6')}>{pricing.title}</h2>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className={cn(s.display, 'text-2xl font-bold leading-tight md:text-[1.75rem]')}>{pricing.lead}</p>
            <p className="mt-3 text-[color:var(--muted)]">{pricing.sub}</p>
          </div>
        </div>

        <div className="relative mt-12 md:mt-16">
          <p aria-hidden className="mb-5 flex items-end justify-between px-1 md:hidden">
            {CHEERS.slice(0, 3).map((cheer, index) => (
              <span
                key={cheer.text}
                lang="es"
                className={cn(s.cheer, s.cheerInline, 'text-[1.7rem]', index === 1 && 'mb-3')}
                style={{ '--tilt': `${cheer.tilt}deg`, animationDelay: `${cheer.delay}s` } as CSSProperties}
              >
                {cheer.text}
              </span>
            ))}
          </p>
          {CHEERS.map((cheer) => (
            <span
              key={cheer.text}
              aria-hidden
              lang="es"
              className={cn(s.cheer, 'max-md:hidden', cheer.className)}
              style={{ '--tilt': `${cheer.tilt}deg`, animationDelay: `${cheer.delay}s` } as CSSProperties}
            >
              {cheer.text}
            </span>
          ))}
          <ol>
            <Terrace plan={lesson} className={s.terraceTop} />
            <Terrace plan={five} className={s.terraceMid} />
            <Terrace plan={ten} className={s.terraceBase} />
          </ol>
        </div>

        <p className="mx-auto mt-8 max-w-[62ch] text-center text-[color:var(--muted)]">{pricing.note}</p>

        <div className="mt-14 grid items-center gap-x-10 gap-y-6 rounded-[28px] bg-[#fffaf2] p-7 md:mt-20 md:grid-cols-[minmax(0,1fr)_auto] md:p-10">
          <div>
            <h3 className={cn(s.display, 'text-2xl font-bold leading-tight md:text-[2rem]')}>
              {pricing.professional.title}
            </h3>
            <p className="mt-3 max-w-[60ch] text-[color:var(--muted)]">{pricing.professional.body}</p>
          </div>
          <a href="#contact" className={s.cta}>
            {pricing.professional.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
