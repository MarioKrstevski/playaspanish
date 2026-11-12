'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { teachers, type TeacherId } from '@/lib/content'
import { teacherPhotos } from '@/lib/teacher-photos'

/*
 * TEMPORARY (PLA-18): lets Angelica try candidate headshots against each
 * design version. The pick is kept in this browser and shared by every
 * <TeacherPhoto> and <TeacherPhotoSwitcher> for the same teacher, on every
 * page. Remove the switcher once the photos are chosen.
 */
const EVENT = 'ps-teacher-photo'
const storageKey = (id: TeacherId) => `ps-teacher-photo-${id}`

export function useTeacherPhoto(id: TeacherId) {
  const photos = teacherPhotos[id]
  // Server and first client render both use the default photo; the saved pick
  // is applied after mount so hydration always matches.
  const [index, setIndexState] = useState(0)

  useEffect(() => {
    const read = () => {
      let saved = 0
      try {
        saved = Number(window.localStorage.getItem(storageKey(id))) || 0
      } catch {
        // storage blocked: stay on the default
      }
      setIndexState(saved >= 0 && saved < photos.length ? saved : 0)
    }
    read()
    window.addEventListener(EVENT, read)
    window.addEventListener('storage', read)
    return () => {
      window.removeEventListener(EVENT, read)
      window.removeEventListener('storage', read)
    }
  }, [id, photos.length])

  const setIndex = useCallback(
    (next: number) => {
      setIndexState(next)
      try {
        window.localStorage.setItem(storageKey(id), String(next))
      } catch {
        // storage blocked: the pick lasts until reload
      }
      window.dispatchEvent(new Event(EVENT))
    },
    [id]
  )

  return { photos, index, photo: photos[index], setIndex }
}

/** The teacher's current photo, filling its (relative, sized) parent. */
export function TeacherPhoto({
  teacher,
  className,
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority
}: {
  teacher: TeacherId
  className?: string
  sizes?: string
  priority?: boolean
}) {
  const { photo } = useTeacherPhoto(teacher)
  const alt = teachers.find((t) => t.id === teacher)?.imageAlt ?? ''
  return (
    <Image
      src={photo.src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn('object-cover object-top', className)}
    />
  )
}

/** Numbered pills that swap the teacher's photo. Reads on any background. */
export function TeacherPhotoSwitcher({
  teacher,
  className
}: {
  teacher: TeacherId
  className?: string
}) {
  const { photos, index, photo, setIndex } = useTeacherPhoto(teacher)
  if (photos.length < 2) return null
  return (
    <div className={cn('flex flex-col items-center gap-1.5', className)}>
      <div
        role="group"
        aria-label="Try another photo"
        className="flex w-fit items-center rounded-full border border-black/10 bg-white p-1 text-sm font-semibold text-gray-600 shadow-sm"
      >
        <span aria-hidden className="pl-2.5 pr-1.5 text-gray-400">
          Photo
        </span>
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            title={p.label}
            aria-label={p.label}
            aria-pressed={i === index}
            className={cn(
              'min-w-8 rounded-full px-2.5 py-1 transition-colors duration-150',
              i === index ? 'bg-gray-900 text-white' : 'hover:text-gray-900'
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <span className="rounded-full bg-white/80 px-2 text-xs text-gray-600">{photo.label}</span>
    </div>
  )
}
