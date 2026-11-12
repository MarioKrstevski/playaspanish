import { cn } from '@/lib/utils'
import { body, display } from '@/components/versions/c/fonts'
import { Header } from '@/components/versions/c/Header'
import { Hero } from '@/components/versions/c/Hero'
import { Buffet, Course, InClass } from '@/components/versions/c/Learning'
import { Teachers } from '@/components/versions/c/Teachers'
import { HowItWorks } from '@/components/versions/c/HowItWorks'
import { Pricing } from '@/components/versions/c/Pricing'
import { Contact, Footer, Reviews } from '@/components/versions/c/Closing'
import '@/components/versions/c/tokens.css'
import s from '@/components/versions/c/c.module.css'

// Version C, "Ascension, distilled": the chakra colours, the moon phases and
// the pyramid from the current homepage, reduced to thin accents on a calm
// white page. One colour per section, crown to root.
export default function VersionC() {
  return (
    <div data-theme="playa-c" className={cn(display.variable, body.variable, s.root)}>
      <a href="#main" className={s.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main">
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
      <Footer />
    </div>
  )
}
