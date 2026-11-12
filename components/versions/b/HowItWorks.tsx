import { howItWorks } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Lockup, anchor, container } from './ui'
import s from './b.module.css'

// The steps are a real sequence, so they are counted, in Spanish
const count = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis']

export function HowItWorks() {
  return (
    <section id="how-it-works" className={cn(s.onDark, anchor, 'bg-[#d6006c] text-[#fff8ec]')}>
      <div className={cn(container, 'pt-16 lg:pt-24')}>
        <Lockup es="Cómo funciona" en={howItWorks.title} esClassName="text-[#ffc233]" />
        <p className="mt-7 max-w-[44ch] text-xl leading-snug lg:text-2xl">{howItWorks.sub}</p>
      </div>

      {/* The cord: each step hangs from it as a papel picado flag */}
      <div aria-hidden className="mt-12 h-[3px] bg-[#fff8ec] lg:mt-16" />
      <ol
        className={cn(
          container,
          'grid gap-x-5 gap-y-7 pb-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:pb-28'
        )}
      >
        {howItWorks.steps.map((step, i) => (
          <li key={step.title} className="flex flex-col">
            <div className="flex-1 bg-[#fbf1e2] px-6 pb-5 pt-3 text-[#16123b] lg:px-7">
              <div aria-hidden className={s.flagHoles} />
              <p lang="es" className={cn(s.display, 'mt-5 text-[3.5rem] text-[#d6006c]')}>
                {count[i]}
              </p>
              <h3 className="mt-3 text-[1.65rem] font-extrabold leading-[1.05] tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="mt-3 text-[1.0625rem] leading-relaxed">{step.description}</p>
            </div>
            <div aria-hidden className={s.flagFoot} />
          </li>
        ))}
      </ol>
    </section>
  )
}
