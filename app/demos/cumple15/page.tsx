'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountdownTimer from '../../../components/CountdownTimer'

const SARAH_SVG = '/cumple15Sarah/sarah.svg'
const BOLA_BOLICHE = '/cumple15Sarah/bola de boliche.svg'
const OSITO = '/cumple15Sarah/osito.svg'
const BRINDIS = '/cumple15Sarah/brindis.svg'
const CARTA_ASISTENCIA = '/cumple15Sarah/carta asistecia.svg'
const BRESH_IMG = '/cumple15Sarah/BRESH.png'
const RULITOS = '/cumple15Sarah/rulitos.svg'
const SECTION_1_HEIGHT = '70vh'

export default function Cumple15Demo() {
  const section2Ref = useRef<HTMLElement>(null)
  useInView(section2Ref, { once: true, margin: '-80px' })

  const useReveal = (offset: number = 24, delay: number = 0) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    return {
      ref,
      initial: { opacity: 0, y: offset },
      animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: offset },
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }
  }

  const title1Reveal = useReveal(28, 0)
  const title2Reveal = useReveal(28, 0.15)
  const dateReveal = useReveal(28, 0.3)
  const countdownReveal = useReveal(28, 0.45)

  return (
    <main className="min-h-screen bg-cumple15-pink overflow-hidden">
      {/* Sección 1: SARAH — fondo tipo peluche, nombre en SVG */}
      <section
        className="relative w-full  flex items-center justify-center bg-cumple15-pink"
        style={{ height: '25vh' }}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SARAH_SVG}
            alt="Sarah"
            className="w-full scale-110 object-fill object-center block"
          />
        </motion.div>
      </section>

      {/* Sección 2: ¡CELEBREMOS! · MIS 15 · fecha · contador — fondo #b7163c */}
      <section
        ref={section2Ref}
        className="relative section-padding w-full flex flex-col items-center justify-center bg-cumple15-red py-10 md:py-14 "
      >
      {/* Bola de boliche (disco) — izquierda, no bloquea clics */}
        <motion.div
          className="absolute left-[-50%] top-[25%] z-50 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BOLA_BOLICHE} alt="" className="w-[70%] object-contain object-left-bottom" />
        </motion.div>
        <motion.div
          className="absolute left-[-34%] top-[-10%] w-full scale-125 h-auto pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <img src={RULITOS} alt="" className="w-full h-auto object-contain" />
        </motion.div>
        <motion.div
          className="absolute right-[-30%] bottom-16 md:bottom-8 w-[90%] h-auto pointer-events-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={RULITOS} alt="" className="w-full h-auto object-contain" />
        </motion.div>
        <div className="container-custom text-center relative z-10 space-y-0">
          <motion.div
            ref={title1Reveal.ref}
            initial={title1Reveal.initial}
            animate={title1Reveal.animate}
            transition={title1Reveal.transition}
            className=""
          >
            <h2 className="font-boochild text-white text-3xl sm:text-3xl md:text-4xl tracking-wide">
              ¡CELEBREMOS!
            </h2>
          </motion.div>

          <motion.div
            ref={title2Reveal.ref}
            initial={title2Reveal.initial}
            animate={title2Reveal.animate}
            transition={title2Reveal.transition}
            className="w-full max-w-xl mx-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cumple15Sarah/mis15.svg"
              alt="Mis 15"
              className="w-full scale-150 block"
            />
          </motion.div>

          <motion.div
            ref={dateReveal.ref}
            initial={dateReveal.initial}
            animate={dateReveal.animate}
            transition={dateReveal.transition}
            className=""
          >
            {/* Fuente con cifras legibles: Boochild no renderiza bien el "1" */}
            <p className="font-montserrat font-medium text-white text-xl md:text-3xl tracking-wide">
              16/05/2026
            </p>
          </motion.div>

          <motion.div
            ref={countdownReveal.ref}
            initial={countdownReveal.initial}
            animate={countdownReveal.animate}
            transition={countdownReveal.transition}
            className="max-w-2xl mx-auto"
          >
            <CountdownTimer
              targetDate="2026-05-16T21:30:00"
              variant="cumple15"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección 3: FIESTA — fondo blanco, brindis, datos del evento */}
      <section className="relative z-10 section-padding w-full bg-white py-16 md:py-20 ">
        <motion.div
          className="absolute right-[-90%] top-[-30%] -translate-y-1/2  pointer-events-none"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={OSITO} alt="" className="w-[60%] -rotate-12 h-full object-contain" />
        </motion.div>

        <div className="container-custom text-center relative z-10">
          <motion.div
            className="inline-flex items-center justify-center w-[8rem] h-[8rem] rounded-full bg-cumple15-pink mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={BRINDIS} alt="" className="w-full scale-[2] object-contain" />
          </motion.div>
          <motion.h2
            className="font-poplar text-cumple15-red text-3xl md:text-4xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            FIESTA
          </motion.h2>
          <motion.p
            className="text-cumple15-pink font-medium text-lg md:text-xl mb-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SÁBADO 16 DE MAYO | 21:30 HS
          </motion.p>
          <motion.p
            className="font-boochild text-cumple15-red text-xl md:text-2xl mb-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            SALÓN DE EVENTOS UFC
          </motion.p>
          <motion.p
            className="text-cumple15-pink text-base md:text-lg mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Avenida Coronel Roca 3490, Villa Soldati
          </motion.p>
          <motion.a
            href="https://maps.google.com/?q=Avenida+Coronel+Roca+3490+Villa+Soldati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-2xl bg-cumple15-red text-white font-road-rage text-lg uppercase border-2 border-white shadow-md hover:bg-cumple15-red/90 transition-colors"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            CÓMO LLEGAR
          </motion.a>
        </div>
      </section>

      {/* Sección 4: BRESH — fondo rosa claro, imagen BRESH */}
      <section className="relative section-padding w-full max-h-[40vh] bg-cumple15-pink">
      <motion.div
  className="absolute left-[-20%] bottom-[0%] -translate-y-1/2 w-[80%] z-[200] pointer-events-none"
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 0.8, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  <img src={OSITO} alt="" className="w-full rotate-12 h-full" />
</motion.div>
  
  <motion.div
    className="relative w-full h-[50vh]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <img
      src={BRESH_IMG}
      alt="Bresh"
      className="absolute top-[10rem] left-1/2 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 object-contain"
    />
  </motion.div>
