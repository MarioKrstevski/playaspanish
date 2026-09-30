'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Check, Crown } from 'lucide-react'
import { AgaveCorner } from '@/components/decor/CornerArt'

type Teacher = {
  name: string
  image: string
  imageAlt: string
  intro: string
  /** Owner callout: shown as a ribbon on the photo and a line under the name */
  badge?: string
  credentials: string[]
  sections: { title: string; body: string }[]
}

const teachers: Teacher[] = [
  {
    name: 'Angelica Torres',
    image: '/angelica-professional.jpg',
    imageAlt: 'Angelica Torres - Spanish Teacher and Founder of Playa Spanish',
    badge: 'Proud owner & founder of Playa Spanish',
    intro: 'Real connection, real conversations, and lessons shaped around your life and goals.',
    credentials: [
      'Lic. in English Language',
      'Certified Level C1',
      'More than 15 years of teaching experience'
    ],
    sections: [
      {
        title: 'My Expertise',
        body: 'As the founder of Playa Spanish, I bring extensive experience in teaching Spanish and Mexican culture. My passion for language education and cultural immersion has helped countless students achieve their Spanish learning goals.'
      }
    ]
  },
  {
    name: 'Neptalí Cruz Gutiérrez',
    image: '/neptali-cruz.jpg',
    imageAlt: 'Neptalí Cruz Gutiérrez - Spanish Teacher at Playa Spanish',
    intro: 'For me, teaching is more than passing on knowledge. It means learning every day and being a bridge between my students, my language, and my culture.',
    credentials: [
      'Degree in Education, majoring in Spanish Language & Literature (Universidad de Montemorelos, N.L.)',
      'Certified DELE examiner',
      'More than 23 years teaching Spanish as a foreign language',
      'Teaching online since 2016, with students all over the world'
    ],
    sections: [
      {
        title: 'How I Teach',
        body: 'Since 2002 I have taught students of every age and level, always aiming for classes that are lively, practical, and shaped around each person. My method blends real communication, Mexican culture, and learning technology, with materials I have created myself so you can speak with confidence from day one. Every student teaches me something too: teaching and learning go hand in hand.'
      },
      {
        title: 'Beyond the Classroom',
        body: 'I travel whenever I can, and teaching remotely lets me work from anywhere. I train CrossFit, love cooking for family and friends, and keep up with current events, so there is always something interesting to talk about in class. I am patient, empathetic, and respectful, and I believe our differences should bring us closer, not divide us.'
      }
    ]
  }
]

function TeacherProfile({ teacher, reverse }: { teacher: Teacher; reverse?: boolean }) {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation()

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
      {/* Photo */}
      <div
        ref={imageRef}
        className={cn(
          reverse ? 'animate-slide-right md:order-2' : 'animate-slide-left',
          imageVisible && 'visible'
        )}
      >
        <div className="relative w-full max-w-xs mx-auto h-[380px] md:max-w-none md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src={teacher.image}
            alt={teacher.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {teacher.badge && (
            <div className="absolute left-0 bottom-6 flex items-center gap-2 rounded-r-full bg-emerald-700/95 py-2 pl-4 pr-5 text-sm font-semibold text-white shadow-lg">
              <Crown className="h-4 w-4 text-amber-300" />
              Founder &amp; Owner
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      <div
        ref={contentRef}
        className={cn(
          reverse ? 'animate-slide-left md:order-1' : 'animate-slide-right',
          'space-y-6',
          contentVisible && 'visible'
        )}
        style={{ transitionDelay: '200ms' }}
      >
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">
            Hi, nice to meet you. I&apos;m
            <span className="block mt-1 [font-family:var(--font-caveat)] text-4xl sm:text-5xl text-emerald-700">
              {teacher.name}
            </span>
          </h3>
          {teacher.badge && (
            <p className="mb-4 flex items-center justify-center md:justify-start gap-2 text-lg font-semibold text-emerald-800">
              <Crown className="h-5 w-5 text-amber-500 flex-shrink-0" />
              {teacher.badge}
            </p>
          )}
          <p className="text-base text-gray-600">{teacher.intro}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Credentials</h4>
            <ul className="text-gray-700 space-y-2">
              {teacher.credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-2">
                  <Check className="h-4 w-4 mt-1 text-emerald-600 flex-shrink-0" />
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          {teacher.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h4>
              <p className="text-gray-700">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function AboutTeacher() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="about" className="relative py-24 bg-emerald-50 overflow-hidden">
      {/* Agave leaves, bottom-left */}
      <AgaveCorner className="hidden lg:block absolute bottom-0 left-4 w-56 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Your Teachers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every teacher at Playa Spanish is Mexican, and every student starts with Angelica.
          </p>
        </div>

        {/* Photo sides alternate for the yin-yang rhythm; the owner leads */}
        <div className="space-y-24">
          {teachers.map((teacher, i) => (
            <TeacherProfile key={teacher.name} teacher={teacher} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
