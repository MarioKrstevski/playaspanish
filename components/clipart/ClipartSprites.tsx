'use client'

import { cn } from '@/lib/utils'

interface ClipartSpritesProps {
  className?: string
}

export function ClipartSprites({ className }: ClipartSpritesProps) {
  return (
    <div className={cn('relative w-full h-[120px] md:h-[160px]', className)}>
      {/* Flag: slides in from left, then gentle float (bob) */}
      <div
        className="clipart-flag absolute w-24 h-24 md:w-32 md:h-32 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(/mexico-flag.png)',
          left: '10%',
          top: '100px'
        }}
        aria-hidden
      />
      {/* Sombrero: slides in from right, then gentle sway (tilt) */}
      <div
        className="clipart-hat absolute w-24 h-24 md:w-32 md:h-32 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(/mexican-sombrero.png)',
          right: '10%',
          top: '100px'
        }}
        aria-hidden
      />
      Third: slides in from right (staggered), then pulse
      <div
        className="clipart-hat absolute left-[calc(50%-2rem)] md:left-[calc(50%-2.5rem)] w-16 h-16 md:w-20 md:h-20 bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url(/mexico-sombrero.png)',
          top: '80px'
        }}
        aria-hidden
      />
    </div>
  )
}
