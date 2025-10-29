'use client'

import React from 'react'

interface ChurchProps {
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

export default function Church({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: ChurchProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Columnas laterales - animación de resplandor */}
      <path 
        d="m37.692,115.084h3.529s0-5.707,0-5.707c0-1.194-.22-2.376-.646-3.487-.16-.417-.389-.805-.64-1.175,0,0-2.244-3.319-2.244-3.319l-2.244,3.319c-.251.37-.48.758-.64,1.175-.426,1.111-.646,2.293-.646,3.487v5.707s3.529,0,3.529,0Z" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchGlow 3s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />
      
      <path 
        d="m89.814,115.084h-3.529v-5.707c0-1.194.22-2.376.646-3.487.16-.417.389-.805.64-1.175,0,0,2.244-3.319,2.244-3.319l2.244,3.319c.251.37.48.758.64,1.175.426,1.111.646,2.293.646,3.487v5.707s-3.529,0-3.529,0Z" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchGlow 3s ease-in-out infinite 1.5s',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />

      {/* Columna central - animación de pulso */}
      <path 
        d="m63.444,82.798h3.529s0-10.849,0-10.849c0-2.269-.22-4.516-.646-6.628-.16-.793-.389-1.53-.64-2.233,0,0-2.244-6.309-2.244-6.309l-2.244,6.309c-.251.703-.48,1.44-.64,2.233-.426,2.112-.646,4.358-.646,6.628v10.849s3.529,0,3.529,0Z" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchPulse 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 5px currentColor)'
        } : {}}
      />

      {/* Líneas horizontales - animación de aparición */}
      <line 
        x1="22.914" 
        y1="87.436" 
        x2="50.269" 
        y2="87.436" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lineDraw 2s ease-in-out infinite',
          strokeDasharray: '27.355',
          strokeDashoffset: animated ? '27.355' : '0'
        } : {}}
      />
      
      <line 
        x1="50.562" 
        y1="50.572" 
        x2="63.732" 
        y2="50.572" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lineDraw 2s ease-in-out infinite 0.5s',
          strokeDasharray: '13.17',
          strokeDashoffset: animated ? '13.17' : '0'
        } : {}}
      />
      
      <line 
        x1="104.592" 
        y1="87.436" 
        x2="77.238" 
        y2="87.436" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lineDraw 2s ease-in-out infinite 1s',
          strokeDasharray: '27.354',
          strokeDashoffset: animated ? '27.354' : '0'
        } : {}}
      />

      {/* Estructura principal - animación de construcción */}
      <polyline 
        points="50.562 63.854 19.797 84.048 22.914 87.436 22.914 121.996 50.562 121.996 50.562 50.572 54.357 45.558 54.357 38.375 63.732 9.778 63.732 5.17 63.774 5.17 63.774 9.778 73.15 38.375 73.15 45.558 76.944 50.572 76.944 121.996 104.592 121.996 104.592 87.436 107.709 84.048 76.944 63.854" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchBuild 4s ease-in-out infinite',
          strokeDasharray: '200',
          strokeDashoffset: animated ? '200' : '0'
        } : {}}
      />

      {/* Detalles internos */}
      <polyline 
        points="54.357 38.375 63.732 38.375 63.774 38.375 73.15 38.375 73.15 45.558 63.774 45.558 63.732 45.558 54.357 45.558" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchGlow 2.5s ease-in-out infinite 2s'
        } : {}}
      />
      
      <line 
        x1="76.944" 
        y1="50.572" 
        x2="63.774" 
        y2="50.572" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lineDraw 1.5s ease-in-out infinite 2.5s',
          strokeDasharray: '13.17',
          strokeDashoffset: animated ? '13.17' : '0'
        } : {}}
      />

      {/* Torres laterales */}
      <path 
        d="m50.562,121.996h4.258v-13.599c0-3.862.868-5.777,1.935-7.868h0c1.88-3.582,4.96-6.716,6.977-8.423h0" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchTower 3s ease-in-out infinite',
          transformOrigin: 'bottom'
        } : {}}
      />
      
      <polygon 
        points="56.732 101.31 56.732 121.134 63.732 121.134 63.732 101.168 56.732 101.31" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchTower 3s ease-in-out infinite 0.5s',
          transformOrigin: 'bottom'
        } : {}}
      />

      <path 
        d="m76.944,121.996h-4.258v-13.599c0-3.862-.868-5.777-1.935-7.868h0c-1.88-3.582-4.96-6.716-6.977-8.423h0" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchTower 3s ease-in-out infinite 1s',
          transformOrigin: 'bottom'
        } : {}}
      />
      
      <polygon 
        points="70.775 101.31 70.775 121.134 63.774 121.134 63.774 101.168 70.775 101.31" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchTower 3s ease-in-out infinite 1.5s',
          transformOrigin: 'bottom'
        } : {}}
      />

      {/* Cruz en la parte superior - animación de brillo */}
      <line 
        x1="61.461" 
        y1="6.953" 
        x2="66.068" 
        y2="6.953" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'crossGlow 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 8px currentColor)'
        } : {}}
      />

      {/* Líneas decorativas */}
      <line 
        x1="54.82" 
        y1="121.996" 
        x2="56.732" 
        y2="121.134" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchGlow 2s ease-in-out infinite 0.5s'
        } : {}}
      />
      
      <line 
        x1="72.686" 
        y1="121.996" 
        x2="70.775" 
        y2="121.134" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2"
        style={animated ? {
          animation: 'churchGlow 2s ease-in-out infinite 1s'
        } : {}}
      />

      {/* Ventanas - animación de parpadeo */}
      {[
        // Ventanas pequeñas
        { cx: 58.755, cy: 103.24, r: 0.752, delay: '0s' },
        { cx: 61.142, cy: 103.24, r: 0.752, delay: '0.2s' },
        { cx: 58.755, cy: 105.398, r: 0.752, delay: '0.4s' },
        { cx: 61.142, cy: 105.398, r: 0.752, delay: '0.6s' },
        { cx: 66.007, cy: 103.24, r: 0.752, delay: '0.8s' },
        { cx: 68.394, cy: 103.24, r: 0.752, delay: '1s' },
        { cx: 66.007, cy: 105.398, r: 0.752, delay: '1.2s' },
        { cx: 68.394, cy: 105.398, r: 0.752, delay: '1.4s' },
        // Ventanas grandes
        { cx: 35.849, cy: 108.707, r: 1.077, delay: '0.1s' },
        { cx: 39.271, cy: 108.707, r: 1.077, delay: '0.3s' },
        { cx: 35.849, cy: 111.799, r: 1.077, delay: '0.5s' },
        { cx: 39.271, cy: 111.799, r: 1.077, delay: '0.7s' },
        { cx: 88.126, cy: 108.707, r: 1.077, delay: '0.9s' },
        { cx: 91.547, cy: 108.707, r: 1.077, delay: '1.1s' },
        { cx: 88.126, cy: 111.799, r: 1.077, delay: '1.3s' },
        { cx: 91.547, cy: 111.799, r: 1.077, delay: '1.5s' },
        // Ventanas centrales
        { cx: 61.719, cy: 69.306, r: 1.077, delay: '0.2s' },
        { cx: 65.141, cy: 69.306, r: 1.077, delay: '0.4s' },
        { cx: 61.719, cy: 72.398, r: 1.077, delay: '0.6s' },
        { cx: 65.141, cy: 72.398, r: 1.077, delay: '0.8s' },
        { cx: 61.719, cy: 76.75, r: 1.077, delay: '1s' },
        { cx: 65.141, cy: 76.75, r: 1.077, delay: '1.2s' },
        { cx: 61.719, cy: 79.842, r: 1.077, delay: '1.4s' },
        { cx: 65.141, cy: 79.842, r: 1.077, delay: '1.6s' }
      ].map((window, index) => (
        <circle 
          key={index}
          cx={window.cx} 
          cy={window.cy} 
          r={window.r} 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: `windowTwinkle 3s ease-in-out infinite ${window.delay}`,
            filter: 'drop-shadow(0 0 2px currentColor)'
          } : {}}
        />
      ))}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes churchGlow {
            0%, 100% { 
              filter: drop-shadow(0 0 3px currentColor);
              opacity: 1;
            }
            50% { 
              filter: drop-shadow(0 0 8px currentColor);
              opacity: 0.8;
            }
          }
          
          @keyframes churchPulse {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 0 5px currentColor);
            }
            50% { 
              transform: scale(1.02);
              filter: drop-shadow(0 0 10px currentColor);
            }
          }
          
          @keyframes lineDraw {
            0% { stroke-dashoffset: var(--dash-array); }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes churchBuild {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes churchTower {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.05); }
          }
          
          @keyframes crossGlow {
            0%, 100% { 
              filter: drop-shadow(0 0 8px currentColor);
              opacity: 1;
            }
            50% { 
              filter: drop-shadow(0 0 15px currentColor);
              opacity: 0.9;
            }
          }
          
          @keyframes windowTwinkle {
            0%, 100% { 
              opacity: 0.6;
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 1;
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
