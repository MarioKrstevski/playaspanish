'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

export function BenefitCard({ icon: Icon, title, description, delay }: BenefitCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300',
        isVisible && 'visible'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary-100 rounded-lg">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
