'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type Phase = 'closed' | 'seal' | 'flap' | 'letter' | 'done'

type Props = {
  guestName?: string
  monogram: string
  names: string
  dateLabel: string
  backdrop: string
  /** Se llama en el gesto del usuario (sirve para arrancar la música) */
  onOpenStart: () => void
  onOpened: () => void
}

/**
 * Sobre interactivo: el invitado toca el sello de lacre, la solapa se abre en 3D,
 * la carta sube y la invitación se revela. Es el "momento wow" que hoy venden
 * las plataformas premium de EE.UU. (Paperless Post, Greenvelope, The Digital Yes).
 */
export default function Envelope({ guestName, monogram, names, dateLabel, backdrop, onOpenStart, onOpened }: Props) {
  const [phase, setPhase] = useState<Phase>('closed')
  const reduce = useReducedMotion()
  const k = reduce ? 0.15 : 1

  useEffect(() => {
    document.documentElement.style.overflow = phase === 'done' ? '' : 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [phase])

  const open = () => {
    if (phase !== 'closed') return
    onOpenStart()
    try {
      navigator.vibrate?.(25)
    } catch {}
    setPhase('seal')
    setTimeout(() => setPhase('flap'), 350 * k)
    setTimeout(() => setPhase('letter'), 1150 * k)
    setTimeout(() => setPhase('done'), 2600 * k)
  }

  const flapOpen = phase === 'flap' || phase === 'letter' || phase === 'done'
  const letterUp = phase === 'letter' || phase === 'done'

  return (
    <AnimatePresence onExitComplete={onOpened}>
      {phase !== 'done' && (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-6"
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
          transition={{ duration: 0.9 * k, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Fondo: foto difuminada + papel */}
          <div className="absolute inset-0">
            <Image src={backdrop} alt="" fill priority className="object-cover scale-110 blur-md" sizes="100vw" />
            <div className="absolute inset-0 bg-p-ink/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(0_0_0/0.45))]" />
          </div>

          <motion.p
            className="eyebrow relative mb-10 text-p-paper/80"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: letterUp ? 0 : 1, y: 0 }}
            transition={{ duration: 0.8, delay: phase === 'closed' ? 0.3 : 0 }}
          >
            {guestName ? 'Una invitación especial' : 'Estás invitado'}
          </motion.p>

          <motion.div
            className="relative w-[min(86vw,380px)] aspect-[1.32/1]"
            style={{ perspective: 1400 }}
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: letterUp ? 60 : 0, rotate: phase === 'closed' ? -2 : 0 }}
            transition={{ duration: 0.9 * k, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Interior del sobre */}
            <div className="absolute inset-0 rounded-[6px] bg-[#e4d7bf] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)]" />

            {/* Carta */}
            <motion.div
              className="absolute left-[6%] right-[6%] top-[5%] h-[90%] rounded-[4px] paper-texture shadow-md flex flex-col items-center justify-center text-center px-4"
              style={{ zIndex: 2 }}
              animate={{ y: letterUp ? '-58%' : '0%' }}
              transition={{ duration: 1.1 * k, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow text-p-sea/80 !text-[0.55rem]">Nos casamos</span>
              <span className="font-alex text-4xl leading-tight text-p-ink mt-1">{names}</span>
              <span className="mt-1 text-sm italic text-p-ink/70">{dateLabel}</span>
            </motion.div>

            {/* Frente (bolsillo) */}
            <div
              className="absolute inset-0 rounded-[6px] bg-gradient-to-b from-[#efe5d2] to-[#e7dcc6]"
              style={{ zIndex: 3, clipPath: 'polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)' }}
            >
              <div className="absolute inset-x-0 bottom-[5%] text-center">
                {guestName ? (
                  <>
                    <span className="eyebrow block text-p-ink/50 !text-[0.55rem]">Para</span>
                    <span className="font-alex text-[1.7rem] leading-tight text-p-ink">{guestName}</span>
                  </>
                ) : (
                  <span className="font-alex text-3xl text-p-ink/80">{names}</span>
                )}
              </div>
            </div>

            {/* Solapa */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top"
              style={{
                zIndex: flapOpen && phase !== 'flap' ? 1 : 4,
                transformStyle: 'preserve-3d',
              }}
              animate={{ rotateX: flapOpen ? 180 : 0 }}
              transition={{ duration: 0.8 * k, ease: [0.65, 0, 0.35, 1] }}
            >
              <div
                className="absolute inset-0 rounded-t-[6px] bg-gradient-to-b from-[#e9dec9] to-[#dccfb5] drop-shadow-md"
                style={{ clipPath: 'polygon(0 0, 100% 0, 50% 58%)' }}
              />
            </motion.div>

            {/* Sello de lacre */}
            <AnimatePresence>
              {phase === 'closed' && (
                <motion.button
                  type="button"
                  onClick={open}
                  aria-label="Abrir la invitación"
                  style={{ x: '-50%', y: '-50%' }}
                  className="pulse-ring absolute left-1/2 top-[58%] z-[5] h-[60px] w-[60px] rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-p-lemon/60"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 1.4, opacity: 0, rotate: 25 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.5 }}
                >
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,#c0574a,#8e2a22_60%,#6e1d17)] shadow-[inset_0_-4px_8px_rgb(0_0_0/0.35),0_6px_14px_rgb(0_0_0/0.35)]" />
                  <span className="absolute inset-[7px] rounded-full border border-white/25" />
                  <span className="relative font-alex text-2xl text-[#f6dcc9] drop-shadow">{monogram}</span>
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="relative mt-12 text-p-paper/85 text-lg italic"
            animate={{ opacity: phase === 'closed' ? [0.5, 1, 0.5] : 0 }}
            transition={phase === 'closed' ? { duration: 2.4, repeat: Infinity } : { duration: 0.3 }}
          >
            Tocá el sello para abrir
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
