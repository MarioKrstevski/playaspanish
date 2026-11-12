import { Check } from 'lucide-react'
import { pricing } from '@/lib/content'
import { cn } from '@/lib/utils'
import { ScallopEdge } from './Motifs'
import { C, Cta, Lockup, anchor, container } from './ui'
import s from './b.module.css'

type Plan = (typeof pricing.plans)[number]

function Features({ plan, tick }: { plan: Plan; tick: string }) {
  return (
    <ul className="grid gap-2.5 text-lg leading-snug">
      {plan.features.map((f) => (
        <li key={f} className="flex gap-3">
          <Check aria-hidden strokeWidth={3.5} className={cn('mt-[0.2em] size-5 flex-none', tick)} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  )
}

export function Pricing() {
  const featured = pricing.plans.find((p) => p.recommended) ?? pricing.plans[0]
  const others = pricing.plans.filter((p) => p !== featured)
  const priceInk = ['text-[#d6006c]', 'text-[#1b3fd0]']

  return (
    <section id="pricing" className={cn(s.onLight, anchor, 'bg-[#fbf1e2] text-[#16123b]')}>
      <ScallopEdge id="b-edge-pricing" color={C.rosa} hole={C.cal} />

      <div className={cn(container, 'pb-20 pt-14 lg:pb-28 lg:pt-20')}>
        <Lockup es="Precios" en={pricing.title} esClassName="text-[#d6006c]" />

        <div className="mt-9 grid gap-5 lg:mt-12 lg:grid-cols-12 lg:items-end lg:gap-14">
          <p className="max-w-[15ch] text-[clamp(2.1rem,3.9vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.015em] lg:col-span-6">
            {pricing.lead}
          </p>
          <p className="max-w-[52ch] text-lg leading-relaxed lg:col-span-6 lg:text-xl lg:leading-relaxed">
            {pricing.sub}
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {/* The recommended start owns the cobalt block */}
          <article
            className={cn(
              s.onDark,
              'flex flex-col bg-[#1b3fd0] p-7 text-[#fff8ec] sm:p-10 lg:row-span-2 lg:p-14'
            )}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className={cn(s.serif, 'text-2xl')}>{featured.label}</p>
              {featured.badge && (
                <p className="rounded-full bg-[#ffc233] px-3.5 py-1.5 text-[0.95rem] font-bold leading-none text-[#16123b]">
                  {featured.badge}
                </p>
              )}
            </div>
            <h3 className="mt-8 text-3xl font-extrabold leading-none lg:text-4xl">{featured.name}</h3>
            <p className="mt-3 flex flex-wrap items-end gap-x-5 gap-y-2">
              <span
                className={cn(
                  s.display,
                  'text-[clamp(6.5rem,13vw,11rem)] leading-[0.78] text-[#ffc233]'
                )}
              >
                {featured.price}
              </span>
              <span className="pb-1 text-lg font-semibold">{featured.unit}</span>
            </p>
            <p className={cn(s.serif, 'mt-7 text-2xl lg:text-[1.75rem]')}>{featured.tagline}</p>
            <div className="mt-6 border-t-[3px] border-[#fff8ec]/35 pt-6">
              <Features plan={featured} tick="text-[#ffc233]" />
            </div>
            {featured.cta && (
              <div className="mt-auto pt-9">
                <Cta>{featured.cta}</Cta>
              </div>
            )}
          </article>

          {others.map((plan, i) => (
            <article
              key={plan.name}
              className="grid gap-x-9 gap-y-5 border-[3px] border-[#16123b] p-7 sm:grid-cols-[auto_1fr] sm:p-9"
            >
              <div>
                <p className={cn(s.serif, 'text-xl')}>{plan.label}</p>
                <h3 className="mt-3 text-2xl font-extrabold leading-none">{plan.name}</h3>
                <p
                  className={cn(
                    s.display,
                    'mt-3 text-[5.5rem] leading-[0.8]',
                    priceInk[i % priceInk.length]
                  )}
                >
                  {plan.price}
                </p>
                <p className="mt-3 font-semibold">{plan.unit}</p>
              </div>
              <div>
                <p className={cn(s.serif, 'text-[1.4rem] leading-tight')}>{plan.tagline}</p>
                <div className="mt-4">
                  <Features plan={plan} tick={priceInk[i % priceInk.length]} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-[70ch] text-lg leading-relaxed">{pricing.note}</p>

        {/* Custom courses: the rosa block */}
        <div
          className={cn(
            s.onDark,
            'mt-14 grid gap-7 bg-[#d6006c] p-7 text-[#fff8ec] sm:p-10 lg:mt-20 lg:grid-cols-12 lg:items-end lg:gap-14 lg:p-14'
          )}
        >
          <h3 className="max-w-[12ch] text-[clamp(2.1rem,4.2vw,3.75rem)] font-extrabold leading-[1] tracking-[-0.015em] lg:col-span-5">
            {pricing.professional.title}
          </h3>
          <div className="lg:col-span-7">
            <p className="max-w-[58ch] text-lg leading-relaxed lg:text-xl lg:leading-relaxed">
              {pricing.professional.body}
            </p>
            <Cta tone="cream" className="mt-7">
              {pricing.professional.cta}
            </Cta>
          </div>
        </div>
      </div>
    </section>
  )
}
