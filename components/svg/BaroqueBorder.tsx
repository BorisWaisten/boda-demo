'use client'

import React from 'react'

interface BaroqueBorderProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  color?: string
  orientation?: 'horizontal' | 'vertical'
}

const sizeClasses = {
  sm: 'w-64 h-8',
  md: 'w-96 h-12', 
  lg: 'w-full h-16',
  xl: 'w-full h-24'
}

export default function BaroqueBorder({ 
  className = '', 
  size = 'md', 
  animated = false,
  color = '#D4AF37',
  orientation = 'horizontal'
}: BaroqueBorderProps) {
  const sizeClass = sizeClasses[size]
  const isVertical = orientation === 'vertical'

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox={isVertical ? "0 0 200 800" : "0 0 800 200"}
      xmlns="http://www.w3.org/2000/svg"
      style={isVertical ? { transform: 'rotate(90deg)' } : {}}
    >
      <g fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Patrón repetitivo barroco */}
        {[0, 1, 2, 3].map((i) => {
          const x = i * 200
          return (
            <g key={i}>
              {/* Volutas centrales */}
              <path 
                d={`M ${x + 50} 100 Q ${x + 60} 80, ${x + 80} 90 Q ${x + 100} 100, ${x + 90} 110 Q ${x + 80} 120, ${x + 60} 110 Q ${x + 50} 100, ${x + 50} 100`}
                style={animated ? {
                  animation: `borderSway 4s ease-in-out infinite ${i * 0.5}s`,
                  transformOrigin: `${x + 75}px 100px`
                } : {}}
              />
              
              {/* Volutas laterales */}
              <path 
                d={`M ${x + 20} 100 Q ${x + 30} 90, ${x + 40} 100 Q ${x + 50} 110, ${x + 40} 120 Q ${x + 30} 130, ${x + 20} 120 Q ${x + 20} 110, ${x + 20} 100`}
                strokeWidth="2"
              />
              <path 
                d={`M ${x + 130} 100 Q ${x + 140} 90, ${x + 150} 100 Q ${x + 160} 110, ${x + 150} 120 Q ${x + 140} 130, ${x + 130} 120 Q ${x + 130} 110, ${x + 130} 100`}
                strokeWidth="2"
              />
              
              {/* Decoraciones de filigrana */}
              <circle cx={x + 75} cy="100" r="3" fill={color} />
              <circle cx={x + 30} cy="100" r="2" fill={color} />
              <circle cx={x + 140} cy="100" r="2" fill={color} />
              
              {/* Líneas decorativas */}
              <path d={`M ${x + 20} 100 L ${x + 50} 100`} strokeWidth="1.5" />
              <path d={`M ${x + 130} 100 L ${x + 160} 100`} strokeWidth="1.5" />
              
              {/* Espirales decorativas */}
              <path 
                d={`M ${x + 75} 80 Q ${x + 85} 85, ${x + 90} 95 Q ${x + 95} 105, ${x + 90} 115 Q ${x + 85} 125, ${x + 75} 120 Q ${x + 65} 115, ${x + 60} 105 Q ${x + 65} 95, ${x + 75} 80`}
                strokeWidth="1.5"
              />
            </g>
          )
        })}
      </g>
      
      {animated && (
        <style jsx>{`
          @keyframes borderSway {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.05) rotate(2deg); }
            50% { transform: scale(1) rotate(0deg); }
            75% { transform: scale(1.05) rotate(-2deg); }
          }
        `}</style>
      )}
    </svg>
  )
}

