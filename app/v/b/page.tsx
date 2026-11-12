/*
 * Version B, "México vivo".
 *
 * THESIS: a Mexican street poster that happens to be a school. Colour planes
 * do the layout; the page refuses the photo-hero-plus-card-grid arrangement.
 * OWN-WORLD: rosa mexicano, cobalt and marigold blocks on lime-wash off-white,
 * ink rules 3px thick. Spanish in condensed black capitals (Archivo), English
 * beside it in italic Faustina. Papel picado and talavera only as edges/bands.
 * STORY: "this is Spanish, in Mexico's voice" -> "that is me" (the buffet,
 * straight after the hero) -> "Angelica runs it" -> one email.
 * FIRST VIEWPORT: rosa plane with the Spanish headline at poster scale and the
 * English h1 under it; cobalt plane with Angelica, named founder; her marigold
 * seal sits on the seam; a cord of papel picado closes the fold.
 * FORM: brief-pinned direction, no roll.
 */
import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { sans, serif } from '@/components/versions/b/fonts'
import { SiteHeader } from '@/components/versions/b/SiteHeader'
import { Hero } from '@/components/versions/b/Hero'
import { Buffet } from '@/components/versions/b/Buffet'
import { Course } from '@/components/versions/b/Course'
import { InClass } from '@/components/versions/b/InClass'
import { Teachers } from '@/components/versions/b/Teachers'
import { HowItWorks } from '@/components/versions/b/HowItWorks'
import { Pricing } from '@/components/versions/b/Pricing'
import { Reviews } from '@/components/versions/b/Reviews'
import { Contact } from '@/components/versions/b/Contact'
import { SiteFooter } from '@/components/versions/b/SiteFooter'
import s from '@/components/versions/b/b.module.css'

export const metadata: Metadata = {
  title: 'Playa Spanish - Online Spanish School'
}

export default function VersionB() {
  return (
    <div className={cn(sans.variable, serif.variable, s.root)}>
      <SiteHeader />
      <main>
        <Hero />
        <Buffet />
        <Course />
        <InClass />
        <Teachers />
        <HowItWorks />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
