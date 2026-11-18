'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarPlus, Check, Gift, Heart, Link2, Mail, MapPin, Music2, Sparkles } from 'lucide-react'

const WHATSAPP = '5493446575620'

const FEATURES = [
  { icon: Mail, title: 'Sobre que se abre', text: 'Tu invitado rompe el sello y la carta se revela. El momento wow.' },
  { icon: Link2, title: 'Link personalizado', text: '“Para Juli y Nico”: cada invitado ve su nombre y sus lugares.' },
  { icon: Heart, title: 'RSVP en 30 segundos', text: 'Paso a paso, con menú, canción y respuesta directa a tu WhatsApp.' },
  { icon: CalendarPlus, title: 'Agendar en 1 toque', text: 'Google Calendar y Apple, con recordatorio el día antes.' },
  { icon: MapPin, title: 'Mapa y agenda', text: 'Itinerario del día con “Cómo llegar” para cada momento.' },
  { icon: Gift, title: 'Regalos sin fricción', text: 'Alias y CBU que se copian con un toque.' },
  { icon: Music2, title: 'Música', text: 'Arranca al abrir el sobre. Con tu canción.' },
  { icon: Sparkles, title: 'Pensada para el celular', text: 'Barra inferior tipo app, gestos y animaciones suaves.' },
]

const PLANS = [
  {
    name: 'Esencial',
    tagline: 'Una plantilla con tus datos',
    items: ['Sobre animado', 'Agenda + mapas', 'RSVP por WhatsApp', 'Cuenta regresiva', '1 ronda de cambios'],
  },
  {
    name: 'Premium',
    tagline: 'La más elegida',
    featured: true,
    items: ['Todo lo de Esencial', 'Links personalizados por invitado', 'Nuestra historia + galería', 'Música', 'Paleta y tipografías a medida', '3 rondas de cambios'],
  },
  {
    name: 'A medida',
    tagline: 'Diseño exclusivo desde cero',
    items: ['Todo lo de Premium', 'Ilustración del lugar', 'Bilingüe (ES / EN)', 'Save the date animado', 'Cambios ilimitados'],
  },
]

export default function SalesShowcase() {
  const [name, setName] = useState('')
  const tryHref = `/demos/premium${name.trim() ? `?invitado=${encodeURIComponent(name.trim())}` : ''}`
  const wa = (plan: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`¡Hola! Quiero info sobre el plan ${plan} de invitaciones digitales 💌`)}`

  return (
    <div className="premium">
      {/* HERO de venta */}
      <section className="relative overflow-hidden bg-p-ink px-6 pb-20 pt-16 text-p-paper">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-p-sea/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-p-lemon/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-p-lemon/15 px-4 py-1.5 text-sm text-p-lemon ring-1 ring-p-lemon/30">
              <Sparkles className="h-4 w-4" /> Nuevo · Experiencia Premium
            </span>
            <h1 className="mt-6 font-alex text-6xl leading-[1.05] md:text-7xl">Imaginá a tus invitados abriendo esta invitación</h1>
            <p className="mt-5 text-xl leading-relaxed text-p-paper/80">
              Un sobre que se abre en el celular, con su nombre, música, agenda y confirmación en un toque.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = tryHref
              }}
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribí tu nombre"
                aria-label="Tu nombre"
                className="min-h-[52px] flex-1 rounded-full bg-white/10 px-6 text-lg text-p-paper placeholder:text-p-paper/50 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-p-lemon"
              />
              <button type="submit" className="min-h-[52px] rounded-full bg-p-lemon px-7 text-base font-semibold text-p-ink shadow-lg shadow-p-lemon/20 active:scale-95">
                Probala con tu nombre
              </button>
            </form>
            <p className="mt-3 text-sm text-p-paper/50">Así la ve cada invitado con su link personalizado.</p>
          </div>

          {/* Mockup de teléfono */}
          <Link href={tryHref} className="group mx-auto block" aria-label="Ver demo premium">
            <motion.div
              className="relative h-[520px] w-[260px] rounded-[44px] bg-black p-3 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)] ring-1 ring-white/10"
              initial={{ rotate: -6, y: 20, opacity: 0 }}
              whileInView={{ rotate: -4, y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-p-ink">
                <Image src="/boda/boda6.avif" alt="" fill className="scale-110 object-cover blur-sm" sizes="260px" />
                <div className="absolute inset-0 bg-p-ink/55" />
                <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
                <div className="absolute inset-x-5 top-1/2 aspect-[1.32/1] -translate-y-1/2">
                  <div className="absolute inset-0 rounded bg-[#e4d7bf]" />
                  <div className="absolute inset-0 rounded bg-gradient-to-b from-[#efe5d2] to-[#e7dcc6]" style={{ clipPath: 'polygon(0 0, 50% 52%, 100% 0, 100% 100%, 0 100%)' }} />
                  <div className="absolute inset-0 rounded-t bg-gradient-to-b from-[#e9dec9] to-[#dccfb5]" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 58%)' }} />
                  <span className="absolute left-1/2 top-[58%] flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#c0574a,#8e2a22_60%,#6e1d17)] font-alex text-lg text-[#f6dcc9] shadow-lg transition group-hover:scale-110">
                    VT
                  </span>
                  <span className="absolute inset-x-0 bottom-[6%] text-center font-alex text-xl text-p-ink">
                    {name.trim() ? `Para ${name.trim()}` : 'Para vos'}
                  </span>
                </div>
                <p className="absolute inset-x-0 bottom-16 text-center text-sm italic text-p-paper/80">Tocá para abrir</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="paper-texture px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow text-center text-p-sea">Todo en un link</p>
          <h2 className="mt-3 text-center font-alex text-5xl text-p-ink">Lo que tus invitados van a vivir</h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                className="rounded-3xl bg-white/80 p-6 ring-1 ring-p-ink/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.06 }}
              >
                <f.icon className="h-6 w-6 text-p-sea" />
                <h3 className="mt-4 text-xl font-semibold text-p-ink">{f.title}</h3>
                <p className="mt-1 text-lg leading-snug text-p-ink/70">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="bg-p-paper px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow text-center text-p-sea">Planes</p>
          <h2 className="mt-3 text-center font-alex text-5xl text-p-ink">Elegí tu invitación</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-[28px] p-7 ${
                  p.featured ? 'bg-p-ink text-p-paper shadow-2xl md:-translate-y-3' : 'bg-white text-p-ink ring-1 ring-p-ink/10'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-p-lemon px-4 py-1 text-xs font-semibold uppercase tracking-widest text-p-ink">
                    Recomendado
                  </span>
                )}
                <h3 className="font-alex text-4xl">{p.name}</h3>
                <p className={`text-lg ${p.featured ? 'text-p-paper/70' : 'text-p-ink/60'}`}>{p.tagline}</p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-lg">
                      <Check className={`mt-1 h-4 w-4 shrink-0 ${p.featured ? 'text-p-lemon' : 'text-p-sea'}`} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full font-semibold active:scale-95 ${
                    p.featured ? 'bg-p-lemon text-p-ink' : 'bg-p-ink text-p-paper'
                  }`}
                >
                  Consultar precio
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
