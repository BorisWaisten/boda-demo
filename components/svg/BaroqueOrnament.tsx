'use client'

import React from 'react'

interface BaroqueOrnamentProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  color?: string
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16', 
  lg: 'w-24 h-24',
  xl: 'w-32 h-32'
}

export default function BaroqueOrnament({ 
  className = '', 
  size = 'md', 
  animated = false,
  color = '#8B1538'
}: BaroqueOrnamentProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Volutas centrales - estilo barroco */}
        <path 
          d="M 100 50 Q 120 40, 130 60 Q 140 80, 120 90 Q 100 100, 80 90 Q 60 80, 70 60 Q 80 40, 100 50"
          style={animated ? {
            animation: 'baroqueSway 4s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="M 100 150 Q 80 160, 70 140 Q 60 120, 80 110 Q 100 100, 120 110 Q 140 120, 130 140 Q 120 160, 100 150"
          style={animated ? {
            animation: 'baroqueSway 4s ease-in-out infinite 0.5s',
            transformOrigin: 'center'
          } : {}}
        />
        
        {/* Volutas laterales */}
        <path 
          d="M 50 100 Q 40 80, 60 70 Q 80 60, 90 80 Q 100 100, 90 120 Q 80 140, 60 130 Q 40 120, 50 100"
          style={animated ? {
            animation: 'baroqueSway 4.5s ease-in-out infinite 1s',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="M 150 100 Q 160 120, 140 130 Q 120 140, 110 120 Q 100 100, 110 80 Q 120 60, 140 70 Q 160 80, 150 100"
          style={animated ? {
            animation: 'baroqueSway 4.5s ease-in-out infinite 1.5s',
            transformOrigin: 'center'
          } : {}}
        />
        
        {/* Decoraciones de filigrana */}
        <circle cx="100" cy="50" r="3" fill={color} />
        <circle cx="100" cy="150" r="3" fill={color} />
        <circle cx="50" cy="100" r="3" fill={color} />
        <circle cx="150" cy="100" r="3" fill={color} />
        
        {/* Líneas decorativas internas */}
        <path d="M 100 50 L 100 100 M 100 100 L 100 150" />
        <path d="M 50 100 L 100 100 M 100 100 L 150 100" />
        
        {/* Espirales decorativas */}
        <path 
          d="M 100 70 Q 110 75, 115 85 Q 120 95, 115 105 Q 110 115, 100 120 Q 90 115, 85 105 Q 80 95, 85 85 Q 90 75, 100 70"
          strokeWidth="1.5"
        />
        <path 
          d="M 70 100 Q 75 90, 85 85 Q 95 80, 105 85 Q 115 90, 120 100 Q 115 110, 105 115 Q 95 120, 85 115 Q 75 110, 70 100"
          strokeWidth="1.5"
        />
      </g>
      
      {animated && (
        <style jsx>{`
          @keyframes baroqueSway {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(2deg) scale(1.02); }
            50% { transform: rotate(-1deg) scale(1.01); }
            75% { transform: rotate(1deg) scale(1.02); }
          }
        `}</style>
      )}
    </svg>
  )
}

