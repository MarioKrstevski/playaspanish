import type { Metadata } from 'next'
import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { Moon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anki Deck - Playa Spanish',
  description:
    'A Spanish Anki deck from your Playa Spanish teacher. Study between lessons with flashcards built to match what you learn in class. Coming soon.'
}

export default function AnkiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center bg-gradient-to-b from-violet-100 via-violet-50 to-indigo-50 pt-20">
        <div className="container mx-auto px-4 py-24 text-center max-w-2xl">
          <Moon aria-hidden className="w-10 h-10 text-violet-300 mx-auto mb-6" strokeWidth={1} />
          <p className="text-sm uppercase tracking-[0.3em] text-violet-500 mb-4">Coming soon</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Playa Spanish Anki Deck
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Somewhere between homework and learning on your own: a Spanish flashcard deck made by
            your teacher, matching what you cover in class. Review at home, arrive at your next
            lesson a step ahead.
          </p>
          <p className="text-gray-600">
            The deck will be available on its own or alongside your course. Want to know when it
            launches? Mention it in your first email.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
