import { howItWorks } from '@/lib/content'
import { cn } from '@/lib/utils'
import s from './c.module.css'

type Phase = 'new' | 'waxing' | 'full' | 'waning'
const PHASES: Phase[] = ['new', 'waxing', 'full', 'waning']

// Right and left halves of the disc, on whole numbers so server and client agree
const RIGHT = 'M32 2 A30 30 0 0 1 32 62 Z'
const LEFT = 'M32 2 A30 30 0 0 0 32 62 Z'

function Moon({ phase }: { phase: Phase }) {
  return (
    <div aria-hidden="true" className={s.moon}>
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" className={phase === 'full' ? s.moonLit : s.moonDark} />
        {phase === 'waxing' && <path d={RIGHT} className={s.moonLit} />}
        {phase === 'waning' && <path d={LEFT} className={s.moonLit} />}
        <circle cx="32" cy="32" r="30" className={s.moonRim} />
      </svg>
    </div>
  )
}

/** Four steps, one moon phase each. Yellow. */
export function HowItWorks() {
  return (
    <section id="how-it-works" className={cn(s.section, s.yellow)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <h2 className={s.h2}>{howItWorks.title}</h2>
        <p className={s.intro}>{howItWorks.sub}</p>
        <ol className={s.phases}>
          {howItWorks.steps.map((step, index) => (
            <li key={step.title} className={s.phase}>
              <Moon phase={PHASES[index % PHASES.length]} />
              <h3 className={s.title}>{step.title}</h3>
              <p>{step.description}</p>
              {index === 0 && (
                <a href="#contact" className={s.link}>
                  Write that email
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
