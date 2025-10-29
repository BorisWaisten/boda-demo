'use client'

import React from 'react'

interface WeddingCakeProps {
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

export default function WeddingCake({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: WeddingCakeProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Capas del pastel - animación de construcción */}
      <path 
        d="m74.734,27.177c14.778.327,24.399,1.266,24.399,2.378,0,1.384-16.534,2.506-36.929,2.506s-36.929-1.122-36.929-2.506c0-1.119,10.012-2.056,24.927-2.378" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeLayer 3s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />
      
      <path 
        d="m60.16,27.053c.677-.003,1.359-.004,2.045-.004.887,0,1.766.002,2.637.006" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeGlow 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />

      <path 
        d="m99.141,71.181c6.033.89,9.62,2.003,9.62,3.212,0,2.914-20.844,5.276-46.557,5.276s-46.557-2.362-46.557-5.276c0-1.209,3.587-2.322,9.62-3.212" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeLayer 3s ease-in-out infinite 0.5s',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />

      <path 
        d="m111.399,113.169c0,4.794-23.482,8.663-49.194,8.663s-49.59-4.265-49.59-9.059" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeLayer 3s ease-in-out infinite 1s',
          filter: 'drop-shadow(0 0 3px currentColor)'
        } : {}}
      />

      <path 
        d="m99.133,71.232c0,1.384-16.534,2.506-36.929,2.506s-36.929-1.122-36.929-2.506" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeGlow 2s ease-in-out infinite 0.5s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />

      {/* Lados del pastel - animación de brillo */}
      <line 
        x1="25.276" 
        y1="71.232" 
        x2="25.276" 
        y2="29.555" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeShine 2.5s ease-in-out infinite',
          filter: 'drop-shadow(0 0 4px currentColor)'
        } : {}}
      />
      
      <line 
        x1="99.133" 
        y1="29.555" 
        x2="99.133" 
        y2="71.232" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeShine 2.5s ease-in-out infinite 0.3s',
          filter: 'drop-shadow(0 0 4px currentColor)'
        } : {}}
      />

      <line 
        x1="15.648" 
        y1="74.393" 
        x2="15.648" 
        y2="105.651" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeShine 2.5s ease-in-out infinite 0.6s',
          filter: 'drop-shadow(0 0 4px currentColor)'
        } : {}}
      />
      
      <line 
        x1="108.761" 
        y1="74.393" 
        x2="108.761" 
        y2="107.876" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cakeShine 2.5s ease-in-out infinite 0.9s',
          filter: 'drop-shadow(0 0 4px currentColor)'
        } : {}}
      />

      {/* Decoraciones de la base - animación de parpadeo */}
      {[
        { cx: 16.375, cy: 110.09, r: 4.779, delay: '0s' },
        { cx: 25.739, cy: 113.123, r: 4.779, delay: '0.1s' },
        { cx: 35.762, cy: 115.233, r: 4.779, delay: '0.2s' },
        { cx: 46.05, cy: 115.761, r: 4.779, delay: '0.3s' },
        { cx: 56.337, cy: 116.288, r: 4.779, delay: '0.4s' },
        { cx: 66.492, cy: 116.552, r: 4.779, delay: '0.5s' },
        { cx: 77.044, cy: 116.42, r: 4.779, delay: '0.6s' },
        { cx: 87.199, cy: 115.365, r: 4.779, delay: '0.7s' },
        { cx: 97.091, cy: 114.31, r: 4.779, delay: '0.8s' },
        { cx: 106.986, cy: 111.54, r: 4.779, delay: '0.9s' }
      ].map((decoration, index) => (
        <circle 
          key={index}
          cx={decoration.cx} 
          cy={decoration.cy} 
          r={decoration.r} 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: `decorationTwinkle 2s ease-in-out infinite ${decoration.delay}`,
            filter: 'drop-shadow(0 0 2px currentColor)'
          } : {}}
        />
      ))}

      {/* Decoraciones del medio - animación de brillo */}
      {[
        { cx: 28.428, cy: 67.224, rx: 3.556, ry: 3.008, delay: '0s' },
        { cx: 35.131, cy: 68.211, rx: 3.556, ry: 3.008, delay: '0.1s' },
        { cx: 42.852, cy: 68.64, rx: 3.556, ry: 3.008, delay: '0.2s' },
        { cx: 50.506, cy: 68.914, rx: 3.556, ry: 3.008, delay: '0.3s' },
        { cx: 58.159, cy: 69.561, rx: 3.556, ry: 3.008, delay: '0.4s' },
        { cx: 65.715, cy: 69.561, rx: 3.556, ry: 3.008, delay: '0.5s' },
        { cx: 73.565, cy: 68.914, rx: 3.556, ry: 3.008, delay: '0.6s' },
        { cx: 81.12, cy: 68.64, rx: 3.556, ry: 3.008, delay: '0.7s' },
        { cx: 88.216, cy: 68.211, rx: 3.556, ry: 3.008, delay: '0.8s' },
        { cx: 95.841, cy: 67.224, rx: 3.556, ry: 3.008, delay: '0.9s' }
      ].map((decoration, index) => (
        <ellipse 
          key={index}
          cx={decoration.cx} 
          cy={decoration.cy} 
          rx={decoration.rx} 
          ry={decoration.ry} 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: `decorationGlow 1.5s ease-in-out infinite ${decoration.delay}`,
            filter: 'drop-shadow(0 0 3px currentColor)'
          } : {}}
        />
      ))}

      {/* Figuras de novios - animación de rotación suave */}
      <g>
        <circle 
          cx="54.894" 
          cy="8.512" 
          r="3.404" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'coupleRotate 4s ease-in-out infinite',
            transformOrigin: 'center'
          } : {}}
        />
        <rect 
          x="49.304" 
          y="13.421" 
          width="11.18" 
          height="15.91" 
          rx="3.229" 
          ry="3.229" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'coupleRotate 4s ease-in-out infinite 0.2s',
            transformOrigin: 'center'
          } : {}}
        />
        <circle 
          cx="69.514" 
          cy="8.512" 
          r="3.404" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'coupleRotate 4s ease-in-out infinite 0.4s',
            transformOrigin: 'center'
          } : {}}
        />
        <rect 
          x="63.924" 
          y="13.421" 
          width="11.18" 
          height="15.91" 
          rx="3.229" 
          ry="3.229" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'coupleRotate 4s ease-in-out infinite 0.6s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Efectos de brillo adicionales */}
      {animated && (
        <>
          {/* Brillo superior */}
          <path
            d="M62.204 27.177 Q62.204 25 60 25 Q57.796 25 57.796 27.177"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'topGlow 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 4px currentColor)'
            }}
          />
          
          {/* Brillo medio */}
          <path
            d="M62.204 71.181 Q62.204 69 60 69 Q57.796 69 57.796 71.181"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'middleGlow 2s ease-in-out infinite 0.5s',
              filter: 'drop-shadow(0 0 3px currentColor)'
            }}
          />
          
          {/* Brillo inferior */}
          <path
            d="M62.204 113.169 Q62.204 111 60 111 Q57.796 111 57.796 113.169"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.1"
            style={{
              animation: 'bottomGlow 2s ease-in-out infinite 1s',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
        </>
      )}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes cakeLayer {
            0%, 100% { 
              transform: scaleY(1);
              filter: drop-shadow(0 0 3px currentColor);
            }
            50% { 
              transform: scaleY(1.02);
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
          
          @keyframes cakeGlow {
            0%, 100% { 
              filter: drop-shadow(0 0 2px currentColor);
              opacity: 1;
            }
            50% { 
              filter: drop-shadow(0 0 5px currentColor);
              opacity: 0.8;
            }
          }
          
          @keyframes cakeShine {
            0%, 100% { 
              filter: drop-shadow(0 0 4px currentColor);
              opacity: 1;
            }
            50% { 
              filter: drop-shadow(0 0 8px currentColor);
              opacity: 0.9;
            }
          }
          
          @keyframes decorationTwinkle {
            0%, 100% { 
              opacity: 0.7;
              transform: scale(1);
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 1;
              transform: scale(1.1);
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
          
          @keyframes decorationGlow {
            0%, 100% { 
              filter: drop-shadow(0 0 3px currentColor);
              opacity: 0.8;
            }
            50% { 
              filter: drop-shadow(0 0 6px currentColor);
              opacity: 1;
            }
          }
          
          @keyframes coupleRotate {
            0%, 100% { 
              transform: rotate(0deg) scale(1);
            }
            25% { 
              transform: rotate(1deg) scale(1.05);
            }
            50% { 
              transform: rotate(0deg) scale(1.02);
            }
            75% { 
              transform: rotate(-1deg) scale(1.05);
            }
          }
          
          @keyframes topGlow {
            0%, 100% { 
              opacity: 0.3;
              filter: drop-shadow(0 0 4px currentColor);
            }
            50% { 
              opacity: 0.6;
              filter: drop-shadow(0 0 8px currentColor);
            }
          }
          
          @keyframes middleGlow {
            0%, 100% { 
              opacity: 0.2;
              filter: drop-shadow(0 0 3px currentColor);
            }
            50% { 
              opacity: 0.5;
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
          
          @keyframes bottomGlow {
            0%, 100% { 
              opacity: 0.1;
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 0.4;
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
