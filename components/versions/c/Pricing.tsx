import { Check } from 'lucide-react'
import { pricing } from '@/lib/content'
import { cn } from '@/lib/utils'
import s from './c.module.css'

// The one pyramid on the page: the plans stacked as three steps. $30 is the
// top, the ten-lesson pack as the wider step below.
const TIER_CLASS = [s.tier1, s.tier2, s.tier3]

export function Pricing() {
  const tiers = [...pricing.plans].reverse()
  return (
    <section id="pricing" className={cn(s.section, s.orange)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <div className={cn(s.grid12, s.priceHead)}>
          <div className={s.colA}>
            <h2 className={s.h2}>{pricing.title}</h2>
          </div>
          <div className={s.colB}>
            <p className={s.statement}>{pricing.lead}</p>
            <p className={s.body}>{pricing.sub}</p>
          </div>
        </div>

        <ol className={s.tiers}>
          {tiers.map((plan, index) => (
            <li key={plan.name} className={cn(s.tier, TIER_CLASS[index])}>
              <div>
                <h3 className={s.title}>{plan.name}</h3>
                <p className={s.tierLabel}>{plan.label}</p>
                <p className={s.tierTag}>{plan.tagline}</p>
              </div>
              <div className={s.priceCell}>
                <p className={s.price}>{plan.price}</p>
                <p className={s.unit}>
                  {plan.unit.split(' · ').map((part) => (
                    <span key={part}>{part}</span>
                  ))}
                </p>
              </div>
              <ul className={s.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.cta && (
                <div className={s.tierAction}>
                  {plan.badge && <p>{plan.badge}</p>}
                  <a href="#contact" className={s.btn}>
                    {plan.cta}
                  </a>
                </div>
              )}
            </li>
          ))}
        </ol>

        <p className={s.note}>{pricing.note}</p>

        <div className={cn(s.grid12, s.pro)}>
          <h3 className={s.colA}>{pricing.professional.title}</h3>
          <div className={s.colB}>
            <p className={s.body}>{pricing.professional.body}</p>
            <a href="#contact" className={s.btnQuiet}>
              {pricing.professional.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
