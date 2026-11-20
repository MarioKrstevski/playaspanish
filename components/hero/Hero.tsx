'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import { MoonReveal } from './MoonReveal'

const HEADLINE_EN = 'Your path to Spanish starts here'
const HEADLINE_ES = 'Tu camino al español empieza aquí'

function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-start pt-[max(9.5rem,17vh)] pb-16 overflow-hidden bg-[#462a7e]"
    >
      {/* The beach scene, drawn three times for three screen shapes (PLA-26):
          very wide, standard landscape and phone portrait. The browser picks
          by the hero's shape, so the art is cropped a little, never squashed.
          Bottom-anchored so the woman at her laptop always shows; the sky
          gives way at the top. */}
      <div aria-hidden className="absolute inset-0 pointer-events-none select-none">
        {/* WebP first (a fifth of the JPG weight), sized by how wide the
            cover crop really is: max(width, height × the art's ratio) */}
        <picture>
          <source media="(min-aspect-ratio: 2/1)" type="image/webp" srcSet="/images/hero-flat-beach.webp" />
          <source media="(min-aspect-ratio: 2/1)" srcSet="/images/hero-flat-beach.jpg" />
          <source
            media="(max-aspect-ratio: 9/10)"
            type="image/webp"
            srcSet="/images/hero-flat-beach-portrait-720.webp 720w, /images/hero-flat-beach-portrait.webp 1024w"
            sizes="max(100vw, 67vh)"
          />
          <source media="(max-aspect-ratio: 9/10)" srcSet="/images/hero-flat-beach-portrait.jpg" />
          <source
            type="image/webp"
            srcSet="/images/hero-flat-beach-3x2-1024.webp 1024w, /images/hero-flat-beach-3x2.webp 1536w"
            sizes="max(100vw, 150vh)"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-flat-beach-3x2.jpg"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
        </picture>
        {/* Deepens the sky behind the copy so it reads over the sunset, and
            hides any crop seam against the section colour at the top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #462a7e 0%, rgba(70, 42, 126, 0.55) 30%, rgba(70, 42, 126, 0.25) 48%, rgba(70, 42, 126, 0) 62%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full md:col-span-2 max-w-6xl mx-auto text-center">
            {/* A moon crosses the headline and shows it in Spanish */}
            <div className="hero-rise mb-10 md:mb-6">
              <MoonReveal en={HEADLINE_EN} es={HEADLINE_ES} />
            </div>

            {/* Warm cream and sunset gold pick up the scene instead of fighting
                it; the soft purple halo keeps them legible over the sand */}
            <p className="hero-slide-in hero-slide-in-delay-1 relative text-base sm:text-lg md:text-xl text-amber-50 mb-8 [text-shadow:0_1px_10px_rgba(40,16,70,0.7)]">
              <span
                aria-hidden
                className="absolute -inset-x-10 -inset-y-6 -z-10 rounded-full blur-2xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(55, 28, 100, 0.45), rgba(55, 28, 100, 0) 70%)' }}
              />
              You can understand more Spanish than you think.{' '} <br />
              <span className="text-amber-200 font-semibold text-xl">Personalized lessons with native Mexican teachers</span>
            </p>
            <Button
              size="lg"
              onClick={handleSmoothScroll}
              // Moonlight cream, like the blouse and the laptop glow in the scene:
              // orange fought the sunset sky
              className="hero-slide-in hero-slide-in-delay-2 text-lg px-8 py-6 rounded-full bg-[#fff3d1] text-[#3b0764] font-semibold shadow-[0_8px_30px_rgba(255,214,150,0.35)] hover:bg-white hover:text-[#3b0764] transition-colors"
            >
              Start now
              <ArrowDown className="ml-2 h-5 w-5" aria-hidden />
            </Button>
          </div>

          {/* Right Image - teacher (commented out for now, kept for future use) */}
          {/* <div className="animate-slide-right visible" style={{ transitionDelay: '200ms' }}>
            <div className="relative w-1/2 ml-auto h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-transparent" />
              <Image
                src="/angelica-playa-spanish.png"
                alt="Spanish teacher"
                fill
                className="object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
