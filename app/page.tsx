'use client'

import { useState } from 'react'
import CountdownTimer from '../components/CountdownTimer'
import WeddingIcon from '../components/WeddingIcon'
import BackgroundImage from '../components/BackgroundImage'
import Gallery3D from '../components/Gallery3D'

export default function Home() {
  const [showRSVP, setShowRSVP] = useState(false)

  const handleRSVP = () => {
    setShowRSVP(true)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-wedding-cream via-wedding-rose to-wedding-ivory">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <BackgroundImage 
          src="/16_14424.webp" 
          alt="Wedding background" 
          className="opacity-30"
          priority={true}
        />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 animate-float">
            <WeddingIcon name="Flowers" size="xl" type="svg" className="text-wedding-sage" animated={true} />
          </div>
          <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
            <WeddingIcon name="WeddingRingsSet1" size="lg" type="svg" className="text-wedding-gold" animated={true} />
          </div>
          <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '4s' }}>
            <WeddingIcon name="Balloons" size="lg" type="svg" className="text-wedding-burgundy" animated={true} />
          </div>
          <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <WeddingIcon name="Fireworks" size="xl" type="svg" className="text-wedding-gold" animated={true} />
          </div>
        </div>

        <div className="container-custom text-center z-10">
          <div className="animate-fadeInDown">
            <h1 className="text-6xl md:text-8xl font-andasia text-wedding-burgundy mb-4">
              Jose & Fernanda
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-wedding-gold to-wedding-burgundy mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-wedding-charcoal/80 font-catchy mb-8">
              Te invitamos a celebrar nuestra boda
            </p>
            <div className="text-3xl md:text-4xl font-bold text-wedding-burgundy font-catchy mb-12">
              1 DE NOVIEMBRE 2025
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Ceremony Section */}
      <section className="section-padding bg-white/50 relative">
        <BackgroundImage 
          src="/16_14430.webp" 
          alt="Church background" 
          className="opacity-20"
        />
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-gold rounded-full mb-6">
                <WeddingIcon name="Church" size="lg" type="svg" className="text-white" animated={true} />
              </div>
              <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-6">
                Ceremonia
              </h2>
              <div className="space-y-4 text-lg text-wedding-charcoal">
                <p className="font-semibold">Parroquia San José</p>
                <p>9 de Julio 308</p>
                <p>Crespo, Entre Ríos</p>
                <p className="text-wedding-burgundy font-bold text-xl font-alex">17:00 HS</p>
              </div>
              <button className="btn-primary mt-8">
                Cómo llegar
              </button>
            </div>
            <div className="relative">
              <div className="card p-8 text-center">
                <WeddingIcon name="Church" size="xl" type="svg" className="text-wedding-gold mx-auto mb-4" animated={true} />
                <h3 className="text-2xl font-catchy text-wedding-burgundy mb-4">
                  Bendición Matrimonial
                </h3>
                <p className="text-wedding-charcoal/70">
                  Unidos en el amor y la fe, comenzamos esta nueva etapa de nuestras vidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Party Section */}
      <section className="section-padding relative">
        <BackgroundImage 
          src="/16_14458.webp" 
          alt="Party background" 
          className="opacity-20"
        />
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="card p-8 text-center">
                <WeddingIcon name="WeddingCake" size="xl" type="svg" className="text-wedding-gold mx-auto mb-4" animated={true} />
                <h3 className="text-2xl font-catchy text-wedding-burgundy mb-4">
                  Fiesta de Celebración
                </h3>
                <p className="text-wedding-charcoal/70">
                  Después de la ceremonia, los esperamos para celebrar con música, baile y mucha alegría
                </p>
              </div>
            </div>
            <div className="text-center md:text-left order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-wedding-burgundy rounded-full mb-6">
                <WeddingIcon name="Music" size="lg" type="svg" className="text-white" animated={true} />
              </div>
              <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-6">
                Fiesta
              </h2>
              <div className="space-y-4 text-lg text-wedding-charcoal">
                <p className="font-semibold">Salón Castillo</p>
                <p>Acc. Pte. Avellaneda y Alemanes del Volga</p>
                <p>Crespo, Entre Ríos</p>
                <p className="text-wedding-burgundy font-bold text-xl font-alex">18:00 HS</p>
              </div>
              <button className="btn-primary mt-8">
                Cómo llegar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Music Request Section */}
      <section className="section-padding bg-wedding-rose/30">
        <div className="container-custom text-center">
          <WeddingIcon name="Music" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated={true} />
          <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-6">
            ¡Que no falte tu tema favorito!
          </h2>
          <p className="text-xl text-wedding-charcoal/80 mb-8 max-w-2xl mx-auto">
            Ayudanos a armar la lista de canciones para nuestra fiesta
          </p>
          <button className="btn-secondary">
            Sugerí tu tema acá
          </button>
        </div>
      </section>

      {/* Gallery 3D Section */}
      <section className="section-padding bg-gradient-to-br from-wedding-cream to-wedding-ivory">
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <WeddingIcon name="Camera" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated={true} />
            <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy mb-4">
              Momentos Especiales
            </h2>
            <p className="text-xl text-wedding-charcoal/80 max-w-2xl mx-auto">
              Pasa el cursor sobre las imágenes para ver el efecto especial
            </p>
          </div>
          <Gallery3D
            images={[
              {
                src: '/boda/boda1.avif',
                alt: 'Momentos de boda',
                width: 200,
                height: 150,
              },
              {
                src: '/boda/boda2.avif',
                alt: 'Ceremonia',
                width: 200,
                height: 150,
              },
              {
                src: '/boda/boda3.avif',
                alt: 'Fiesta',
                width: 200,
                height: 150,
              },
              {
                src: '/boda/boda4.avif',
                alt: 'Celebración',
                width: 200,
                height: 150,
              },
              {
                src: '/boda/boda5.avif',
                alt: 'Momentos especiales',
                width: 200,
                height: 150,
              },
              {
                src: '/boda/boda6.avif',
                alt: 'Boda',
                width: 200,
                height: 150,
              },
            ]}
          />
        </div>
      </section>

      {/* Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy text-center mb-16">
            Acá te contamos todos los detalles…
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Dress Code */}
            <div className="card p-8 text-center">
              <WeddingIcon name="WeddingRingsSet1" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated={true} />
              <h3 className="text-2xl font-catchy text-wedding-burgundy mb-4">
                Dress Code
              </h3>
              <p className="text-3xl font-alex text-wedding-burgundy">
                Elegante
              </p>
            </div>

            {/* Gift */}
            <div className="card p-8 text-center">
              <WeddingIcon name="WeddingGifts" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated={true} />
              <h3 className="text-2xl font-catchy text-wedding-burgundy mb-4">
                Regalo
              </h3>
              <p className="text-wedding-charcoal mb-4">
                ¡El mejor regalo es tu presencia!
              </p>
              <p className="text-sm text-wedding-charcoal/70">
                Si deseas realizarnos un regalo, te brindamos nuestros datos bancarios
              </p>
            </div>

            {/* Children */}
            <div className="card p-8 text-center">
              <WeddingIcon name="Balloons" size="xl" type="svg" className="text-wedding-gold mx-auto mb-6" animated={true} />
              <h3 className="text-2xl font-catchy text-wedding-burgundy mb-4">
                Niños
              </h3>
              <p className="text-wedding-charcoal">
                Este es un festejo destinado solo a adultos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="section-padding bg-wedding-burgundy text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-catchy mb-8">
            Confirmanos tu asistencia
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Te pedimos que completes este formulario antes del 12/10/2025.
            Si fuiste invitado/a con un acompañante, completar un formulario por persona
          </p>
          
          {!showRSVP ? (
            <div className="space-y-4">
              <button onClick={handleRSVP} className="btn-primary bg-white text-wedding-burgundy hover:bg-wedding-gold hover:text-white">
                CONFIRMAR MI ASISTENCIA
              </button>
              <div>
                <button className="btn-secondary border-white text-white hover:bg-white hover:text-wedding-burgundy">
                  AGENDAR EL EVENTO EN MI CALENDARIO
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="card p-8 text-wedding-charcoal">
                <h3 className="text-2xl font-catchy text-wedding-burgundy mb-6">
                  ¡Gracias por confirmar!
                </h3>
                <p className="mb-4">
                  Hemos recibido tu confirmación. Te esperamos el 1 de noviembre.
                </p>
                <button 
                  onClick={() => setShowRSVP(false)}
                  className="btn-primary"
                >
                  Volver
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-catchy text-wedding-burgundy text-center mb-16">
            ALOJAMIENTO
          </h2>
          <p className="text-xl text-wedding-charcoal/80 text-center mb-12 max-w-2xl mx-auto">
            Te sugerimos alojamientos posibles para los días de nuestra boda! Hacé clic en cada uno para ver mas info
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Hotel Crespo', 'Hotel Garten', 'Hotel El Aguila', 'Cabañas El Solar de Crespo'].map((hotel, index) => (
              <div key={hotel} className="card p-6 text-center hover:scale-105 transition-transform duration-300">
                <WeddingIcon name="Calendar" size="lg" type="svg" className="text-wedding-gold mx-auto mb-4" animated={true} />
                <h3 className="text-lg font-catchy text-wedding-burgundy">
                  {hotel}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wedding-charcoal text-white py-12">
        <div className="container-custom text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <WeddingIcon name="instagram" size="md" className="text-wedding-gold hover:text-white cursor-pointer transition-colors" />
            <WeddingIcon name="facebook" size="md" className="text-wedding-gold hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-wedding-gold font-alex text-2xl mb-4">
            ¡Gracias!
          </p>
          <p className="text-wedding-gold/80">
            @yendoinvitaciones
          </p>
          <p className="text-sm text-white/60 mt-4">
            Yendo ® Invitaciones digitales Web Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
