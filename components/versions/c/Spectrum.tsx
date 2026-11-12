import { cn } from '@/lib/utils'
import { TONES } from './tones'
import s from './c.module.css'

/** The seven chakra colours as one thin segmented line, crown to root. */
export function Spectrum({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn(s.spectrum, className)}>
      {TONES.map((tone) => (
        <span key={tone} className={s[tone]} />
      ))}
    </div>
  )
}
