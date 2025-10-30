'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/16_14424.webp')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 hero-bottom-gradient" />
        </div>
        <div className="container-custom z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-catchy text-wedding-burgundy mb-4">Elegí tu estilo de invitación</h1>
          <p className="text-wedding-charcoal/80 max-w-2xl mx-auto">Te mostramos demos con diferentes paletas y tipografías. Entrá a verlas y contanos cuál te gusta.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/demos/classic" className="feature p-6 block hover:shadow-lg transition-shadow">
              <div className="text-lg font-catchy text-wedding-burgundy mb-1">Demo 1 — Clásico Rose & Burgundy</div>
              <div className="text-sm text-wedding-charcoal/70">Romántico, elegante y atemporal</div>
            </Link>
            <Link href="/demos/modern" className="feature p-6 block hover:shadow-lg transition-shadow">
              <div className="text-lg font-catchy text-wedding-burgundy mb-1">Demo 2 — Emerald Modern</div>
              <div className="text-sm text-wedding-charcoal/70">Verdes modernos y acentos cálidos</div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-wedding-charcoal text-white py-12">
        <div className="container-custom text-center">
          <p className="text-wedding-gold font-alex text-2xl mb-2">@yendoinvitaciones</p>
          <p className="text-sm text-white/60">Yendo ® Invitaciones digitales Web Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
