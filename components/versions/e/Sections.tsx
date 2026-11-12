import type { CSSProperties, ReactNode } from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  CONTACT_EMAIL,
  buffet,
  contact,
  course,
  footer,
  hero,
  howItWorks,
  inClass,
  pricing,
  reviews,
  teachers,
  teachersIntro,
  whySpanish,
  type TeacherId
} from '@/lib/content'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import { NAV_LINKS, PIGMENTS } from './pigments'
import { PyramidArt } from './Pyramid'
import { AgaveFan, DualityTile, Moon, Parapet, TileStrip, WorldThread, type Phase } from './Motifs'
import { MoonHeadline } from './MoonHeadline'
import { Chat } from './Chat'
import s from './e.module.css'

const [angelica, neptali] = teachers
const PHASES: Phase[] = ['new', 'waxing', 'full', 'waning']
const CHEERS = ['¡Vamos!', '¡Tú puedes!', '¡Ándale!', '¡Sí se puede!', '¡Órale!', '¡Dale!']

/*
 * A teacher in the doorway: the photo is cut to a stepped lintel, lined with a
 * course of glazed tile, set in a wall, standing on two steps. The door of the
 * page's first pyramid, and the frame of every portrait after it.
 */
function Portal({
  teacher,
  sizes,
  priority,
  className,
  children
}: {
  teacher: TeacherId
  sizes: string
  priority?: boolean
  className?: string
  children?: ReactNode
}) {
  return (
    <div className={cn(s.portal, className)}>
      <div className={s.portalFrame}>
        <div className={s.portalPhoto}>
          <TeacherPhoto teacher={teacher} sizes={sizes} priority={priority} />
        </div>
      </div>
      <div aria-hidden className={s.threshold} />
      {children}
    </div>
  )
}

/* ---------- 1 · violet · hero ---------- */

export function Hero() {
  return (
    <section id="hero" className={cn(s.hero, s.pViolet)}>
      <div className={cn(s.container, s.heroGrid)}>
        <div className={s.heroText}>
          <MoonHeadline />
          <p className={s.lead}>{hero.sub}</p>
          <p className={s.promise}>{hero.promise}</p>
          <div className={s.actions}>
            <a href="#contact" className={cn(s.btn, s.btnPrimary)}>
              {hero.cta}
            </a>
            <a href="#about" className={s.link}>
              Meet your teachers
            </a>
          </div>
        </div>

        <div className={s.heroFigure}>
          <Portal teacher="angelica" priority sizes="(max-width: 896px) 74vw, 368px">
            <div className={s.plaque}>
              <p lang="es" className={s.plaqueHola}>
                Hola, soy Angelica.
              </p>
              <p className={s.plaqueRole}>{angelica.badge?.long}</p>
            </div>
          </Portal>
          <TeacherPhotoSwitcher teacher="angelica" className={s.switcher} />
        </div>
      </div>
    </section>
  )
}

/* ---------- 2 · indigo · the course, in class ---------- */

