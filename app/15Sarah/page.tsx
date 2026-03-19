'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountdownTimer from '../../components/CountdownTimer'

const SARAH_SVG = '/cumple15Sarah/sarah.svg'
const BOLA_BOLICHE = '/cumple15Sarah/bola de boliche.svg'
const BOLAROSA = '/cumple15Sarah/bolaRosa.svg'
const MUSICAL = '/cumple15Sarah/notaMusical.svg'
const OSITO = '/cumple15Sarah/osito.svg'
const BRINDIS = '/cumple15Sarah/brindis.svg'
const CARTA_ASISTENCIA = '/cumple15Sarah/carta asistecia.svg'
const BRESH_IMG = '/cumple15Sarah/BRESH.png'
const RULITOS = '/cumple15Sarah/rulitos.svg'
const fondo = '/cumple15Sarah/fondo.svg'
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
    <main className="min-h-screen bg-cumple15-pink overflow-hidden"> {/* El overflow va aquí */}
      
      {/* SECCIÓN 1: SARAH */}
      <section className="relative w-full flex items-center justify-center bg-cumple15-pink" style={{ height: '25vh' }}>
        <motion.div className="w-full h-full flex items-center justify-center" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
          <img src={SARAH_SVG} alt="Sarah" className="w-full scale-110 object-fill" />
        </motion.div>
      </section>

      {/* SECCIÓN 2: CELEBREMOS */}
      <section ref={section2Ref} className="relative w-full flex flex-col items-center justify-center bg-cumple15-red py-10 md:py-14">
        {/* Elementos flotantes de esta sección */}
        <img src={BOLA_BOLICHE} className="absolute  left-[-48%] top-[20%] z-50 pointer-events-none w-full " alt="" />
        <img src={RULITOS} className="absolute left-[-38%] top-[-18%] w-full pointer-events-none" alt="" />
        <img src={RULITOS} className="absolute right-[-22%] bottom-[10%] w-[70%]  pointer-events-none" alt="" />
        
        <div className="container-custom text-center relative z-10">
          <motion.h2 {...title1Reveal} className="absolute right-[29%] font-boochild text-white text-4xl sm:text-3xl md:text-4xl">¡CELEBREMOS!</motion.h2>
          <motion.div {...title2Reveal} className="w-full h-[17vh] mx-auto">
            <img src="/cumple15Sarah/mis15.svg" alt="Mis 15" className="w-full mx-auto pointer-events-none scale-150" />
          </motion.div>
          <motion.div {...dateReveal}>
            <p className="font-montserrat font-bold mt-6 mb-2 text-white text-xl md:text-3xl">16/05/2026</p>
          </motion.div>
          <motion.div {...countdownReveal} className="max-w-2xl mx-auto">
            <CountdownTimer targetDate="2026-05-16T21:30:00" variant="cumple15" />
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 3: FIESTA */}
      <section className="relative z-10 w-full py-16">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }} />
        
        {/* Osito flotando - Quitamos el corte de sección */}
        <motion.div className="absolute right-[-10%] top-[-25%] pointer-events-none z-20" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 0.8, x: 0 }} viewport={{ once: true }}>
          <img src={OSITO} alt="" className="w-48 scale-[1.5] pointer-events-none -rotate-12 object-contain" />
        </motion.div>

        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-6 shadow-md">
            <img src={BRINDIS} alt="" className="w-full scale-[3] object-contain pointer-events-none" />
          </div>
          <h2 className="font-poplar text-cumple15-red text-4xl mb-4">FIESTA</h2>
          <div className="space-y-2 mb-8">
            <p className="text-cumple15-red font-century font-bold text-lg md:text-xl">SÁBADO 16 DE MAYO | 21:30 HS</p>
            <p className="font-catalish text-cumple15-red text-[1.55rem]">Salón de eventos UFC</p>
            <p className="text-cumple15-red font-century font-bold text-xs px-4">RP91, BELGRANO MANUEL BLVD, TOTORAS, SANTA FÉ</p>
          </div>
          <a href="https://maps.app.goo.gl/vRDFsurHjvA3wxWNA" className="inline-block px-1 rounded-full bg-cumple15-red text-white font-catalish text-xl shadow-lg">Cómo Llegar</a>
        </div>
      </section>

      {/* SECCIÓN 4: BRESH (Corregida) */}
      <section className="relative z-10 h-[20vh]  w-full">
        <div className="absolute  -inset-[16px] z-0 opacity-20" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }} />
        
        {/* Osito y Bola Rosa rodeando el logo */}
        <img src={OSITO} alt="" className="absolute pointer-events-none left-[-8%] top-[-7rem] scale-[1.8] w-40 rotate-12 opacity-90 z-20" />
        
          <img src={BRESH_IMG} alt="Bresh" className="w-full object-contain pointer-events-none" />
 

        <img src={BOLAROSA} alt="" className="absolute right-[-30%] bottom-[20%] scale-[1.5] w-64 z-20 pointer-events-none" />
      </section>

      {/* SECCIÓN 5: MÚSICA */}
      <section className="relative z-10 py-16 w-full">
        <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover' }} />
        <div className="container-custom text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white mb-6 shadow-md">
            <img src={MUSICAL} alt="" className="w-full scale-[5] object-cover pointer-events-none" />
          </div>
          <h2 className="font-poplar text-cumple15-red text-4xl mb-2">MÚSICA</h2>
          <p className="font-century font-bold text-cumple15-red text-lg mb-6">Tema que no puede faltar</p>
          <button onClick={() => window.open('https://forms.gle/Tt93N32FCQjWAxtj7', '_blank')} className="px-1 rounded-full bg-cumple15-red text-white font-catalish text-xl">Sugerir Canción</button>
        </div>
      </section>

      {/* SECCIÓN 6: TARJETA */}
      <section className="relative py-10 w-full bg-cumple15-red">
        <div className="container-custom text-center">
          <p className="text-cumple15-red rounded-2xl bg-cumple15-pink py-1 w-[60%] mx-auto font-catalish text-lg md:text-xl">
            Valor de la tarjeta: $68.000
          </p>
        </div>
        <img src={BOLA_BOLICHE} alt="" className="absolute left-[-25%] bottom-[-40%] w-[17rem] z-20 pointer-events-none" />
      </section>

      {/* SECCIÓN 7: RSVP */}
      <section className=" bg-cumple15-red w-full flex flex-col items-center">
          <div className="text-center px-4 pt-[4rem] relative z-20">
            <img src={CARTA_ASISTENCIA} alt="" className="w-[15rem] absolute -top-[9rem] left-[15%] scale-[1.25] object-contain pointer-events-none" />
            <p className="text-white font-century font-bold italic mb-2">Confirmación de asistencia hasta el 30/4</p>
            <p className="text-white/95 text-xs font-century italic mb-8">¡NO OLVIDES CONFIRMAR, TE ESPERAMOS!</p>
            <a 
            href="https://wa.me/5493476662048" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-1 rounded-full bg-cumple15-pink text-cumple15-red font-catalish text-xl">Confirmar Asistencia</a>
          </div>
      </section>
    </main>
  )
}
