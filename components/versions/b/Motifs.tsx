import { cn } from '@/lib/utils'
import { C } from './ui'
import s from './b.module.css'

/*
 * Papel picado and talavera, drawn as geometry. They are only ever used as
 * edges and bands between colour blocks, never as stand-alone decoration.
 */

const FLAG_BODY =
  'M0 0H96V88a12 12 0 0 1-24 0a12 12 0 0 1-24 0a12 12 0 0 1-24 0a12 12 0 0 1-24 0Z'

function FlagCuts({ variant, color }: { variant: number; color: string }) {
  const foot = [12, 36, 60, 84].map((x) => <circle key={x} cx={x} cy={88} r={3.6} />)
  if (variant === 0) {
    // sol: eight petals round a disc
    return (
      <>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <ellipse key={a} cx={48} cy={24} rx={4.6} ry={9} transform={`rotate(${a} 48 46)`} />
        ))}
        <circle cx={48} cy={46} r={8} />
        {[12, 30, 48, 66, 84].map((x) => (
          <circle key={x} cx={x} cy={9} r={2.6} />
        ))}
        <rect x={-5} y={-5} width={10} height={10} transform="translate(11 46) rotate(45)" />
        <rect x={-5} y={-5} width={10} height={10} transform="translate(85 46) rotate(45)" />
        {foot}
      </>
    )
  }
  if (variant === 1) {
    // flor: four broad petals, dots on the diagonals
    return (
      <>
        {[0, 90, 180, 270].map((a) => (
          <ellipse key={a} cx={48} cy={28} rx={7} ry={14} transform={`rotate(${a} 48 46)`} />
        ))}
        {[45, 135, 225, 315].map((a) => (
          <circle key={a} cx={48} cy={20} r={3.6} transform={`rotate(${a} 48 46)`} />
        ))}
        {[10, 29, 48, 67, 86].map((x) => (
          <path key={x} d={`M${x - 5} 13l5-9l5 9z`} />
        ))}
        {foot}
      </>
    )
  }
  // rombo: a diamond ring with a punched centre
  return (
    <>
      <path d="M48 14L80 46L48 78L16 46Z" />
      <path d="M48 26L68 46L48 66L28 46Z" fill={color} />
      <circle cx={48} cy={46} r={6.5} />
      {[
        [14, 14],
        [82, 14],
        [14, 74],
        [82, 74]
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={4} />
      ))}
      {foot}
    </>
  )
}

function PicadoFlag({ variant, color, hole }: { variant: number; color: string; hole: string }) {
  return (
    <svg viewBox="0 0 96 102" className="block h-auto w-full">
      <path d={FLAG_BODY} fill={color} />
      <g fill={hole}>
        <FlagCuts variant={variant} color={color} />
      </g>
    </svg>
  )
}

/**
 * A cord of papel picado flags strung along the top edge of a section.
 * `hole` is the colour of the section the flags hang over.
 */
export function PicadoCord({
  colors,
  hole,
  count = 30,
  className
}: {
  colors: string[]
  hole: string
  count?: number
  className?: string
}) {
  return (
    <div aria-hidden className={cn('overflow-hidden', className)}>
      <div className="h-[3px] bg-[#16123b]" />
      <div className="flex justify-center gap-1.5 pb-3 sm:gap-2">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className={cn(s.sway, 'block w-[52px] flex-none sm:w-[76px]')}
            style={{
              animationDelay: `${(-((i * 0.83) % 4.6)).toFixed(2)}s`,
              animationDuration: `${(4.2 + (i % 3) * 0.6).toFixed(1)}s`
            }}
          >
            <PicadoFlag
              variant={(i + Math.floor(i / 3)) % 3}
              color={colors[i % colors.length]}
              hole={hole}
            />
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * The scalloped, punched foot of a colour block, hanging into the next one.
 * `color` is the block above; `hole` is the block it hangs over.
 */
export function ScallopEdge({
  id,
  color,
  hole,
  className
}: {
  id: string
  color: string
  hole: string
  className?: string
}) {
  return (
    <svg aria-hidden className={cn('-mt-px block h-[37px] w-full', className)}>
      <defs>
        <pattern id={id} width="56" height="37" patternUnits="userSpaceOnUse">
          <path d="M0 0H56V9a28 28 0 0 1-56 0Z" fill={color} />
          <g fill={hole}>
            <circle cx="28" cy="20" r="4.6" />
            <circle cx="13" cy="11" r="2.6" />
            <circle cx="43" cy="11" r="2.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="37" fill={`url(#${id})`} />
    </svg>
  )
}

/** A frieze of talavera tiles: one tile high, running the full width. */
export function TileBand({ id, className }: { id: string; className?: string }) {
  return (
    <div aria-hidden className={cn('border-y-[3px] border-[#16123b]', className)}>
      <svg className="block h-12 w-full">
        <defs>
          <pattern id={id} width="48" height="48" patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill={C.cal} />
            <g fill={C.cobalt}>
              <circle cx="0" cy="0" r="13" />
              <circle cx="48" cy="0" r="13" />
              <circle cx="0" cy="48" r="13" />
              <circle cx="48" cy="48" r="13" />
              <rect x="15.5" y="15.5" width="17" height="17" />
              <rect x="15.5" y="15.5" width="17" height="17" transform="rotate(45 24 24)" />
            </g>
            <circle cx="24" cy="24" r="5" fill={C.marigold} />
            <g fill={C.rosa}>
              <rect x="-4" y="-4" width="8" height="8" transform="translate(24 0) rotate(45)" />
              <rect x="-4" y="-4" width="8" height="8" transform="translate(24 48) rotate(45)" />
              <rect x="-4" y="-4" width="8" height="8" transform="translate(0 24) rotate(45)" />
              <rect x="-4" y="-4" width="8" height="8" transform="translate(48 24) rotate(45)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="48" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}

/** A scalloped stamp, used once: Angelica's founder mark. */
export function Seal({ children, className }: { children: React.ReactNode; className?: string }) {
  const scallops = Array.from({ length: 18 }, (_, i) => {
    const a = (i / 18) * Math.PI * 2
    return [Math.cos(a) * 47, Math.sin(a) * 47]
  })
  return (
    <div className={cn('relative grid size-28 place-items-center xl:size-36', className)}>
      <svg aria-hidden viewBox="-60 -60 120 120" className="absolute inset-0 size-full">
        <g fill={C.marigold}>
          <circle r="49" />
          {scallops.map(([x, y], i) => (
            <circle key={i} cx={x.toFixed(2)} cy={y.toFixed(2)} r="8.6" />
          ))}
        </g>
        <circle
          r="42"
          fill="none"
          stroke={C.ink}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="0.1 7.23"
        />
      </svg>
      <span
        className={cn(
          s.display,
          'relative max-w-[4.1rem] text-center text-[1.1rem] leading-[0.95] text-[#16123b] xl:max-w-[5.25rem] xl:text-[1.4rem]'
        )}
      >
        {children}
      </span>
    </div>
  )
}

/** List marker in the tile vocabulary. */
export function Diamond({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 12 12" className={cn('size-3 flex-none', className)}>
      <path d="M6 0L12 6L6 12L0 6Z" fill="currentColor" />
    </svg>
  )
}
