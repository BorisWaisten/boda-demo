'use client'

import React from 'react'

interface BaroqueSVGProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: string
  style?: React.CSSProperties
  animated?: boolean
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
  '2xl': 'w-48 h-48'
}

export default function BaroqueSVG({ 
  name, 
  className = '', 
  size = 'md',
  color = '#D4AF37',
  style = {},
  animated = false
}: BaroqueSVGProps) {
  const sizeClass = sizeClasses[size]
  
  // Normalizar el nombre del archivo
  const normalizedName = name.trim()
  const svgPath = `/SVG-Barrocos/${normalizedName}.svg`

  // Función para convertir color hex a filtro CSS
  const getColorFilter = (hexColor: string) => {
    if (!hexColor) return undefined
    
    // Para dorado (#D4AF37) - ajuste fino para dorado
    if (hexColor.toLowerCase() === '#d4af37' || hexColor.toLowerCase() === '#D4AF37') {
      return `brightness(0) saturate(100%) invert(84%) sepia(78%) saturate(1352%) hue-rotate(1deg) brightness(108%) contrast(101%)`
    }
    
    // Para burgundy (#8B1538) - ajuste fino para burgundy
    if (hexColor.toLowerCase() === '#8b1538' || hexColor.toLowerCase() === '#8B1538') {
      return `brightness(0) saturate(100%) invert(12%) sepia(94%) saturate(7151%) hue-rotate(328deg) brightness(88%) contrast(95%)`
    }
    
    // Para blanco
    if (hexColor.toLowerCase() === '#ffffff' || hexColor.toLowerCase() === '#fff' || hexColor.toLowerCase() === 'white') {
      return `brightness(0) invert(1)`
    }
    
    // Filtro genérico - más simple y efectivo
    return `brightness(0) saturate(100%)`
  }

  return (
    <div 
      className={`${sizeClass} ${className} relative inline-block`}
      style={{
        ...style
      }}
    >
      <img
        src={svgPath}
        alt={name}
        className={`w-full h-full object-contain ${animated ? 'animate-pulse' : ''}`}
        style={{
          filter: color ? getColorFilter(color) : undefined,
          transition: 'filter 0.3s ease',
        }}
      />
    </div>
  )
}

