'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Clock, AlarmClock, Sun, Sunset, Moon, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'

type LessonDuration = 'trial' | '30' | '60' | '90' | '120'

const lessonOptions = [
  { value: 'trial', label: 'Trial - 30 minutes', price: 'FREE' },
  { value: '30', label: '30 minutes', price: '$25' },
  { value: '60', label: '60 minutes', price: '$45' },
  { value: '90', label: '90 minutes', price: '$65' },
  { value: '120', label: '120 minutes', price: '$85' }
]

const timeSlots = [
  { label: '6 am - 12 pm', icon: AlarmClock },
  { label: '12 pm - 5 pm', icon: Sun },
  { label: '5 pm - 12 am', icon: Sunset },
  { label: '12 am - 6 am', icon: Moon }
]

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

// Mock availability data - in real app, this would come from Calendly API
const getAvailability = () => {
  // Example: Available slots for Wed, Thu, Fri in afternoon and evening
  const available: Record<string, boolean> = {}
  const availableDays = [2, 3, 4] // Wed, Thu, Fri
  const availableTimeSlots = [1, 2] // 12pm-5pm, 5pm-12am
  
  availableDays.forEach(day => {
    availableTimeSlots.forEach(timeSlot => {
      available[`${day}-${timeSlot}`] = true
    })
  })
  
  return available
}

function getWeekDates(date: Date) {
  const start = new Date(date)
  const day = start.getDay()
  const diff = start.getDate() - day + (day === 0 ? -6 : 1) // Adjust to Monday
  start.setDate(diff)
  
  const dates = []
  for (let i = 0; i < 7; i++) {
    const current = new Date(start)
    current.setDate(start.getDate() + i)
    dates.push(current)
  }
  
  return dates
}

function formatDateRange(dates: Date[]) {
  const start = dates[0]
  const end = dates[6]
  const startStr = start.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const endStr = end.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  return `${startStr} - ${endStr}`
}

export function AvailabilityCalendar() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedDuration, setSelectedDuration] = useState<LessonDuration>('trial')
  const [currentWeek, setCurrentWeek] = useState(new Date())
  const availability = getAvailability()

  const weekDates = getWeekDates(currentWeek)

  const handlePreviousWeek = () => {
    const newDate = new Date(currentWeek)
    newDate.setDate(newDate.getDate() - 7)
    setCurrentWeek(newDate)
  }

  const handleNextWeek = () => {
    const newDate = new Date(currentWeek)
    newDate.setDate(newDate.getDate() + 7)
    setCurrentWeek(newDate)
  }

  const handleBookLesson = () => {
    // In real app, this would open Calendly with the selected duration
    const selectedOption = lessonOptions.find(opt => opt.value === selectedDuration)
    alert(`Opening booking for: ${selectedOption?.label}`)
    // window.open(`https://calendly.com/your-link?duration=${selectedDuration}`, '_blank')
  }

  const handleSeeFullCalendar = () => {
    // Open full Calendly calendar
    // window.open('https://calendly.com/your-link', '_blank')
    alert('Opening full calendar...')
  }

  const handleSendMessage = () => {
    // Scroll to contact form or open message dialog
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const selectedOption = lessonOptions.find(opt => opt.value === selectedDuration)

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll bg-white rounded-lg border border-gray-200 shadow-lg p-6',
        isVisible && 'visible'
      )}
    >
      {/* Price per lesson section */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Price per lesson</h3>
        <div className="mb-4">
          <p className="text-lg text-gray-700">
            30-minute trial lesson: <span className="text-green-600 font-bold">FREE</span>
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-5 w-5 text-gray-600" />
            <label className="text-sm font-medium text-gray-700">Lesson length:</label>
          </div>
          <div className="space-y-2">
            {lessonOptions.map((option) => {
              return (
                <label
                  key={option.value}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all',
                    selectedDuration === option.value
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  )}
                >
                  <div className={cn(
                    'relative flex items-center justify-center w-5 h-5 rounded-full border-2 transition-all',
                    selectedDuration === option.value
                      ? 'border-primary-600'
                      : 'border-gray-300'
                  )}>
                    {selectedDuration === option.value && (
                      <div className="w-3 h-3 rounded-full bg-primary-600" />
                    )}
                  </div>
                  <input
                    type="radio"
                    name="duration"
                    value={option.value}
                    checked={selectedDuration === option.value}
                    onChange={(e) => setSelectedDuration(e.target.value as LessonDuration)}
                    className="sr-only"
                  />
                  <span className="flex-1 text-gray-700">{option.label}</span>
                  {option.price !== 'FREE' && (
                    <span className="text-sm font-semibold text-gray-900">{option.price}</span>
                  )}
                </label>
              )
            })}
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleBookLesson}
            size="lg"
            className="w-full bg-gradient-to-r from-green-500 to-primary-600 hover:from-green-600 hover:to-primary-700 text-white"
          >
            {selectedOption?.price === 'FREE'
              ? `Book a trial lesson: FREE`
              : `Book ${selectedOption?.label}: ${selectedOption?.price}`}
          </Button>
          <Button
            onClick={handleSendMessage}
            variant="outline"
            size="lg"
            className="w-full border-green-500 text-green-600 hover:bg-green-50"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Send me a message
          </Button>
        </div>
      </div>

      {/* Calendar preview section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Calendar preview</h3>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">
            {formatDateRange(weekDates)}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePreviousWeek}
              className="p-1 rounded hover:bg-gray-100 transition-colors"
              aria-label="Previous week"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={handleNextWeek}
              className="p-1 rounded hover:bg-gray-100 transition-colors"
              aria-label="Next week"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-8 bg-gray-50 border-b border-gray-200">
            <div className="p-2"></div>
            {days.map((day) => (
              <div key={day} className="p-2 text-center text-xs font-medium text-gray-700 border-l border-gray-200">
                {day}
              </div>
            ))}
          </div>

          {/* Time slot rows */}
          {timeSlots.map((timeSlot, timeIndex) => {
            const Icon = timeSlot.icon
            return (
              <div key={timeIndex} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0">
                <div className="p-3 flex items-center gap-2 bg-gray-50 border-r border-gray-200">
                  <Icon className="h-4 w-4 text-gray-600" />
                  <span className="text-xs text-gray-700">{timeSlot.label}</span>
                </div>
                {days.map((_, dayIndex) => {
                  const isAvailable = availability[`${dayIndex}-${timeIndex}`]
                  return (
                    <div
                      key={dayIndex}
                      className={cn(
                        'p-2 border-l border-gray-200',
                        isAvailable ? 'bg-green-100' : 'bg-gray-50'
                      )}
                    >
                      {isAvailable && (
                        <div className="w-full h-8 bg-green-500 rounded"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>

        <Button
          onClick={handleSeeFullCalendar}
          variant="outline"
          size="lg"
          className="w-full mt-4 border-green-500 text-green-600 hover:bg-green-50"
        >
          See full calendar
        </Button>
      </div>
    </div>
  )
}
