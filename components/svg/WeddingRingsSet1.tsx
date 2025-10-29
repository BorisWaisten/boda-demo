'use client'

import React from 'react'

interface WeddingRingsSet1Props {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  color?: string
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8', 
  lg: 'w-12 h-12',
  xl: 'w-16 h-16'
}

export default function WeddingRingsSet1({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: WeddingRingsSet1Props) {
  const sizeClass = sizeClasses[size]

  return (
    <div className={`${sizeClass} ${className}`}>
      <svg 
        className="w-full h-full"
        viewBox="0 0 125.205 127.311" 
        xmlns="http://www.w3.org/2000/svg"
      >
      {/* Grupo de anillos principales con animación de dibujo */}
      <g>
        {/* Anillo izquierdo */}
        <path 
          d="m44.297,98.482c-1.423.208-2.878.315-4.359.315-16.53,0-29.93-13.4-29.93-29.93s13.4-29.93,29.93-29.93c10.42,0,19.596,5.324,24.956,13.401" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          className={animated ? 'wedding-ring-draw-1' : ''}
        />
        
        {/* Anillo derecho */}
        <path 
          d="m68.279,59.219c1.03,3.027,1.589,6.272,1.589,9.648,0,12.367-7.501,22.983-18.202,27.545" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          className={animated ? 'wedding-ring-draw-2' : ''}
        />
        
        {/* Anillo central */}
        <path 
          d="m51.515,96.359c-1.025-3.02-1.58-6.256-1.58-9.622,0-16.53,13.4-29.93,29.93-29.93s29.93,13.4,29.93,29.93-13.4,29.93-29.93,29.93c-13.164,0-24.343-8.499-28.35-20.308" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          className={animated ? 'wedding-ring-draw-3' : ''}
        />
      </g>

      {/* Anillos exteriores con animación de dibujo */}
      <path 
        d="m47.019,105.153c-2.291.456-4.658.695-7.081.695-20.163,0-36.508-16.557-36.508-36.981,0-18.208,12.991-33.343,30.097-36.413" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        className={animated ? 'wedding-ring-draw-outer' : ''}
      />
      
      <path 
        d="m74.608,57.249c1.193,3.654,1.838,7.559,1.838,11.618,0,15.164-9.011,28.197-21.905,33.904" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        className={animated ? 'wedding-ring-draw-outer' : ''}
      />
      
      <path 
        d="m46.636,32.507c10.573,1.986,19.546,8.587,24.807,17.663" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        className={animated ? 'wedding-ring-draw-outer' : ''}
      />

      {/* Anillo más grande con animación */}
      <path 
        d="m43.738,98.999c-1.306-3.848-2.014-7.972-2.014-12.262,0-21.065,17.076-38.141,38.141-38.141s38.141,17.076,38.141,38.141-17.076,38.141-38.141,38.141c-16.775,0-31.021-10.83-36.128-25.88" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        className={animated ? 'wedding-ring-draw-outer' : ''}
      />

      {/* Cadenas decorativas con animación */}
      <polyline 
        points="43.269 22.624 39.467 18.652 36.515 22.624 31.683 18.708 28.399 22.624" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        className={animated ? 'wedding-ring-draw-decorations' : ''}
      />
      
      <polyline 
        points="43.19 22.624 41.216 38.96 38.339 38.96 36.365 22.624 38.339 38.96 36.365 22.624 28.636 22.624 51.472 22.633 51.472 22.633 47.139 18.821 43.269 22.624" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        className={animated ? 'wedding-ring-draw-decorations' : ''}
      />

      {/* Anillo central con detalles - estático */}
      <path 
        d="m36.973,18.426h13.237s1.245,1.26,1.245,1.26l.016,2.947-.578,1.461s-7.116,14.278-7.704,14.866h.226s-4.211,0-5.877,0c-.438,0-.843-.454-1.064-.832-1.358-2.323-7.405-13.797-7.405-13.797l-.676-1.706-.026-2.938,1.245-1.26h13.237" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
      />

      {/* Decoraciones laterales - estáticas */}
      <path 
        d="m25.586,13.601l2.617,2.618" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />
      
      <line 
        x1="29.775" 
        y1="8.891" 
        x2="32.078" 
        y2="12.975" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />
      
      <line 
        x1="34.348" 
        y1="5.75" 
        x2="36.279" 
        y2="11.411" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />
      
      <path 
        d="m54.149,13.601l-2.617,2.618" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />
      
      <line 
        x1="49.959" 
        y1="8.891" 
        x2="47.657" 
        y2="12.975" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />
      
      <line 
        x1="45.387" 
        y1="5.75" 
        x2="43.455" 
        y2="11.411" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />
      
      <line 
        x1="40.163" 
        y1="10.631" 
        x2="40.163" 
        y2="1.417" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeMiterlimit="10" 
        strokeWidth="2"
      />


      </svg>
    </div>
  )
}