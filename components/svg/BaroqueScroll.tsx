'use client'

import React from 'react'

interface BaroqueScrollProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  color?: string
}

const sizeClasses = {
  sm: 'w-16 h-24',
  md: 'w-24 h-32', 
  lg: 'w-32 h-48',
  xl: 'w-48 h-64'
}

export default function BaroqueScroll({ 
  className = '', 
  size = 'md', 
  animated = false,
  color = '#8B1538'
}: BaroqueScrollProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 200 300" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Volutas superiores - estilo pergamino barroco */}
        <path 
          d="M 100 20 Q 120 10, 140 20 Q 160 30, 150 50 Q 140 70, 120 60 Q 100 50, 90 40 Q 80 30, 100 20"
          style={animated ? {
            animation: 'scrollUnfold 4s ease-in-out infinite',
            transformOrigin: '100px 35px'
          } : {}}
        />
        <path 
          d="M 100 20 Q 80 10, 60 20 Q 40 30, 50 50 Q 60 70, 80 60 Q 100 50, 110 40 Q 120 30, 100 20"
          style={animated ? {
            animation: 'scrollUnfold 4s ease-in-out infinite 0.2s',
            transformOrigin: '100px 35px'
          } : {}}
        />
        
        {/* Cuerpo del pergamino */}
        <rect x="30" y="50" width="140" height="200" rx="5" strokeWidth="2.5" />
        
        {/* Líneas de texto decorativas */}
        <line x1="50" y1="80" x2="150" y2="80" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="120" x2="150" y2="120" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="160" x2="150" y2="160" strokeWidth="1.5" opacity="0.5" />
        <line x1="50" y1="200" x2="150" y2="200" strokeWidth="1.5" opacity="0.5" />
        
        {/* Volutas inferiores */}
        <path 
          d="M 100 250 Q 120 260, 140 250 Q 160 240, 150 220 Q 140 200, 120 210 Q 100 220, 90 230 Q 80 240, 100 250"
          style={animated ? {
            animation: 'scrollUnfold 4s ease-in-out infinite 0.4s',
            transformOrigin: '100px 235px'
          } : {}}
        />
        <path 
          d="M 100 250 Q 80 260, 60 250 Q 40 240, 50 220 Q 60 200, 80 210 Q 100 220, 110 230 Q 120 240, 100 250"
          style={animated ? {
            animation: 'scrollUnfold 4s ease-in-out infinite 0.6s',
            transformOrigin: '100px 235px'
          } : {}}
        />
        
        {/* Decoraciones de filigrana en las esquinas */}
        <circle cx="30" cy="50" r="3" fill={color} />
        <circle cx="170" cy="50" r="3" fill={color} />
        <circle cx="30" cy="250" r="3" fill={color} />
        <circle cx="170" cy="250" r="3" fill={color} />
        
        {/* Espirales decorativas en los extremos */}
        <path 
          d="M 30 50 Q 20 40, 25 30 Q 30 20, 40 25 Q 50 30, 45 40 Q 40 50, 30 50"
          strokeWidth="1.5"
        />
        <path 
          d="M 170 50 Q 180 40, 175 30 Q 170 20, 160 25 Q 150 30, 155 40 Q 160 50, 170 50"
          strokeWidth="1.5"
        />
      </g>
      
      {animated && (
        <style jsx>{`
          @keyframes scrollUnfold {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.02) rotate(1deg); }
            50% { transform: scale(1) rotate(0deg); }
            75% { transform: scale(1.02) rotate(-1deg); }
          }
        `}</style>
      )}
    </svg>
  )
}

