'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureItemProps {
  feature: string
  delay: number
}

export function FeatureItem({ feature, delay }: FeatureItemProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll flex items-center gap-2',
        isVisible && 'visible'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
      <span className="text-gray-700">{feature}</span>
    </div>
  )
}
