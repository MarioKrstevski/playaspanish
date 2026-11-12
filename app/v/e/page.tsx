import { Header } from '@/components/header/Header'
import { HeroChat } from '@/components/versions/e/HeroChat'
import { BuffetIndigo } from '@/components/versions/e/BuffetIndigo'
import { ClassSky } from '@/components/versions/e/ClassSky'
import { AboutTeacher } from '@/components/about-teacher/AboutTeacher'
import { MoonJourney } from '@/components/journey/MoonJourney'
import { Pricing } from '@/components/pricing/Pricing'
import { Reviews } from '@/components/reviews/Reviews'
import { ContactForm } from '@/components/contact/ContactForm'
import { Footer } from '@/components/footer/Footer'
import { SectionDivider } from '@/components/dividers/SectionDivider'
import { ChakraRail } from '@/components/chakra-rail/ChakraRail'

// Version E, "Conversación": the Ascension design, audience first. The chat
// plays in the hero, "who it's for" takes the indigo zone, the course and the
// class share the sky zone. From the teachers down it is the current page.
const colors = {
  hero: '#462a7e',
  buffet: '#1e1b4b',
  course: '#f0f9ff',
  about: '#ecfdf5',
  journey: '#451a03',
  pricing: '#fff7ed',
  reviews: '#fff1f2',
  contact: '#fef2f2',
  footer: '#450a0a'
}

const railSections = [
  { id: 'hero', color: '#8b5cf6', label: 'Top' },
  { id: 'buffet', color: '#6366f1', label: "Who it's for" },
  { id: 'course', color: '#0ea5e9', label: 'The Course' },
  { id: 'about', color: '#10b981', label: 'Teachers' },
  { id: 'how-it-works', color: '#f59e0b', label: 'How it works' },
  { id: 'pricing', color: '#f97316', label: 'Pricing' },
  { id: 'reviews', color: '#ef4444', label: 'Reviews' }
]

export default function VersionE() {
  return (
    <>
      <Header />
      <ChakraRail sections={railSections} />
      <main>
        <HeroChat />
        <SectionDivider variant="egyptian" from={colors.hero} to={colors.buffet} />
        <BuffetIndigo />
        <SectionDivider variant="ziggurat" from={colors.buffet} to={colors.course} />
        <ClassSky />
        <SectionDivider variant="shikhara" from={colors.course} to={colors.about} accent="#6ee7b7" />
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
