import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { teachers, teachersIntro, type Teacher } from '@/lib/content'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import s from './d.module.css'

// An agave rosette, built from one blade turned around the heart of the plant.
// Outer blades are drawn first so the inner ones overlap them.
const BLADES: [angle: number, length: number, tone: 0 | 1][] = [
  [-80, 0.6, 0], [80, 0.6, 1], [-62, 0.76, 1], [62, 0.76, 0], [-44, 0.88, 0],
  [44, 0.88, 1], [-27, 0.96, 1], [27, 0.96, 0], [-10, 1, 0], [10, 1, 1], [0, 0.82, 0]
]
const BLADE_TONES = [
  'color-mix(in oklab, var(--green-ink) 82%, var(--blue-ink))',
  'color-mix(in oklab, var(--green) 50%, var(--green-ink))'
]

function Agave({ className }: { className?: string }) {
  return (
    <svg viewBox="-160 -156 320 162" aria-hidden className={cn(s.agave, className)}>
      {BLADES.map(([angle, length, tone]) => (
        <g key={angle} transform={`rotate(${angle}) scale(${length})`}>
          <path d="M0,0C-19,-34 -14,-112 0,-152C14,-112 19,-34 0,0Z" style={{ fill: BLADE_TONES[tone] }} />
          <path d="M0,-12V-128" fill="none" />
        </g>
      ))}
    </svg>
  )
}

function Profile({ teacher, lead }: { teacher: Teacher; lead: boolean }) {
  return (
    <article className="grid items-center gap-x-14 gap-y-10 lg:grid-cols-12">
      <div className={cn(lead ? 'lg:col-span-5' : 'lg:order-2 lg:col-span-4 lg:col-start-9')}>
        <div className={cn('relative mx-auto', lead ? 'max-w-[400px]' : 'max-w-[300px]')}>
          {/* a courtyard doorway */}
          <div className={s.doorway}>
            <TeacherPhoto teacher={teacher.id} sizes="(max-width: 1023px) 80vw, 400px" />
          </div>
          {teacher.badge && (
            <p className="absolute -right-3 top-[58%] rotate-3 rounded-full bg-[var(--green-night)] px-4 py-2 text-sm font-semibold text-white shadow-lg sm:-right-8">
              {teacher.badge.short}
            </p>
          )}
          {/* agave at the foot of the door */}
          <Agave className={cn('absolute -bottom-3 -left-[16%]', lead ? 'w-[56%]' : 'w-[50%]')} />
        </div>
        {/* TEMPORARY (PLA-18): try candidate headshots */}
        <TeacherPhotoSwitcher teacher={teacher.id} className="mt-6" />
      </div>

      <div className={cn(lead ? 'lg:col-span-7' : 'lg:order-1 lg:col-span-7')}>
        <h3>
          <span
            className={cn(
              s.hand,
              'block text-[color:var(--accent)]',
              lead ? 'text-[3.4rem] md:text-[5rem]' : 'text-[2.6rem] md:text-[3.6rem]'
            )}
          >
            {teacher.name}
          </span>
          {lead && (
            <svg viewBox="0 0 300 14" aria-hidden className="-mt-1 block h-3.5 w-[min(100%,340px)]" preserveAspectRatio="none">
              <path
                d="M3,9C60,2 120,3 170,7S260,11 297,4"
                fill="none"
                strokeWidth={3.5}
                strokeLinecap="round"
                style={{ stroke: 'var(--gold)' }}
              />
            </svg>
          )}
          <span className={cn(s.display, 'mt-3 block text-xl font-bold md:text-2xl')}>{teacher.role}</span>
        </h3>
        <p className={cn('mt-4 max-w-[44ch] leading-snug text-[color:var(--fg)]', lead ? 'text-xl md:text-2xl' : 'text-lg md:text-xl')}>
          {teacher.intro}
        </p>

        <ul className="mt-7 border-t border-[color:var(--line)]">
          {teacher.credentials.map((credential) => (
            <li key={credential} className="flex items-start gap-3 border-b border-[color:var(--line)] py-2.5">
              <Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-[color:var(--accent)]" strokeWidth={3} />
              <span>{credential}</span>
            </li>
          ))}
        </ul>

        <div className={cn('mt-7 grid gap-x-8 gap-y-6', teacher.sections.length > 1 && 'md:grid-cols-2')}>
          {teacher.sections.map((section) => (
            <div key={section.title}>
              <h4 className={cn(s.display, 'text-lg font-bold')}>{section.title}</h4>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-[color:var(--muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

// Green day, the heart of the page. Angelica first and larger, her name signed
// and underlined; each teacher stands in a courtyard doorway with agave at its foot.
export function Teachers() {
  return (
    <section id="about" data-zone="green" data-tone="light" className={cn(s.zone, 'overflow-hidden')}>
      <div className={cn(s.wrap, 'pb-20 pt-12 md:pb-28 md:pt-16')}>
        <div className="grid gap-x-12 gap-y-5 lg:grid-cols-12 lg:items-end">
          <h2 className={cn(s.h2, 'lg:col-span-6')}>{teachersIntro.title}</h2>
          <p className={cn(s.lede, 'max-w-[36ch] lg:col-span-5 lg:col-start-8')}>{teachersIntro.sub}</p>
        </div>
        <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
          {teachers.map((teacher, index) => (
            <Profile key={teacher.id} teacher={teacher} lead={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
