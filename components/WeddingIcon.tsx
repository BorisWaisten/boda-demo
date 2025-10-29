import React from 'react'
import Image from 'next/image'
import { 
  Flowers, 
  Church, 
  Music, 
  WeddingCake, 
  Balloons,
  WeddingRingsSet1,
  WeddingGifts,
  Camera,
  Calendar,
  Fireworks
} from './svg'

interface WeddingIconProps {
  name: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  type?: 'svg' | 'png'
  animated?: boolean
  color?: string
}

const iconSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
}

const pngSizes = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
}

export default function WeddingIcon({ 
  name, 
  className = '', 
  size = 'md', 
  type = 'svg',
  animated = true,
  color = '#2e3c36'
}: WeddingIconProps) {
  const sizeClass = iconSizes[size]
  const pngSize = pngSizes[size]

  // Si es PNG, usar la imagen estática
  if (type === 'png') {
    return (
      <Image
        src={`/PNG/${name}.png`}
        alt={name}
        width={pngSize}
        height={pngSize}
        className={`${sizeClass} ${className}`}
      />
    )
  }

  // Si es SVG, usar los componentes animados
  const svgProps = {
    className: `${sizeClass} ${className}`,
    size,
    animated,
    color
  }

      // Mapear nombres a componentes SVG animados
      switch (name) {
        case 'Flowers':
          return <Flowers {...svgProps} />
        case 'Church':
          return <Church {...svgProps} />
        case 'Music':
          return <Music {...svgProps} />
        case 'WeddingCake':
          return <WeddingCake {...svgProps} />
        case 'Balloons':
          return <Balloons {...svgProps} />
        case 'WeddingRingsSet1':
          return <WeddingRingsSet1 {...svgProps} />
        case 'WeddingGifts':
          return <WeddingGifts {...svgProps} />
        case 'Camera':
          return <Camera {...svgProps} />
        case 'Calendar':
          return <Calendar {...svgProps} />
        case 'Fireworks':
          return <Fireworks {...svgProps} />
        case 'WeddingRingsSet2':
        case 'WeddingRingsSet3':
        case 'instagram':
        case 'facebook':
        default:
      // Para SVG no animados, usar las imágenes originales
      const svgPath = name.includes('Set') ? 
        `/SVG_PART_1_Wedding_Icons/${name}.svg` : 
        `/SVG_PART_2_Wedding_Icons/${name}.svg`

      return (
        <Image
          src={svgPath}
          alt={name}
          width={pngSize}
          height={pngSize}
          className={`${sizeClass} ${className}`}
        />
      )
  }
}
