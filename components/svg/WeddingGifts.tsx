'use client'

import React from 'react'

interface WeddingGiftsProps {
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

export default function WeddingGifts({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: WeddingGiftsProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Regalo principal - animación de aparición */}
      <g>
        <line 
          x1="11.857" 
          y1="84.656" 
          x2="11.857" 
          y2="7.965" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite',
            strokeDasharray: '76.691',
            strokeDashoffset: animated ? '76.691' : '0'
          } : {}}
        />
        
        <polyline 
          points="11.857 7.965 89.518 8.054 89.518 58.575" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 0.3s',
            strokeDasharray: '80',
            strokeDashoffset: animated ? '80' : '0'
          } : {}}
        />
        
        <path 
          d="m50.687,7.877c0,6.022-1.061,18.835-1.538,24.288-.148,1.698-.084,3.408.195,5.09l2.802,16.926c.67,4.048.639,8.181-.093,12.219l-3.307,18.256" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 0.6s',
            strokeDasharray: '60',
            strokeDashoffset: animated ? '60' : '0'
          } : {}}
        />
        
        <path 
          d="m11.68,46.002l21.814,2.409c4.617.51,9.282.414,13.874-.285l10.632-1.618c4.518-.688,9.107-.786,13.651-.292l17.513,1.904,3.615,5.771" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 0.9s',
            strokeDasharray: '70',
            strokeDashoffset: animated ? '70' : '0'
          } : {}}
        />
      </g>

      {/* Lazos decorativos - animación de balanceo */}
      <path 
        d="m51.785,47.402l1.532-10.037c.685-4.499,3.26-8.49,7.077-10.967l2.142-1.391c1.254-.814,2.708-1.268,4.203-1.312h0c2.079-.061,3.839,1.523,3.995,3.597h0c.268,3.548-1.18,7.01-3.894,9.311l-3.52,2.984c-.186.158-.384.3-.593.426l-10.944,7.389Z" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'bowSway 3s ease-in-out infinite',
          transformOrigin: 'center'
        } : {}}
      />
      
      <path 
        d="m51.785,47.402l-3.849-5.343c-2.131-2.391-4.84-4.196-7.867-5.242l-2.22-.767c-1.873-.647-3.894-.732-5.814-.244l-5.03,1.277c-1.571.399-2.316,2.196-1.489,3.59h0c1.066,1.796,2.925,2.976,5.004,3.177l7.636.739,13.63,2.812Z" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'bowSway 3s ease-in-out infinite 0.5s',
          transformOrigin: 'center'
        } : {}}
      />
      
      <path 
        d="m38.155,69.123l3.752-2.956c5.077-4,8.87-12.381,9.878-18.766h0l8.864,5.394c3.311,2.377,7.149,3.916,11.186,4.483l5.151.724" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'bowSway 3s ease-in-out infinite 1s',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Base del regalo - animación de brillo */}
      <polyline 
        points="61.726 84.656 11.857 84.656 16.753 88.874 59.312 88.874" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'giftGlow 2.5s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />
      
      <polyline 
        points="89.518 8.054 93.354 23.825 93.354 61.002" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'giftGlow 2.5s ease-in-out infinite 0.3s',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />
      
      <line 
        x1="48.746" 
        y1="84.656" 
        x2="54.252" 
        y2="88.647" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'giftGlow 2.5s ease-in-out infinite 0.6s',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />

      {/* Regalo secundario - animación de aparición con delay */}
      <g>
        <line 
          x1="62.454" 
          y1="84.361" 
          x2="82.774" 
          y2="54.001" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 1.2s',
            strokeDasharray: '25',
            strokeDashoffset: animated ? '25' : '0'
          } : {}}
        />
        
        <polyline 
          points="89.59 58.575 122.297 80.519 96.185 119.532 56.632 93.06 62.454 84.361" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 1.5s',
            strokeDasharray: '80',
            strokeDashoffset: animated ? '80' : '0'
          } : {}}
        />
        
        <line 
          x1="82.774" 
          y1="54.001" 
          x2="89.59" 
          y2="58.575" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 1.8s',
            strokeDasharray: '8',
            strokeDashoffset: animated ? '8' : '0'
          } : {}}
        />
        
        <path 
          d="m102.581,67.193c-2.053,3.067-6.961,9.231-9.062,11.845-.655.814-1.204,1.707-1.636,2.659l-4.343,9.576c-1.039,2.29-2.464,4.384-4.212,6.191l-7.907,8.17" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 2.1s',
            strokeDasharray: '50',
            strokeDashoffset: animated ? '50' : '0'
          } : {}}
        />
        
        <path 
          d="m69.719,73.313l10.289,8.663c2.178,1.834,4.586,3.375,7.163,4.585l5.967,2.8c2.536,1.19,4.906,2.704,7.052,4.505l8.27,6.939-.126,4.172" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'giftBuild 2s ease-in-out infinite 2.4s',
            strokeDasharray: '60',
            strokeDashoffset: animated ? '60' : '0'
          } : {}}
        />
      </g>

      {/* Lazos del segundo regalo - animación de balanceo */}
      <g>
        <path 
          d="m90.136,87.562l-5.872-2.057c-2.632-.923-5.532-.677-7.971.676l-1.369.76c-.801.445-1.465,1.101-1.919,1.898h0c-.631,1.108-.279,2.516.798,3.197h0c1.843,1.165,4.133,1.377,6.159.57l2.627-1.047c.139-.055.273-.122.401-.198l7.146-3.798Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'bowSway 3s ease-in-out infinite 1.5s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <path 
          d="m90.136,87.562l-2.785-3.619c-.681-1.841-3.879-3.826-3.575-5.765l.223-1.422c.188-1.2.724-2.318,1.54-3.217l2.218-2.443c.927-1.021,2.575-.863,3.291.314h0c.416.683.222,1.465-.101,2.244-.484,1.165-.74,2.412-.888,3.665l-.123,1.036c-.059.503-.081,1.01-.063,1.516l.263,7.69Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'bowSway 3s ease-in-out infinite 2s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <path 
          d="m105.811,86.431l-2.678,1.18c-3.625,1.597-9.251,1.24-12.996-.05h0l.371,6.348c.334,2.476.063,4.995-.79,7.343l-1.089,2.996" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'bowSway 3s ease-in-out infinite 2.5s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Detalles finales - animación de parpadeo */}
      <polyline 
        points="122.297 80.519 118.875 89.859 96.701 122.989 96.185 119.532 56.632 93.06 57.688 96.877 96.701 122.989" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'giftTwinkle 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <line 
        x1="75.42" 
        y1="105.634" 
        x2="76.864" 
        y2="109.544" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'giftTwinkle 2s ease-in-out infinite 0.5s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />

      {/* Efectos de brillo adicionales */}
      {animated && (
        <>
          {/* Brillo superior izquierdo */}
          <circle
            cx="25"
            cy="25"
            r="1.5"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'giftSparkle 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
          
          {/* Brillo superior derecho */}
          <circle
            cx="75"
            cy="30"
            r="1"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.4"
            style={{
              animation: 'giftSparkle 3s ease-in-out infinite 1s',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
          
          {/* Brillo inferior */}
          <circle
            cx="50"
            cy="100"
            r="1.2"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'giftSparkle 3s ease-in-out infinite 2s',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
        </>
      )}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes giftBuild {
            0% { stroke-dashoffset: var(--dash-array); }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes bowSway {
            0%, 100% { 
              transform: rotate(0deg) scale(1);
            }
            25% { 
              transform: rotate(1deg) scale(1.02);
            }
            50% { 
              transform: rotate(0deg) scale(1.01);
            }
            75% { 
              transform: rotate(-1deg) scale(1.02);
            }
          }
          
          @keyframes giftGlow {
            0%, 100% { 
              filter: drop-shadow(0 0 3px currentColor);
              opacity: 1;
            }
            50% { 
              filter: drop-shadow(0 0 6px currentColor);
              opacity: 0.8;
            }
          }
          
          @keyframes giftTwinkle {
            0%, 100% { 
              opacity: 0.6;
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 1;
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
          
          @keyframes giftSparkle {
            0%, 100% { 
              opacity: 0.2;
              transform: scale(1);
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.3);
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
