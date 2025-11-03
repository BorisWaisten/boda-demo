'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import CountdownTimer from '../../../components/CountdownTimer'
import WeddingIcon from '../../../components/WeddingIcon'
import BackgroundImage from '../../../components/BackgroundImage'
import { DEMOS } from '../../../lib/demos'
import Parallax25D from '../../../components/Parallax25D'

export default function ModernDemo() {
  const config = DEMOS['demo2']

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(1, window.scrollY / 240))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const titleOpacity = 1 - scrollProgress
  const barOpacity = Math.max(0, scrollProgress * 1.2 - 0.2)

  const useReveal = (offset: number = 24, delayMs: number = 0) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [v, setV] = useState(false)
    useEffect(() => {
      const n = ref.current
      if (!n) return
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setV(true)
            obs.unobserve(e.target)
          }
        })
      }, { threshold: 0.15 })
      obs.observe(n)
      return () => obs.disconnect()
    }, [])
    return {
      ref,
      style: {
        opacity: v ? 1 : 0,
        transform: `translateY(${v ? 0 : offset}px)`,
        transition: `opacity 650ms ease-out ${delayMs}ms, transform 650ms ease-out ${delayMs}ms`,
      } as React.CSSProperties,
    }
  }

  return (
    <main className={`min-h-screen ${config.themeClass ?? ''} bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory font-cormorant`}>
      {/* Hero más minimalista */}
      <section className="relative min-h-screen overflow-hidden">
        <BackgroundImage src={config.heroImage} alt="Hero" className="opacity-80" priority />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" style={{ opacity: titleOpacity, transform: `scale(${1 + scrollProgress * 0.05})` }}>
            <h1 className="text-7xl md:text-8xl font-amsterdam text-white hero-title">{config.coupleNames}</h1>
          </div>
        </div>
        {/* Barra inferior con fecha + contador (siempre abajo del hero) */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="backdrop-blur-md bg-black/30 py-6" style={{ opacity: barOpacity }}>
            <div className="container-custom text-center text-white">
              <div className="text-2xl md:text-3xl mb-4">{config.dateLabel}</div>
              <div className="max-w-4xl mx-auto">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería 2.5D */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex gap-1 overflow-x-auto pb-4">
            {[1,2,3,4,5].map((n) => (
              <Parallax25D
                key={n}
                width={400}
                height={500}
                background={{ src: `/boda/boda${n}.avif` }}
                trigger="hover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Ceremonia (layout en línea moderna) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div {...useReveal(20)} className="md:col-span-1">
              <div className="w-14 h-14 rounded-full bg-wedding-gold grid place-items-center mb-4">
                <WeddingIcon name="Church" size="md" type="svg" className="text-white" animated />
              </div>
              <h2 className="text-3xl md:text-4xl font-amsterdam text-wedding-burgundy">Ceremonia</h2>
            </div>
            <div {...useReveal(20, 120)} className="md:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-xl bg-white/70 backdrop-blur p-6">
                  <p className="font-semibold text-wedding-charcoal">Lugar</p>
                  <p>Direccion</p>
                  <p>Ciudad, Provincia</p>
                </div>
                <div className="rounded-xl border border-white/40 p-6">
                  <p className="text-wedding-burgundy font-alex text-2xl">17:00 HS</p>
                  <button className="btn-primary mt-4">Cómo llegar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Fiesta con panel oscuro */}
      <section className="section-padding relative">
        <BackgroundImage src={config.partyBg} alt="Party" className="opacity-40" />
        <div className="container-custom relative z-10">
          <div className="rounded-2xl bg-black/30 backdrop-blur-md p-10 text-white" {...useReveal(24)}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-wedding-gold grid place-items-center">
                <WeddingIcon name="Music" size="md" type="svg" className="text-white" animated />
              </div>
              <h2 className="text-3xl md:text-4xl font-amsterdam">Fiesta</h2>
            </div>
            <p className="text-white/90">Después de la ceremonia, los esperamos para celebrar con música, baile y mucha alegría.</p>
          </div>
        </div>
      </section>

      {/* Detalles en chips */}
      <section className="section-padding">
        <div className="container-custom">
          <h3 className="text-3xl md:text-4xl font-amsterdam text-wedding-burgundy text-center mb-10">Detalles</h3>
          <div className="flex flex-wrap justify-center gap-4" {...useReveal(16)}>
            <span className="px-5 py-3 rounded-full bg-white/70 backdrop-blur border border-white/40 text-wedding-charcoal">Dress code: <b className="text-wedding-burgundy">Elegante</b></span>
            <span className="px-5 py-3 rounded-full bg-white/70 backdrop-blur border border-white/40 text-wedding-charcoal">Regalo: <b className="text-wedding-burgundy">Tu presencia</b></span>
            <span className="px-5 py-3 rounded-full bg-white/70 backdrop-blur border border-white/40 text-wedding-charcoal">Niños: <b className="text-wedding-burgundy">Solo adultos</b></span>
          </div>
        </div>
      </section>

      {/* RSVP claro sobre color principal */}
      <section className="section-padding bg-wedding-burgundy text-white">
        <div className="container-custom text-center" {...useReveal(24)}>
          <h2 className="text-3xl md:text-4xl font-catchy mb-4">Confirmá tu asistencia</h2>
          <p className="mb-6 text-white/90">Completalo antes del 12/10/2025</p>
          <button className="btn-primary bg-white text-wedding-burgundy hover:bg-wedding-gold hover:text-white">Confirmar</button>
        </div>
      </section>

      <footer className="bg-wedding-charcoal text-white py-12">
        <div className="container-custom text-center">
          <p className="text-wedding-gold font-alex text-2xl mb-2">@waistenprogramacion</p>
          <p className="text-sm text-white/60">Waisten Programacion ® Invitaciones digitales Web Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}


