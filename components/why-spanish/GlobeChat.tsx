'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { conversations } from './ChatMock'
import s from './globe.module.css'

const TYPING_MS = 650
const READ_MS = 850
const LOOP_PAUSE_MS = 3000
// The server renders the first few lines, so the panel is never empty.
const OPENING = 3

// The looping Spanglish conversation, no phone around it: just the bubbles
// rising over the globe.
export function GlobeChat({ className }: { className?: string }) {
  const [convo, setConvo] = useState(0)
  const [count, setCount] = useState(OPENING)
  const [typing, setTyping] = useState(false)
  const [still, setStill] = useState(false)
  const lines = conversations[convo]

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setStill(query.matches)
    const onChange = (event: MediaQueryListEvent) => setStill(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (still) return
    let timer: ReturnType<typeof setTimeout>
    if (typing) {
      timer = setTimeout(() => {
        setTyping(false)
        setCount((n) => n + 1)
      }, TYPING_MS)
    } else if (count < lines.length) {
      timer = setTimeout(() => setTyping(true), READ_MS)
    } else {
      timer = setTimeout(() => {
        setCount(0)
        setConvo((i) => (i + 1) % conversations.length)
      }, LOOP_PAUSE_MS)
    }
    return () => clearTimeout(timer)
  }, [typing, count, still, lines.length])

  const shown = still ? conversations[0].slice(-6) : lines.slice(0, count)
  const next = !still && typing ? lines[count] : undefined

  return (
    <div aria-hidden className={cn(s.chat, 'pointer-events-none select-none', className)}>
      {shown.map((line, index) => (
        <p key={`${convo}-${index}`} className={cn(s.bubble, line.side === 'sent' ? s.sent : s.received)}>
          {line.text}
        </p>
      ))}
      {next && (
        <p className={cn(s.bubble, next.side === 'sent' ? s.sent : s.received)}>
          <span className={s.typing} />
          <span className={s.typing} style={{ animationDelay: '150ms' }} />
          <span className={s.typing} style={{ animationDelay: '300ms', marginRight: 0 }} />
        </p>
      )}
    </div>
  )
}
