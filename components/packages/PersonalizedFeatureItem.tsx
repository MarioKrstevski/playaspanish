'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { cn } from '@/lib/utils'

interface PersonalizedFeatureItemProps {
  feature: string
  delay: number
}

export function PersonalizedFeatureItem({ feature, delay }: PersonalizedFeatureItemProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll bg-white p-4 rounded-lg border border-primary-200',
        isVisible && 'visible'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="text-gray-800 font-medium">{feature}</p>
    </div>
  )
}
