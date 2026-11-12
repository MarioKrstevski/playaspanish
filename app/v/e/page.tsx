import { cn } from '@/lib/utils'
import { fontVariables } from '@/components/versions/a/fonts'
import { SiteHeader } from '@/components/versions/e/SiteHeader'
import { TileRail } from '@/components/versions/e/TileRail'
import { Pyramid } from '@/components/versions/e/Pyramid'
import {
  Buffet,
  Contact,
  Course,
  Hero,
  HowItWorks,
  InClass,
  Pricing,
  Reviews,
  SiteFooter,
  Teachers,
  WhySpanish
} from '@/components/versions/e/Sections'
import styles from '@/components/versions/e/e.module.css'

// Version E, "El patio": version A's courtyard carrying the Ascension ideas.
// Seven pigments descend the page (violet at the crown, cochineal red at the
// root), each hand-off between them is a pyramid capped in the next pigment,
// and the moon keeps the time.
export default function VersionE() {
  return (
    <div className={cn(fontVariables, styles.root)}>
      <SiteHeader />
      <TileRail />
      <main>
        <Hero />
        <Pyramid variant="smooth" from="plaster" to="sand" cap="indigo" />
        <Course />
        <InClass />
        <Pyramid variant="stepped" from="sand" to="plaster" cap="blue" />
        <WhySpanish />
        <Buffet />
        <Pyramid variant="range" from="plaster" to="sand" cap="green" />
        <Teachers />
        <Pyramid variant="smooth" from="sand" to="night" cap="gold" />
        <HowItWorks />
        <Pyramid variant="stepped" from="night" to="plaster" cap="orange" />
        <Pricing />
        <Pyramid variant="range" from="plaster" to="redWash" cap="red" />
        <Reviews />
        <Contact />
        <Pyramid variant="stepped" from="redWall" to="plaster" cap="gold" align="center" spectrum />
      </main>
      <SiteFooter />
    </div>
  )
}
