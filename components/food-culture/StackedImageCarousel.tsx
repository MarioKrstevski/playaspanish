'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const ROTATE_INTERVAL_MS = 3500

interface StackedImageCarouselProps {
  images: { src: string; alt: string }[]
  className?: string
}

export function StackedImageCarousel({ images, className = '' }: StackedImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(t)
  }, [images.length])

  if (images.length === 0) return null

  return (
    <div className={`relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl ${className}`}>
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{
            zIndex: i === currentIndex ? images.length : i,
            opacity: i === currentIndex ? 1 : 0
          }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  )
}
