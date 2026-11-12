import { buffet, hero } from '@/lib/content'
import { cn } from '@/lib/utils'
import { PicadoCord } from './Motifs'
import { C, Cta, Lockup, anchor, container } from './ui'
import s from './b.module.css'

// Each course on the menu owns one colour block
const courseBlocks = ['bg-[#1b3fd0]', 'bg-[#d6006c]']

export function Buffet() {
  return (
    <section id="buffet" className={cn(s.onMarigold, anchor, 'bg-[#ffc233] text-[#16123b]')}>
      <PicadoCord colors={[C.rosa, C.cream, C.cobalt]} hole={C.marigold} />

      <div className={cn(container, 'pb-20 pt-12 lg:pb-28 lg:pt-16')}>
        <Lockup es={buffet.titleEs} en={buffet.title} esClassName="text-[#1b3fd0]" />
        <p className="mt-7 max-w-[52ch] text-xl leading-snug lg:text-2xl">{buffet.intro}</p>

        <h3 className={cn(s.serif, 'mt-14 text-3xl lg:mt-20')}>Who it’s for</h3>
        <ul className="mt-5 grid border-t-[3px] border-[#16123b] lg:grid-cols-3">
          {buffet.audiences.map((a, i) => (
            <li
              key={a.title}
              className={cn(
                'border-b-[3px] border-[#16123b] py-7 lg:py-9',
                i > 0 && 'lg:border-l-[3px] lg:pl-9',
                i < buffet.audiences.length - 1 && 'lg:pr-9'
              )}
            >
              <h4 className="max-w-[14ch] text-[clamp(1.85rem,2.9vw,2.6rem)] font-extrabold leading-[1.02] tracking-[-0.01em]">
                {a.title}
              </h4>
              <p className="mt-3 max-w-[34ch] text-lg leading-snug">{a.description}</p>
            </li>
          ))}
        </ul>

        <h3 className={cn(s.serif, 'mt-14 text-3xl lg:mt-20')}>On the menu</h3>
        <ul className="mt-5 grid md:grid-cols-2">
          {buffet.courses.map((c, i) => (
            <li
              key={c.title}
              className={cn(courseBlocks[i % courseBlocks.length], 'p-7 text-[#fff8ec] sm:p-10 lg:p-14')}
            >
              <h4>
                <span
                  lang="es"
                  className={cn(s.display, 'block text-[clamp(2.6rem,5.4vw,4.75rem)] text-[#ffc233]')}
                >
                  {c.titleEs}
                </span>
                <span className={cn(s.serif, 'mt-3 block text-2xl lg:text-[1.75rem]')}>
                  {c.title}
                </span>
              </h4>
              <p className="mt-5 max-w-[36ch] text-lg leading-snug">{c.description}</p>
            </li>
          ))}
        </ul>

        <Cta tone="ink" className="mt-10">
          {hero.cta}
        </Cta>
      </div>
    </section>
  )
}
