import { Mail } from 'lucide-react'
import { CONTACT_EMAIL, contact, teachers } from '@/lib/content'
import { TeacherPhoto } from '@/components/teachers/TeacherPhoto'
import { cn } from '@/lib/utils'
import { TileBand } from './Motifs'
import { Lockup, anchor, container } from './ui'
import s from './b.module.css'

export function Contact() {
  const angelica = teachers[0]

  return (
    <section id="contact" className={cn(s.onDark, anchor, 'bg-[#1b3fd0] text-[#fff8ec]')}>
      <TileBand id="b-tiles-contact" />

      <div
        className={cn(
          container,
          'grid gap-12 pb-20 pt-14 lg:grid-cols-12 lg:items-end lg:gap-14 lg:pb-28 lg:pt-20'
        )}
      >
        <div className="lg:col-span-8">
          <Lockup
            es="¿Empezamos?"
            en={contact.title}
            esClassName="text-[#ffc233] text-[clamp(3.5rem,11.5vw,9rem)]"
          />
          <p className="mt-8 max-w-[44ch] text-xl leading-snug lg:text-2xl lg:leading-snug">
            {contact.body}
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group mt-9 inline-flex max-w-full items-center gap-3 rounded-full bg-[#ffc233] px-6 py-4 text-[clamp(1.15rem,4.6vw,2.4rem)] font-extrabold leading-none text-[#16123b] transition-colors duration-200 hover:bg-[#fff8ec] sm:gap-4 sm:px-9 sm:py-6"
          >
            <Mail aria-hidden strokeWidth={2.5} className="size-[1em] flex-none" />
            <span className="min-w-0 break-all">{CONTACT_EMAIL}</span>
          </a>

          <p className="mt-7 max-w-[52ch] text-lg leading-snug">{contact.note}</p>
        </div>

        {/* The person who answers */}
        <div className="flex items-end gap-5 lg:col-span-4 lg:flex-col lg:items-stretch">
          <div className="w-[38%] max-w-[20rem] flex-none bg-[#ffc233] p-2.5 sm:p-3 lg:w-full">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#16123b]">
              <TeacherPhoto teacher="angelica" sizes="(max-width: 1024px) 38vw, 320px" />
            </div>
          </div>
          <p className="min-w-0 pb-1">
            <span className={cn(s.display, 'block text-[clamp(1.75rem,2.6vw,2.4rem)]')}>
              {angelica.name}
            </span>
            <span className={cn(s.serif, 'mt-1.5 block text-xl text-[#ffc233]')}>
              {angelica.role}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
