'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarHeart, Camera, Gift, Heart, Home } from 'lucide-react'

const ITEMS = [
  { id: 'inicio', label: 'Inicio', icon: Home },
  { id: 'agenda', label: 'Agenda', icon: CalendarHeart },
  { id: 'rsvp', label: 'Confirmar', icon: Heart, primary: true },
  { id: 'regalos', label: 'Regalos', icon: Gift },
  { id: 'fotos', label: 'Fotos', icon: Camera },
]

// Secciones que "pertenecen" a cada ítem del dock
const OWNER: Record<string, string> = {
  inicio: 'inicio',
  bienvenida: 'inicio',
  historia: 'inicio',
  agenda: 'agenda',
  dresscode: 'agenda',
  fotos: 'fotos',
  regalos: 'regalos',
  rsvp: 'rsvp',
  faq: 'rsvp',
}

/** Barra inferior tipo app (zona del pulgar), con la acción principal al centro. */
export default function BottomDock({ visible, onRsvp }: { visible: boolean; onRsvp: () => void }) {
  const [active, setActive] = useState('inicio')
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const ids = Object.keys(OWNER)
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(OWNER[e.target.id] ?? 'inicio')
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Se esconde al bajar rápido y vuelve al subir (patrón Safari / Instagram)
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom = window.innerHeight + y > document.body.scrollHeight - 80
      if (nearBottom) setHidden(false)
      else if (y - last > 12) setHidden(true)
      else if (last - y > 12) setHidden(false)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const show = visible && !hidden

  return (
    <motion.nav
      aria-label="Secciones"
      className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 safe-bottom"
      initial={{ y: 120 }}
      animate={{ y: show ? 0 : 120 }}
      transition={{ type: 'spring', damping: 26, stiffness: 260 }}
    >
      <ul className="flex w-full max-w-sm items-end justify-between rounded-[26px] bg-p-paper/85 px-1.5 py-2 shadow-[0_12px_40px_-12px_rgb(var(--p-ink)/0.45)] ring-1 ring-p-ink/10 backdrop-blur-xl">
        {ITEMS.map((it) => {
          const Icon = it.icon
          const isActive = active === it.id
          if (it.primary)
            return (
              <li key={it.id} className="-mt-7 shrink-0 px-1">
                <motion.button
                  type="button"
                  onClick={onRsvp}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-p-ink text-p-lemon shadow-xl ring-4 ring-p-paper"
                  aria-label="Confirmar asistencia"
                >
                  <motion.span animate={{ scale: [1, 1.18, 1] }} transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.8 }}>
                    <Heart className="h-6 w-6 fill-current" />
                  </motion.span>
                </motion.button>
              </li>
            )
          return (
            <li key={it.id} className="flex min-w-0 flex-1 justify-center">
              <a
                href={`#${it.id}`}
                className={`relative flex w-full max-w-[4rem] flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[0.7rem] font-semibold tracking-wide transition ${
                  isActive ? 'text-p-ink' : 'text-p-ink/45'
                }`}
                aria-current={isActive ? 'true' : undefined}
              >
                {isActive && <motion.span layoutId="dock-pill" className="absolute inset-0 -z-10 rounded-2xl bg-p-ink/[0.07]" />}
                <Icon className="h-5 w-5" />
                <span className="font-sans">{it.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
