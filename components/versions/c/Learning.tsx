import { buffet, course, inClass } from '@/lib/content'
import { cn } from '@/lib/utils'
import s from './c.module.css'

/** Who it is for, and the two courses on the menu. Violet. */
export function Buffet() {
  return (
    <section id="buffet" className={cn(s.section, s.violet)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <div className={s.grid12}>
          <div className={s.colA}>
            <h2 className={s.h2}>{buffet.title}</h2>
            <p lang="es" className={s.es}>
              {buffet.titleEs}
            </p>
            <p className={s.intro}>{buffet.intro}</p>
          </div>
          <ul className={cn(s.colB, s.rows)}>
            {buffet.audiences.map((audience) => (
              <li key={audience.title}>
                <h3 className={s.title}>{audience.title}</h3>
                <p>{audience.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.dishes}>
          <div className={s.dishesHead}>
            <h3 className={s.title}>On the menu</h3>
            <a href="#contact" className={s.link}>
              Not sure which fits? Ask Angelica
            </a>
          </div>
          <div className={s.pair}>
            {buffet.courses.map((item) => (
              <article key={item.title} className={s.dish}>
                <div className={s.dishName}>
                  <h4>{item.title}</h4>
                  <p lang="es">{item.titleEs}</p>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** The three pillars. Indigo. */
export function Course() {
  return (
    <section id="course" className={cn(s.section, s.indigo)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <h2 className={s.h2}>{course.title}</h2>
        <p className={s.courseSub}>{course.sub}</p>
        <ul className={s.cols3}>
          {course.pillars.map((pillar) => (
            <li key={pillar.title}>
              <h3 className={s.title}>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** What a class is like, with the topics as a small two-language glossary. Blue. */
export function InClass() {
  return (
    <section id="in-class" className={cn(s.section, s.well, s.blue)}>
      <div className={s.wrap}>
        <span aria-hidden="true" className={s.mark} />
        <div className={s.grid12}>
          <div className={cn(s.colA, s.inClassText)}>
            <h2 className={s.h2}>{inClass.title}</h2>
            <p lang="es" className={s.es}>
              {inClass.titleEs}
            </p>
            <p className={s.statement}>
              {inClass.lead}
              <span>{inClass.leadNote}</span>
            </p>
            <p className={s.body}>{inClass.body}</p>
          </div>
          <div className={s.colB}>
            <table className={s.glossary}>
              <caption>{inClass.topicsLabel}</caption>
              <thead>
                <tr>
                  <th scope="col">In English</th>
                  <th scope="col" lang="es">
                    En español
                  </th>
                </tr>
              </thead>
              <tbody>
                {inClass.topics.map((topic) => (
                  <tr key={topic.title}>
                    <th scope="row">{topic.title}</th>
                    <td lang="es">{topic.titleEs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
