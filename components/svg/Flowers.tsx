'use client'

import React from 'react'

interface FlowersProps {
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

export default function Flowers({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: FlowersProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* Flores principales - animación de balanceo suave */}
        <g>
          <polyline 
            points="67.181 79.552 56.692 81.203 43.206 72.168 45.229 58.682 49.68 53.692" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
            style={animated ? {
              animation: 'flowerSway 3s ease-in-out infinite',
              transformOrigin: 'center'
            } : {}}
          />
          <polyline 
            points="61.412 59.626 63.3 58.277 65.863 60.435 63.975 63.267 59.524 61.109 61.008 54.771 69.774 57.603 65.863 66.504 55.748 62.728 58.176 50.186 67.211 51.13 75.303 62.188 67.077 76.483 53.591 71.089 48.466 63.132 50.354 51.4 59.929 45.87 74.359 51.13 81.102 63.942 73.819 78.506 67.181 79.552" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
            style={animated ? {
              animation: 'flowerSway 3.5s ease-in-out infinite 0.5s',
              transformOrigin: 'center'
            } : {}}
          />
        </g>

        {/* Flores secundarias - animación más sutil */}
        <polyline 
          points="46.802 40.825 46.943 39.774 48.463 39.595 48.816 41.109 46.706 41.917 45.059 39.442 48.741 37.407 50.484 41.492 46.065 43.681 42.646 38.952 45.784 36.238 51.997 36.998 54.188 44.206 48.176 47.012 43.924 46.233 40.606 41.937 41.757 37.02 48.018 33.857 54.393 35.615 56.969 42.592 52.515 49.14 45.29 50.809 41.43 45.92 41.159 42.878" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'flowerSway 4s ease-in-out infinite 1s',
            transformOrigin: 'center'
          } : {}}
        />

        <polyline 
          points="75.098 35.925 76.412 35.5 77.477 37.187 75.895 38.453 73.759 36.427 75.743 33.097 80.207 36.285 76.383 40.63 71.324 36.664 74.963 29.985 79.92 32.149 82.518 39.883 75.273 46.512 68.593 41.02 67.119 35.581 70.306 29.263 76.736 27.852 83.976 33.438 85.493 41.924 78.735 48.876 68.529 47.319 62.505 39.76 66.085 32.472 69.51 30.443" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'flowerSway 3.8s ease-in-out infinite 1.5s',
            transformOrigin: 'center'
          } : {}}
        />

        {/* Círculos de flores - animación de pulso */}
        {[
          { cx: 35.432, cy: 54.861, r: 2.63, delay: '0s' },
          { cx: 87.998, cy: 56.168, r: 2.63, delay: '0.5s' },
          { cx: 63.156, cy: 20.485, r: 2.63, delay: '1s' }
        ].map((flower, index) => (
          <g key={index}>
            <circle 
              cx={flower.cx} 
              cy={flower.cy} 
              r={flower.r} 
              fill="none" 
              stroke={color} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
              style={animated ? {
                animation: `flowerPulse 2s ease-in-out infinite ${flower.delay}`,
                transformOrigin: 'center'
              } : {}}
            />
          </g>
        ))}

        {/* Flores pequeñas - animación de rotación */}
        {[
          { cx: 36.8, cy: 68.74, r: 1.492, delay: '0.2s' },
          { cx: 87.837, cy: 29.375, r: 1.492, delay: '0.7s' },
          { cx: 82.608, cy: 71.539, r: 1.492, delay: '1.2s' },
          { cx: 44.848, cy: 27.879, r: 1.492, delay: '1.7s' }
        ].map((flower, index) => (
          <g key={index}>
            <circle 
              cx={flower.cx} 
              cy={flower.cy} 
              r={flower.r} 
              fill="none" 
              stroke={color} 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
              style={animated ? {
                animation: `flowerRotate 4s linear infinite ${flower.delay}`,
                transformOrigin: 'center'
              } : {}}
            />
          </g>
        ))}

        {/* Tallos - animación de ondulación */}
        <g>
          {[
            { x1: 61.78, y1: 80.788, x2: 59.602, y2: 116.922, delay: '0s' },
            { x1: 68.852, y1: 80.088, x2: 55.481, y2: 116.783, delay: '0.1s' },
            { x1: 67.304, y1: 80.211, x2: 55.99, y2: 116.947, delay: '0.2s' },
            { x1: 60.734, y1: 80.829, x2: 58.431, y2: 117.452, delay: '0.3s' },
            { x1: 64.257, y1: 80.489, x2: 57.695, y2: 118.672, delay: '0.4s' },
            { x1: 53.126, y1: 78.81, x2: 63.352, y2: 115.262, delay: '0.5s' },
            { x1: 59.155, y1: 81.044, x2: 60.345, y2: 115.906, delay: '0.6s' },
            { x1: 58.677, y1: 81.079, x2: 59.87, y2: 116.004, delay: '0.7s' },
            { x1: 48.66, y1: 76.897, x2: 65.257, y2: 115.405, delay: '0.8s' },
            { x1: 55.92, y1: 80.279, x2: 62.091, y2: 117.332, delay: '0.9s' }
          ].map((stem, index) => (
            <line 
              key={index}
              x1={stem.x1} 
              y1={stem.y1} 
              x2={stem.x2} 
              y2={stem.y2} 
              fill="none" 
              stroke={color} 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={animated ? {
                animation: `stemWave 3s ease-in-out infinite ${stem.delay}`,
                transformOrigin: 'top'
              } : {}}
            />
          ))}
        </g>

        {/* Hojas - animación de movimiento natural */}
        <path 
          d="m76.56,25.48c-3.308,0,1.13-9.735,2.986-11.102s8.069-5.124,10.329-5.295-1.372,9.308-3.066,10.845-6.536,5.551-10.248,5.551Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'leafSway 2.5s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />

        {/* Más hojas con diferentes animaciones */}
        {[
          { d: "m37.875,39.931c.527,2.084-6.311.84-7.468-.111s-4.513-4.265-4.981-5.661,6.081-.62,7.319.202,4.538,3.231,5.129,5.569Z", delay: '0.3s' },
          { d: "m51.184,22.93c.527,2.084-6.311.84-7.468-.111s-4.513-4.265-4.981-5.661,6.081-.62,7.319.202,4.538,3.231,5.129,5.569Z", delay: '0.6s' },
          { d: "m58.619,38.566c-.878,1.962-5.472-3.255-5.789-4.718s-.895-6.145-.397-7.53,5.155,3.285,5.616,4.698,1.556,5.349.57,7.55Z", delay: '0.9s' },
          { d: "m57.854,43.283c-2.016.745-1.505-6.186-.682-7.437s3.762-4.94,5.1-5.553,1.262,5.981.576,7.299-2.732,4.855-4.993,5.691Z", delay: '1.2s' },
          { d: "m38.623,32.223c-.46,2.442-7.274-2.234-8.058-3.801s-2.788-6.693-2.604-8.385,6.914,2.352,7.852,3.823,3.328,5.623,2.811,8.362Z", delay: '1.5s' },
          { d: "m86.944,44.677c-2.359-.781,3.182-6.912,4.839-7.481s7.004-1.874,8.657-1.466-3.25,6.54-4.834,7.273c-1.583.733-6.015,2.55-8.662,1.674Z", delay: '1.8s' }
        ].map((leaf, index) => (
          <path 
            key={index}
            d={leaf.d} 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
            style={animated ? {
              animation: `leafSway 2.5s ease-in-out infinite ${leaf.delay}`,
              transformOrigin: 'center'
            } : {}}
          />
        ))}

        {/* Base del ramo - sin animación */}
        <path 
          d="m59.285,102.646l1.778-5.888c.796-2.639,2.702-4.813,5.239-5.973l1.424-.651c.834-.381,1.759-.529,2.675-.428h0c1.274.141,2.215,1.242,2.136,2.499h0c-.135,2.151-1.309,4.103-3.158,5.251l-2.398,1.489c-.127.079-.26.147-.398.205l-7.299,3.496Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
        />
        <path 
          d="m59.285,102.646l-1.9-3.533c-1.1-1.616-2.601-2.93-4.361-3.816l-1.29-.65c-1.088-.548-2.315-.772-3.528-.643l-3.177.336c-.992.105-1.598,1.119-1.21,2.026h0c.5,1.168,1.535,2.035,2.787,2.333l4.598,1.096,8.081,2.851Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
        />
        <path 
          d="m49.143,114.508l2.538-1.452c3.434-1.965,6.453-6.667,7.604-10.41h0l4.956,3.992c1.821,1.709,4.034,2.959,6.45,3.644l3.083.875" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
        />
      </g>

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes flowerSway {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(1deg) scale(1.02); }
            50% { transform: rotate(-1deg) scale(1.01); }
            75% { transform: rotate(0.5deg) scale(1.02); }
          }
          
          @keyframes flowerPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          
          @keyframes flowerRotate {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.05); }
            50% { transform: rotate(180deg) scale(1); }
            75% { transform: rotate(270deg) scale(1.05); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          @keyframes stemWave {
            0%, 100% { transform: translateX(0px); }
            25% { transform: translateX(1px); }
            50% { transform: translateX(-1px); }
            75% { transform: translateX(0.5px); }
          }
          
          @keyframes leafSway {
            0%, 100% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(2deg) scale(1.01); }
            50% { transform: rotate(-1deg) scale(1.02); }
            75% { transform: rotate(1deg) scale(1.01); }
          }
        `}</style>
      )}
    </svg>
  )
}
