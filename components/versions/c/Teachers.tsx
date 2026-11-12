import { Check } from 'lucide-react'
import { teachers, teachersIntro, type Teacher } from '@/lib/content'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import { cn } from '@/lib/utils'
import s from './c.module.css'

function TeacherBlock({ teacher, lead }: { teacher: Teacher; lead: boolean }) {
  return (
    <article className={cn(s.grid12, s.teacher, !lead && s.teacherAlt)}>
      <div className={s.teacherFigure}>
        <div className={s.portrait}>
          <TeacherPhoto
            teacher={teacher.id}
            sizes={lead ? '(max-width: 960px) 90vw, 480px' : '(max-width: 960px) 90vw, 380px'}
          />
          {teacher.badge && <p className={s.badge}>{teacher.badge.long}</p>}
        </div>
        <TeacherPhotoSwitcher teacher={teacher.id} className={s.switcher} />
      </div>
      <div className={s.teacherBody}>
        <h3 className={s.name}>{teacher.name}</h3>
        <p className={s.role}>{teacher.role}</p>
        <p className={s.statement}>{teacher.intro}</p>
        <ul className={s.creds}>
          {teacher.credentials.map((credential) => (
            <li key={credential}>
              <Check aria-hidden="true" />
              {credential}
            </li>
          ))}
        </ul>
        <div className={s.bio}>
          {teacher.sections.map((section) => (
            <div key={section.title}>
              <h4>{section.title}</h4>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        {lead && (
          <a href="#contact" className={s.btnQuiet}>
            Email {teacher.firstName}
          </a>
        )}
      </div>
    </article>
  )
}

/** The two teachers, Angelica first and larger. Green. */
export function Teachers() {
  return (
    <section id="about" className={cn(s.section, s.green)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <h2 className={s.h2}>{teachersIntro.title}</h2>
        <p className={s.intro}>{teachersIntro.sub}</p>
        {teachers.map((teacher, index) => (
          <TeacherBlock key={teacher.id} teacher={teacher} lead={index === 0} />
        ))}
      </div>
    </section>
  )
}
