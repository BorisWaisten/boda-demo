'use client'

import React from 'react'

interface FireworksProps {
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

export default function Fireworks({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: FireworksProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Explosión principal - animación de aparición secuencial */}
      <g>
        <g>
          <line 
            x1="39.329" 
            y1="84.757" 
            x2="36.433" 
            y2="65.435" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="40.417" 
            y1="81.741" 
            x2="39.327" 
            y2="58.826" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.1s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="42.186" 
            y1="75.717" 
            x2="46.322" 
            y2="60.498" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.2s',
              strokeDasharray: '18',
              strokeDashoffset: animated ? '18' : '0'
            } : {}}
          />
          
          <line 
            x1="41.265" 
            y1="84.159" 
            x2="51.009" 
            y2="64.801" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.3s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
        
        <g>
          <line 
            x1="35.558" 
            y1="87.248" 
            x2="19.007" 
            y2="76.866" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.4s',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="33.977" 
            y1="84.46" 
            x2="15.875" 
            y2="70.366" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.5s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="30.557" 
            y1="79.194" 
            x2="21.7" 
            y2="66.146" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.6s',
              strokeDasharray: '15',
              strokeDashoffset: animated ? '15' : '0'
            } : {}}
          />
          
          <line 
            x1="36.365" 
            y1="85.39" 
            x2="28.016" 
            y2="65.39" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.7s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
        
        <g>
          <line 
            x1="35.626" 
            y1="91.302" 
            x2="17.034" 
            y2="97.308" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.8s',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="32.474" 
            y1="90.721" 
            x2="10.041" 
            y2="95.529" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 0.9s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="26.242" 
            y1="89.957" 
            x2="10.552" 
            y2="88.354" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1s',
              strokeDasharray: '18',
              strokeDashoffset: animated ? '18' : '0'
            } : {}}
          />
          
          <line 
            x1="34.721" 
            y1="89.49" 
            x2="14.034" 
            y2="83.029" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.1s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
        
        <g>
          <line 
            x1="38.775" 
            y1="93.856" 
            x2="31.425" 
            y2="111.959" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.2s',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="36.303" 
            y1="95.897" 
            x2="25.567" 
            y2="116.172" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.3s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="31.712" 
            y1="100.18" 
            x2="20.4" 
            y2="111.169" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.4s',
              strokeDasharray: '15',
              strokeDashoffset: animated ? '15' : '0'
            } : {}}
          />
          
          <line 
            x1="36.805" 
            y1="93.385" 
            x2="18.558" 
            y2="105.079" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.5s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
        
        <g>
          <line 
            x1="42.755" 
            y1="93.086" 
            x2="51.898" 
            y2="110.352" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.6s',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="42.73" 
            y1="96.291" 
            x2="51.36" 
            y2="117.548" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.7s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="43.06" 
            y1="102.561" 
            x2="44.206" 
            y2="118.29" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.8s',
              strokeDasharray: '18',
              strokeDashoffset: animated ? '18' : '0'
            } : {}}
          />
          
          <line 
            x1="41.128" 
            y1="94.292" 
            x2="38.358" 
            y2="115.786" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 1.9s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
        
        <g>
          <line 
            x1="44.724" 
            y1="89.541" 
            x2="63.828" 
            y2="93.636" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2s',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="47.163" 
            y1="91.621" 
            x2="68.994" 
            y2="98.673" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.1s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="52.178" 
            y1="95.398" 
            x2="64.964" 
            y2="104.631" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.2s',
              strokeDasharray: '18',
              strokeDashoffset: animated ? '18' : '0'
            } : {}}
          />
          
          <line 
            x1="44.601" 
            y1="91.563" 
            x2="59.287" 
            y2="107.502" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.3s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
        
        <g>
          <line 
            x1="43.274" 
            y1="85.755" 
            x2="58.691" 
            y2="73.753" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.4s',
              strokeDasharray: '20',
              strokeDashoffset: animated ? '20' : '0'
            } : {}}
          />
          
          <line 
            x1="46.435" 
            y1="85.223" 
            x2="65.87" 
            y2="73.033" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.5s',
              strokeDasharray: '25',
              strokeDashoffset: animated ? '25' : '0'
            } : {}}
          />
          
          <line 
            x1="52.552" 
            y1="83.809" 
            x2="67.843" 
            y2="79.949" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.6s',
              strokeDasharray: '18',
              strokeDashoffset: animated ? '18' : '0'
            } : {}}
          />
          
          <line 
            x1="44.744" 
            y1="87.148" 
            x2="66.393" 
            y2="86.144" 
            fill="none" 
            stroke={color} 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={animated ? {
              animation: 'fireworkExplode 0.8s ease-out infinite 2.7s',
              strokeDasharray: '22',
              strokeDashoffset: animated ? '22' : '0'
            } : {}}
          />
        </g>
      </g>

      {/* Estrellas decorativas - animación de parpadeo */}
      <polygon 
        points="51.699 74.724 50.492 73.51 48.966 74.283 49.747 72.76 48.54 71.547 50.229 71.819 51.011 70.297 51.274 71.988 52.963 72.26 51.436 73.033 51.699 74.724" 
        fill={color} 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={animated ? {
          animation: 'starTwinkle 1.5s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />
      
      <polygon 
        points="115.007 85.364 113.8 84.15 112.273 84.923 113.054 83.4 111.848 82.187 113.537 82.459 114.318 80.937 114.581 82.628 116.271 82.9 114.744 83.673 115.007 85.364" 
        fill={color} 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={animated ? {
          animation: 'starTwinkle 1.5s ease-in-out infinite 0.3s',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />
      
      <polygon 
        points="81.208 19.957 80.002 18.744 78.475 19.517 79.256 17.994 78.049 16.781 79.739 17.053 80.52 15.531 80.783 17.221 82.472 17.494 80.945 18.266 81.208 19.957" 
        fill={color} 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={animated ? {
          animation: 'starTwinkle 1.5s ease-in-out infinite 0.6s',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />
      
      <polygon 
        points="43.44 20.749 42.233 19.535 40.706 20.308 41.487 18.785 40.281 17.572 41.97 17.844 42.751 16.322 43.014 18.013 44.704 18.285 43.177 19.058 43.44 20.749" 
        fill={color} 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={animated ? {
          animation: 'starTwinkle 1.5s ease-in-out infinite 0.9s',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Estrellas adicionales - animación de rotación */}
      <polygon 
        points="29.024 60.41 27.257 59.94 26.263 61.475 26.165 59.649 24.397 59.179 26.104 58.52 26.005 56.694 27.158 58.114 28.864 57.455 27.871 58.991 29.024 60.41" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={animated ? {
          animation: 'starRotate 3s linear infinite',
          filter: 'drop-shadow(0 0 2px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />
      
      <polygon 
        points="71.541 9.961 69.773 9.491 68.78 11.026 68.681 9.2 66.914 8.73 68.62 8.071 68.521 6.245 69.675 7.665 71.381 7.006 70.387 8.542 71.541 9.961" 
        fill="none" 
        stroke={color} 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={animated ? {
          animation: 'starRotate 3s linear infinite 0.5s',
          filter: 'drop-shadow(0 0 2px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Explosión secundaria - animación de aparición con delay */}
      <g>
        <line 
          x1="99.335" 
          y1="68.147" 
          x2="104.527" 
          y2="52.316" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'fireworkExplode 0.8s ease-out infinite 3s',
            strokeDasharray: '15',
            strokeDashoffset: animated ? '15' : '0'
          } : {}}
        />
        
        <line 
          x1="100.662" 
          y1="68.966" 
          x2="104.877" 
          y2="61.37" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'fireworkExplode 0.8s ease-out infinite 3.1s',
            strokeDasharray: '8',
            strokeDashoffset: animated ? '8' : '0'
          } : {}}
        />
        
        <line 
          x1="103.05" 
          y1="70.989" 
          x2="109.234" 
          y2="64.888" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'fireworkExplode 0.8s ease-out infinite 3.2s',
            strokeDasharray: '10',
            strokeDashoffset: animated ? '10' : '0'
          } : {}}
        />
        
        <line 
          x1="102.06" 
          y1="69.96" 
          x2="111.973" 
          y2="58.227" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'fireworkExplode 0.8s ease-out infinite 3.3s',
            strokeDasharray: '18',
            strokeDashoffset: animated ? '18' : '0'
          } : {}}
        />
      </g>

      {/* Efectos de brillo adicionales */}
      {animated && (
        <>
          {/* Brillo central */}
          <circle
            cx="40"
            cy="80"
            r="3"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'fireworkGlow 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 4px currentColor)'
            }}
          />
          
          {/* Brillo secundario */}
          <circle
            cx="100"
            cy="70"
            r="2"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'fireworkGlow 2s ease-in-out infinite 1s',
              filter: 'drop-shadow(0 0 3px currentColor)'
            }}
          />
          
          {/* Brillo superior */}
          <circle
            cx="80"
            cy="20"
            r="1.5"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.4"
            style={{
              animation: 'fireworkGlow 2s ease-in-out infinite 0.5s',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
        </>
      )}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes fireworkExplode {
            0% { 
              stroke-dashoffset: var(--dash-array);
              opacity: 0;
              transform: scale(0.5);
            }
            50% { 
              opacity: 1;
              transform: scale(1.1);
            }
            100% { 
              stroke-dashoffset: 0;
              opacity: 0.8;
              transform: scale(1);
            }
          }
          
          @keyframes starTwinkle {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1);
              filter: drop-shadow(0 0 3px currentColor);
            }
            50% { 
              opacity: 1;
              transform: scale(1.3);
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
          
          @keyframes starRotate {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          @keyframes fireworkGlow {
            0%, 100% { 
              opacity: 0.2;
              transform: scale(1);
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 0.8;
              transform: scale(1.5);
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
