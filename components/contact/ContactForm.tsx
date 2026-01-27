'use client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { AvailabilityCalendar } from '@/components/availability/AvailabilityCalendar'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  package: z.string().min(1, 'Please select a package'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type FormData = z.infer<typeof formSchema>

const packages = [
  'Basic Spanish Lessons (Group)',
  'One-on-One Phone Calls',
  'Customized Business Spanish',
  'Traveling Spanish'
]

export function ContactForm() {
  const { ref, isVisible } = useScrollAnimation()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Validate with zod
    const result = formSchema.safeParse(data)
    if (!result.success) {
      // Handle validation errors
      return
    }
    // In a real app, this would send to an API or email service
    console.log('Form submitted:', result.data)
    alert('Thank you for your interest! We will contact you soon.')
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'animate-on-scroll text-center mb-12',
            isVisible && 'visible'
          )}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-gray-600">
            Get a quote or book an introductory call to begin your Spanish learning journey
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                Package Interest *
              </label>
              <select
                id="package"
                {...register('package')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              >
                <option value="">Select a package</option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
              {errors.package && (
                <p className="mt-1 text-sm text-red-600">{errors.package.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                placeholder="Tell us about your goals and how we can help..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get a Quote / Book Introductory Call'}
              </Button>
            </form>
          </div>

          {/* Availability Calendar */}
          <div>
            <AvailabilityCalendar />
          </div>
        </div>
      </div>
    </section>
  )
}
