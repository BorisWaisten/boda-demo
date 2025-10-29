'use client'

import React from 'react'

interface CameraProps {
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

export default function Camera({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: CameraProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cuerpo principal de la cámara - animación de aparición */}
      <path 
        d="m9.525,51.345l-2.026,4.187c-.412.851-.626,1.785-.626,2.731v47.361c0,3.463,2.807,6.27,6.27,6.27h98.665c3.463,0,6.27-2.807,6.27-6.27v-48.47c0-.92-.202-1.828-.593-2.661l-2.363-5.041c-.677-1.445-1.88-2.577-3.362-3.166l-14.9-5.919c-1.482-.589-2.684-1.72-3.361-3.163l-3.401-7.246c-1.033-2.201-3.245-3.606-5.676-3.606h-24.184c-2.393,0-4.578,1.363-5.631,3.512l-3.764,7.684c-.604,1.234-1.598,2.236-2.827,2.85l-34.077,7.53c-1.925.385-3.559,1.65-4.414,3.417Z" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'cameraBuild 2.5s ease-in-out infinite',
          strokeDasharray: '200',
          strokeDashoffset: animated ? '200' : '0'
        } : {}}
      />

      {/* Lente principal - animación de enfoque */}
      <circle 
        cx="72.277" 
        cy="76.697" 
        r="19.603" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lensFocus 3s ease-in-out infinite',
          filter: 'drop-shadow(0 0 4px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />
      
      <circle 
        cx="72.277" 
        cy="76.697" 
        r="27.314" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lensFocus 3s ease-in-out infinite 0.3s',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />
      
      <circle 
        cx="72.277" 
        cy="76.697" 
        r="31.794" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'lensFocus 3s ease-in-out infinite 0.6s',
          filter: 'drop-shadow(0 0 2px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Flash - animación de parpadeo */}
      <path 
        d="m104.021,70.222c4.22,0,7.641,2.553,7.641,5.703s-3.421,5.703-7.641,5.703" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'flashBlink 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 6px currentColor)',
          opacity: 0.8
        } : {}}
      />

      {/* Visor - animación de parpadeo suave */}
      <ellipse 
        cx="23.443" 
        cy="51.755" 
        rx="5.408" 
        ry="3.321" 
        transform="translate(-11.712 7.12) rotate(-13.856)" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'viewfinderBlink 4s ease-in-out infinite',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <circle 
        cx="39.753" 
        cy="53.618" 
        r="2.584" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'viewfinderBlink 4s ease-in-out infinite 0.5s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <path 
        d="m26.752,44.803l-.725-3.138c-.33-1.177.445-2.378,1.653-2.563l16.194-3.146c.668-.102,1.471.954,1.615,1.615l.591,2.949" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'viewfinderBlink 4s ease-in-out infinite 1s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />

      {/* Botones de control - animación de parpadeo secuencial */}
      <ellipse 
        cx="63.984" 
        cy="30.629" 
        rx="2.043" 
        ry="2.139" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'buttonGlow 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <ellipse 
        cx="68.612" 
        cy="30.876" 
        rx="1.582" 
        ry="1.832" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'buttonGlow 2s ease-in-out infinite 0.2s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <ellipse 
        cx="73.068" 
        cy="30.876" 
        rx="1.582" 
        ry="1.832" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'buttonGlow 2s ease-in-out infinite 0.4s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <ellipse 
        cx="77.3" 
        cy="30.876" 
        rx="1.582" 
        ry="1.832" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'buttonGlow 2s ease-in-out infinite 0.6s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />
      
      <ellipse 
        cx="81.422" 
        cy="30.876" 
        rx="1.582" 
        ry="1.832" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'buttonGlow 2s ease-in-out infinite 0.8s',
          filter: 'drop-shadow(0 0 2px currentColor)'
        } : {}}
      />

      {/* Correa - animación de balanceo */}
      <path 
        d="m29.06,45.064c1.604,1.617,4.99,6.917,4.99,12.306s-8.822,4.402-8.822,8.893v45.363" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'strapSway 4s ease-in-out infinite',
          transformOrigin: 'top center'
        } : {}}
      />

      {/* Icono de cámara en el lente - animación de pulso */}
      <path 
        d="m72.277,72.162c1.963-3.886,6.374-4.786,8.191-1.637h0c1.059,1.835.811,4.144-.615,5.712l-7.14,8.437c-.229.27-.645.27-.874,0l-7.14-8.437c-1.425-1.568-1.674-3.877-.615-5.712h0c1.817-3.149,6.268-2.585,8.191,1.637" 
        fill={color} 
        stroke={color} 
        strokeMiterlimit="10"
        style={animated ? {
          animation: 'cameraIconPulse 2.5s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Efectos de flash adicionales */}
      {animated && (
        <>
          {/* Rayos de flash */}
          <line
            x1="110"
            y1="65"
            x2="120"
            y2="55"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'flashRay 0.5s ease-in-out infinite',
              filter: 'drop-shadow(0 0 3px currentColor)'
            }}
          />
          
          <line
            x1="110"
            y1="75"
            x2="120"
            y2="85"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'flashRay 0.5s ease-in-out infinite 0.1s',
              filter: 'drop-shadow(0 0 3px currentColor)'
            }}
          />
          
          <line
            x1="105"
            y1="70"
            x2="115"
            y2="70"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'flashRay 0.5s ease-in-out infinite 0.2s',
              filter: 'drop-shadow(0 0 3px currentColor)'
            }}
          />
          
          {/* Brillo en el lente */}
          <circle
            cx="72"
            cy="75"
            r="3"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'lensShine 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
        </>
      )}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes cameraBuild {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes lensFocus {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 0 4px currentColor);
            }
            50% { 
              transform: scale(1.05);
              filter: drop-shadow(0 0 8px currentColor);
            }
          }
          
          @keyframes flashBlink {
            0%, 90% { 
              opacity: 0.8;
              filter: drop-shadow(0 0 6px currentColor);
            }
            95% { 
              opacity: 1;
              filter: drop-shadow(0 0 12px currentColor);
            }
            100% { 
              opacity: 0.8;
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
          
          @keyframes viewfinderBlink {
            0%, 90% { 
              opacity: 0.7;
              filter: drop-shadow(0 0 2px currentColor);
            }
            95% { 
              opacity: 1;
              filter: drop-shadow(0 0 4px currentColor);
            }
            100% { 
              opacity: 0.7;
              filter: drop-shadow(0 0 2px currentColor);
            }
          }
          
          @keyframes buttonGlow {
            0%, 100% { 
              opacity: 0.6;
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              opacity: 1;
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
          
          @keyframes strapSway {
            0%, 100% { 
              transform: rotate(0deg);
            }
            25% { 
              transform: rotate(1deg);
            }
            75% { 
              transform: rotate(-1deg);
            }
          }
          
          @keyframes cameraIconPulse {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 0 3px currentColor);
            }
            50% { 
              transform: scale(1.1);
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
          
          @keyframes flashRay {
            0%, 90% { 
              opacity: 0;
              transform: scale(0.5);
            }
            95% { 
              opacity: 0.3;
              transform: scale(1);
            }
            100% { 
              opacity: 0;
              transform: scale(0.5);
            }
          }
          
          @keyframes lensShine {
            0%, 100% { 
              opacity: 0.2;
              transform: scale(1);
            }
            50% { 
              opacity: 0.6;
              transform: scale(1.2);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
