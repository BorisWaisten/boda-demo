'use client'

import React from 'react'

interface BaroqueFrameProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  color?: string
}

const sizeClasses = {
  sm: 'w-24 h-24',
  md: 'w-32 h-32', 
  lg: 'w-48 h-48',
  xl: 'w-64 h-64'
}

export default function BaroqueFrame({ 
  className = '', 
  size = 'md', 
  animated = false,
  color = '#D4AF37'
}: BaroqueFrameProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 300 300" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Marco exterior con volutas */}
        <path 
          d="M 20 150 Q 20 20, 150 20 Q 280 20, 280 150 Q 280 280, 150 280 Q 20 280, 20 150"
          style={animated ? {
            animation: 'frameGlow 3s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        
        {/* Marco interior decorativo */}
        <path 
          d="M 50 150 Q 50 50, 150 50 Q 250 50, 250 150 Q 250 250, 150 250 Q 50 250, 50 150"
          strokeWidth="2"
        />
        
        {/* Esquinas decorativas - volutas barrocas */}
        {/* Esquina superior izquierda */}
        <g>
          <path d="M 50 50 Q 40 40, 30 50 Q 20 60, 30 70 Q 40 80, 50 70" />
          <path d="M 50 50 Q 60 40, 70 50 Q 80 60, 70 70 Q 60 80, 50 70" />
          <circle cx="50" cy="50" r="2" fill={color} />
        </g>
        
        {/* Esquina superior derecha */}
        <g>
          <path d="M 250 50 Q 260 40, 270 50 Q 280 60, 270 70 Q 260 80, 250 70" />
          <path d="M 250 50 Q 240 40, 230 50 Q 220 60, 230 70 Q 240 80, 250 70" />
          <circle cx="250" cy="50" r="2" fill={color} />
        </g>
        
        {/* Esquina inferior izquierda */}
        <g>
          <path d="M 50 250 Q 40 260, 30 250 Q 20 240, 30 230 Q 40 220, 50 230" />
          <path d="M 50 250 Q 60 260, 70 250 Q 80 240, 70 230 Q 60 220, 50 230" />
          <circle cx="50" cy="250" r="2" fill={color} />
        </g>
        
        {/* Esquina inferior derecha */}
        <g>
          <path d="M 250 250 Q 260 260, 270 250 Q 280 240, 270 230 Q 260 220, 250 230" />
          <path d="M 250 250 Q 240 260, 230 250 Q 220 240, 230 230 Q 240 220, 250 230" />
          <circle cx="250" cy="250" r="2" fill={color} />
        </g>
        
        {/* Decoraciones laterales - guirnaldas */}
        <path 
          d="M 150 50 Q 140 60, 135 70 Q 130 80, 135 90 Q 140 100, 150 100"
          strokeWidth="1.5"
        />
        <path 
          d="M 150 50 Q 160 60, 165 70 Q 170 80, 165 90 Q 160 100, 150 100"
          strokeWidth="1.5"
        />
        
        <path 
          d="M 150 200 Q 140 190, 135 180 Q 130 170, 135 160 Q 140 150, 150 150"
          strokeWidth="1.5"
        />
        <path 
          d="M 150 200 Q 160 190, 165 180 Q 170 170, 165 160 Q 160 150, 150 150"
          strokeWidth="1.5"
        />
        
        <path 
          d="M 50 150 Q 60 140, 70 135 Q 80 130, 90 135 Q 100 140, 100 150"
          strokeWidth="1.5"
        />
        <path 
          d="M 50 150 Q 60 160, 70 165 Q 80 170, 90 165 Q 100 160, 100 150"
          strokeWidth="1.5"
        />
        
        <path 
          d="M 250 150 Q 240 140, 230 135 Q 220 130, 210 135 Q 200 140, 200 150"
          strokeWidth="1.5"
        />
        <path 
          d="M 250 150 Q 240 160, 230 165 Q 220 170, 210 165 Q 200 160, 200 150"
          strokeWidth="1.5"
        />
      </g>
      
      {animated && (
        <style jsx>{`
          @keyframes frameGlow {
            0%, 100% { opacity: 1; filter: drop-shadow(0 0 2px ${color}); }
            50% { opacity: 0.8; filter: drop-shadow(0 0 8px ${color}); }
          }
        `}</style>
      )}
    </svg>
  )
}

