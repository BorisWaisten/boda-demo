'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import {
  CalendarPlus,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Church,
  Copy,
  Gift,
  GlassWater,
  MapPin,
  Moon,
  Music4,
  Share2,
  X,
} from 'lucide-react'
import type { PremiumEvent, PremiumInvitation } from '../../lib/premium'
import { downloadIcs, googleCalendarUrl, stamp, type CalEvent } from '../../lib/calendar'
import { BottomSheet, Divider, PillButton, Reveal, SectionTitle, useToast } from './ui'

/* =========================================================
   HERO
   ========================================================= */
export function Hero({ data, guestName }: { data: PremiumInvitation; guestName?: string }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="inicio" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-p-ink">
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <div className="kenburns absolute inset-0">
          <Image src={data.heroImage} alt={`${data.coupleA} y ${data.coupleB}`} fill priority className="object-cover" sizes="100vw" />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-p-ink/50 via-p-ink/10 to-p-ink/90" />

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-28 text-center text-p-paper">
        {guestName && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-4 text-lg italic text-p-paper/85">
            {guestName}, con muchísimo cariño
          </motion.p>
        )}
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="eyebrow text-p-lemon">
          Nos casamos
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-3 font-alex text-[clamp(3.6rem,17vw,7rem)] leading-[0.95] drop-shadow-[0_4px_20px_rgb(0_0_0/0.35)]"
        >
          {data.coupleA}
          <span className="block text-[0.5em] text-p-lemon">&amp;</span>
          {data.coupleB}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-5 text-xl">
          {data.dateLabel}
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="text-base italic text-p-paper/75">
          {data.city}
        </motion.p>
      </motion.div>

      <motion.a
        href="#bienvenida"
        aria-label="Bajar"
        className="absolute bottom-8 left-1/2 z-10 text-p-paper/80"
        style={{ x: '-50%' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ChevronDown className="h-7 w-7" />
      </motion.a>
    </section>
  )
}

/* =========================================================
   BIENVENIDA + CUENTA REGRESIVA
   ========================================================= */
function useCountdown(iso: string) {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    setNow(Date.now())
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const diff = now === null ? 0 : Math.max(0, new Date(iso).getTime() - now)
  return {
    ready: now !== null,
    done: now !== null && diff === 0,
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  }
}

