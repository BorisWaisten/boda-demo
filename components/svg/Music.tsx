'use client'

import React from 'react'

interface MusicProps {
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

export default function Music({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: MusicProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Notas musicales - animación de vibración */}
      <path 
        d="m57.674,104.092c.928,5.001-4.433,10.189-11.952,11.583-7.519,1.395-14.365-1.529-15.293-6.53s4.415-10.185,11.934-11.58,14.383,1.526,15.311,6.526Z" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'noteVibrate 0.5s ease-in-out infinite',
          transformOrigin: 'center'
        } : {}}
      />
      
      <path 
        d="m100.664,96.118c.928,5.001-4.77,10.251-12.289,11.646s-14.365-1.529-15.293-6.53,4.415-10.185,11.934-11.58c7.519-1.395,14.72,1.463,15.648,6.464Z" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'noteVibrate 0.5s ease-in-out infinite 0.25s',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Línea de conexión - animación de ondas */}
      <polyline 
        points="57.674 104.092 49.418 59.483 92.745 51.447 100.664 96.118" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'musicWave 2s ease-in-out infinite',
          strokeDasharray: '100',
          strokeDashoffset: animated ? '100' : '0'
        } : {}}
      />

      {/* Clave de sol - animación de rotación suave */}
      <g>
        <ellipse 
          cx="23.194" 
          cy="54.02" 
          rx="10.155" 
          ry="7.972" 
          transform="translate(-14.692 9.067) rotate(-16.887)" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'clefRotate 4s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m32.974,51.605l-11.356-35.101,11.86,2.608c3.534.777,6.64,2.868,8.689,5.85l4.052,5.896-4.072-3.418c-3.833-3.218-8.834-4.691-13.8-4.066l-4.37.55" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'clefRotate 4s ease-in-out infinite 0.5s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Clave de fa - animación de pulso */}
      <g>
        <ellipse 
          cx="88.831" 
          cy="32.843" 
          rx="5.256" 
          ry="7.097" 
          transform="translate(29.564 106.715) rotate(-71.551)" 
          fill={color} 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'bassClefPulse 1.5s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m95.642,34.553l7.795-23.041,5.251,6.044c1.564,1.801,2.386,4.129,2.297,6.513l-.174,4.713-.811-3.41c-.763-3.21-2.83-5.957-5.704-7.579l-2.529-1.427" 
          fill={color} 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2"
          style={animated ? {
            animation: 'bassClefPulse 1.5s ease-in-out infinite 0.3s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Pentagrama - animación de ondas de sonido */}
      <polygon 
        points="49.418 59.483 52.24 76.338 95.566 68.302 92.745 51.447 49.418 59.483" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'staffWave 3s ease-in-out infinite',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Ondas de sonido adicionales - solo visibles cuando está animado */}
      {animated && (
        <>
          {/* Onda 1 */}
          <path
            d="M30 70 Q50 60 70 70 Q90 80 110 70"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'soundWave1 2s ease-in-out infinite',
              strokeDasharray: '50',
              strokeDashoffset: '50'
            }}
          />
          
          {/* Onda 2 */}
          <path
            d="M25 75 Q45 65 65 75 Q85 85 105 75"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'soundWave2 2.5s ease-in-out infinite 0.5s',
              strokeDasharray: '50',
              strokeDashoffset: '50'
            }}
          />
          
          {/* Onda 3 */}
          <path
            d="M20 80 Q40 70 60 80 Q80 90 100 80"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.1"
            style={{
              animation: 'soundWave3 3s ease-in-out infinite 1s',
              strokeDasharray: '50',
              strokeDashoffset: '50'
            }}
          />
        </>
      )}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes noteVibrate {
            0%, 100% { transform: translateX(0px) scale(1); }
            25% { transform: translateX(1px) scale(1.02); }
            50% { transform: translateX(-1px) scale(1.01); }
            75% { transform: translateX(0.5px) scale(1.02); }
          }
          
          @keyframes musicWave {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes clefRotate {
            0%, 100% { transform: rotate(-16.887deg) scale(1); }
            25% { transform: rotate(-14deg) scale(1.05); }
            50% { transform: rotate(-18deg) scale(1.02); }
            75% { transform: rotate(-16deg) scale(1.03); }
          }
          
          @keyframes bassClefPulse {
            0%, 100% { 
              transform: scale(1);
              opacity: 1;
            }
            50% { 
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
          
          @keyframes staffWave {
            0%, 100% { 
              transform: scaleY(1) scaleX(1);
            }
            25% { 
              transform: scaleY(1.05) scaleX(1.02);
            }
            50% { 
              transform: scaleY(1.02) scaleX(1.05);
            }
            75% { 
              transform: scaleY(1.08) scaleX(1.01);
            }
          }
          
          @keyframes soundWave1 {
            0% { 
              stroke-dashoffset: 50;
              opacity: 0.3;
            }
            50% { 
              stroke-dashoffset: 0;
              opacity: 0.6;
            }
            100% { 
              stroke-dashoffset: -50;
              opacity: 0.3;
            }
          }
          
          @keyframes soundWave2 {
            0% { 
              stroke-dashoffset: 50;
              opacity: 0.2;
            }
            50% { 
              stroke-dashoffset: 0;
              opacity: 0.4;
            }
            100% { 
              stroke-dashoffset: -50;
              opacity: 0.2;
            }
          }
          
          @keyframes soundWave3 {
            0% { 
              stroke-dashoffset: 50;
              opacity: 0.1;
            }
            50% { 
              stroke-dashoffset: 0;
              opacity: 0.3;
            }
            100% { 
              stroke-dashoffset: -50;
              opacity: 0.1;
            }
          }
        `}</style>
      )}
    </svg>
  )
}
