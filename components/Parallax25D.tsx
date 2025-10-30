'use client'

import Image from 'next/image'
import React from 'react'

type Layer = {
  src: string
  alt?: string
}

export type Parallax25DProps = {
  width: number
  height: number
  background: Layer
  midground?: Layer
  foreground?: Layer
  className?: string
  trigger?: 'hover' | 'viewport'
}

export default function Parallax25D({ width, height, background, midground, foreground, className = '', trigger = 'viewport' }: Parallax25DProps) {
  const style: React.CSSProperties = { width, height }
  const wrapperRef = React.useRef<HTMLDivElement | null>(null)
  const [run, setRun] = React.useState(trigger === 'hover' ? false : false)

  React.useEffect(() => {
    if (trigger !== 'viewport') return
    const node = wrapperRef.current
    if (!node) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setRun(true)
      })
    }, { threshold: 0.35 })
    obs.observe(node)
    return () => obs.disconnect()
  }, [trigger])

  return (
    <div
      ref={wrapperRef}
      className={`parallax-25d-wrapper ${trigger === 'hover' ? 'p25d-hover' : ''} ${run ? 'p25d-run' : ''} ${className}`}
      style={style}
      onMouseEnter={() => trigger === 'hover' && setRun(true)}
      onMouseLeave={() => trigger === 'hover' && setRun(false)}
    >
      {(foreground || background) && (
        <div className={`parallax-25d foreground ${!foreground ? 'p25d-auto-fore' : ''}`}>
          <Image src={(foreground ?? background).src} alt={(foreground ?? background).alt ?? 'foreground layer'} fill className="object-fill" />
        </div>
      )}
      {(midground || background) && (
        <div className={`parallax-25d midground ${!midground ? 'p25d-auto-mid' : ''}`}>
          <Image src={(midground ?? background).src} alt={(midground ?? background).alt ?? 'midground layer'} fill className="object-fill" />
        </div>
      )}
      <div className="parallax-25d background">
        <Image src={background.src} alt={background.alt ?? 'background layer'} fill className="object-fill" />
      </div>
    </div>
  )
}


