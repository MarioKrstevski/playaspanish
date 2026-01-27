'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MethodCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

export function MethodCard({ icon: Icon, title, description, delay }: MethodCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300',
        isVisible && 'visible'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-primary-100 rounded-full">
          <Icon className="h-8 w-8 text-primary-600" />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
