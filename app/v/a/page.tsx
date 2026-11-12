import { cn } from '@/lib/utils'
import { fontVariables } from '@/components/versions/a/fonts'
import { SiteHeader } from '@/components/versions/a/SiteHeader'
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
} from '@/components/versions/a/Sections'
import styles from '@/components/versions/a/a.module.css'

// Version A, "Con Angelica": a boutique school with its founder at the door.
export default function VersionA() {
  return (
    <div className={cn(fontVariables, styles.root)}>
      <SiteHeader />
      <main>
        <Hero />
        <Buffet />
        <Teachers />
        <InClass />
        <Course />
        <WhySpanish />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
