import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import s from './b.module.css'

/** Palette as plain values, for SVG fills. Mirrors the variables in b.module.css. */
export const C = {
  rosa: '#d6006c',
  cobalt: '#1b3fd0',
  marigold: '#ffc233',
  cal: '#fbf1e2',
  cream: '#fff8ec',
  ink: '#16123b'
} as const

export const container = 'mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14'

/** Clears the sticky header (64px) plus the design switcher bar (44px). */
export const anchor = 'scroll-mt-[108px]'

/**
 * The bilingual heading: the Spanish word is the display, the English sits
 * beside it (below it on a phone). Both live in the same heading element.
 */
export function Lockup({
  es,
  en,
  as: Tag = 'h2',
  className,
  esClassName,
  enClassName
}: {
  es: string
  en: string
  as?: 'h2' | 'h3'
  className?: string
  esClassName?: string
  enClassName?: string
}) {
  return (
    <Tag className={cn('flex flex-wrap items-end gap-x-8 gap-y-3', className)}>
      <span lang="es" className={cn(s.display, 'text-[clamp(3.25rem,10vw,7rem)]', esClassName)}>
        {es}
      </span>
      <span
        className={cn(
          s.serif,
          'max-w-[17ch] pb-[0.3em] text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.1]',
          enClassName
        )}
      >
        {en}
      </span>
    </Tag>
  )
}

const tones = {
  marigold: 'bg-[#ffc233] text-[#16123b] hover:bg-[#fff8ec]',
  rosa: 'bg-[#d6006c] text-[#fff8ec] hover:bg-[#16123b]',
  ink: 'bg-[#16123b] text-[#fff8ec] hover:bg-[#1b3fd0]',
  cream: 'bg-[#fff8ec] text-[#16123b] hover:bg-[#ffc233]'
} as const

/** Primary action. Defaults to the contact section. */
export function Cta({
  href = '#contact',
  tone = 'marigold',
  className,
  children
}: {
  href?: string
  tone?: keyof typeof tones
  className?: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-lg font-bold leading-none transition-colors duration-200',
        tones[tone],
        className
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-5 transition-transform duration-200 ease-out group-hover:translate-x-1"
      />
    </a>
  )
}
