'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import CountdownTimer from '../../../components/CountdownTimer'
import WeddingIcon from '../../../components/WeddingIcon'
import BackgroundImage from '../../../components/BackgroundImage'
import Gallery3D from '../../../components/Gallery3D'
import { DEMOS } from '../../../lib/demos'
import { notFound } from 'next/navigation'

export default function DemoPage({ params }: { params: { slug: string } }) {
  const config = DEMOS[params.slug]
  if (!config) return notFound()

  const [showRSVP, setShowRSVP] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const handleRSVP = () => setShowRSVP(true)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const max = 240
        const p = Math.max(0, Math.min(1, y / max))
        setScrollProgress(p)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const heroStyles = useMemo(() => ({
    opacity: 1 - scrollProgress,
    transform: `translateY(${scrollProgress * 20}px)`,
  }), [scrollProgress])

  const introOpacity = useMemo(() => {
    const start = 0.35
    const end = 1
    const t = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)))
    return t
  }, [scrollProgress])

  const infoStyles = useMemo(() => ({
    opacity: introOpacity,
    transform: `translateY(${(1 - introOpacity) * 20}px)`,
  }), [introOpacity])

  const useReveal = (offset: number = 20, delayMs: number = 0) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
      const node = ref.current
      if (!node) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setVisible(true)
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
      )
      obs.observe(node)
      return () => obs.disconnect()
    }, [])
    const style = {
      opacity: visible ? 1 : 0,
      transform: `translateY(${visible ? 0 : offset}px)`,
      transition: `opacity 700ms ease-out ${delayMs}ms, transform 700ms ease-out ${delayMs}ms`,
      willChange: 'opacity, transform' as const,
    }
    return { ref, style }
  }

  return (
    <main className={`min-h-screen bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory ${config.themeClass ?? ''}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        <BackgroundImage src={config.heroImage} alt="Wedding background" className="opacity-90 grayscale" priority />
        <div className="absolute inset-x-0 bottom-0 h-1/2 hero-bottom-gradient" />
        <div className="absolute inset-0 opacity-10" style={{ opacity: Math.max(0, 0.1 - scrollProgress * 0.1) }}>
          <div className="absolute top-20 left-20 animate-float">
            <WeddingIcon name="Flowers" size="xl" type="svg" className="text-wedding-sage" animated />
          </div>
          <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
            <WeddingIcon name="WeddingRingsSet1" size="lg" type="svg" className="text-wedding-gold" animated />
          </div>
          <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
            <WeddingIcon name="Balloons" size="lg" type="svg" className="text-wedding-burgundy" animated />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <WeddingIcon name="Fireworks" size="xl" type="svg" className="text-wedding-gold" animated />
          </div>
        </div>

        <div className="container-custom z-10 w-full">
          <div className="w-full flex flex-col items-center justify-end pb-16 md:pb-24 absolute inset-x-0 bottom-0" style={heroStyles}>
            <h1 className="text-6xl md:text-8xl font-alex text-white hero-title mb-2">{config.coupleNames}</h1>
            <div className="text-white/80 font-catchy tracking-wide">{config.dateLabel.replace('1 DE NOVIEMBRE 2025', '01 • 11 • 2025')}</div>
          </div>
          <div className="w-full flex flex-col items-center justify-end pb-10 md:pb-14 absolute inset-x-0 bottom-0" style={infoStyles}>
            <p className="text-lg md:text-2xl text-white/90 font-catchy mb-3">Te invitamos a celebrar nuestra boda</p>
            <div className="text-2xl md:text-4xl font-bold text-white hero-title mb-6 font-catchy">{config.dateLabel}</div>
            <div className="w-full max-w-5xl">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="section-padding bg-white/50 relative">
        <BackgroundImage src={config.ceremonyBg} alt="Church background" className="opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left" {...useReveal(24)}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-gold rounded-full mb-6">
                <WeddingIcon name="Church" size="lg" type="svg" className="text-white" animated />
              </div>
              <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-6">Ceremonia</h2>
              <div className="space-y-4 text-lg text-wedding-charcoal">
                <p className="font-semibold">Parroquia San José</p>
                <p>9 de Julio 000</p>
                <p>Cuidad, Provincia</p>
                <p className="text-wedding-burgundy font-bold text-xl font-alex">17:00 HS</p>
              </div>
              <button className="btn-primary mt-8">Cómo llegar</button>
            </div>
            <div className="relative" {...useReveal(24, 120)}>
              <div className="p-8 text-center feature-plain">
                <WeddingIcon name="Church" size="xl" type="svg" className="text-wedding-gold mx-auto mb-4" animated />
                <h3 className="text-2xl font-catchy text-wedding-burgundy mb-3">Bendición Matrimonial</h3>
                <div className="soft-divider mb-4" />
                <p className="text-wedding-charcoal/70">Unidos en el amor y la fe, comenzamos esta nueva etapa de nuestras vidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Section */}
      <section className="section-padding relative">
        <BackgroundImage src={config.partyBg} alt="Party background" className="opacity-20" />
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1" {...useReveal(24)}>
              <div className="p-8 text-center feature-plain">
                <WeddingIcon name="WeddingCake" size="xl" type="svg" className="text-wedding-gold mx-auto mb-4" animated />
                <h3 className="text-2xl font-catchy text-wedding-burgundy mb-3">Fiesta de Celebración</h3>
                <div className="soft-divider mb-4" />
                <p className="text-wedding-charcoal/70">Después de la ceremonia, los esperamos para celebrar con música, baile y mucha alegría</p>
              </div>
            </div>
            <div className="text-center md:text-left order-1 md:order-2" {...useReveal(24, 120)}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-burgundy rounded-full mb-6">
                <WeddingIcon name="Music" size="lg" type="svg" className="text-white" animated />
              </div>
              <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-6">Fiesta</h2>
              <div className="space-y-4 text-lg text-wedding-charcoal">
                <p className="font-semibold">Lugar</p>
                <p>Direccion</p>
                <p>Ciudad, Provincia</p>
                <p className="text-wedding-burgundy font-bold text-xl font-alex">18:00 HS</p>
              </div>
              <button className="btn-primary mt-8">Cómo llegar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Music Request Section */}
      <section className="section-padding bg-wedding-rose/30">
        <div className="container-custom text-center" {...useReveal(24)}>
          <WeddingIcon name="Music" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated />
          <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-6">¡Que no falte tu tema favorito!</h2>
          <p className="text-xl text-wedding-charcoal/80 mb-8 max-w-2xl mx-auto">Ayudanos a armar la lista de canciones para nuestra fiesta</p>
          <button className="btn-secondary">Sugerí tu tema acá</button>
        </div>
      </section>

      {/* Gallery 3D Section */}
      <section className="section-padding bg-gradient-to-br from-wedding-cream to-wedding-ivory">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12" {...useReveal(24)}>
            <WeddingIcon name="Camera" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated />
            <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-4">Momentos Especiales</h2>
            <p className="text-xl text-wedding-charcoal/80 max-w-2xl mx-auto">Pasa el cursor sobre las imágenes para ver el efecto especial</p>
          </div>
          <Gallery3D images={config.gallery} />
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy text-center mb-16">Acá te contamos todos los detalles…</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 text-center group" {...useReveal(24)}>
              <WeddingIcon name="WeddingRingsSet1" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated />
              <h3 className="text-2xl font-catchy text-wedding-burgundy mb-2">Dress Code</h3>
              <div className="soft-divider mb-4" />
              <p className="text-3xl font-alex text-wedding-burgundy">Elegante</p>
            </div>
            <div className="p-8 text-center group" {...useReveal(24, 120)}>
              <WeddingIcon name="WeddingGifts" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated />
              <h3 className="text-2xl font-catchy text-wedding-burgundy mb-2">Regalo</h3>
              <div className="soft-divider mb-4" />
              <p className="text-wedding-charcoal mb-3">¡El mejor regalo es tu presencia!</p>
              <p className="text-sm text-wedding-charcoal/70">Si deseas realizarnos un regalo, te brindamos nuestros datos bancarios</p>
            </div>
            <div className="p-8 text-center group" {...useReveal(24, 240)}>
              <WeddingIcon name="Balloons" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated />
              <h3 className="text-2xl font-catchy text-wedding-burgundy mb-2">Niños</h3>
              <div className="soft-divider mb-4" />
              <p className="text-wedding-charcoal">Este es un festejo destinado solo a adultos</p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section-padding bg-wedding-burgundy text-white">
        <div className="container-custom text-center" {...useReveal(24)}>
          <h2 className="text-4xl md:text-5xl font-catchy mb-8">Confirmanos tu asistencia</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Te pedimos que completes este formulario antes del 12/10/2025. Si fuiste invitado/a con un acompañante, completar un formulario por persona</p>
          {!showRSVP ? (
            <div className="space-y-4">
              <button onClick={handleRSVP} className="btn-primary bg-white text-wedding-burgundy hover:bg-wedding-gold hover:text-white">CONFIRMAR MI ASISTENCIA</button>
              <div>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-wedding-burgundy">AGENDAR EL EVENTO EN MI CALENDARIO</button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="card p-8 text-wedding-charcoal">
                <h3 className="text-2xl font-catchy text-wedding-burgundy mb-6">¡Gracias por confirmar!</h3>
                <p className="mb-4">Hemos recibido tu confirmación. Te esperamos.</p>
                <button onClick={() => setShowRSVP(false)} className="btn-primary">Volver</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy text-center mb-16">ALOJAMIENTO</h2>
          <p className="text-xl text-wedding-charcoal/80 text-center mb-12 max-w-2xl mx-auto">Te sugerimos alojamientos posibles para los días de nuestra boda! Hacé clic en cada uno para ver mas info</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Hotel xx', 'Hotel yy', 'Hotel zz', 'Hotel aa'].map((hotel, index) => (
              <div key={hotel} className="feature-plain p-6 text-center hover:bg-white/20 transition-colors duration-300" {...useReveal(24, index * 100)}>
                <WeddingIcon name="Calendar" size="lg" type="svg" className="text-wedding-gold mx-auto mb-4" animated />
                <h3 className="text-lg font-catchy text-wedding-burgundy">{hotel}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-wedding-charcoal text-white py-12">
        <div className="container-custom text-center">
          <p className="text-wedding-gold font-alex text-2xl mb-4">¡Gracias!</p>
          <p className="text-wedding-gold/80">@waistenprogramacion</p>
          <p className="text-sm text-white/60 mt-4">Waisten Programacion ® Invitaciones digitales Web Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}


