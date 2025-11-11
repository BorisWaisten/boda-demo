'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="container-custom z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-catchy text-wedding-burgundy mb-4">Elegí tu estilo de invitación</h1>
          <p className="text-wedding-charcoal/80 max-w-2xl mx-auto">Te mostramos demos con diferentes paletas y tipografías. Entrá a verlas y contanos cuál te gusta.</p>
        </div>
      </section>

      <section className="section-padding flex items-center justify-center ">
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
            <div className="feature p-6 block hover:shadow-lg transition-shadow">
              <p>Proximamente: Barroco elegante y majestuoso</p>
                <div className="text-sm text-wedding-charcoal/70">Barroco elegante y majestuoso</div>
            </div>
        </div>
        </div>
      </section>

      {/* Invitaciones Realizadas */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-4">Invitaciones Realizadas</h2>
            <p className="text-wedding-charcoal/80 max-w-2xl mx-auto">Algunos ejemplos de invitaciones que hemos creado para parejas especiales</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://boda-fran-stefi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="feature p-6 block hover:shadow-lg transition-shadow border-2 border-wedding-gold/20 hover:border-wedding-gold/40"
            >
              <div className="text-lg font-catchy text-wedding-burgundy mb-1">Fran & Stefi</div>
              <div className="text-sm text-wedding-charcoal/70 mb-2">11 de octubre, 2025</div>
              <div className="text-xs text-wedding-charcoal/50 italic">Ver invitación →</div>
            </a>
            <a 
              href="https://boda-syd.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="feature p-6 block hover:shadow-lg transition-shadow border-2 border-wedding-gold/20 hover:border-wedding-gold/40"
            >
              <div className="text-lg font-catchy text-wedding-burgundy mb-1">Shirley & Diego</div>
              <div className="text-sm text-wedding-charcoal/70 mb-2">15 de noviembre, 2025</div>
              <div className="text-xs text-wedding-charcoal/50 italic">Ver invitación →</div>
            </a>
            <a 
              href="https://martuygino.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="feature p-6 block hover:shadow-lg transition-shadow border-2 border-wedding-gold/20 hover:border-wedding-gold/40"
            >
              <div className="text-lg font-catchy text-wedding-burgundy mb-1">Martu & Gino</div>
              <div className="text-sm text-wedding-charcoal/70 mb-2">22 de marzo, 2025</div>
              <div className="text-xs text-wedding-charcoal/50 italic">Ver invitación →</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-wedding-charcoal text-white py-12">
        <div className="container-custom text-center">
          <p className="text-wedding-gold font-alex text-2xl mb-2">@waistenprogramacion</p>
          <p className="text-sm text-white/60">Waisten Programacion ® Invitaciones digitales Web Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}