</section>
      {/* Sección 5: RSVP — gradiente rosa claro arriba, magenta abajo (~2/3) */}
      <section className="relative section-padding w-full min-h-[420px] ">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #f9d4d6 0%, #f9d4d6 28%, #b7163c 28%, #b7163c 100%)',
          }}
        />

        <motion.div
          className="absolute right-[-10%] top-[0%] w-48  pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.9 }}
          viewport={{ once: true }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={BOLA_BOLICHE} alt="" className="w-full  object-contain object-left-top" />
        </motion.div>

        <div className="container-custom relative z-10 flex flex-col items-center justify-center min-h-[380px] text-center pt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={CARTA_ASISTENCIA} alt="" className="w-[100px] scale-[2.5] mx-auto object-contain" />
          </motion.div>
          <motion.p
            className="text-white font-montserrat md:text-lg mb-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Confirmación de asistencia hasta el 30/4
          </motion.p>
          <motion.p
            className="text-white/95 font-montserrat italic mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ¡NO OLVIDES CONFIRMAR, TE ESPERAMOS!
          </motion.p>
          <motion.a
            href="https://forms.gle/8wUJRq7bamxvnNUNA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-2xl bg-white text-cumple15-red font-road-rage text-sm uppercase border-2 border-cumple15-red shadow-md hover:bg-cumple15-pink transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            CONFIRMAR ASISTENCIA
          </motion.a>
        </div>
      </section>
    </main>
  )
}
