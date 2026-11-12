import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { PIGMENTS, type PigmentKey } from './pigments'
import s from './e.module.css'

export type PyramidVariant = 'smooth' | 'stepped' | 'range'

type Wall = 'plaster' | 'sand' | 'night' | 'redWash' | 'redWall'

const WALL: Record<Wall, string> = {
  plaster: 'var(--plaster)',
  sand: 'var(--sand)',
  night: 'var(--night)',
  redWash: 'var(--red-wash)',
  redWall: 'var(--red-wall)'
}

/*
 * The three pyramids, drawn as built things: a lit face and a face in shade,
 * stone courses, and a capstone (or temple) glazed in the pigment of the
 * section the pyramid opens. All on a 480 x 160 field, standing on its base.
 */
export function PyramidArt({
  variant,
  spectrum,
  className
}: {
  variant: PyramidVariant
  /** Kukulkán's stair: seven triangles of light, one per pigment */
  spectrum?: boolean
  className?: string
}) {
  return (
    <svg viewBox="0 0 480 160" className={cn(s.pyramid, className)} aria-hidden focusable="false">
      {variant === 'smooth' && (
        <>
          <path className={s.pyFace} d="M10 160L240 0L470 160Z" />
          <path className={s.pyCap} d="M240 0L202.6 26H277.4Z" />
          <path className={s.pyShade} d="M240 0L470 160H300Z" />
          <path className={s.pyJoint} d="M156.6 58H323.4M107.8 92H372.2M58.9 126H421.1M240 0L300 160" />
        </>
      )}

      {variant === 'stepped' && (
        <>
          <path
            className={s.pyFace}
            d="M24 160V132H60V104H96V76H132V48H348V76H384V104H420V132H456V160Z"
          />
          <path className={s.pyShade} d="M272 48H348V76H384V104H420V132H456V160H272Z" />
          <path
            className={s.pyJoint}
            d="M132 55H208M272 55H348M96 83H208M272 83H384M60 111H208M272 111H420M24 139H208M272 139H456"
          />
          {/* the stair, its treads and its two balustrades */}
          <path
            className={s.pyJoint}
            d="M214 55H266M214 62H266M214 69H266M214 76H266M214 83H266M214 90H266M214 97H266M214 104H266M214 111H266M214 118H266M214 125H266M214 132H266M214 139H266M214 146H266M214 153H266"
          />
          <path className={s.pyShade} d="M208 48H214V160H208ZM266 48H272V160H266Z" />
          {/* the temple on top */}
          <path className={s.pyCap} d="M190 10H290V17H282V48H198V17H190Z" />
          <path className={s.pyDoor} d="M231 26H249V48H231Z" />
          {spectrum &&
            PIGMENTS.map((pigment, i) => (
              <path
                key={pigment.key}
                d={`M208 ${48 + i * 16}V${64 + i * 16}H193Z`}
                style={{ fill: `var(--${pigment.key})` }}
              />
            ))}
        </>
      )}

      {variant === 'range' && (
        <>
          <path className={s.pyFace} d="M104 160L240 0L376 160Z" />
          <path className={s.pyCap} d="M240 0L219.6 24H260.4Z" />
          <path className={s.pyShade} d="M240 0L376 160H276Z" />
          <path className={s.pyJoint} d="M189 60H291M155 100H325M240 0L276 160" />
          <path className={s.pyFace} d="M0 160L104 78L208 160Z" />
          <path className={s.pyShade} d="M104 78L208 160H132Z" />
          <path className={s.pyJoint} d="M0 160L104 78L208 160M104 78L132 160M52 119H156" />
          <path className={s.pyFace} d="M296 160L384 90L472 160Z" />
          <path className={s.pyShade} d="M384 90L472 160H408Z" />
          <path className={s.pyJoint} d="M296 160L384 90L472 160M384 90L408 160M340 125H428" />
        </>
      )}
    </svg>
  )
}

/** The hand-off between two sections: the next wall rises into this one as a pyramid. */
export function Pyramid({
  variant,
  from,
  to,
  cap,
  align = 'left',
  spectrum
}: {
  variant: PyramidVariant
  from: Wall
  to: Wall
  cap: PigmentKey
  align?: 'left' | 'center' | 'right'
  spectrum?: boolean
}) {
  return (
    <div
      aria-hidden
      className={cn(
        s.seam,
        to === 'night' && s.seamDark,
        align === 'center' && s.seamCenter,
        align === 'right' && s.seamRight,
        spectrum && s.seamGrand
      )}
      style={{ '--from': WALL[from], '--to': WALL[to], '--cap': `var(--${cap})` } as CSSProperties}
    >
      <div className={s.container}>
        <PyramidArt variant={variant} spectrum={spectrum} />
      </div>
    </div>
  )
}
