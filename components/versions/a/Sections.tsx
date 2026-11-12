import type { CSSProperties } from 'react'
import Image from 'next/image'
import { Check, Mail } from 'lucide-react'
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
  type Teacher
} from '@/lib/content'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import { NAV_LINKS } from './nav'
import styles from './a.module.css'

const angelica = teachers[0]

/** Order in the hero's one entrance: each step waits 70ms on the one before. */
const step = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div aria-hidden className={styles.heroWall} />
      <div className={cn(styles.container, styles.heroGrid)}>
        <div className={styles.heroText}>
          <h1 className={cn(styles.display, styles.rise)}>{hero.headline}</h1>
          <p lang="es" className={cn(styles.es, styles.rise)} style={step(1)}>
            {hero.headlineEs}
          </p>
          <p className={cn(styles.lead, styles.rise)} style={step(2)}>
            {hero.sub}
          </p>
          <p className={cn(styles.promise, styles.rise)} style={step(2)}>
            {hero.promise}
          </p>
          <div className={cn(styles.actions, styles.rise)} style={step(3)}>
            <a href="#contact" className={cn(styles.btn, styles.btnPrimary)}>
              {hero.cta}
            </a>
            <a href="#about" className={styles.link}>
              Meet your teachers
            </a>
          </div>
        </div>

        <div className={cn(styles.heroFigure, styles.rise)} style={step(2)}>
          <div className={styles.arch}>
            <TeacherPhoto teacher="angelica" priority sizes="(max-width: 896px) 78vw, 432px" />
          </div>
          <div className={styles.nameplate}>
            <p lang="es" className={styles.nameplateHola}>
              Hola, soy Angelica.
            </p>
            {angelica.badge && <p className={styles.nameplateRole}>{angelica.badge.long}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Buffet() {
  return (
    <section id="buffet" className={cn(styles.section, styles.onSand)}>
      <div className={cn(styles.container, styles.split)}>
        <div>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{buffet.title}</h2>
            <p lang="es" className={styles.es}>
              {buffet.titleEs}
            </p>
            <p className={styles.copy}>{buffet.intro}</p>
          </div>
          <ul className={styles.audiences}>
            {buffet.audiences.map((audience) => (
              <li key={audience.title} className={styles.audience}>
                <h3 className={styles.statement}>{audience.title}</h3>
                <p className={styles.soft}>{audience.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={cn(styles.board, styles.onAgave, styles.top)}>
          <p className={styles.boardLabel}>On the menu</p>
          {buffet.courses.map((item) => (
            <div key={item.title} className={styles.dish}>
              <p lang="es" className={cn(styles.es, styles.dishEs)}>
                {item.titleEs}
              </p>
              <h3 className={styles.dishName}>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeacherBlock({ teacher, flip }: { teacher: Teacher; flip?: boolean }) {
  return (
    <article className={cn(styles.teacher, flip && styles.teacherFlip)}>
      <div className={styles.portraitColumn}>
        <div className={cn(styles.portrait, flip && styles.portraitOlive)}>
          <TeacherPhoto teacher={teacher.id} sizes="(max-width: 896px) 90vw, 480px" />
        </div>
        <TeacherPhotoSwitcher teacher={teacher.id} className={styles.switcher} />
      </div>

      <div>
        <h3 className={cn(styles.h3, styles.teacherName)}>{teacher.name}</h3>
        <div className={styles.teacherMeta}>
          {teacher.badge ? (
            <p className={styles.badge}>{teacher.role}</p>
          ) : (
            <p className={styles.strong}>{teacher.role}</p>
          )}
        </div>
        <p
          className={cn(
            styles.statement,
            styles.teacherIntro,
            teacher.intro.length > 110 && styles.teacherIntroLong
          )}
        >
          {teacher.intro}
        </p>
        <ul className={styles.credentials}>
          {teacher.credentials.map((credential) => (
            <li key={credential}>
              <Check aria-hidden className={styles.tick} />
              <span>{credential}</span>
            </li>
          ))}
        </ul>
        <div className={styles.teacherNotes}>
          {teacher.sections.map((section) => (
            <div key={section.title}>
              <h4>{section.title}</h4>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Teachers() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{teachersIntro.title}</h2>
          <p className={styles.lead}>{teachersIntro.sub}</p>
        </div>
        {teachers.map((teacher, index) => (
          <TeacherBlock key={teacher.id} teacher={teacher} flip={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

export function InClass() {
  return (
    <section id="in-class" className={cn(styles.section, styles.onAgave)}>
      <div className={cn(styles.container, styles.split)}>
        <div>
          <h2 className={styles.h2}>{inClass.title}</h2>
          <p lang="es" className={styles.es}>
            {inClass.titleEs}
          </p>
          <p className={cn(styles.statement, styles.inClassLead)}>
            {inClass.lead} <span className={styles.soft}>{inClass.leadNote}</span>
          </p>
          <p className={cn(styles.copy, styles.inClassBody)}>{inClass.body}</p>
        </div>

        <div>
          <p className={styles.topicsLabel}>{inClass.topicsLabel}</p>
          <ul className={styles.topics}>
            {inClass.topics.map((topic) => (
              <li key={topic.title} className={styles.topic}>
                <p lang="es" className={cn(styles.es, styles.topicEs)}>
                  {topic.titleEs}
                </p>
                <p className={styles.topicEn}>{topic.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Course() {
  return (
    <section id="course" className={styles.section}>
      <div className={cn(styles.container, styles.split, styles.splitHeadLeft)}>
        <div className={styles.top}>
          <h2 className={styles.h2}>{course.title}</h2>
          <p className={cn(styles.statement, styles.courseSub)}>{course.sub}</p>
        </div>
        <ul className={styles.pillars}>
          {course.pillars.map((pillar) => (
            <li key={pillar.title} className={styles.pillar}>
              <h3 className={styles.statement}>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhySpanish() {
  return (
    <section id="why-spanish" className={cn(styles.section, styles.onAdobe)}>
      <div className={cn(styles.container, styles.split, styles.splitHeadLeft)}>
        <div>
          <h2 className={styles.h2}>{whySpanish.title}</h2>
          <p className={cn(styles.copy, styles.whySub)}>{whySpanish.sub}</p>
        </div>
        <ul className={styles.stats}>
          {whySpanish.stats.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <p className={styles.figure}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className={cn(styles.section, styles.onSand)}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{howItWorks.title}</h2>
          <p className={styles.lead}>{howItWorks.sub}</p>
        </div>
        <ol className={styles.steps}>
          {howItWorks.steps.map((item) => (
            <li key={item.title} className={styles.step}>
              <h3 className={styles.h3}>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Pricing() {
  const { professional } = pricing
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{pricing.title}</h2>
          <p className={cn(styles.statement, styles.priceLead)}>{pricing.lead}</p>
          <p className={cn(styles.copy, styles.soft)}>{pricing.sub}</p>
        </div>

        <ul className={styles.plans}>
          {pricing.plans.map((plan) => {
            // "per lesson · $280 upfront" reads as two lines, not one dotted string
            const [per, upfront] = plan.unit.split(' · ')
            return (
              <li key={plan.name} className={cn(styles.plan, plan.recommended && styles.planFeatured)}>
                <p className={styles.planTop}>
                  <span>{plan.label}</span>
                  {plan.badge && <span className={styles.planBadge}>{plan.badge}</span>}
                </p>
                <h3 className={cn(styles.h3, styles.planName)}>{plan.name}</h3>
                <p className={styles.planPrice}>
                  <span className={styles.figure}>{plan.price}</span>
                  <span>{per}</span>
                </p>
                {upfront && <p className={styles.planUpfront}>{upfront}</p>}
                <p className={styles.planTagline}>{plan.tagline}</p>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check aria-hidden className={styles.tick} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.planAction}>
                  {plan.cta ? (
                    <a href="#contact" className={cn(styles.btn, styles.btnPrimary)}>
                      {plan.cta}
                    </a>
                  ) : (
                    <a href="#contact" className={styles.link}>
                      Email Angelica
                    </a>
                  )}
                </div>
              </li>
            )
          })}
        </ul>

        <p className={styles.priceNote}>{pricing.note}</p>

        <div className={cn(styles.profession, styles.onAgave)}>
          <h3 className={styles.h2}>{professional.title}</h3>
          <div>
            <p>{professional.body}</p>
            <a href="#contact" className={cn(styles.btn, styles.btnLight)}>
              {professional.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className={cn(styles.section, styles.onSand)}>
      <div className={styles.container}>
        <div className={styles.sectionHead}>
          <h2 className={styles.h2}>{reviews.title}</h2>
          <p className={styles.lead}>{reviews.sub}</p>
        </div>
        <div className={styles.reviews}>
          {reviews.items.map((item) => (
            <figure key={item.name} className={styles.review}>
              <blockquote>
                <p className={cn(styles.statement, styles.reviewQuote)}>“{item.quote}”</p>
                <p className={styles.reviewBody}>{item.review}</p>
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
    <section id="contact" className={cn(styles.section, styles.contact, styles.onTerracotta)}>
      <div className={cn(styles.container, styles.contactGrid)}>
        <div className={styles.contactText}>
          <h2 className={styles.display}>{contact.title}</h2>
          <p className={styles.lead}>{contact.body}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className={cn(styles.btn, styles.btnLight)}>
            <Mail aria-hidden className={styles.btnIcon} />
            {CONTACT_EMAIL}
          </a>
          <p className={styles.contactNote}>{contact.note}</p>
        </div>

        <div className={styles.contactFigure}>
          <div className={styles.arch}>
            <TeacherPhoto teacher="angelica" sizes="(max-width: 896px) 70vw, 336px" />
          </div>
          <div className={styles.nameplate}>
            <p className={styles.nameplateName}>{angelica.name}</p>
            <p className={styles.nameplateRole}>{angelica.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <a href="#hero" className={styles.footerLogo} aria-label="Playa Spanish, back to the top">
              <Image
                src="/playaspanish_logowithtext.png"
                alt="Playa Spanish"
                width={2399}
                height={343}
              />
            </a>
            <p className={styles.footerBlurb}>{footer.blurb}</p>
          </div>

          <nav aria-label="Footer">
            <p className={styles.footerHeading}>On this page</p>
            <ul className={styles.footerList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={styles.footerHeading}>Write to Angelica</p>
            <ul className={styles.footerList}>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.link}>
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className={styles.footerBase}>© {new Date().getFullYear()} Playa Spanish</p>
      </div>
    </footer>
  )
}
