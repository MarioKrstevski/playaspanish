'use client'

import { useEffect, useState } from 'react'

// The hero's "dream beach" painting (PLA-26). It replaced the flat
// illustration on 2026-11-21 at the client's request; that one is kept in
// assets-archive/images/hero-flat-beach*.
//
// Landscape screens (wider than tall: laptops, desktops, iPad and phone
// sideways) draw the wide art on the bottom edge, its height easing from 73%
// of the hero at md to 93% at 1300px wide.
//
// Portrait screens (phones, iPad upright) use the tall recomposition, cropped
// rather than shrunk, with the two dream clouds (the pyramid with the dancers,
// the cathedral street) laid over the top corners as their own cut-outs, so
// they show whole instead of being cut off at the edge or under the header.
//
// Each layout's images sit in a <picture> whose other-orientation source is a
// blank 1px GIF, so a phone never downloads the desktop art and vice versa
// (hiding with CSS alone would still download both).

const MD = 768
const BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
const LANDSCAPE = '(min-aspect-ratio: 1/1)'
const PORTRAIT = '(max-aspect-ratio: 999/1000)'

function useLandscapeHeight() {
  const [pct, setPct] = useState(93)
  useEffect(() => {
    const update = () => {
      const t = Math.min(Math.max((window.innerWidth - MD) / (1300 - MD), 0), 1)
      setPct(73 + 20 * t)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return pct
}

function PortraitOnly({ src, className, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <picture>
      <source media={LANDSCAPE} srcSet={BLANK} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className={className} {...rest} />
    </picture>
  )
}

export function DreamBeachScene() {
  const pct = useLandscapeHeight()
  return (
    <>
      {/* Portrait */}
      <div className="absolute inset-0 [@media(min-aspect-ratio:1/1)]:hidden">
        <picture>
          <source media={LANDSCAPE} srcSet={BLANK} />
          <source
            type="image/webp"
            srcSet="/images/hero-dream-beach-mobile-560.webp 560w, /images/hero-dream-beach-mobile.webp 768w"
            sizes="max(100vw, 56vh)"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-dream-beach-mobile.jpg"
            alt="A student learning Spanish online with a Mexican teacher on a video call, on a beach at sunset"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
        </picture>
        {/* Sky over the painting's own (cropped) clouds, so only the
            cut-outs below show */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #462a7e 0%, #462a7e 30%, rgba(70, 42, 126, 0) 46%)'
          }}
        />
        <PortraitOnly
          src="/images/hero-dream-cloud-left.webp"
          className="absolute left-0 top-16 w-[min(48vw,24rem)] md:top-[4.75rem]"
        />
        <PortraitOnly
          src="/images/hero-dream-cloud-right.webp"
          className="absolute right-0 top-16 w-[min(40vw,20rem)] md:top-[4.75rem]"
        />
      </div>

      {/* Landscape */}
      <div
        className="hidden [@media(min-aspect-ratio:1/1)]:block absolute inset-x-0 bottom-0"
        style={{ height: `${pct}%` }}
      >
        <picture>
          <source media={PORTRAIT} srcSet={BLANK} />
          <source type="image/webp" srcSet="/images/hero-dream-beach.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-dream-beach.jpg"
            alt="A student learning Spanish online with a Mexican teacher on a video call, on a beach at sunset, dreaming of Mexico's pyramids and colonial streets"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-fill"
          />
        </picture>
        <div
          className="absolute inset-x-0 top-0 h-28"
          style={{ background: 'linear-gradient(to bottom, #462a7e, rgba(70, 42, 126, 0))' }}
        />
      </div>
      {/* The painting ends in a woven rug, so instead of a pattern band the
          rug simply dusks into the purple of the Course section below */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 md:h-28"
        style={{ background: 'linear-gradient(to bottom, rgba(59, 7, 100, 0), #3b0764)' }}
      />
    </>
  )
}
