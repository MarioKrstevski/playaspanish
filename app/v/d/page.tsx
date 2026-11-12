import { Header } from '@/components/header/Header'
import { HeroMoonrise } from '@/components/versions/d/HeroMoonrise'
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
import { SectionDivider } from '@/components/dividers/SectionDivider'
import { ChakraRail } from '@/components/chakra-rail/ChakraRail'

// Version D, "Moonrise": the Ascension page as it is, with a drawn night-sky
// hero in place of the illustration.
const colors = {
  experience: '#1e1b4b',
  whySpanish: '#f0f9ff',
  about: '#ecfdf5',
  journey: '#451a03',
  pricing: '#fff7ed',
  reviews: '#fff1f2',
  contact: '#fef2f2',
  footer: '#450a0a'
}

export default function VersionD() {
  return (
    <>
      <Header />
      <ChakraRail />
      <main>
        <HeroMoonrise />
        {/* The indigo pyramid rises out of the horizon, in front of the moon */}
        <div className="relative z-10 -mt-14 md:-mt-24">
          <SectionDivider variant="egyptian" from="transparent" to={colors.experience} />
        </div>
        <Experience />
        <InClass />
        <SectionDivider variant="ziggurat" from={colors.experience} to={colors.whySpanish} />
        <WhySpanish />
        <LanguageBuffet />
        <SectionDivider variant="shikhara" from={colors.whySpanish} to={colors.about} accent="#6ee7b7" />
        <AboutTeacher />
        <SectionDivider variant="egyptian" from={colors.about} to={colors.journey} />
        <MoonJourney />
        <SectionDivider variant="ziggurat" from={colors.journey} to={colors.pricing} />
        <Pricing />
        <SectionDivider variant="shikhara" from={colors.pricing} to={colors.reviews} accent="#fda4af" />
        <Reviews />
        <ContactForm />
        <SectionDivider variant="ziggurat" from={colors.contact} to={colors.footer} />
      </main>
      <Footer />
    </>
  )
}
