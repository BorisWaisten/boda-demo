'use client'

import React from 'react'

interface CalendarProps {
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

export default function Calendar({ 
  className = '', 
  size = 'md', 
  animated = true,
  color = '#2e3c36'
}: CalendarProps) {
  const sizeClass = sizeClasses[size]

  return (
    <svg 
      className={`${sizeClass} ${className}`}
      viewBox="0 0 125.205 127.311" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Marco del calendario - animación de aparición */}
      <rect 
        x="4.494" 
        y="28.271" 
        width="116.513" 
        height="81.739" 
        rx="8.353" 
        ry="8.353" 
        fill="none" 
        stroke={color} 
        strokeMiterlimit="10" 
        strokeWidth="2"
        style={animated ? {
          animation: 'calendarBuild 2s ease-in-out infinite',
          strokeDasharray: '400',
          strokeDashoffset: animated ? '400' : '0'
        } : {}}
      />

      {/* Primera fila de días - animación de aparición secuencial */}
      <g>
        <rect 
          x="71.743" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.1s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="56.528" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.2s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="102.174" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.3s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="86.959" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.4s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="41.312" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.5s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="26.097" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.6s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="10.881" 
          y="44.612" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.7s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Segunda fila de días */}
      <g>
        <rect 
          x="71.743" 
          y="60.174" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.8s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="102.174" 
          y="60.174" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 0.9s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="86.959" 
          y="60.174" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="41.312" 
          y="60.174" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.1s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="26.097" 
          y="60.174" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.2s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="10.881" 
          y="60.174" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.3s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Tercera fila de días */}
      <g>
        <rect 
          x="71.743" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.4s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="56.528" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.5s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="102.174" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.6s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="86.959" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.7s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="41.312" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.8s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="26.097" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 1.9s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="10.881" 
          y="75.736" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 2s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Cuarta fila de días */}
      <g>
        <rect 
          x="56.528" 
          y="91.298" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 2.1s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="41.312" 
          y="91.298" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 2.2s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="26.097" 
          y="91.298" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 2.3s',
            transformOrigin: 'center'
          } : {}}
        />
        
        <rect 
          x="10.881" 
          y="91.298" 
          width="11.519" 
          height="11.519" 
          rx="5.759" 
          ry="5.759" 
          fill="none" 
          stroke={color} 
          strokeMiterlimit="10" 
          strokeWidth="2"
          style={animated ? {
            animation: 'dayAppear 0.3s ease-in-out infinite 2.4s',
            transformOrigin: 'center'
          } : {}}
        />
      </g>

      {/* Icono de calendario - animación de pulso */}
      <path 
        d="m62.35,62.648c1.383-2.737,4.489-3.371,5.77-1.153h0c.746,1.293.571,2.919-.433,4.024l-5.029,5.943c-.161.19-.454.19-.616,0l-5.029-5.943c-1.004-1.104-1.179-2.731-.433-4.024h0c1.28-2.218,4.415-1.821,5.77,1.153" 
        fill={color} 
        stroke={color} 
        strokeMiterlimit="10"
        style={animated ? {
          animation: 'calendarIconPulse 2s ease-in-out infinite',
          filter: 'drop-shadow(0 0 3px currentColor)',
          transformOrigin: 'center'
        } : {}}
      />

      {/* Espirales de las esquinas - animación de rotación */}
      <g>
        <g>
          <path 
            d="m20.568,27.712c-.772-6.878,2.745-12.641,6.73-12.641s7.215,4.487,7.215,10.023-3.23,10.023-7.215,10.023" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralRotate 4s linear infinite',
              transformOrigin: 'center'
            } : {}}
          />
          
          <circle 
            cx="27.517" 
            cy="35.152" 
            r="3.229" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralCenter 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 2px currentColor)',
              transformOrigin: 'center'
            } : {}}
          />
        </g>
        
        <g>
          <path 
            d="m31.084,27.712c-.772-6.878,2.745-12.641,6.73-12.641s7.215,4.487,7.215,10.023-3.23,10.023-7.215,10.023" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralRotate 4s linear infinite 0.5s',
              transformOrigin: 'center'
            } : {}}
          />
          
          <circle 
            cx="38.033" 
            cy="35.152" 
            r="3.229" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralCenter 2s ease-in-out infinite 0.5s',
              filter: 'drop-shadow(0 0 2px currentColor)',
              transformOrigin: 'center'
            } : {}}
          />
        </g>
        
        <g>
          <path 
            d="m80.579,27.712c-.772-6.878,2.745-12.641,6.73-12.641s7.215,4.487,7.215,10.023-3.23,10.023-7.215,10.023" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralRotate 4s linear infinite 1s',
              transformOrigin: 'center'
            } : {}}
          />
          
          <circle 
            cx="87.528" 
            cy="35.152" 
            r="3.229" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralCenter 2s ease-in-out infinite 1s',
              filter: 'drop-shadow(0 0 2px currentColor)',
              transformOrigin: 'center'
            } : {}}
          />
        </g>
        
        <g>
          <path 
            d="m91.095,27.712c-.772-6.878,2.745-12.641,6.73-12.641s7.215,4.487,7.215,10.023-3.23,10.023-7.215,10.023" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralRotate 4s linear infinite 1.5s',
              transformOrigin: 'center'
            } : {}}
          />
          
          <circle 
            cx="98.044" 
            cy="35.152" 
            r="3.229" 
            fill="none" 
            stroke={color} 
            strokeMiterlimit="10" 
            strokeWidth="2"
            style={animated ? {
              animation: 'spiralCenter 2s ease-in-out infinite 1.5s',
              filter: 'drop-shadow(0 0 2px currentColor)',
              transformOrigin: 'center'
            } : {}}
          />
        </g>
      </g>

      {/* Efectos de brillo adicionales */}
      {animated && (
        <>
          {/* Brillo en el centro */}
          <circle
            cx="62.5"
            cy="65"
            r="2"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: 'calendarShine 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
          
          {/* Brillo en las esquinas */}
          <circle
            cx="20"
            cy="25"
            r="1"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'calendarShine 3s ease-in-out infinite 0.5s',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
          
          <circle
            cx="100"
            cy="25"
            r="1"
            fill="none"
            stroke={color}
            strokeWidth="1"
            opacity="0.2"
            style={{
              animation: 'calendarShine 3s ease-in-out infinite 1s',
              filter: 'drop-shadow(0 0 2px currentColor)'
            }}
          />
        </>
      )}

      {/* Definición de animaciones CSS */}
      {animated && (
        <style jsx>{`
          @keyframes calendarBuild {
            0% { stroke-dashoffset: 400; }
            100% { stroke-dashoffset: 0; }
          }
          
          @keyframes dayAppear {
            0% { 
              transform: scale(0);
              opacity: 0;
            }
            50% { 
              transform: scale(1.1);
              opacity: 0.8;
            }
            100% { 
              transform: scale(1);
              opacity: 1;
            }
          }
          
          @keyframes calendarIconPulse {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 0 3px currentColor);
            }
            50% { 
              transform: scale(1.1);
              filter: drop-shadow(0 0 6px currentColor);
            }
          }
          
          @keyframes spiralRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes spiralCenter {
            0%, 100% { 
              transform: scale(1);
              filter: drop-shadow(0 0 2px currentColor);
            }
            50% { 
              transform: scale(1.2);
              filter: drop-shadow(0 0 4px currentColor);
            }
          }
          
          @keyframes calendarShine {
            0%, 100% { 
              opacity: 0.2;
              transform: scale(1);
            }
            50% { 
              opacity: 0.6;
              transform: scale(1.3);
            }
          }
        `}</style>
      )}
    </svg>
  )
}
