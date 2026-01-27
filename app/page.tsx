import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Packages } from '@/components/packages/Packages'
import { AboutTeacher } from '@/components/about-teacher/AboutTeacher'
import { WhyLearn } from '@/components/why-learn/WhyLearn'
import { FoodCulture } from '@/components/food-culture/FoodCulture'
import { TeachingMethods } from '@/components/teaching-methods/TeachingMethods'
import { Reviews } from '@/components/reviews/Reviews'
import { ContactForm } from '@/components/contact/ContactForm'
import { Footer } from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Packages />
        <AboutTeacher />
        <WhyLearn />
        <FoodCulture />
        <TeachingMethods />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
