'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CountdownTimer from '../../../components/CountdownTimer'
import BackgroundImage from '../../../components/BackgroundImage'
import { DEMOS } from '../../../lib/demos'
import Image from 'next/image'
import BaroqueSVG from '../../../components/BaroqueSVG'

export default function BaroqueDemo() {
  const config = DEMOS['demo3']

  const [scrollProgress, setScrollProgress] = useState(0)
  const [showRSVP, setShowRSVP] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const handleRSVP = () => setShowRSVP(true)

  const goToImage = (newIndex: number) => {
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
    }, 5000)
    return () => clearInterval(interval)
  }, [config.gallery.length])

  useEffect(() => {
    const onScroll = () => setScrollProgress(Math.min(1, window.scrollY / 240))
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const titleOpacity = 1 - scrollProgress
  const barOpacity = Math.max(0, scrollProgress * 1.2 - 0.2)

  const useReveal = (offset: number = 30, delay: number = 0) => {
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1, rootMargin: '-100px' }
      )
      
      if (ref.current) {
        observer.observe(ref.current)
      }
      
      return () => observer.disconnect()
    }, [])
    
    return {
      ref,
      initial: { opacity: 0, y: offset },
      animate: isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: offset },
      transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }
    }
  }

  return (
    <main className={`min-h-screen ${config.themeClass ?? ''} bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory font-garamond`}>
      {/* Hero Section - Estilo Barroco/Romántico */}
      <section className="relative min-h-screen overflow-hidden">
        <BackgroundImage src={config.heroImage} alt="Wedding background" className="opacity-60 sepia" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        

        {/* Contenido principal del hero */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="text-center relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
            {/* Contenedor principal con querubines */}
            <motion.div
              className="relative inline-block w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: titleOpacity, 
                scale: 1 + scrollProgress * 0.02,
                y: scrollProgress * 15
              }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Querubines en las 4 esquinas - SOLO MÓVIL */}
              {/* Esquina superior izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                animate={{ opacity: titleOpacity }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="md:hidden absolute top-0 left-[12px] w-12 h-12"
              >
                <BaroqueSVG 
                  name="Cherub 1" 
                  size="xl" 
                  color="#D4AF37" 
                  className="w-full h-full opacity-90"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </motion.div>

              {/* Esquina superior derecha */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: titleOpacity }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="md:hidden absolute top-0 right-[12px] w-12 h-12"
              >
                <BaroqueSVG 
                  name="Cherub 6" 
                  size="xl" 
                  color="#D4AF37" 
                  className="w-full h-full opacity-90"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </motion.div>

              {/* Esquina inferior izquierda */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: titleOpacity }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="md:hidden absolute bottom-0 left-[12px] w-12 h-12"
              >
                <BaroqueSVG 
                  name="Cherub 3" 
                  size="xl" 
                  color="#D4AF37" 
                  className="w-full h-full opacity-90"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </motion.div>

              {/* Esquina inferior derecha */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: titleOpacity }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="md:hidden absolute bottom-0 right-[12px] w-12 h-12"
              >
                <BaroqueSVG 
                  name="Cherub 10" 
                  size="xl" 
                  color="#D4AF37" 
                  className="w-full h-full opacity-90"
                  style={{ 
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </motion.div>

              {/* Querubines a la izquierda - SOLO DESKTOP */}
              <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full flex-col items-end gap-4 lg:gap-6 pr-4 lg:pr-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: titleOpacity }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                >
                  <BaroqueSVG 
                    name="Cherub 1" 
                    size="xl" 
                    color="#D4AF37" 
                    className="w-full h-full opacity-90"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: titleOpacity }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                >
                  <BaroqueSVG 
                    name="Cherub 3" 
                    size="xl" 
                    color="#D4AF37" 
                    className="w-full h-full opacity-90"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                </motion.div>
              </div>

              {/* Querubines a la derecha - SOLO DESKTOP */}
              <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full flex-col items-start gap-4 lg:gap-6 pl-4 lg:pl-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: titleOpacity }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                >
                  <BaroqueSVG 
                    name="Cherub 6" 
                    size="xl" 
                    color="#D4AF37" 
                    className="w-full h-full opacity-90"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: titleOpacity }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32"
                >
                  <BaroqueSVG 
                    name="Cherub 10" 
                    size="xl" 
                    color="#D4AF37" 
                    className="w-full h-full opacity-90"
                    style={{ 
                      filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                  />
                </motion.div>
              </div>

              {/* Guirnalda de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <BaroqueSVG 
                  name="Flower wreath 2" 
                  size="2xl" 
                  color="#D4AF37" 
                  className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[800px] 2xl:h-[800px] opacity-90"
                  style={{ 
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
              
              {/* Nombre centrado dentro de la guirnalda */}
              <div className="relative z-10 px-2 py-2 sm:px-12 sm:py-20 md:px-14 md:py-20 lg:px-20 lg:py-24 xl:px-24 xl:py-28">
                <motion.h1 
                  className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-breathine text-white hero-title leading-tight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: titleOpacity }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {config.coupleNames}
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Barra inferior con fecha y contador */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="backdrop-blur-md bg-black/40 py-8 border-t-2 border-wedding-gold/30"
            animate={{ opacity: barOpacity }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom text-center text-white relative">
              <motion.div 
                className="text-2xl md:text-3xl mb-4 font-garamond"
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

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-br from-wedding-cream via-wedding-rose/50 to-wedding-ivory relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center mb-12"
            {...useReveal(30, 0)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <BaroqueSVG name="Camera 1" size="xl" color="#8B1538" className="mx-auto mb-6" animated />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-classical-romance text-wedding-burgundy mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Momentos Especiales
            </motion.h2>
            <motion.p 
              className="text-xl text-wedding-charcoal/80 max-w-2xl mx-auto font-garamond"
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
                <div className="relative">
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
                <div className="relative">
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
                <div className="relative">
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
      <section className="section-padding h-screen flex items-center justify-center bg-white/60 relative">
        <BackgroundImage src={config.ceremonyBg} alt="Church background" className="opacity-15 sepia" />
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center md:text-left relative"
              {...useReveal(30, 0)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="relative inline-flex items-center justify-center mb-6 z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <div className="relative bg-wedding-burgundy rounded-full p-4">
                  <BaroqueSVG name="Churches" size="lg" color="#FFFFFF" />
                </div>
              </motion.div>
              <motion.h2 
                className="text-5xl md:text-7xl font-classical-romance text-wedding-burgundy mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ceremonia
              </motion.h2>
              <motion.div 
                className="space-y-4 text-lg text-wedding-charcoal font-garamond"
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
                className="p-8 text-center rounded-2xl bg-white/80 backdrop-blur border-2 border-wedding-gold/30"
                initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <BaroqueSVG name="Couple 4" size="xl" color="#8B1538" className="mx-auto mb-4" animated />
                <h3 className="md:text-5xl text-2xl font-classical-romance text-wedding-burgundy mb-3">Bendición Matrimonial</h3>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-4" />
                <p className="text-wedding-charcoal/70 font-garamond">Unidos en el amor y la fe, comenzamos esta nueva etapa de nuestras vidas</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Party Section */}
      <section className="section-padding h-screen flex items-center justify-center relative">
        <BackgroundImage src={config.partyBg} alt="Party background" className="opacity-15 sepia" />
        
        {/* Red de luces con candelabro colgando - Centrado en toda la sección */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-0">
          <div className="relative w-full max-w-7xl h-full flex items-start justify-center">
            {/* Red de luces - garden lights formando una guirnalda */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl">
              {/* SOLO desktop */}
              <motion.div
                className="hidden md:block absolute top-[-80px] left-[200px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <BaroqueSVG 
                  name="garden lights 1" 
                  size="md" 
                  color="#D4AF37" 
                  className="w-[300px] h-auto opacity-60"
                  style={{ transform: 'rotate(0deg)' }}
                />
              </motion.div>

              <motion.div
                className="hidden md:block absolute top-[-80px] left-[-50px]"
                initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <BaroqueSVG 
                  name="garden lights 1" 
                  size="md" 
                  color="#D4AF37" 
                  className="w-[300px] h-auto opacity-60"
                  style={{ transform: 'rotate(0deg)' }}
                />
              </motion.div>

              <motion.div
                className="hidden md:block absolute top-[-80px] right-[200px]"
                initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BaroqueSVG 
                  name="garden lights 1" 
                  size="md" 
                  color="#D4AF37" 
                  className="w-[300px] h-auto opacity-60"
                  style={{ transform: 'rotate(0deg)' }}
                />
              </motion.div>

              <motion.div
                className="hidden md:block absolute top-[-80px] right-[-50px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BaroqueSVG 
                  name="garden lights 1" 
                  size="md" 
                  color="#D4AF37" 
                  className="w-[300px] h-auto opacity-60"
                  style={{ transform: 'rotate(0deg)' }}
                />
              </motion.div>

              {/* SOLO mobile */}
              <motion.div
                className="block md:hidden absolute top-[-40px] left-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <BaroqueSVG 
                  name="garden lights 1" 
                  size="md" 
                  color="#D4AF37" 
                  className="w-[230px] h-auto opacity-60"
                  style={{ transform: 'rotate(-8deg)' }}
                />
              </motion.div>

              <motion.div
                className="block md:hidden absolute top-[-20px] right-0"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BaroqueSVG 
                  name="garden lights 1" 
                  size="md" 
                  color="#D4AF37" 
                  className="w-[250px] h-auto opacity-60"
                  style={{ transform: 'rotate(15deg)' }}
                />
              </motion.div>
            </div>
            
            {/* Candelabro colgando del centro */}
            <motion.div
              className="absolute top-[60px] md:top-[40px] left-1/2 -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: -30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.8 
              }}
            >
              <BaroqueSVG 
                name="Chandelier 2" 
                size="xl" 
                color="#000" 
                className="w-32 md:w-40 h-auto"
                style={{ 
                  filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.5))'
                }}
              />
            </motion.div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative order-2 md:order-1"
              {...useReveal(30, 0)}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="p-8 text-center rounded-2xl bg-white/80 backdrop-blur border-2 border-wedding-burgundy/30"
                initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <BaroqueSVG name="Table 1" size="xl" color="#8B1538" className="mx-auto mb-4" animated />
                <h3 className="md:text-5xl text-2xl font-classical-romance text-wedding-burgundy mb-3">Fiesta de Celebración</h3>
                <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-4" />
                <p className="text-wedding-charcoal/70 font-garamond">Después de la ceremonia, los esperamos para celebrar con música, baile y mucha alegría</p>
              </motion.div>
            </motion.div>
            <motion.div 
              className="text-center md:text-left order-1 md:order-2 relative"
              {...useReveal(30, 0.2)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h2 
                className="text-5xl md:text-7xl font-classical-romance text-wedding-burgundy mb-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Fiesta
              </motion.h2>
              <motion.div 
                className="space-y-4 text-lg text-wedding-charcoal font-garamond"
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
      <section className="section-padding bg-wedding-rose/40 relative">
        <motion.div 
          className="container-custom text-center relative z-10"
          {...useReveal(30, 0)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <BaroqueSVG name="Music Notes" size="xl" color="#8B1538" className="mx-auto mb-6" animated />
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-classical-romance text-wedding-burgundy mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            ¡Que no falte tu tema favorito!
          </motion.h2>
          <motion.p 
            className="text-xl text-wedding-charcoal/80 mb-8 max-w-2xl mx-auto font-garamond"
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
      <section className="section-padding relative">
        <div className="container-custom relative z-10">
          <motion.h2 
            className="text-5xl md:text-7xl font-classical-romance text-wedding-burgundy text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Acá te contamos todos los detalles…
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'WeddingRingsSet1', title: 'Dress Code', content: 'Elegante', description: null },
              { icon: 'WeddingGifts', title: 'Regalo', content: '¡El mejor regalo es tu presencia!', description: 'Si deseas realizarnos un regalo, te brindamos nuestros datos bancarios' },
              { icon: 'Balloons', title: 'Niños', content: 'Este es un festejo destinado solo a adultos', description: null }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="p-8 text-center rounded-2xl bg-white/70 backdrop-blur border-2 border-wedding-gold/20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.3 }}
                  >
                    {item.icon === 'WeddingRingsSet1' && <BaroqueSVG name="Groom Suit 1" size="xl" color="#8B1538" className="mx-auto mb-6" animated />}
                    {item.icon === 'WeddingGifts' && <BaroqueSVG name="Gift boxes" size="xl" color="#8B1538" className="mx-auto mb-6" animated />}
                    {item.icon === 'Balloons' && <BaroqueSVG name="Heart balloon" size="xl" color="#8B1538" className="mx-auto mb-6" animated />}
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-classical-romance text-wedding-burgundy mb-2">{item.title}</h3>
                  <div className="w-16 h-0.5 bg-wedding-gold mx-auto mb-4" />
                  <p className={"text-3xl md:text-4xl font-alex text-wedding-burgundy"}>{item.content}</p>
                  {item.description && <p className="text-sm text-wedding-charcoal/70 font-garamond">{item.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section-padding bg-wedding-burgundy text-white relative">
        <motion.div 
          className="container-custom text-center relative z-10"
          {...useReveal(30, 0)}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-classical-romance mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Confirmanos tu asistencia
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto font-garamond"
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
                <h3 className="text-2xl font-classical-romance text-white mb-6">¡Gracias por confirmar!</h3>
                <p className="mb-4 text-white/90 font-garamond">Hemos recibido tu confirmación. Te esperamos.</p>
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
            className="text-5xl md:text-7xl font-classical-romance text-wedding-burgundy text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ALOJAMIENTO
          </motion.h2>
          <motion.p 
            className="text-xl text-wedding-charcoal/80 text-center mb-12 max-w-2xl mx-auto font-garamond"
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
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="rounded-2xl bg-white/70 backdrop-blur border-2 border-wedding-gold/20 p-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                  >
                    <BaroqueSVG name="Love letter" size="lg" color="#8B1538" className="mx-auto mb-4" animated />
                  </motion.div>
                  <h3 className="text-lg font-classical-romance text-wedding-burgundy">{hotel}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.footer 
        className="bg-wedding-charcoal text-white py-12 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p 
            className="text-wedding-gold font-alex text-2xl mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            ¡Gracias!
          </motion.p>
          <p className="text-wedding-gold/80">@waistenprogramacion</p>
          <p className="text-sm text-white/60 mt-4 font-garamond">Waisten Programacion ® Invitaciones digitales Web Todos los derechos reservados.</p>
        </motion.div>
      </motion.footer>
    </main>
  )
}

