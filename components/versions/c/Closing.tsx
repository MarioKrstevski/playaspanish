import Image from 'next/image'
import { Mail } from 'lucide-react'
import { CONTACT_EMAIL, contact, footer, reviews, teachers } from '@/lib/content'
import { TeacherPhoto } from '@/components/teachers/TeacherPhoto'
import { cn } from '@/lib/utils'
import { Spectrum } from './Spectrum'
import { STATIONS } from './tones'
import s from './c.module.css'

/** Student reviews. Red. */
export function Reviews() {
  return (
    <section id="reviews" className={cn(s.section, s.red)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <h2 className={s.h2}>{reviews.title}</h2>
        <p className={s.intro}>{reviews.sub}</p>
        <div className={s.reviews}>
          {reviews.items.map((item) => (
            <figure key={item.name} className={s.review}>
              <blockquote>
                <p>“{item.quote}”</p>
                <p>{item.review}</p>
              </blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/** The end of the line: all seven colours, then one email. */
export function Contact() {
  const angelica = teachers[0]
  return (
    <section id="contact" className={s.contact}>
      <Spectrum />
      <div className={cn(s.wrap, s.grid12, s.contactInner)}>
        <h2>{contact.title}</h2>
        <div className={s.contactBody}>
          <p>{contact.body}</p>
          <div className={s.to}>
            <div className={s.avatar}>
              <TeacherPhoto teacher="angelica" sizes="88px" />
            </div>
            <p className={s.caption}>
              <strong>{angelica.name}</strong>
              {angelica.role}
            </p>
          </div>
          <a href={`mailto:${CONTACT_EMAIL}`} className={s.btn}>
            <Mail aria-hidden="true" size={20} />
            {CONTACT_EMAIL}
          </a>
          <p className={s.contactNote}>{contact.note}</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={cn(s.wrap, s.grid12)}>
        <div className={s.footerBrand}>
          <a href="#hero" className={s.logo} aria-label="Playa Spanish, back to the top">
            <Image
              src="/playaspanish_logowithtext.png"
              alt=""
              width={2399}
              height={343}
              className={s.logoImg}
            />
          </a>
          <p>{footer.blurb}</p>
        </div>
        <nav aria-label="Footer" className={s.footerLinks}>
          {STATIONS.map((station) => (
            <a key={station.id} href={`#${station.id}`}>
              {station.label}
            </a>
          ))}
          <a href="#contact">Contact</a>
        </nav>
        <div className={s.footerContact}>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <p className={s.legal}>© Playa Spanish</p>
        </div>
      </div>
    </footer>
  )
}
