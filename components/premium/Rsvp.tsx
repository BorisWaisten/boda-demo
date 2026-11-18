'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Check, Heart, Minus, Plus, Send } from 'lucide-react'
import type { PremiumInvitation } from '../../lib/premium'
import { BottomSheet, PillButton, Reveal, SectionTitle } from './ui'

type Answer = {
  name: string
  attending: boolean | null
  seats: number
  diet: string[]
  song: string
  message: string
}

const DIETS = ['Sin restricciones', 'Vegetariano', 'Vegano', 'Sin TACC', 'Sin lactosa', 'Otra']

/* ---------- Confetti liviano (canvas, sin dependencias) ---------- */
export function burstConfetti() {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const c = document.createElement('canvas')
  c.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:120'
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  c.width = innerWidth * dpr
  c.height = innerHeight * dpr
  document.body.appendChild(c)
  const ctx = c.getContext('2d')!
  ctx.scale(dpr, dpr)
  const colors = ['#E8C35A', '#2E4A7D', '#C2714F', '#7A8450', '#F7F2E8', '#8e2a22']
  const parts = Array.from({ length: 140 }, () => ({
    x: innerWidth / 2,
    y: innerHeight * 0.55,
    vx: (Math.random() - 0.5) * 14,
    vy: -Math.random() * 16 - 6,
    w: 6 + Math.random() * 6,
    h: 8 + Math.random() * 8,
    r: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
    heart: Math.random() < 0.2,
  }))
  const start = performance.now()
  const tick = (t: number) => {
    const el = t - start
    ctx.clearRect(0, 0, innerWidth, innerHeight)
    for (const p of parts) {
      p.vy += 0.38
      p.vx *= 0.99
      p.x += p.vx
      p.y += p.vy
      p.r += p.vr
      ctx.save()
      ctx.globalAlpha = Math.max(0, 1 - el / 3200)
      ctx.translate(p.x, p.y)
      ctx.rotate(p.r)
      ctx.fillStyle = p.color
      if (p.heart) {
        ctx.font = `${p.h + 6}px serif`
        ctx.fillText('♥', -p.w / 2, p.h / 2)
      } else {
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)))
      }
      ctx.restore()
    }
    if (el < 3300) requestAnimationFrame(tick)
    else c.remove()
  }
  requestAnimationFrame(tick)
}

