'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2025-11-01T17:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="text-center animate-fadeInUp"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg border border-wedding-gold/20">
            <div className="text-3xl md:text-4xl font-bold text-wedding-burgundy font-alex">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base text-wedding-charcoal/70 font-medium mt-2">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
