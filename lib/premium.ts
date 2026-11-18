// Datos de la invitación "Premium" (experiencia interactiva tipo sobre).
// Todo lo que el cliente personaliza vive acá: para vender una nueva
// invitación alcanza con duplicar este objeto y cambiar los datos.

export type PremiumEvent = {
  id: string
  time: string // "17:30"
  title: string
  place: string
  address: string
  mapsQuery: string
  icon: 'church' | 'glass' | 'party' | 'moon'
  durationMin: number
}

export type PremiumInvitation = {
  slug: string
  coupleA: string
  coupleB: string
  /** ISO local, sin zona: se interpreta en la hora del invitado */
  dateISO: string
  /** Zona horaria del evento (para Google Calendar / .ics) */
  timezone: string
  dateLabel: string
  city: string
  heroImage: string
  envelopeImage: string
  welcome: string
  story: { year: string; title: string; text: string; image: string }[]
  events: PremiumEvent[]
  dressCode: { title: string; text: string; palette: { name: string; hex: string }[]; avoid: string }
  gifts: { text: string; alias: string; cbu: string; holder: string; bank: string; registryUrl?: string }
  gallery: { src: string; alt: string }[]
  faq: { q: string; a: string }[]
  rsvp: { deadlineLabel: string; whatsapp: string; defaultSeats: number; maxSeats: number }
  hashtag: string
  /** Opcional: mp3 propio. Si no hay, se usa la cajita musical generativa. */
  musicSrc?: string
}

export const PREMIUM_DEMO: PremiumInvitation = {
  slug: 'premium',
  coupleA: 'Valentina',
  coupleB: 'Tomás',
  dateISO: '2027-03-20T17:30:00',
  timezone: 'America/Argentina/Mendoza',
  dateLabel: 'Sábado 20 de marzo, 2027',
  city: 'Finca Los Olivos · Mendoza',
  heroImage: '/boda/boda2.avif',
  envelopeImage: '/boda/boda6.avif',
  welcome:
    'Después de ocho años, mil viajes y un perro llamado Mate, decidimos decir que sí. Nos encantaría que estés ahí para celebrarlo con nosotros.',
  story: [
    {
      year: '2018',
      title: 'Nos conocimos',
      text: 'En un asado de amigos en común. Ella llegó tarde, él se quemó la mano. Amor a primera vista (con vendita).',
      image: '/boda/boda1.avif',
    },
    {
      year: '2021',
      title: 'Primer viaje',
      text: 'Una carpa, la Patagonia y una tormenta. Ahí supimos que podíamos con todo.',
      image: '/boda/boda4.avif',
    },
    {
      year: '2024',
      title: 'Llegó Mate',
      text: 'Adoptamos al integrante más caótico de la familia.',
      image: '/boda/boda5.avif',
    },
    {
      year: '2026',
      title: 'Dijo que sí',
      text: 'Al atardecer, entre viñedos. Él lloró más que ella (no se lo cuenten).',
      image: '/boda/boda3.avif',
    },
  ],
  events: [
    {
      id: 'ceremonia',
      time: '17:30',
      title: 'Ceremonia',
      place: 'Capilla de la Finca',
      address: 'Ruta 15 km 32, Luján de Cuyo, Mendoza',
      mapsQuery: 'Luján de Cuyo Mendoza',
      icon: 'church',
      durationMin: 60,
    },
    {
      id: 'brindis',
      time: '18:30',
      title: 'Brindis & cóctel',
      place: 'Jardín de los Olivos',
      address: 'Misma finca, a pasos de la capilla',
      mapsQuery: 'Luján de Cuyo Mendoza',
      icon: 'glass',
      durationMin: 90,
    },
    {
      id: 'fiesta',
      time: '20:30',
      title: 'Cena & fiesta',
      place: 'Salón Principal',
      address: 'Ruta 15 km 32, Luján de Cuyo, Mendoza',
      mapsQuery: 'Luján de Cuyo Mendoza',
      icon: 'party',
      durationMin: 360,
    },
    {
      id: 'after',
      time: '04:30',
      title: 'Fin de fiesta',
      place: 'Traslados a Mendoza centro',
      address: 'Combis cada 30 minutos',
      mapsQuery: 'Mendoza centro',
      icon: 'moon',
      durationMin: 60,
    },
  ],
  dressCode: {
    title: 'Elegante de verano',
    text: 'Es al aire libre y hay césped: te recomendamos tacos anchos y un abrigo liviano para la noche.',
    palette: [
      { name: 'Azul Mediterráneo', hex: '#2E4A7D' },
      { name: 'Limón', hex: '#E8C35A' },
      { name: 'Oliva', hex: '#7A8450' },
      { name: 'Terracota', hex: '#C2714F' },
      { name: 'Arena', hex: '#D9C7A7' },
    ],
    avoid: 'El blanco y el marfil son de la novia ✨',
  },
  gifts: {
    text: 'Lo más importante es que estés. Si además querés ayudarnos con la luna de miel en Italia, te dejamos nuestros datos.',
    alias: 'VALEYTOMI.LUNADEMIEL',
    cbu: '0000003100012345678901',
    holder: 'Valentina Pérez',
    bank: 'Banco Ejemplo',
  },
  gallery: [
    { src: '/boda/boda1.avif', alt: 'Valentina y Tomás' },
    { src: '/boda/boda7.jpg', alt: 'Paseo al atardecer' },
    { src: '/boda/boda3.avif', alt: 'Celebración' },
    { src: '/boda/boda9.jpg', alt: 'Momentos' },
    { src: '/boda/boda4.avif', alt: 'Viaje' },
    { src: '/boda/boda8.jpeg', alt: 'Juntos' },
  ],
  faq: [
    { q: '¿Puedo ir con niños?', a: 'Amamos a sus peques, pero esta vez la celebración es solo para adultos.' },
    { q: '¿Hay estacionamiento?', a: 'Sí, la finca tiene estacionamiento gratuito y también organizamos combis de ida y vuelta.' },
    { q: '¿Dónde me alojo?', a: 'Tenemos convenio con dos hoteles en Chacras de Coria. Escribinos y te pasamos los datos.' },
    { q: '¿Hasta cuándo confirmo?', a: 'Hasta el 20 de febrero. Así podemos organizar todo con tiempo.' },
  ],
  rsvp: {
    deadlineLabel: '20 de febrero',
    whatsapp: '5493446575620',
    defaultSeats: 2,
    maxSeats: 6,
  },
  hashtag: '#ValeYTomiDicenSí',
}
