'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type ChatMessage = {
  text: string
  side: 'sent' | 'received'
}

// Three beginner-Spanglish conversations; each loop plays the next one.
const conversations: ChatMessage[][] = [
  [
    { text: 'Hola Ana! Como estas?', side: 'sent' },
    { text: 'Muy bien!! Y tu? 😄', side: 'received' },
    { text: 'Bien bien... today fue mi first clase de español', side: 'sent' },
    { text: 'No way, en serio?? Que aprendiste?', side: 'received' },
    { text: 'Un poco de everything jaja, me gusta mucho', side: 'sent' },
    { text: 'Que bueno! Ya puedes ordenar tacos solo 😎', side: 'received' },
    { text: 'Claro que si... bueno, casi jaja', side: 'sent' },
    { text: 'Jaja ya hablas como local 🌮', side: 'received' }
  ],
  [
    { text: 'Amiga! Llegué a Playa del Carmen 🏖️', side: 'sent' },
    { text: 'Nooo que envidia! Como esta el weather?', side: 'received' },
    { text: 'Muy caliente jaja, hace mucho sol', side: 'sent' },
    { text: 'Ya hablaste español con alguien?', side: 'received' },
    { text: 'Si!! Pedí un café completamente en español', side: 'sent' },
    { text: 'Orgullosa de ti!! 👏', side: 'received' },
    { text: 'La señora me entendió y todo jaja', side: 'sent' },
    { text: 'Ves? Tu puedes! 💪', side: 'received' }
  ],
  [
    { text: 'Lista para la clase de mañana?', side: 'received' },
    { text: 'Si! Pero estoy un poco nervous jaja', side: 'sent' },
    { text: 'Tranquila, tu teacher es super paciente', side: 'received' },
    { text: 'Ok ok... como se dice "homework" otra vez?', side: 'sent' },
    { text: 'Tarea 😅', side: 'received' },
    { text: 'Ah si!! Ya hice mi tarea entonces 🎉', side: 'sent' },
    { text: 'Jaja perfecto, ya estas ready', side: 'received' },
    { text: 'Gracias! Nos vemos mañana 👋', side: 'sent' }
  ]
]

// How long the typing dots show before a message appears
const TYPING_MS = 1000
// Pause after a message lands before the next person starts typing
const READ_MS = 1400
// Small beat before the very first message of a cycle
const FIRST_DELAY_MS = 500
// Pause on the finished conversation before it resets and loops
const LOOP_PAUSE_MS = 4000

function TypingDots({ side }: { side: ChatMessage['side'] }) {
  return (
    <div
      className={cn(
        'flex items-center gap-1 rounded-2xl px-3.5 py-2.5 w-fit',
        side === 'sent'
          ? 'self-end bg-sky-500 rounded-br-md'
          : 'self-start bg-white shadow-sm rounded-bl-md'
      )}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn(
            'w-1.5 h-1.5 rounded-full animate-bounce',
            side === 'sent' ? 'bg-white/80' : 'bg-gray-400'
          )}
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  )
}

function Bubble({ message }: { message: ChatMessage }) {
  return (
    <div
      className={cn(
        'max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-snug w-fit',
        message.side === 'sent'
          ? 'self-end bg-sky-500 text-white rounded-br-md'
          : 'self-start bg-white text-gray-700 shadow-sm rounded-bl-md'
      )}
    >
      {message.text}
    </div>
  )
}

export function ChatMock({ className }: { className?: string }) {
  const [convoIndex, setConvoIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const messages = conversations[convoIndex]

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(query.matches)
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    let timeout: ReturnType<typeof setTimeout>
    if (isTyping) {
      // Typing dots have been showing, reveal the next message
      timeout = setTimeout(() => {
        setIsTyping(false)
        setVisibleCount((count) => count + 1)
      }, TYPING_MS)
    } else if (visibleCount < messages.length) {
      // Wait a beat, then the next person starts typing
      timeout = setTimeout(
        () => setIsTyping(true),
        visibleCount === 0 ? FIRST_DELAY_MS : READ_MS
      )
    } else {
      // Conversation finished: pause, then start the next one
      timeout = setTimeout(() => {
        setVisibleCount(0)
        setConvoIndex((index) => (index + 1) % conversations.length)
      }, LOOP_PAUSE_MS)
    }
    return () => clearTimeout(timeout)
  }, [isTyping, visibleCount, reducedMotion, messages.length])

  const shown = reducedMotion ? conversations[0] : messages.slice(0, visibleCount)
  const typingSide = !reducedMotion && isTyping ? messages[visibleCount]?.side : undefined

  return (
    <div
      aria-hidden
      className={cn(
        'w-[280px] pointer-events-none select-none',
        'rounded-3xl bg-white/40 p-4',
        className
      )}
    >
      {/* Fixed height so the loop reset never shifts layout */}
      <div className="flex flex-col justify-end gap-2 h-[380px] overflow-hidden">
        {shown.map((message, index) => (
          <Bubble key={index} message={message} />
        ))}
        {typingSide && <TypingDots side={typingSide} />}
      </div>
    </div>
  )
}