/* ---------- Wizard ---------- */
export default function Rsvp({
  data,
  guestName,
  seats,
  open,
  setOpen,
}: {
  data: PremiumInvitation
  guestName?: string
  seats?: number
  open: boolean
  setOpen: (v: boolean) => void
}) {
  const maxSeats = Math.min(seats ?? data.rsvp.maxSeats, data.rsvp.maxSeats)
  const storageKey = `rsvp-${data.slug}`
  const [saved, setSaved] = useState<Answer | null>(null)
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)
  const [a, setA] = useState<Answer>({
    name: guestName ?? '',
    attending: null,
    seats: Math.min(seats ?? data.rsvp.defaultSeats, maxSeats),
    diet: [],
    song: '',
    message: '',
  })
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (raw) setSaved(JSON.parse(raw))
    } catch {}
  }, [storageKey])

  useEffect(() => {
    if (open) {
      setStep(0)
      setTimeout(() => nameRef.current?.focus(), 350)
    }
  }, [open])

  const go = (s: number) => {
    setDir(s > step ? 1 : -1)
    setStep(s)
  }

  const steps = a.attending === false ? 3 : 4
  const progress = Math.min(1, (step + 1) / steps)

  const buildMessage = () => {
    const lines = [
      `💌 Confirmación · Boda ${data.coupleA} & ${data.coupleB}`,
      ``,
      `Nombre: ${a.name}`,
      a.attending ? `✅ ¡Voy! Somos ${a.seats}` : `❌ No voy a poder ir`,
    ]
    if (a.attending && a.diet.length) lines.push(`Alimentación: ${a.diet.join(', ')}`)
    if (a.attending && a.song) lines.push(`🎵 Canción: ${a.song}`)
    if (a.message) lines.push(``, `Mensaje: ${a.message}`)
    return lines.join('\n')
  }

  const submit = () => {
    const url = `https://wa.me/${data.rsvp.whatsapp}?text=${encodeURIComponent(buildMessage())}`
    try {
      localStorage.setItem(storageKey, JSON.stringify(a))
    } catch {}
    setSaved(a)
    if (a.attending) burstConfetti()
    go(9)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const toggleDiet = (d: string) =>
    setA((p) => {
      if (d === 'Sin restricciones') return { ...p, diet: p.diet.includes(d) ? [] : [d] }
      const rest = p.diet.filter((x) => x !== 'Sin restricciones')
      return { ...p, diet: rest.includes(d) ? rest.filter((x) => x !== d) : [...rest, d] }
    })

  const variants = {
    enter: (d: number) => ({ x: d * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -60, opacity: 0 }),
  }

  return (
    <>
      {/* Sección */}
      <section id="rsvp" className="relative overflow-hidden bg-p-sea px-6 py-24 text-p-paper">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-p-lemon/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-md text-center">
          <SectionTitle eyebrow={`Confirmá antes del ${data.rsvp.deadlineLabel}`} title="¿Nos acompañás?" light />
          <Reveal>
            {saved ? (
              <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-p-lemon text-p-ink">
                  <Check className="h-6 w-6" />
                </div>
                <p className="text-2xl">
                  {saved.attending ? `¡Gracias ${saved.name.split(' ')[0]}! Te esperamos 🥂` : `Gracias por avisarnos, ${saved.name.split(' ')[0]} 💛`}
                </p>
                {saved.attending && <p className="mt-1 text-lg text-p-paper/75">Confirmaste {saved.seats} {saved.seats === 1 ? 'lugar' : 'lugares'}</p>}
                <button type="button" onClick={() => setOpen(true)} className="mt-4 text-base underline underline-offset-4 text-p-paper/80">
                  Modificar respuesta
                </button>
              </div>
            ) : (
              <>
                <p className="text-xl leading-relaxed text-p-paper/85">
                  {guestName ? `${guestName}, reservamos ` : 'Reservamos '}
                  {maxSeats === 1 ? 'un lugar' : `hasta ${maxSeats} lugares`} para vos. Confirmar te lleva menos de un minuto.
                </p>
                <div className="mt-8 flex justify-center">
                  <PillButton variant="lemon" onClick={() => setOpen(true)} className="px-10 text-base">
                    <Heart className="h-4 w-4" /> Confirmar asistencia
                  </PillButton>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </section>

      {/* Wizard */}
      <BottomSheet open={open} onClose={() => setOpen(false)}>
        {step < 9 && (
          <div className="mb-6 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(Math.max(0, step === 3 && a.attending === false ? 1 : step - 1))}
              aria-label="Volver"
              className={`rounded-full p-2 text-p-ink/60 ${step === 0 ? 'invisible' : ''}`}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-p-ink/10">
              <motion.div className="h-full rounded-full bg-p-sea" animate={{ width: `${progress * 100}%` }} />
            </div>
            <span className="w-9 text-right text-sm tabular-nums text-p-ink/50">
              {Math.min(step + 1, steps)}/{steps}
            </span>
          </div>
        )}

        <div className="relative min-h-[320px] overflow-hidden">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={step}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {step === 0 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (a.name.trim()) go(1)
                  }}
                >
                  <h3 className="font-alex text-4xl text-p-ink">¿Cómo te llamás?</h3>
                  <p className="mt-1 text-lg text-p-ink/60">Así sabemos quién confirma.</p>
                  <input
                    ref={nameRef}
                    value={a.name}
                    onChange={(e) => setA({ ...a, name: e.target.value })}
                    placeholder="Nombre y apellido"
                    autoComplete="name"
                    className="mt-6 w-full rounded-2xl border border-p-ink/15 bg-white px-5 py-4 text-xl text-p-ink outline-none focus:border-p-sea focus:ring-4 focus:ring-p-sea/15"
                  />
                  <PillButton type="submit" className="mt-6 w-full" disabled={!a.name.trim()}>
                    Continuar
                  </PillButton>
                </form>
              )}

              {step === 1 && (
                <div>
                  <h3 className="font-alex text-4xl text-p-ink">¿Venís, {a.name.split(' ')[0]}?</h3>
                  <p className="mt-1 text-lg text-p-ink/60">{data.dateLabel}</p>
                  <div className="mt-6 grid gap-3">
                    {[
                      { v: true, t: '¡Sí, allá estaré!', e: '🥂' },
                      { v: false, t: 'No voy a poder', e: '💌' },
                    ].map((o) => (
                      <motion.button
                        key={String(o.v)}
                        type="button"
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          setA({ ...a, attending: o.v })
                          try {
                            navigator.vibrate?.(15)
                          } catch {}
                          setDir(1)
                          setStep(o.v ? 2 : 3)
                        }}
                        className={`flex items-center gap-4 rounded-2xl p-5 text-left text-xl font-semibold ring-1 transition ${
                          a.attending === o.v ? 'bg-p-ink text-p-paper ring-p-ink' : 'bg-white text-p-ink ring-p-ink/10'
                        }`}
                      >
                        <span className="text-3xl">{o.e}</span>
                        {o.t}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-alex text-4xl text-p-ink">¿Cuántos son?</h3>
                  <p className="mt-1 text-lg text-p-ink/60">
                    Tenés {maxSeats} {maxSeats === 1 ? 'lugar reservado' : 'lugares reservados'}.
                  </p>
                  <div className="mt-8 flex items-center justify-center gap-6">
                    <button
                      type="button"
                      aria-label="Menos"
                      onClick={() => setA({ ...a, seats: Math.max(1, a.seats - 1) })}
                      disabled={a.seats <= 1}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-p-ink/15 active:scale-90 disabled:opacity-30"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={a.seats}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        className="w-16 text-center font-playfair text-6xl tabular-nums text-p-ink"
                      >
                        {a.seats}
                      </motion.span>
                    </AnimatePresence>
                    <button
                      type="button"
                      aria-label="Más"
                      onClick={() => setA({ ...a, seats: Math.min(maxSeats, a.seats + 1) })}
                      disabled={a.seats >= maxSeats}
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white ring-1 ring-p-ink/15 active:scale-90 disabled:opacity-30"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="eyebrow mt-10 text-p-sea">Alimentación</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {DIETS.map((d) => {
                      const on = a.diet.includes(d)
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDiet(d)}
                          aria-pressed={on}
                          className={`rounded-full px-4 py-2 text-base ring-1 transition active:scale-95 ${
                            on ? 'bg-p-sea text-p-paper ring-p-sea' : 'bg-white text-p-ink ring-p-ink/15'
                          }`}
                        >
                          {on && <Check className="-ml-1 mr-1 inline h-3.5 w-3.5" />}
                          {d}
                        </button>
                      )
                    })}
                  </div>
                  <PillButton className="mt-8 w-full" onClick={() => go(3)}>
                    Continuar
                  </PillButton>
                </div>
              )}

              {step === 3 && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    submit()
                  }}
                >
                  <h3 className="font-alex text-4xl text-p-ink">{a.attending ? 'Un último detalle' : 'Te vamos a extrañar'}</h3>
                  {a.attending && (
                    <label className="mt-6 block">
                      <span className="eyebrow text-p-sea">🎵 Una canción que no puede faltar</span>
                      <input
                        value={a.song}
                        onChange={(e) => setA({ ...a, song: e.target.value })}
                        placeholder="Artista – Tema"
                        className="mt-2 w-full rounded-2xl border border-p-ink/15 bg-white px-5 py-4 text-lg outline-none focus:border-p-sea focus:ring-4 focus:ring-p-sea/15"
                      />
                    </label>
                  )}
                  <label className="mt-5 block">
                    <span className="eyebrow text-p-sea">Un mensaje para los novios</span>
                    <textarea
                      value={a.message}
                      onChange={(e) => setA({ ...a, message: e.target.value })}
                      rows={3}
                      placeholder="Opcional"
                      className="mt-2 w-full resize-none rounded-2xl border border-p-ink/15 bg-white px-5 py-4 text-lg outline-none focus:border-p-sea focus:ring-4 focus:ring-p-sea/15"
                    />
                  </label>
                  <PillButton type="submit" variant="lemon" className="mt-6 w-full">
                    <Send className="h-4 w-4" /> Enviar confirmación
                  </PillButton>
                  <p className="mt-3 text-center text-sm text-p-ink/50">Se abre WhatsApp con tu respuesta lista para enviar.</p>
                </form>
              )}

              {step === 9 && (
                <div className="py-6 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-p-lemon"
                  >
                    {a.attending ? <Check className="h-10 w-10 text-p-ink" /> : <Heart className="h-9 w-9 text-p-ink" />}
                  </motion.div>
                  <h3 className="mt-6 font-alex text-5xl text-p-ink">{a.attending ? '¡Nos vemos ahí!' : '¡Gracias!'}</h3>
                  <p className="mt-2 text-xl text-p-ink/70">
                    {a.attending ? 'Tu confirmación quedó lista.' : 'Gracias por avisarnos con tiempo.'}
                  </p>
                  <PillButton variant="outline" className="mt-8 w-full" onClick={() => setOpen(false)}>
                    Volver a la invitación
                  </PillButton>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </BottomSheet>
    </>
  )
}
