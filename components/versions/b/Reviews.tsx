import { reviews } from '@/lib/content'
import { cn } from '@/lib/utils'
import { Lockup, anchor, container } from './ui'
import s from './b.module.css'

export function Reviews() {
  return (
    <section id="reviews" className={cn(s.onMarigold, anchor, 'bg-[#ffc233] text-[#16123b]')}>
      <div className={cn(container, 'pb-20 pt-16 lg:pb-28 lg:pt-24')}>
        <Lockup es="Reseñas" en={reviews.title} esClassName="text-[#1b3fd0]" />
        <p className="mt-7 max-w-[44ch] text-xl leading-snug lg:text-2xl">{reviews.sub}</p>

        <ul className="mt-12 grid gap-x-14 md:grid-cols-2 lg:mt-16 lg:gap-x-20">
          {reviews.items.map((r) => (
            <li key={r.name} className="border-t-[3px] border-[#16123b] py-8 lg:py-10">
              <figure>
                <blockquote>
                  <p
                    className={cn(
                      s.serif,
                      'max-w-[24ch] text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.12] [text-wrap:balance]'
                    )}
                  >
                    “{r.quote}”
                  </p>
                  <p className="mt-5 max-w-[52ch] text-lg leading-relaxed">{r.review}</p>
                </blockquote>
                <figcaption className="mt-5 text-lg font-extrabold">{r.name}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
