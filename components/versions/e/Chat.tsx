'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { conversations, type ChatMessage } from '@/components/why-spanish/ChatMock'
import s from './e.module.css'

const TYPING_MS = 700
const READ_MS = 900
const FIRST_DELAY_MS = 400
const LOOP_PAUSE_MS = 3200
// Messages already on the wall before the loop takes over, so the panel is
// never empty: not before scripts run, and not at first sight.
const OPENING = 3

/*
 * The looping Spanglish conversation from the Ascension design, redrawn as
 * notes on the courtyard wall: the learner in Maya blue, the friend on plaster.
 * It only runs while it is on screen, and stands still under reduced motion.
 */
export function Chat({ className }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null)
  const [convoIndex, setConvoIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(OPENING)
  const [isTyping, setIsTyping] = useState(false)
  const [still, setStill] = useState(false)
  const [onScreen, setOnScreen] = useState(false)
  const messages = conversations[convoIndex]

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setStill(query.matches)
    const onChange = (event: MediaQueryListEvent) => setStill(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = root.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (still || !onScreen) return
    let timeout: ReturnType<typeof setTimeout>
    if (isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(false)
        setVisibleCount((count) => count + 1)
      }, TYPING_MS)
    } else if (visibleCount < messages.length) {
      timeout = setTimeout(() => setIsTyping(true), visibleCount === 0 ? FIRST_DELAY_MS : READ_MS)
    } else {
      timeout = setTimeout(() => {
        setVisibleCount(0)
        setConvoIndex((index) => (index + 1) % conversations.length)
      }, LOOP_PAUSE_MS)
    }
    return () => clearTimeout(timeout)
  }, [isTyping, visibleCount, still, onScreen, messages.length])

  const shown: ChatMessage[] = still ? conversations[0] : messages.slice(0, visibleCount)
  const typingSide = !still && isTyping ? messages[visibleCount]?.side : undefined

  return (
    <div ref={root} aria-hidden className={cn(s.chat, className)}>
      <div className={s.chatThread} lang="es">
        {shown.map((message, index) => (
          <p
            key={`${convoIndex}-${index}`}
            className={cn(s.bubble, message.side === 'sent' ? s.bubbleSent : s.bubbleReceived)}
          >
            {message.text}
          </p>
        ))}
        {typingSide && (
          <p
            className={cn(
              s.bubble,
              s.typing,
              typingSide === 'sent' ? s.bubbleSent : s.bubbleReceived
            )}
          >
            <i />
            <i />
            <i />
          </p>
        )}
      </div>
    </div>
  )
}
