import { cn } from '@/lib/utils'
import { fontVariables } from '@/components/versions/e/a-fonts'
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
// root), a pyramid opens the page, one stands under the moon in How it works and one
// closes the page (Mario found one at every hand-off too many), and the moon
// keeps the time.
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
        <WhySpanish />
        <Buffet />
        <Teachers />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Contact />
        <Pyramid variant="stepped" from="redWall" to="plaster" cap="gold" align="center" spectrum />
      </main>
      <SiteFooter />
    </div>
  )
}
