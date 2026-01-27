'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PackageCardProps {
  title: string
  description: string
  features: string[]
  delay?: number
}

export function PackageCard({ title, description, features, delay = 0 }: PackageCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll h-full transition-all duration-300 hover:-translate-y-2',
        isVisible && 'visible'
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
