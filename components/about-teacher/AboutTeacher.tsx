'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Check, Crown } from 'lucide-react'
import { teachers, teachersIntro, type Teacher } from '@/lib/content'
import { TeacherPhoto } from '@/components/teachers/TeacherPhoto'

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
          <TeacherPhoto teacher={teacher.id} />
          {teacher.badge && (
            <div className="absolute left-0 bottom-6 flex items-center gap-2 rounded-r-full bg-emerald-700/95 py-2 pl-4 pr-5 text-sm font-semibold text-white shadow-lg">
              <Crown className="h-4 w-4 text-amber-300" />
              {teacher.badge.short}
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
          {/* Her title lives on the photo badge only (Angelica, 2026-11-21) */}
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
    <section id="about" className="relative pt-24 pb-6 bg-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div
          ref={titleRef}
          className={cn(
            'animate-on-scroll text-center mb-12',
            titleVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {teachersIntro.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {teachersIntro.sub}
          </p>
        </div>

        {/* Photo sides alternate for the yin-yang rhythm; the owner leads */}
        <div className="space-y-24">
          {teachers.map((teacher, i) => (
            <TeacherProfile key={teacher.id} teacher={teacher} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
