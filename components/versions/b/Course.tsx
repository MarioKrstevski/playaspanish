import { course } from '@/lib/content'
import { cn } from '@/lib/utils'
import { ScallopEdge } from './Motifs'
import { C, Lockup, anchor, container } from './ui'
import s from './b.module.css'

export function Course() {
  return (
    <section id="course" className={cn(s.onLight, anchor, 'bg-[#fbf1e2] text-[#16123b]')}>
      <ScallopEdge id="b-edge-course" color={C.marigold} hole={C.cal} />

      <div className={cn(container, 'pb-20 pt-14 lg:pb-28 lg:pt-20')}>
        <Lockup es="El curso" en={course.title} esClassName="text-[#d6006c]" />

        {/* Half and half: the method, as a band */}
        <div aria-hidden className="mt-9 grid h-4 grid-cols-2 lg:mt-12">
          <div className="bg-[#d6006c]" />
          <div className="bg-[#1b3fd0]" />
        </div>
        <p
          className={cn(
            s.serif,
            'mt-7 max-w-[34ch] text-[clamp(1.6rem,2.9vw,2.6rem)] leading-[1.18] [text-wrap:balance]'
          )}
        >
          {course.sub}
        </p>

        <ul className="mt-12 lg:mt-16">
          {course.pillars.map((p) => (
            <li
              key={p.title}
              className="grid gap-3 border-t-[3px] border-[#16123b] py-8 lg:grid-cols-12 lg:gap-10 lg:py-11"
            >
              <h3 className="max-w-[16ch] text-[clamp(1.75rem,2.7vw,2.5rem)] font-extrabold leading-[1.04] tracking-[-0.01em] lg:col-span-5">
                {p.title}
              </h3>
              <p className="max-w-[60ch] text-lg leading-relaxed lg:col-span-6 lg:col-start-7 lg:text-xl lg:leading-relaxed">
                {p.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
