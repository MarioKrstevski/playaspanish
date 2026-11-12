import { teachers, teachersIntro, type Teacher } from '@/lib/content'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import { cn } from '@/lib/utils'
import { Diamond, ScallopEdge } from './Motifs'
import { C, Lockup, anchor, container } from './ui'
import s from './b.module.css'

function TeacherBlock({ teacher, lead }: { teacher: Teacher; lead: boolean }) {
  return (
    <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
      {/* The photo sits in a colour mat: rosa for the founder, cobalt for her team */}
      <div
        className={cn(
          'w-full max-w-md lg:row-start-1 lg:max-w-none',
          lead ? 'lg:col-span-5' : 'lg:col-span-4 lg:col-start-9'
        )}
      >
        <div className={cn('p-3 sm:p-4', lead ? 'bg-[#d6006c]' : 'bg-[#1b3fd0]')}>
          <div className="relative aspect-[4/5] overflow-hidden bg-[#16123b]">
            <TeacherPhoto teacher={teacher.id} sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <TeacherPhotoSwitcher teacher={teacher.id} className="mt-3 sm:mt-4" />
          {teacher.badge && (
            <p
              className={cn(
                s.display,
                'mt-3 pb-1 text-center text-[clamp(1.5rem,2.4vw,2rem)] text-[#fff8ec] sm:mt-4'
              )}
            >
              {teacher.badge.long}
            </p>
          )}
        </div>
      </div>

      <div
        className={cn(
          'lg:row-start-1',
          lead ? 'lg:col-span-7 lg:col-start-6' : 'lg:col-span-7 lg:col-start-1'
        )}
      >
        <h3 className={cn(s.display, 'text-[clamp(2.9rem,6.2vw,5.5rem)]')}>{teacher.name}</h3>
        <p
          className={cn(
            s.serif,
            'mt-3 text-2xl lg:text-[1.75rem]',
            lead ? 'text-[#d6006c]' : 'text-[#1b3fd0]'
          )}
        >
          {teacher.role}
        </p>
        <p className="mt-6 max-w-[38ch] text-xl font-semibold leading-snug lg:text-2xl lg:leading-snug">
          {teacher.intro}
        </p>

        <ul className="mt-8 grid gap-3 border-t-[3px] border-[#16123b] pt-6 text-lg leading-snug">
          {teacher.credentials.map((c) => (
            <li key={c} className="flex gap-3.5">
              <Diamond className={cn('mt-[0.4em]', lead ? 'text-[#d6006c]' : 'text-[#1b3fd0]')} />
              <span className="max-w-[58ch]">{c}</span>
            </li>
          ))}
        </ul>

        {teacher.sections.map((sec) => (
          <div key={sec.title} className="mt-8">
            <h4 className="text-xl font-extrabold">{sec.title}</h4>
            <p className="mt-2 max-w-[64ch] text-lg leading-relaxed">{sec.body}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export function Teachers() {
  return (
    <section id="about" className={cn(s.onLight, anchor, 'bg-[#fbf1e2] text-[#16123b]')}>
      <ScallopEdge id="b-edge-about" color={C.cobalt} hole={C.cal} />

      <div className={cn(container, 'pb-20 pt-14 lg:pb-28 lg:pt-20')}>
        <Lockup es="Tus maestros" en={teachersIntro.title} esClassName="text-[#1b3fd0]" />
        <p className="mt-7 max-w-[46ch] text-xl leading-snug lg:text-2xl">{teachersIntro.sub}</p>

        <div className="mt-12 grid gap-16 lg:mt-16 lg:gap-24">
          {teachers.map((t, i) => (
            <TeacherBlock key={t.id} teacher={t} lead={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
