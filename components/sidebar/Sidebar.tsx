'use client'

import { Button } from '@/components/ui/button'
import { Calendar, Quote } from 'lucide-react'

function handleSmoothScroll(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()
  const element = document.querySelector('#contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Sidebar() {
  return (
    <aside className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40 mr-4">
      <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 space-y-4 md:space-y-6 w-72 md:w-80 max-h-[600px] overflow-y-auto">
        {/* Calendly Widget */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-primary-600" />
            <h3 className="font-semibold text-gray-900">Book a Call</h3>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <p className="text-sm text-gray-600 mb-4">
              Check Angelica&apos;s availability and book your introductory call
            </p>
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/your-calendly-link"
              style={{ minWidth: '320px', height: '400px' }}
            />
            {/* Fallback if Calendly not configured */}
            <div className="text-center py-8 text-gray-500 text-sm">
              <p>Calendly widget will appear here</p>
              <p className="text-xs mt-2">Configure your Calendly link in the component</p>
            </div>
          </div>
        </div>

        {/* Get a Quote CTA */}
        <div>
          <Button
            onClick={handleSmoothScroll}
            size="lg"
            className="w-full"
          >
            <Quote className="mr-2 h-5 w-5" />
            Get a Quote
          </Button>
        </div>
      </div>
    </aside>
  )
}
