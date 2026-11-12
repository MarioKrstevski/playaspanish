import { cn } from '@/lib/utils'
import { display } from '@/components/versions/d/fonts'
import { Header } from '@/components/versions/d/Header'
import { Hero } from '@/components/versions/d/Hero'
import { Buffet, Course, InClass } from '@/components/versions/d/Learning'
import { World } from '@/components/versions/d/World'
import { Teachers } from '@/components/versions/d/Teachers'
import { Cycle } from '@/components/versions/d/Cycle'
import { Climb } from '@/components/versions/d/Climb'
import { Contact, Footer, Reviews } from '@/components/versions/d/Closing'
import { Threshold, type PyramidKind } from '@/components/versions/d/Threshold'
import type { Phase } from '@/components/versions/d/Moon'
import { SECTIONS, ground } from '@/components/versions/d/zones'
import s from '@/components/versions/d/d.module.css'

// Version D, "Ascension, redrawn": Mario's concepts (chakra descent, pyramids
// between sections, the moon, idioma and cultura, the hidden Spanish, the
// climb to $30) each drawn again from scratch.

// One threshold under every section. The moon is a phase further along and a
// little further across the sky each time: new under the hero, full in the
// middle of the page, new again at the root.
const THRESHOLDS: { kind: PyramidKind; phase: Phase; moonX: number; moonY: number; apexX: number }[] = [
  { kind: 'giza', phase: 'new', moonX: 300, moonY: 104, apexX: 690 },
  { kind: 'kukulkan', phase: 'waxing-crescent', moonX: 360, moonY: 80, apexX: 700 },
  { kind: 'spire', phase: 'first-quarter', moonX: 420, moonY: 62, apexX: 710 },
  { kind: 'giza', phase: 'waxing-gibbous', moonX: 480, moonY: 50, apexX: 720 },
  { kind: 'kukulkan', phase: 'full', moonX: 540, moonY: 44, apexX: 730 },
  { kind: 'spire', phase: 'waning-gibbous', moonX: 660, moonY: 44, apexX: 470 },
  { kind: 'giza', phase: 'last-quarter', moonX: 720, moonY: 50, apexX: 480 },
  { kind: 'kukulkan', phase: 'waning-crescent', moonX: 780, moonY: 62, apexX: 490 },
  { kind: 'spire', phase: 'new', moonX: 840, moonY: 80, apexX: 500 },
  { kind: 'kukulkan', phase: 'waxing-crescent', moonX: 900, moonY: 104, apexX: 510 }
]

const BODIES = [Hero, Buffet, Course, InClass, World, Teachers, Cycle, Climb, Reviews, Contact]

export default function VersionD() {
  return (
    <div className={cn(display.variable, s.root)}>
      <a href="#main" className={s.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main">
        {BODIES.map((Body, index) => {
          const here = SECTIONS[index]
          const next = SECTIONS[index + 1]
          return (
            <div key={here.id}>
              <Body />
              <Threshold
                {...THRESHOLDS[index]}
                from={ground(here.zone, here.tone)}
                to={next ? ground(next.zone, next.tone) : 'var(--root-night)'}
                sky={here.tone}
              />
            </div>
          )
        })}
      </main>
      <Footer />
    </div>
  )
}
