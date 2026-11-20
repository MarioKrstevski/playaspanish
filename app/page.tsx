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
import { SarapeBand } from '@/components/dividers/SarapeBand'
import { ChakraRail } from '@/components/chakra-rail/ChakraRail'

// Section background colors, descending through the seven chakras:
// pink (crown, the hero) → purple → blue → green → yellow → orange → red (root)
const colors = {
  experience: '#3b0764', // purple-950
  whySpanish: '#f0f9ff', // sky-50
  about: '#ecfdf5', // emerald-50
  journey: '#fcf5e1', // warm sand cream: yellow enough, calmer than chakra yellow
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
        <SarapeBand />
        <Experience />
        <InClass />
        {/* Three thresholds only. Moons stay at four on the whole page: the
            full moon here, the half moon before How it works, its cycle, and
            the reviews timeline */}
        <PyramidThreshold kind="kukulkan" apexX={660} stars moon={{ x: 430, y: 66, phase: 'full' }} from={colors.experience} to={colors.whySpanish} />
        <WhySpanish />
        <LanguageBuffet />
        <AboutTeacher />
        <PyramidThreshold kind="giza" apexX={490} moon={{ x: 760, y: 70, phase: 'half' }} from={colors.about} to={colors.journey} stone={{ near: '#ecc56a', shade: '#d9ad4f', far: '#f3e2b0' }} />
        <MoonJourney />
        <Pricing />
        <Reviews />
        <ContactForm />
        <PyramidThreshold kind="chakra" apexX={600} from={colors.contact} to={colors.footer} />
      </main>
      <Footer />
    </>
  )
}
