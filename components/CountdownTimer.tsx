'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
}

interface CountdownTimerProps {
  /** ISO date string (e.g. '2026-05-16' or '2026-05-16T20:00:00'). Default: wedding date */
  targetDate?: string
  /** Optional class for wrapper; inner boxes use theme-aware colors when using variant */
  className?: string
  /** 'wedding' | 'cumple15' for styling */
  variant?: 'wedding' | 'cumple15'
}

export default function CountdownTimer({ targetDate = '2025-11-01T17:00:00', className, variant = 'wedding' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
  ]

  const isCumple15 = variant === 'cumple15'
  const boxClass = isCumple15
    ? 'bg-white rounded-2xl p-4 md:p-6 shadow-sm border-2 border-cumple15-red'
    : 'bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-wedding-gold/20'
  const valueClass = isCumple15
    ? 'text-xl sm:text-3xl md:text-4xl font-bold text-cumple15-red font-montserrat'
    : 'text-xl sm:text-3xl md:text-4xl font-bold text-wedding-burgundy font-alex'
  const labelClass = isCumple15
    ? 'text-xs sm:text-sm md:text-base text-cumple15-red font-medium mt-2 font-montserrat'
    : 'text-xs sm:text-sm md:text-base text-wedding-charcoal/70 font-medium mt-2'

  return (
    <div className={`grid grid-cols-3 gap-4 mx-4 md:gap-8 ${className ?? ''}`}>
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="text-center animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={boxClass}>
            <div className={valueClass}>
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className={labelClass}>
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
