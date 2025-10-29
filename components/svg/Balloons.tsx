'use client'

import React from 'react'

interface BalloonsProps {
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

export default function Balloons({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: BalloonsProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Globo central - animación de flotación principal */}
      <ellipse 
        cx="62.139" 
        cy="31.682" 
        rx="17.1" 
        ry="23.357" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'balloonFloat 3s ease-in-out infinite',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Globo izquierdo - animación de flotación con rotación */}
      <ellipse 
        cx="38.937" 
        cy="65.675" 
        rx="18.299" 
        ry="23.357" 
        transform="translate(-27.621 28.267) rotate(-30)" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'balloonFloatLeft 3.5s ease-in-out infinite 0.5s',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Globo derecho - animación de flotación con balanceo */}
      <ellipse 
        cx="82.409" 
        cy="70.888" 
        rx="23.357" 
        ry="21.313" 
        transform="translate(-15.551 118.007) rotate(-66.389)" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'balloonFloatRight 4s ease-in-out infinite 1s',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Cuerdas - animación de ondulación */}
      <path 
        d="m62.062,119.494c.377-5.955-5.772-30.993-8.489-35.332" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'stringWave 2s ease-in-out infinite',
          strokeDasharray: '40',
          strokeDashoffset: animated ? '40' : '0'
        } : {}}
      />
      
      <path 
        d="m66.539,86.55c-5.288,7.639-3.483,25.831-1.763,34.276" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'stringWave 2s ease-in-out infinite 0.3s',
          strokeDasharray: '35',
          strokeDashoffset: animated ? '35' : '0'
        } : {}}
      />
      
      <path 
        d="m61.251,55.212c-2.659,5.63-1.747,20.698-1.175,32.905.588,12.535,3.916,27.822,3.134,32.513" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'stringWave 2s ease-in-out infinite 0.6s',
          strokeDasharray: '50',
          strokeDashoffset: animated ? '50' : '0'
        } : {}}
      />

      {/* Decoraciones pequeñas - animación de parpadeo */}
      {[
        { cx: 24.624, cy: 60.307, r: 1.564, delay: '0s' },
        { cx: 30.696, cy: 50.711, r: 2.346, delay: '0.2s' },
        { cx: 41.708, cy: 53.449, r: 2.502, delay: '0.4s' },
        { cx: 35.789, cy: 61.168, r: 1.095, delay: '0.6s' },
        { cx: 43.402, cy: 68.254, r: 2.033, delay: '0.8s' },
        { cx: 41.862, cy: 81.066, r: 0.782, delay: '1s' },
        { cx: 33.047, cy: 74.287, r: 1.251, delay: '1.2s' },
        { cx: 53.416, cy: 66.928, r: 1.799, delay: '1.4s' }
      ].map((decoration, index) => (
        <circle 
          key={index}
          cx={decoration.cx} 
          cy={decoration.cy} 
          r={decoration.r} 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10"
          style={animated ? {
            animation: `decorationTwinkle 2s ease-in-out infinite ${decoration.delay}`,
            filter: 'drop-shadow(0 0 2px currentColor)'
          } : {}}
        />
      ))}

      {/* Estrellas - animación de rotación */}
      {[
        { points: "59.877 11.132 61.155 13.721 64.013 14.136 61.945 16.152 62.433 18.998 59.877 17.654 57.322 18.998 57.81 16.152 55.742 14.136 58.599 13.721 59.877 11.132", delay: '0s' },
        { points: "67.853 26.458 68.672 28.116 70.501 28.382 69.177 29.673 69.49 31.495 67.853 30.635 66.217 31.495 66.529 29.673 65.205 28.382 67.035 28.116 67.853 26.458", delay: '0.5s' },
        { points: "55.498 25.677 57.925 30.594 63.352 31.383 59.425 35.21 60.352 40.615 55.498 38.063 50.645 40.615 51.572 35.21 47.645 31.383 53.071 30.594 55.498 25.677", delay: '1s' }
      ].map((star, index) => (
        <polygon 
          key={index}
          points={star.points} 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10"
          style={animated ? {
            animation: `starRotate 4s linear infinite ${star.delay}`,
            transformOrigin: 'center'
          } : {}}
        />
      ))}

      {/* Decoraciones pequeñas sólidas - animación de pulso */}
      {[
        { points: "75.204 55.39 75.563 56.117 76.365 56.234 75.784 56.8 75.922 57.599 75.204 57.222 74.486 57.599 74.623 56.8 74.042 56.234 74.845 56.117 75.204 55.39", delay: '0s', fill: color },
        { points: "73.171 75.822 73.316 76.116 73.641 76.164 73.406 76.393 73.461 76.717 73.171 76.564 72.88 76.717 72.935 76.393 72.7 76.164 73.025 76.116 73.171 75.822", delay: '0.3s', fill: color },
        { points: "93.971 65.482 94.305 66.16 95.053 66.268 94.512 66.796 94.64 67.541 93.971 67.189 93.301 67.541 93.429 66.796 92.888 66.268 93.636 66.16 93.971 65.482", delay: '0.6s', fill: color },
        { points: "86.307 53.858 86.473 54.193 86.844 54.247 86.576 54.509 86.639 54.878 86.307 54.704 85.976 54.878 86.039 54.509 85.771 54.247 86.142 54.193 86.307 53.858", delay: '0.9s', fill: 'none' },
        { points: "87.246 81.165 87.43 81.537 87.841 81.597 87.543 81.887 87.614 82.296 87.246 82.103 86.878 82.296 86.948 81.887 86.651 81.597 87.062 81.537 87.246 81.165", delay: '1.2s', fill: color },
        { points: "81.147 63.459 81.8 64.783 83.26 64.995 82.204 66.025 82.453 67.48 81.147 66.793 79.84 67.48 80.09 66.025 79.033 64.995 80.493 64.783 81.147 63.459", delay: '1.5s', fill: color }
      ].map((decoration, index) => (
        <polygon 
          key={index}
          points={decoration.points} 
          fill={decoration.fill} 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: `decorationPulse 1.5s ease-in-out infinite ${decoration.delay}`,
            filter: 'drop-shadow(0 0 1px currentColor)'
          } : {}}
        />
      ))}

      {/* Lazos decorativos - animación de balanceo */}
      <g>
        <path 
          d="m61.06,55.291l2.187-3.213c.979-1.441,2.528-2.394,4.255-2.619l.97-.126c.568-.074,1.145.009,1.668.241h0c.728.322,1.074,1.16.786,1.902h0c-.494,1.27-1.565,2.226-2.883,2.572l-1.708.449c-.09.024-.182.04-.275.049l-5,.744Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m61.06,55.291l-.447-2.481c-.341-1.178-.978-2.248-1.851-3.11l-.64-.631c-.54-.533-1.224-.896-1.968-1.045l-1.948-.39c-.608-.122-1.163.376-1.107.994h0c.072.796.519,1.511,1.203,1.924l2.515,1.516,4.242,3.222Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 0.2s',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m52.766,60.541l1.784-.401c2.414-.543,5.108-2.811,6.511-4.849h0l2.17,3.327c.751,1.368,1.822,2.533,3.123,3.396l1.659,1.101" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 0.4s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      <g>
        <path 
          d="m66.539,86.55l2.559-1.451c1.147-.651,2.517-.781,3.765-.357l.701.238c.41.139.774.389,1.052.721h0c.387.462.342,1.147-.102,1.554h0c-.759.697-1.807.989-2.817.784l-1.31-.266c-.069-.014-.137-.034-.203-.059l-3.644-1.165Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 0.6s',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m66.539,86.55l.526-1.834c.162-.914.087-1.854-.218-2.731l-.224-.643c-.189-.542-.532-1.017-.987-1.367l-1.193-.916c-.373-.286-.915-.133-1.084.305h0c-.217.565-.153,1.199.174,1.709l1.201,1.87,1.805,3.606Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 0.8s',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m59.151,87.344l1.346.324c1.821.438,4.409-.202,6.042-1.118h0l.362,2.985c.053,1.18.391,2.329.986,3.35l.759,1.302" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 1s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      <g>
        <path 
          d="m53.573,84.161l-1.007-2.764c-.452-1.239-.353-2.611.272-3.772l.351-.652c.205-.382.512-.699.886-.918h0c.52-.305,1.188-.147,1.516.358h0c.562.864.676,1.946.306,2.908l-.479,1.248c-.025.066-.056.13-.091.191l-1.753,3.401Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 1.2s',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m53.573,84.161l-1.722-.822c-.874-.311-1.814-.393-2.729-.237l-.671.114c-.566.096-1.091.356-1.512.747l-1.101,1.025c-.344.32-.283.881.121,1.12h0c.521.308,1.157.349,1.714.111l2.044-.875,3.855-1.182Z" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 1.4s',
            transformOrigin: 'center'
          } : {}}
        />
        <path 
          d="m53.132,91.579l.542-1.273c.734-1.723.531-4.381-.101-6.144h0l3.003.137c1.172.143,2.362,0,3.467-.417l1.41-.533" 
          fill="none" 
          stroke={color} 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={animated ? {
            animation: 'bowSway 2.5s ease-in-out infinite 1.6s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes balloonFloat {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
            }
            25% { 
              transform: translateY(-3px) rotate(1deg);
            }
            50% { 
              transform: translateY(-5px) rotate(0deg);
            }
            75% { 
              transform: translateY(-2px) rotate(-1deg);
            }
          }
          
          @keyframes balloonFloatLeft {
            0%, 100% { 
              transform: translateY(0px) rotate(-30deg) scale(1);
            }
            25% { 
              transform: translateY(-4px) rotate(-28deg) scale(1.02);
            }
            50% { 
              transform: translateY(-6px) rotate(-32deg) scale(1.01);
            }
            75% { 
              transform: translateY(-3px) rotate(-29deg) scale(1.03);
            }
          }
          
          @keyframes balloonFloatRight {
            0%, 100% { 
              transform: translateY(0px) rotate(-66.389deg) scale(1);
            }
            25% { 
              transform: translateY(-2px) rotate(-64deg) scale(1.01);
            }
            50% { 
              transform: translateY(-4px) rotate(-68deg) scale(1.02);
            }
            75% { 
              transform: translateY(-1px) rotate(-65deg) scale(1.01);
            }
          }
          
          @keyframes stringWave {
            0% { stroke-dashoffset: var(--dash-array); }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes decorationTwinkle {
            0%, 100% { 
              opacity: 0.6;
              transform: scale(1);
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 1;
              transform: scale(1.2);
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
          
          @keyframes starRotate {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(1); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          
          @keyframes decorationPulse {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 0 1px currentColor);
            }
            50% { 
              transform: scale(1.1);
              filter: drop-shadow(0 0 3px currentColor);
            }
          }
          
          @keyframes bowSway {
            0%, 100% { 
              transform: rotate(0deg) scale(1);
            }
            25% { 
              transform: rotate(2deg) scale(1.02);
            }
            50% { 
              transform: rotate(0deg) scale(1.01);
            }
            75% { 
              transform: rotate(-1deg) scale(1.02);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
