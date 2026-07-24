import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Experience } from '@/components/experience/Experience'
import { WhySpanish } from '@/components/why-spanish/WhySpanish'
import { AboutTeacher } from '@/components/about-teacher/AboutTeacher'
import { MoonJourney } from '@/components/journey/MoonJourney'
import { Pricing } from '@/components/pricing/Pricing'
import { Reviews } from '@/components/reviews/Reviews'
import { ContactForm } from '@/components/contact/ContactForm'
import { Footer } from '@/components/footer/Footer'
import { SectionDivider } from '@/components/dividers/SectionDivider'
import { ChakraRail } from '@/components/chakra-rail/ChakraRail'

// Section background colors, descending through the chakra scale:
// violet (crown) → indigo → blue → green → gold → orange → rose → red (root)
const colors = {
  heroBottom: '#eef2ff', // indigo-50, hero gradient end
  experience: '#1e1b4b', // indigo-950
  whySpanish: '#f0f9ff', // sky-50
  about: '#ecfdf5', // emerald-50
  journey: '#451a03', // amber-950
  pricing: '#fff7ed', // orange-50
  reviews: '#fff1f2', // rose-50
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
        <SectionDivider variant="egyptian" from={colors.heroBottom} to={colors.experience} />
        <Experience />
        <SectionDivider variant="ziggurat" from={colors.experience} to={colors.whySpanish} />
        <WhySpanish />
        <SectionDivider variant="shikhara" from={colors.whySpanish} to={colors.about} accent="#6ee7b7" />
        <AboutTeacher />
        <SectionDivider variant="egyptian" from={colors.about} to={colors.journey} />
        <MoonJourney />
        <SectionDivider variant="ziggurat" from={colors.journey} to={colors.pricing} />
        <Pricing />
        <SectionDivider variant="shikhara" from={colors.pricing} to={colors.reviews} accent="#fda4af" />
        <Reviews />
        <SectionDivider variant="egyptian" from={colors.reviews} to={colors.contact} accent="#fca5a5" />
        <ContactForm />
        <SectionDivider variant="ziggurat" from={colors.contact} to={colors.footer} />
      </main>
      <Footer />
    </>
  )
}
