import { Check } from 'lucide-react'
import { hero, teachers } from '@/lib/content'
import { TeacherPhoto, TeacherPhotoSwitcher } from '@/components/teachers/TeacherPhoto'
import { cn } from '@/lib/utils'
import { STATIONS } from './tones'
import s from './c.module.css'

export function Hero() {
  const angelica = teachers[0]
  return (
    <section id="hero" className={s.hero}>
      <div className={s.wrap}>
        <div className={s.heroGrid}>
          <div>
            <h1 className={s.display}>{hero.headline}</h1>
            <p className={s.lead}>{hero.sub}</p>
            <div className={s.actions}>
              <a href="#contact" className={s.btn}>
                {hero.cta}
              </a>
              <a href="#pricing" className={s.btnQuiet}>
                See the prices
              </a>
            </div>
            <p className={s.promise}>
              <Check aria-hidden="true" />
              {hero.promise}
            </p>
          </div>
          <figure className={s.heroFigure}>
            <div className={s.portrait}>
              <TeacherPhoto teacher="angelica" priority sizes="(max-width: 960px) 90vw, 420px" />
            </div>
            <figcaption className={s.caption}>
              <strong>{angelica.name}</strong>
              {angelica.badge?.long}
            </figcaption>
            {/* TEMPORARY (PLA-18): try candidate headshots in the hero too */}
            <TeacherPhotoSwitcher teacher="angelica" className={s.heroSwitcher} />
          </figure>
        </div>

        {/* The path: her seven colours as the seven stops down this page */}
        <nav aria-label="The path down this page" className={s.path}>
          <p lang="es" className={s.pathEs}>
            {hero.headlineEs}
          </p>
          <ol className={s.stations}>
            {STATIONS.map((station) => (
              <li key={station.id} className={cn(s[station.tone])}>
                <a href={`#${station.id}`}>{station.label}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