export function Course() {
  return (
    <section id="course" className={cn(s.section, s.onSand, s.pIndigo)}>
      <div className={cn(s.container, s.split)}>
        <div>
          <TileStrip at={2} />
          <h2 className={s.h2}>{course.title}</h2>
          <p className={cn(s.statement, s.pigText, s.courseSub)}>{course.sub}</p>
          <ul className={s.pillars}>
            {course.pillars.map((pillar) => (
              <li key={pillar.title} className={s.pillar}>
                <h3 className={s.h3}>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <figure className={s.duality}>
          <figcaption lang="es" className={cn(s.dualityLabel, s.dualityLabelEnd)}>
            cultura
          </figcaption>
          <DualityTile />
          <p lang="es" className={s.dualityLabel}>
            idioma
          </p>
        </figure>
      </div>
    </section>
  )
}

export function InClass() {
  return (
    <section id="in-class" className={cn(s.section, s.sectionJoined, s.onSand, s.pIndigo)}>
      <div className={cn(s.container, s.split, s.splitEven)}>
        <div>
          <h2 className={s.h2}>{inClass.title}</h2>
          <p lang="es" className={s.es}>
            {inClass.titleEs}
          </p>
          <p className={cn(s.statement, s.classLead)}>{inClass.lead}</p>
          <p className={s.soft}>{inClass.leadNote}</p>
          <p className={cn(s.copy, s.classBody)}>{inClass.body}</p>
        </div>

        <div>
          <p id="e-topics" className={s.wallLabel}>
            {inClass.topicsLabel}
          </p>
          <ul aria-labelledby="e-topics" className={s.tileWall}>
            {inClass.topics.map((topic) => (
              <li key={topic.title} className={s.wallTile}>
                <span lang="es" className={s.wallTileEs}>
                  {topic.titleEs}
                </span>
                <span className={s.wallTileEn}>{topic.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- 3 · blue · one language, a whole world; the buffet ---------- */

export function WhySpanish() {
  return (
    <section id="why-spanish" className={cn(s.section, s.pBlue)}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <TileStrip at={3} />
          <h2 className={s.h2}>{whySpanish.title}</h2>
          <p className={s.lead}>{whySpanish.sub}</p>
        </div>

        <dl className={s.stats}>
          {whySpanish.stats.map((stat) => (
            <div key={stat.label} className={s.stat}>
              <dt className={s.statLabel}>{stat.label}</dt>
              <dd className={cn(s.figure, s.pigText)}>{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className={s.worldRow}>
          <div className={s.world}>
            <WorldThread />
          </div>
          <Chat />
        </div>
      </div>
    </section>
  )
}

export function Buffet() {
  return (
    <section id="buffet" className={cn(s.section, s.sectionJoined, s.pBlue)}>
      <div className={s.container}>
        <div className={cn(s.sectionHead, s.ruled)}>
          <h2 className={s.h2}>{buffet.title}</h2>
          <p lang="es" className={s.es}>
            {buffet.titleEs}
          </p>
          <p className={s.lead}>{buffet.intro}</p>
        </div>

        <ul className={s.audiences}>
          {buffet.audiences.map((audience) => (
            <li key={audience.title} className={s.audience}>
              <h3 className={s.h3}>{audience.title}</h3>
              <p>{audience.description}</p>
            </li>
          ))}
        </ul>

        <ul className={s.dishes}>
          {buffet.courses.map((item) => (
            <li key={item.title} className={s.dish}>
              <h3>
                <span lang="es" className={s.dishEs}>
                  {item.titleEs}
                </span>
                <span className={s.dishEn}>{item.title}</span>
              </h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- 4 · green · teachers ---------- */

export function Teachers() {
  return (
    <section id="about" className={cn(s.section, s.onSand, s.pGreen)}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <TileStrip at={4} />
          <h2 className={s.h2}>{teachersIntro.title}</h2>
          <p className={s.lead}>{teachersIntro.sub}</p>
        </div>

        {/* Angelica first, in the house she owns */}
        <article className={s.owner}>
          <AgaveFan className={s.ownerAgave} />
          <div className={s.teacherFigure}>
            <Portal teacher="angelica" sizes="(max-width: 896px) 74vw, 352px">
              <p className={s.ownerPlaque}>{angelica.badge?.long}</p>
            </Portal>
            <TeacherPhotoSwitcher teacher="angelica" className={s.switcher} />
          </div>
          <div className={s.teacherText}>
            <h3 className={s.teacherName}>{angelica.name}</h3>
            <p className={s.ownerRole}>{angelica.role}</p>
            <p className={cn(s.statement, s.teacherIntro)}>{angelica.intro}</p>
            <ul className={s.credentials}>
              {angelica.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
            {angelica.sections.map((section) => (
              <div key={section.title} className={s.teacherNote}>
                <h4>{section.title}</h4>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </article>

        <article className={s.teacher}>
          <div className={s.teacherText}>
            <h3 className={s.teacherName}>{neptali.name}</h3>
            <p className={s.teacherRole}>{neptali.role}</p>
            <p className={cn(s.statement, s.teacherIntro)}>{neptali.intro}</p>
            <ul className={s.credentials}>
              {neptali.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
            <div className={s.teacherNotes}>
              {neptali.sections.map((section) => (
                <div key={section.title} className={s.teacherNote}>
                  <h4>{section.title}</h4>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={s.teacherFigure}>
            <Portal teacher="neptali" sizes="(max-width: 896px) 66vw, 288px" />
            <TeacherPhotoSwitcher teacher="neptali" className={s.switcher} />
          </div>
        </article>
      </div>
    </section>
  )
}

/* ---------- 5 · gold · how it works ---------- */

export function HowItWorks() {
  return (
    <section id="how-it-works" className={cn(s.section, s.onNight, s.pGold)}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <TileStrip at={5} />
          <h2 className={s.h2}>{howItWorks.title}</h2>
          <p className={s.lead}>{howItWorks.sub}</p>
        </div>

        <div className={s.sky}>
          {/* the moon's path: one arc through all four phases, running on past both edges */}
          <svg
            className={s.arc}
            viewBox="0 0 100 170"
            preserveAspectRatio="none"
            aria-hidden
            focusable="false"
          >
            <path d="M0 161Q50 -63 100 161" />
          </svg>
          <PyramidArt variant="stepped" className={s.skyPyramid} />
          <ol className={s.phases}>
            {howItWorks.steps.map((step, index) => (
              <li key={step.title} className={s.phase}>
                <div className={s.moonSlot}>
                  <Moon phase={PHASES[index]} />
                </div>
                <h3 className={s.h3}>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ---------- 6 · orange · pricing ---------- */

export function Pricing() {
  const pro = pricing.professional
  return (
    <section id="pricing" className={cn(s.section, s.pOrange)}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <TileStrip at={6} />
          <h2 className={s.h2}>{pricing.title}</h2>
          <p className={cn(s.statement, s.pigText, s.priceLead)}>{pricing.lead}</p>
          <p className={s.copy}>{pricing.sub}</p>
        </div>

        <div className={s.climb}>
          <div aria-hidden lang="es" className={s.cheers}>
            {CHEERS.map((cheer, index) => (
              <span key={cheer} className={s.cheer} style={{ '--i': index } as CSSProperties}>
                {cheer}
              </span>
            ))}
          </div>

          <ul className={s.stairs}>
            {pricing.plans.map((plan, index) => {
              const [per, upfront] = plan.unit.split(' · ')
              const summit = index === pricing.plans.length - 1
              return (
                <li key={plan.name} className={cn(s.step, summit && s.stepSummit)}>
                  <p className={s.stepLabel}>
                    {plan.label}
                    {plan.badge && <span className={s.stepBadge}>{plan.badge}</span>}
                  </p>
                  <h3 className={s.h3}>{plan.name}</h3>
                  <p className={s.stepPrice}>
                    <span className={s.figure}>{plan.price}</span>
                    <span>
                      {per}
                      {upfront && <span className={s.stepUpfront}>{upfront}</span>}
                    </span>
                  </p>
                  <p className={s.stepTagline}>{plan.tagline}</p>
                  <ul className={s.stepFeatures}>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  {plan.cta && (
                    <a href="#contact" className={cn(s.btn, s.btnPrimary, s.stepAction)}>
                      {plan.cta}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <p className={s.priceNote}>{pricing.note}</p>

        <div className={s.profession}>
          <h3 className={s.h2}>{pro.title}</h3>
          <div>
            <p>{pro.body}</p>
            <a href="#contact" className={cn(s.btn, s.btnOutline)}>
              {pro.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- 7 · red · reviews, contact ---------- */

export function Reviews() {
  return (
    <section id="reviews" className={cn(s.section, s.onRedWash, s.pRed)}>
      <div className={s.container}>
        <div className={s.sectionHead}>
          <TileStrip at={7} />
          <h2 className={s.h2}>{reviews.title}</h2>
          <p className={s.lead}>{reviews.sub}</p>
        </div>

        <div className={s.reviewGrid}>
          {reviews.items.map((item, index) => (
            <figure key={item.name} className={s.review}>
              {/* each review under its own moon, rising over the line */}
              <div className={s.moonrise}>
                <Moon phase={PHASES[index % PHASES.length]} />
              </div>
              <blockquote>
                <p className={cn(s.statement, s.reviewQuote)}>“{item.quote}”</p>
                <p className={s.reviewBody}>{item.review}</p>
              </blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className={cn(s.section, s.contact, s.onRed, s.pRed)}>
      <Parapet />
      <div className={cn(s.container, s.contactGrid)}>
        <div>
          <h2 className={s.h2}>{contact.title}</h2>
          <p className={cn(s.lead, s.contactLead)}>{contact.body}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={cn(s.btn, s.btnLight, s.contactButton)}>
            <Mail aria-hidden className={s.btnIcon} />
            {CONTACT_EMAIL}
          </a>
          <p className={s.contactNote}>{contact.note}</p>
        </div>

        <div className={s.contactFigure}>
          <div className={s.fullMoon}>
            <div className={s.fullMoonPhoto}>
              <TeacherPhoto teacher="angelica" sizes="(max-width: 896px) 60vw, 304px" />
            </div>
          </div>
          <p lang="es" className={s.contactHola}>
            Hola, soy Angelica.
          </p>
          <p className={s.contactRole}>{angelica.role}</p>
          <TeacherPhotoSwitcher teacher="angelica" className={s.switcher} />
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerGrid}>
          <div>
            <a href="#hero" className={s.footerLogo} aria-label="Playa Spanish, back to the top">
              <Image
                src="/playaspanish_logowithtext.png"
                alt="Playa Spanish"
                width={2399}
                height={343}
              />
            </a>
            <p className={s.footerBlurb}>{footer.blurb}</p>
          </div>

          <nav aria-label="Footer">
            <p className={s.footerHeading}>On this page</p>
            <ul className={s.footerList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={s.footerHeading}>Write to Angelica</p>
            <ul className={s.footerList}>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={s.link}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={s.footerBase}>
          <p>© {new Date().getFullYear()} Playa Spanish</p>
          <div aria-hidden className={s.footerTiles}>
            {PIGMENTS.map((pigment) => (
              <span key={pigment.key} style={{ '--tile': `var(--${pigment.key})` } as CSSProperties} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
