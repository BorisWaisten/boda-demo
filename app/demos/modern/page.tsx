'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import CountdownTimer from '../../../components/CountdownTimer'
import WeddingIcon from '../../../components/WeddingIcon'
import BackgroundImage from '../../../components/BackgroundImage'
import { DEMOS } from '../../../lib/demos'
import Image from 'next/image'

export default function ModernDemo() {
  const config = DEMOS['demo2']

  const [scrollProgress, setScrollProgress] = useState(0)
  const [showRSVP, setShowRSVP] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1: left, 1: right

  const handleRSVP = () => setShowRSVP(true)

  const goToImage = (newIndex: number) => {
    // Calcular dirección considerando el wrap circular
    const diff = newIndex - currentImageIndex
    const wrapDiff = diff > config.gallery.length / 2 ? diff - config.gallery.length : diff < -config.gallery.length / 2 ? diff + config.gallery.length : diff
    
    if (wrapDiff > 0) {
      setDirection(1)
    } else if (wrapDiff < 0) {
      setDirection(-1)
    }
    setCurrentImageIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentImageIndex((prev) => (prev + 1) % config.gallery.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [config.gallery.length])

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(1, window.scrollY / 240))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const titleOpacity = 1 - scrollProgress
  const barOpacity = Math.max(0, scrollProgress * 1.2 - 0.2)

  // Hook para animaciones con framer-motion
  const useReveal = (offset: number = 30, delay: number = 0) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    
    return {
      ref,
      initial: { opacity: 0, y: offset },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset },
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <main className={`min-h-screen ${config.themeClass ?? ''} bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory font-cormorant`}>
      {/* Hero más minimalista */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video de fondo */}
        <div className="hidden md:block absolute inset-0 opacity-80">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/boda/video-boda2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="block md:hidden absolute inset-0 opacity-80">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/boda/video-boda3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ 
              opacity: titleOpacity, 
              scale: 1 + scrollProgress * 0.05,
              y: scrollProgress * 20
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="text-7xl md:text-8xl font-amsterdam text-white hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: titleOpacity, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {config.coupleNames}
            </motion.h1>
          </motion.div>
        </motion.div>
        {/* Barra inferior con fecha + contador (siempre abajo del hero) */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="backdrop-blur-md bg-black/30 py-6"
            animate={{ opacity: barOpacity }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom text-center text-white">
              <motion.div 
                className="text-2xl md:text-3xl mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {config.dateLabel}
              </motion.div>
              <div className="max-w-4xl mx-auto">
                <CountdownTimer />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Gallery Section - Carrusel Simple */}
      <section className="section-padding bg-gradient-to-br from-wedding-cream to-wedding-ivory overflow-x-visible overflow-y-visible">
        <div className="container-custom relative z-10 overflow-x-visible overflow-y-visible">
          <motion.div 
            className="text-center mb-12"
            {...useReveal(30, 0)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <WeddingIcon name="Camera" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-amsterdam text-wedding-burgundy mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Momentos Especiales
            </motion.h2>
            <motion.p 
              className="text-xl text-wedding-charcoal/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Compartimos algunos de nuestros momentos favoritos
            </motion.p>
          </motion.div>
          <motion.div 
            className="w-full pb-8 overflow-hidden"
            {...useReveal(30, 0.2)}
          >
            <div className="relative flex items-center justify-center h-[500px] md:h-[600px] lg:h-[800px]">
              {/* Imagen anterior */}
              <motion.div
                key={`prev-${currentImageIndex}`}
                initial={{ x: direction === 1 ? -200 : 0, opacity: direction === 1 ? 0 : 0.7, scale: direction === 1 ? 0.8 : 0.9 }}
                animate={{ x: 0, opacity: 0.7, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-4 md:left-8 lg:left-16 cursor-pointer z-10 hover:scale-95 hover:opacity-80"
                onClick={() => goToImage((currentImageIndex - 1 + config.gallery.length) % config.gallery.length)}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-wedding-gold/50 border-2 border-white/70">
                  <div className="relative w-40 h-56 md:w-48 md:h-72 lg:w-56 lg:h-80">
                    <Image
                      src={config.gallery[(currentImageIndex - 1 + config.gallery.length) % config.gallery.length].src}
                      alt={config.gallery[(currentImageIndex - 1 + config.gallery.length) % config.gallery.length].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Imagen activa */}
              <motion.div
                key={`active-${currentImageIndex}`}
                initial={{ x: direction === 1 ? 200 : -200, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-20"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-wedding-gold border-4 border-white">
                  <div className="relative w-48 h-64 md:w-60 md:h-80 lg:w-[19rem] lg:h-[28rem]">
                    <Image
                      src={config.gallery[currentImageIndex].src}
                      alt={config.gallery[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, (max-width: 1024px) 240px, 288px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Imagen siguiente */}
              <motion.div
                key={`next-${currentImageIndex}`}
                initial={{ x: direction === -1 ? 200 : 0, opacity: direction === -1 ? 0 : 0.7, scale: direction === -1 ? 0.8 : 0.9 }}
                animate={{ x: 0, opacity: 0.7, scale: 0.9 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-4 md:right-8 lg:right-16 cursor-pointer z-10 hover:scale-95 hover:opacity-80"
                onClick={() => goToImage((currentImageIndex + 1) % config.gallery.length)}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-wedding-gold/50 border-2 border-white/70">
                  <div className="relative w-40 h-56 md:w-48 md:h-72 lg:w-56 lg:h-80">
                    <Image
                      src={config.gallery[(currentImageIndex + 1) % config.gallery.length].src}
                      alt={config.gallery[(currentImageIndex + 1) % config.gallery.length].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {config.gallery.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentImageIndex
                    ? 'w-8 h-2 bg-wedding-gold'
                    : 'w-2 h-2 bg-wedding-gold/40 hover:bg-wedding-gold/60'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="section-padding h-screen flex items-center justify-center bg-white/50 relative">
        <BackgroundImage src={config.ceremonyBg} alt="Church background" className="opacity-20" />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center md:text-left"
              {...useReveal(30, 0)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-wedding-gold rounded-full mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <WeddingIcon name="Church" size="lg" type="svg" animated />
              </motion.div>
              <motion.h2 
                className="text-8xl md:text-8xl font-amsterdam text-wedding-burgundy mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ceremonia
              </motion.h2>
              <motion.div 
                className="space-y-4 text-lg text-wedding-charcoal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="font-semibold">Parroquia San José</p>
                <p>9 de Julio 000</p>
                <p>Ciudad, Provincia</p>
                <p className="text-wedding-burgundy font-bold text-xl font-alex">17:00 HS</p>
              </motion.div>
              <motion.button 
                className="btn-primary mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Cómo llegar
              </motion.button>
            </motion.div>
            <motion.div 
              className="relative"
              {...useReveal(30, 0.2)}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="p-8 text-center rounded-2xl bg-white/70 backdrop-blur border border-white/40"
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img src="/SVG-Barrocos/Couple 4.svg" alt="Church" className="w-24 h-24 mx-auto mb-4" />
                <h3 className="md:text-5xl text-6xl font-amsterdam text-wedding-burgundy mb-3">Bendición Matrimonial</h3>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-4" />
                <p className="text-wedding-charcoal/70">Unidos en el amor y la fe, comenzamos esta nueva etapa de nuestras vidas</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Party Section */}
      <section className="section-padding h-screen flex items-center justify-center relative">
        <BackgroundImage src={config.partyBg} alt="Party background" className="opacity-20" />
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative order-2 md:order-1"
              {...useReveal(30, 0)}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="p-8 text-center rounded-2xl bg-white/70 backdrop-blur border border-white/40"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <WeddingIcon name="WeddingCake" size="xl" type="svg" className="text-wedding-gold mx-auto mb-4" animated />
                <h3 className="md:text-5xl text-6xl font-amsterdam text-wedding-burgundy mb-3">Fiesta de Celebración</h3>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-4" />
                <p className="text-wedding-charcoal/70">Después de la ceremonia, los esperamos para celebrar con música, baile y mucha alegría</p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="text-center flex flex-col items-center justify-center order-1 md:order-2"
              {...useReveal(30, 0.2)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="mb-6"
              >
                <WeddingIcon name="Disco Ball" size="xl" type="svg" className="text-white" animated />
              </motion.div>
              <motion.h2 
                className="text-8xl md:text-8xl font-amsterdam text-wedding-burgundy mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Fiesta
              </motion.h2>
              <motion.div 
                className="space-y-4 text-lg text-wedding-charcoal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="font-semibold">Lugar</p>
                <p>Direccion</p>
                <p>Ciudad, Provincia</p>
                <p className="text-wedding-burgundy font-bold text-2xl md:text-3xl font-alex">18:00 HS</p>
              </motion.div>
              <motion.button 
                className="btn-primary mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Cómo llegar
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Request Section */}
      <section className="section-padding bg-wedding-rose/30">
        <motion.div 
          className="container-custom text-center"
          {...useReveal(30, 0)}
        >
          <motion.div 
                className="inline-flex items-center justify-center w-20 h-20 bg-wedding-gold rounded-full mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
            <WeddingIcon name="Music" size="xl" type="svg" className="text-wedding-gold mx-auto " animated />
              </motion.div>
          <motion.h2 
            className="text-6xl md:text-8xl font-amsterdam text-wedding-burgundy mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ¡Que no falte tu tema favorito!
          </motion.h2>
          <motion.p 
            className="text-xl text-wedding-charcoal/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ayudanos a armar la lista de canciones para nuestra fiesta
          </motion.p>
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Sugerí tu tema acá
          </motion.button>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2 
            className="text-6xl md:text-8xl font-amsterdam text-wedding-burgundy text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Acá te contamos todos los detalles…
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'groom-suit', title: 'Dress Code', content: 'Elegante', description: null, isImage: true },
              { icon: 'WeddingGifts', title: 'Regalo', content: '¡El mejor regalo es tu presencia!', description: 'Si deseas realizarnos un regalo, te brindamos nuestros datos bancarios', isImage: false },
              { icon: 'Balloons', title: 'Niños', content: 'Este es un festejo destinado solo a adultos', description: null, isImage: false }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="p-8 text-center rounded-2xl bg-white/70 backdrop-blur border border-white/40 group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.3 }}
                  className="mb-6"
                >
                  {item.isImage ? (
                    <img src="/SVG-Barrocos/Groom Suit 2.svg" alt={item.title} className="w-24 h-24 mx-auto" />
                  ) : (
                    <WeddingIcon name={item.icon as any} size="xl" type="svg" className="text-wedding-gold mx-auto" animated />
                  )}
                </motion.div>
                <h3 className="text-6xl md:text-5xl font-amsterdam text-wedding-burgundy mb-2">{item.title}</h3>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-4" />
                <p className={item.description ? "text-wedding-charcoal mb-3" : "text-xl  font-alex text-wedding-burgundy"}>{item.content}</p>
                {item.description && <p className="text-sm text-wedding-charcoal/70">{item.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section-padding bg-wedding-burgundy text-white">
        <motion.div 
          className="container-custom text-center"
          {...useReveal(30, 0)}
        >
          <motion.h2 
            className="text-8xl md:text-8xl font-amsterdam mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Confirmanos tu asistencia
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Te pedimos que completes este formulario antes del 12/10/2025. Si fuiste invitado/a con un acompañante, completar un formulario por persona
          </motion.p>
          {!showRSVP ? (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button 
                onClick={handleRSVP} 
                className="btn-primary bg-white text-wedding-burgundy hover:bg-wedding-gold hover:text-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                CONFIRMAR MI ASISTENCIA
              </motion.button>
              <div>
                <motion.button 
                  className="btn-secondary border-white text-white hover:bg-white hover:text-wedding-burgundy"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  AGENDAR EL EVENTO EN MI CALENDARIO
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              <motion.div 
                className="rounded-2xl bg-white/10 backdrop-blur p-8 text-wedding-charcoal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-amsterdam text-white mb-6">¡Gracias por confirmar!</h3>
                <p className="mb-4 text-white/90">Hemos recibido tu confirmación. Te esperamos.</p>
                <motion.button 
                  onClick={() => setShowRSVP(false)} 
                  className="btn-primary bg-white text-wedding-burgundy hover:bg-wedding-gold hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volver
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Accommodation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.h2 
            className="text-6xl md:text-6xl font-amsterdam text-wedding-burgundy text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ALOJAMIENTO
          </motion.h2>
          <motion.p 
            className="text-xl text-wedding-charcoal/80 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Te sugerimos alojamientos posibles para los días de nuestra boda! Hacé clic en cada uno para ver mas info
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Hotel xx', 'Hotel yy', 'Hotel zz', 'Hotel aa'].map((hotel, index) => (
              <motion.div
                key={hotel}
                className="rounded-2xl bg-white/70 backdrop-blur border border-white/40 p-6 text-center"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                >
                  <WeddingIcon name="Calendar" size="lg" type="svg" className="text-wedding-gold mx-auto mb-4" animated />
                </motion.div>
                <h3 className="text-lg font-amsterdam text-wedding-burgundy">{hotel}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}


