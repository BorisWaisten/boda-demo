'use client'

import React from 'react'

interface BaroqueGarlandProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  color?: string
}

const sizeClasses = {
  sm: 'w-32 h-16',
  md: 'w-48 h-24', 
  lg: 'w-64 h-32',
  xl: 'w-96 h-48'
}

export default function BaroqueGarland({ 
  className = '', 
  size = 'md', 
  animated = false,
  color = '#8B1538'
}: BaroqueGarlandProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 400 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Guirnalda principal - curva barroca */}
        <path 
          d="M 20 100 Q 100 20, 200 100 Q 300 180, 380 100"
          style={animated ? {
            animation: 'garlandSway 5s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        
        {/* Flores decorativas a lo largo de la guirnalda */}
        {[
          { cx: 80, cy: 60, delay: '0s' },
          { cx: 150, cy: 50, delay: '0.3s' },
          { cx: 220, cy: 50, delay: '0.6s' },
          { cx: 290, cy: 60, delay: '0.9s' },
          { cx: 200, cy: 100, delay: '1.2s' }
        ].map((flower, index) => (
          <g key={index}>
            {/* Pétalos de rosa */}
            <circle 
              cx={flower.cx} 
              cy={flower.cy} 
              r="8" 
              fill="none"
              style={animated ? {
                animation: `flowerPulse 3s ease-in-out infinite ${flower.delay}`,
                transformOrigin: 'center'
              } : {}}
            />
            <circle 
              cx={flower.cx} 
              cy={flower.cy} 
              r="5" 
              fill={color}
              opacity="0.6"
            />
            <circle 
              cx={flower.cx} 
              cy={flower.cy} 
              r="2" 
              fill={color}
            />
            
            {/* Hojas */}
            <path 
              d={`M ${flower.cx - 12} ${flower.cy} Q ${flower.cx - 8} ${flower.cy - 4}, ${flower.cx - 4} ${flower.cy}`}
              strokeWidth="1.5"
            />
            <path 
              d={`M ${flower.cx + 12} ${flower.cy} Q ${flower.cx + 8} ${flower.cy - 4}, ${flower.cx + 4} ${flower.cy}`}
              strokeWidth="1.5"
            />
          </g>
        ))}
        
        {/* Volutas decorativas en los extremos */}
        <path 
          d="M 20 100 Q 10 90, 15 80 Q 20 70, 30 75 Q 40 80, 35 90 Q 30 100, 20 100"
          strokeWidth="1.5"
        />
        <path 
          d="M 380 100 Q 390 90, 385 80 Q 380 70, 370 75 Q 360 80, 365 90 Q 370 100, 380 100"
          strokeWidth="1.5"
        />
        
        {/* Cintas decorativas */}
        <path 
          d="M 150 50 L 160 45 L 150 40 M 250 50 L 240 45 L 250 40"
          strokeWidth="2"
        />
        <path 
          d="M 150 50 L 160 55 L 150 60 M 250 50 L 240 55 L 250 60"
          strokeWidth="2"
        />
      </g>
      
      {animated && (
        <style jsx>{`
          @keyframes garlandSway {
            0%, 100% { transform: translateY(0px); }
            25% { transform: translateY(-3px); }
            50% { transform: translateY(0px); }
            75% { transform: translateY(3px); }
          }
          
          @keyframes flowerPulse {
            0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.1) rotate(5deg); opacity: 0.8; }
          }
        `}</style>
      )}
    </svg>
  )
}

