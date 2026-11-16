import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Experience } from '@/components/experience/Experience'
import { InClass } from '@/components/in-class/InClass'
import { LanguageBuffet } from '@/components/buffet/LanguageBuffet'
import { WhySpanish } from '@/components/why-spanish/WhySpanish'
import { AboutTeacher } from '@/components/about-teacher/AboutTeacher'
import { MoonJourney } from '@/components/journey/MoonJourney'
import { Pricing } from '@/components/pricing/Pricing'
import { Reviews } from '@/components/reviews/Reviews'
import { ContactForm } from '@/components/contact/ContactForm'
import { Footer } from '@/components/footer/Footer'
import { PyramidThreshold } from '@/components/dividers/PyramidThreshold'
import { ChakraRail } from '@/components/chakra-rail/ChakraRail'

// Section background colors, descending through the seven chakras:
// pink (crown, the hero) → purple → blue → green → yellow → orange → red (root)
const colors = {
  experience: '#3b0764', // purple-950
  whySpanish: '#f0f9ff', // sky-50
  about: '#ecfdf5', // emerald-50
  journey: '#fef9c3', // yellow-100
  pricing: '#fff7ed', // orange-50
  reviews: '#fef2f2', // red-50
  contact: '#fef2f2', // red-50
  footer: '#450a0a' // deep red root
}

export default function Home() {
  return (
    <>
      <Header />
      <ChakraRail />
      <main>
        <Hero />
        {/* The purple pyramid rises directly out of the hero scene: transparent
            band pulled up over the image's bottom edge */}
        <div
          className="relative z-10"
          // the threshold is 15% as tall as it is wide (700px to 1200px)
          style={{ marginTop: 'calc(min(max(100vw, 700px), 1200px) * -0.15)' }}
        >
          <PyramidThreshold kind="giza" apexX={690} from="transparent" to={colors.experience} />
        </div>
        <Experience />
        <InClass />
        <PyramidThreshold kind="kukulkan" apexX={500} stars from={colors.experience} to={colors.whySpanish} />
        <WhySpanish />
        <LanguageBuffet />
        <PyramidThreshold kind="spire" apexX={710} from={colors.whySpanish} to={colors.about} edge="#6ee7b7" />
        <AboutTeacher />
        <PyramidThreshold kind="giza" apexX={490} from={colors.about} to={colors.journey} edge="#facc15" />
        <MoonJourney />
        <PyramidThreshold kind="kukulkan" apexX={720} from={colors.journey} to={colors.pricing} edge="#fdba74" />
        <Pricing />
        <PyramidThreshold kind="spire" apexX={480} from={colors.pricing} to={colors.reviews} edge="#fca5a5" />
        <Reviews />
        <ContactForm />
        <PyramidThreshold kind="kukulkan" apexX={700} from={colors.contact} to={colors.footer} />
      </main>
      <Footer />
    </>
  )
}
