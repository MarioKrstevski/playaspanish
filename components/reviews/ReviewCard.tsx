'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReviewCardProps {
  name: string
  rating: number
  review: string
  delay?: number
}

export function ReviewCard({ name, rating, review, delay = 0 }: ReviewCardProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={cn(
        'animate-on-scroll',
        isVisible && 'visible'
      )}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  'h-5 w-5',
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                )}
              />
            ))}
          </div>
          <p className="text-gray-700 mb-4 italic">&quot;{review}&quot;</p>
          <p className="text-sm font-semibold text-gray-900">— {name}</p>
        </CardContent>
      </Card>
    </div>
  )
}