function Digit({ value, label }: { value: number; label: string }) {
  const v = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[72px] w-[66px] items-center justify-center overflow-hidden rounded-2xl bg-p-ink text-p-paper shadow-[0_10px_24px_-10px_rgb(var(--p-ink)/0.6)]">
        <span className="absolute inset-x-0 top-1/2 h-px bg-p-paper/10" />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={v}
            initial={{ y: '-60%', opacity: 0, rotateX: 60 }}
            animate={{ y: '0%', opacity: 1, rotateX: 0 }}
            exit={{ y: '60%', opacity: 0, rotateX: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-playfair text-[2rem] tabular-nums"
          >
            {v}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="eyebrow mt-2 !text-[0.58rem] text-p-ink/60">{label}</span>
    </div>
  )
}

export function Welcome({ data, onShare }: { data: PremiumInvitation; onShare: () => void }) {
  const c = useCountdown(data.dateISO)
  return (
    <section id="bienvenida" className="paper-texture relative px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <p className="eyebrow text-p-sea">Querida familia y amigos</p>
          <p className="mt-6 text-[1.35rem] leading-relaxed text-p-ink/85">{data.welcome}</p>
          <Divider />
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <p className="eyebrow mb-5 text-p-sea">Faltan</p>
          {c.done ? (
            <p className="font-alex text-5xl text-p-ink">¡Llegó el gran día!</p>
          ) : (
            <div className="flex justify-center gap-2.5" style={{ perspective: 400 }} aria-live="off">
              <Digit value={c.days} label="Días" />
              <Digit value={c.hours} label="Horas" />
              <Digit value={c.minutes} label="Min" />
              <Digit value={c.seconds} label="Seg" />
            </div>
          )}
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-3">
          <AddToCalendarButton data={data} event={data.events[0]} label="Guardar la fecha" />
          <PillButton variant="outline" onClick={onShare}>
            <Share2 className="h-4 w-4" /> Compartir
          </PillButton>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   AGENDAR (bottom sheet con Google / Apple)
   ========================================================= */
function toCalEvent(data: PremiumInvitation, ev: PremiumEvent, wholeDay = false): CalEvent {
  const base = data.dateISO.slice(0, 10)
  const firstHour = Number(data.events[0].time.split(':')[0])
  const offset = Number(ev.time.split(':')[0]) < firstHour ? 1 : 0
  const last = data.events[data.events.length - 1]
  const lastOffset = Number(last.time.split(':')[0]) < firstHour ? 1 : 0
  return {
    title: wholeDay ? `Boda de ${data.coupleA} & ${data.coupleB}` : `${ev.title} · ${data.coupleA} & ${data.coupleB}`,
    details: `${ev.place}. ${typeof window !== 'undefined' ? window.location.href.split('?')[0] : ''}`,
    location: ev.address,
    start: stamp(base, ev.time, 0, offset),
    end: wholeDay ? stamp(base, last.time, 0, lastOffset) : stamp(base, ev.time, ev.durationMin, offset),
    timezone: data.timezone,
  }
}

export function AddToCalendarButton({
  data,
  event,
  label = 'Agendar',
  compact,
}: {
  data: PremiumInvitation
  event: PremiumEvent
  label?: string
  compact?: boolean
}) {
  const [open, setOpen] = useState(false)
  const toast = useToast()
  const whole = !compact
  return (
    <>
      {compact ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-p-ink/15 px-4 text-sm font-semibold text-p-ink active:scale-95"
        >
          <CalendarPlus className="h-4 w-4" /> {label}
        </button>
      ) : (
        <PillButton onClick={() => setOpen(true)}>
          <CalendarPlus className="h-4 w-4" /> {label}
        </PillButton>
      )}
      <BottomSheet open={open} onClose={() => setOpen(false)} title="Agendar">
        <p className="mb-6 text-center text-lg text-p-ink/70">
          {whole ? 'Te avisamos un día antes 💌' : `${event.title} · ${event.time} hs`}
        </p>
        <div className="flex flex-col gap-3">
          <PillButton href={googleCalendarUrl(toCalEvent(data, event, whole))}>Google Calendar</PillButton>
          <PillButton
            variant="outline"
            onClick={() => {
              downloadIcs(toCalEvent(data, event, whole), `boda-${data.slug}.ics`)
              toast('Evento descargado')
              setOpen(false)
            }}
          >
            Apple / Outlook (.ics)
          </PillButton>
        </div>
      </BottomSheet>
    </>
  )
}

/* =========================================================
   NUESTRA HISTORIA (carrusel con snap)
   ========================================================= */
export function Story({ data }: { data: PremiumInvitation }) {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const onScroll = () => {
    const el = scroller.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    if (!card) return
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)))
  }
  const go = (i: number) => {
    const el = scroller.current
    const card = el?.firstElementChild as HTMLElement | null
    if (!el || !card) return
    el.scrollTo({ left: i * (card.offsetWidth + 16), behavior: 'smooth' })
  }

  return (
    <section id="historia" className="bg-p-paper py-24">
      <div className="px-6">
        <SectionTitle eyebrow="Cómo llegamos acá" title="Nuestra historia" />
      </div>
      <div
        ref={scroller}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-4"
      >
        {data.story.map((s, i) => (
          <motion.article
            key={s.year}
            className="relative w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-[28px] bg-white shadow-[0_20px_40px_-24px_rgb(var(--p-ink)/0.5)]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
          >
            <div className="relative aspect-[4/5]">
              <Image src={s.image} alt={s.title} fill className="object-cover" sizes="(max-width: 640px) 80vw, 320px" />
              <div className="absolute inset-0 bg-gradient-to-t from-p-ink/90 via-p-ink/10 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-p-paper/90 px-3 py-1 font-playfair text-sm text-p-ink backdrop-blur">
                {s.year}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 text-p-paper">
                <h3 className="font-alex text-4xl">{s.title}</h3>
                <p className="mt-2 text-[1.05rem] leading-snug text-p-paper/90">{s.text}</p>
              </div>
            </div>
          </motion.article>
        ))}
        <div className="w-2 shrink-0" aria-hidden />
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <button type="button" aria-label="Anterior" onClick={() => go(Math.max(0, active - 1))} className="rounded-full p-2 text-p-ink/60 active:scale-90">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {data.story.map((s, i) => (
            <button
              key={s.year}
              type="button"
              aria-label={`Ir a ${s.year}`}
              onClick={() => go(i)}
              className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-p-ink' : 'w-2 bg-p-ink/20'}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Siguiente"
          onClick={() => go(Math.min(data.story.length - 1, active + 1))}
          className="rounded-full p-2 text-p-ink/60 active:scale-90"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

/* =========================================================
   ITINERARIO (sección oscura tipo "The Celebration")
   ========================================================= */
const ICONS = { church: Church, glass: GlassWater, party: Music4, moon: Moon }

export function Agenda({ data }: { data: PremiumInvitation }) {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="agenda" className="relative overflow-hidden bg-p-ink px-6 py-24 text-p-paper">
      {/* marco ornamental */}
      <div className="pointer-events-none absolute inset-4 rounded-[32px] border border-p-lemon/20" />
      <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-p-lemon/10" />

      <div className="relative mx-auto max-w-md">
        <SectionTitle eyebrow={data.dateLabel} title="La celebración" light />

        <ol ref={ref} className="relative ml-2 space-y-6 pl-10">
          <span className="absolute left-[19px] top-2 bottom-2 w-px bg-p-paper/15" aria-hidden />
          <motion.span className="absolute left-[19px] top-2 w-px origin-top bg-p-lemon" style={{ height: line }} aria-hidden />
          {data.events.map((ev, i) => {
            const Icon = ICONS[ev.icon]
            return (
              <Reveal key={ev.id} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -left-10 top-4 flex h-10 w-10 -translate-x-[1px] items-center justify-center rounded-full bg-p-ink ring-1 ring-p-lemon/50">
                    <Icon className="h-[18px] w-[18px] text-p-lemon" />
                  </span>
                  <div className="rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur">
                    <p className="font-playfair text-2xl text-p-lemon">{ev.time} hs</p>
                    <h3 className="mt-1 text-2xl font-semibold">{ev.title}</h3>
                    <p className="text-lg text-p-paper/80">{ev.place}</p>
                    <p className="mt-1 text-[0.95rem] italic text-p-paper/55">{ev.address}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ev.mapsQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-p-lemon px-4 text-sm font-semibold text-p-ink active:scale-95"
                      >
                        <MapPin className="h-4 w-4" /> Cómo llegar
                      </a>
                      <span className="[&_button]:border-p-paper/25 [&_button]:text-p-paper">
                        <AddToCalendarButton data={data} event={ev} compact />
                      </span>
                    </div>
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/* =========================================================
   DRESS CODE
   ========================================================= */
export function DressCode({ data }: { data: PremiumInvitation }) {
  const [picked, setPicked] = useState<number | null>(null)
  const d = data.dressCode
  return (
    <section id="dresscode" className="paper-texture px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <SectionTitle eyebrow="Dress code" title={d.title} />
        <Reveal>
          <p className="text-xl leading-relaxed text-p-ink/80">{d.text}</p>
          <p className="eyebrow mt-10 text-p-sea">Paleta sugerida · tocá un color</p>
          <div className="mt-5 flex justify-center gap-3">
            {d.palette.map((c, i) => (
              <motion.button
                key={c.hex}
                type="button"
                onClick={() => setPicked(i === picked ? null : i)}
                aria-label={c.name}
                aria-pressed={picked === i}
                whileTap={{ scale: 0.88 }}
                animate={{ y: picked === i ? -8 : 0, scale: picked === i ? 1.12 : 1 }}
                className="h-12 w-12 rounded-full shadow-md ring-2 ring-white"
                style={{ background: c.hex }}
              />
            ))}
          </div>
          <div className="mt-4 h-7">
            <AnimatePresence mode="wait">
              {picked !== null && (
                <motion.p key={picked} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-lg italic text-p-ink">
                  {d.palette[picked].name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <p className="mt-6 inline-block rounded-full bg-p-ink/5 px-5 py-2 text-[1.05rem] text-p-ink/80">{d.avoid}</p>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   GALERÍA + LIGHTBOX con swipe
   ========================================================= */
export function Gallery({ data }: { data: PremiumInvitation }) {
  const [idx, setIdx] = useState<number | null>(null)
  const n = data.gallery.length
  const prev = () => setIdx((i) => (i === null ? i : (i - 1 + n) % n))
  const next = () => setIdx((i) => (i === null ? i : (i + 1) % n))

  useEffect(() => {
    if (idx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIdx(null)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx])

  return (
    <section id="fotos" className="bg-p-paper px-4 py-24">
      <div className="mx-auto max-w-md">
        <SectionTitle eyebrow="Momentos" title="Nuestra galería" />
        <div className="grid grid-cols-2 gap-3">
          {data.gallery.map((g, i) => (
            <motion.button
              key={g.src}
              type="button"
              onClick={() => setIdx(i)}
              className={`relative overflow-hidden rounded-2xl ${i % 3 === 0 ? 'row-span-2 aspect-[3/5]' : 'aspect-square'}`}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              whileTap={{ scale: 0.97 }}
              aria-label={`Ver foto: ${g.alt}`}
            >
              <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="50vw" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            className="fixed inset-0 z-[85] flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Galería"
          >
            <button type="button" onClick={() => setIdx(null)} aria-label="Cerrar" className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white">
              <X className="h-5 w-5" />
            </button>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={idx}
                className="relative h-[75svh] w-full"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -70) next()
                  else if (info.offset.x > 70) prev()
                }}
              >
                <Image src={data.gallery[idx].src} alt={data.gallery[idx].alt} fill className="pointer-events-none object-contain" sizes="100vw" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-6 text-white/80">
              <button type="button" onClick={prev} aria-label="Anterior" className="rounded-full bg-white/10 p-3">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="font-playfair tabular-nums">
                {idx + 1} / {n}
              </span>
              <button type="button" onClick={next} aria-label="Siguiente" className="rounded-full bg-white/10 p-3">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* =========================================================
   REGALOS (copiar alias/CBU con un toque)
   ========================================================= */
export function Gifts({ data }: { data: PremiumInvitation }) {
  const [open, setOpen] = useState(false)
  const toast = useToast()
  const g = data.gifts
  const copy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = value
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    try {
      navigator.vibrate?.(15)
    } catch {}
    toast(`${label} copiado`)
  }
  return (
    <section id="regalos" className="paper-texture px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <SectionTitle eyebrow="Regalos" title="Con amor" />
        <Reveal>
          <motion.div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-p-lemon/30"
            animate={{ rotate: [0, -8, 8, -4, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.5 }}
          >
            <Gift className="h-9 w-9 text-p-ink" />
          </motion.div>
          <p className="text-xl leading-relaxed text-p-ink/80">{g.text}</p>
          <div className="mt-8 flex justify-center">
            <PillButton onClick={() => setOpen(true)}>Ver datos bancarios</PillButton>
          </div>
        </Reveal>
      </div>
      <BottomSheet open={open} onClose={() => setOpen(false)} title="Datos para regalar">
        <div className="space-y-3">
          {[
            ['Alias', g.alias],
            ['CBU', g.cbu],
          ].map(([label, value]) => (
            <button
              key={label}
              type="button"
              onClick={() => copy(label, value)}
              className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white p-4 text-left ring-1 ring-p-ink/10 active:scale-[0.98]"
            >
              <span className="min-w-0">
                <span className="eyebrow block !text-[0.58rem] text-p-sea">{label}</span>
                <span className="block break-all font-playfair text-lg text-p-ink">{value}</span>
              </span>
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-p-ink px-3 py-2 text-xs font-semibold text-p-paper">
                <Copy className="h-3.5 w-3.5" /> Copiar
              </span>
            </button>
          ))}
          <p className="pt-2 text-center text-lg text-p-ink/70">
            {g.holder} · {g.bank}
          </p>
        </div>
      </BottomSheet>
    </section>
  )
}

/* =========================================================
   FAQ (acordeón)
   ========================================================= */
export function Faq({ data }: { data: PremiumInvitation }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-p-paper px-6 py-24">
      <div className="mx-auto max-w-md">
        <SectionTitle eyebrow="Info útil" title="Preguntas frecuentes" />
        <div className="divide-y divide-p-ink/10 rounded-3xl bg-white/70 px-5 ring-1 ring-p-ink/10">
          {data.faq.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-xl font-semibold text-p-ink"
                >
                  {f.q}
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5 text-p-sea" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-lg leading-relaxed text-p-ink/75">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
