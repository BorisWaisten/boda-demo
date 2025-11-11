export type DemoConfig = {
  slug: string
  themeClass?: string
  coupleNames: string
  dateLabel: string
  heroImage: string
  ceremonyBg: string
  partyBg: string
  gallery: { src: string; alt: string; width: number; height: number }[]
}

export const DEMOS: Record<string, DemoConfig> = {
  'demo1': {
    slug: 'demo1',
    themeClass: undefined, // usa el tema por defecto (rose/burgundy)
    coupleNames: 'Jose y Fernanda',
    dateLabel: '1 DE NOVIEMBRE 2025',
    heroImage: '/16_14424.webp',
    ceremonyBg: '/16_14430.webp',
    partyBg: '/16_14458.webp',
    gallery: [
      { src: '/boda/boda1.avif', alt: 'Momentos de boda', width: 200, height: 150 },
      { src: '/boda/boda2.avif', alt: 'Ceremonia', width: 200, height: 150 },
      { src: '/boda/boda3.avif', alt: 'Fiesta', width: 200, height: 150 },
      { src: '/boda/boda4.avif', alt: 'Celebración', width: 200, height: 150 },
      { src: '/boda/boda5.avif', alt: 'Momentos especiales', width: 200, height: 150 },
      { src: '/boda/boda6.avif', alt: 'Boda', width: 200, height: 150 },
    ],
  },
  'demo2': {
    slug: 'demo2',
    themeClass: 'theme-emerald',
    coupleNames: 'Emilia y Bruno',
    dateLabel: '14 DE MARZO 2026',
    heroImage: '/boda/boda2.avif',
    ceremonyBg: '/16_14462.webp',
    partyBg: '/16_14478.webp',
    gallery: [
      { src: '/boda/boda6.avif', alt: 'Boda', width: 200, height: 150 },
      { src: '/boda/boda5.avif', alt: 'Momentos', width: 200, height: 150 },
      { src: '/boda/boda4.avif', alt: 'Celebración', width: 200, height: 150 },
      { src: '/boda/boda9.jpg', alt: 'Fiesta', width: 200, height: 150 },
      { src: '/boda/boda7.jpg', alt: 'Ceremonia', width: 200, height: 150 },
      { src: '/boda/boda8.jpeg', alt: 'Momentos de boda', width: 200, height: 150 },
    ],
  },
  'demo3': {
    slug: 'demo3',
    themeClass: undefined, // usa el tema por defecto (rose/burgundy) con estilo barroco
    coupleNames: 'Isabella y Alejandro',
    dateLabel: '15 DE JUNIO 2026',
    heroImage: '/16_14424.webp',
    ceremonyBg: '/16_14430.webp',
    partyBg: '/16_14458.webp',
    gallery: [
      { src: '/boda/boda1.avif', alt: 'Momentos de boda', width: 200, height: 150 },
      { src: '/boda/boda2.avif', alt: 'Ceremonia', width: 200, height: 150 },
      { src: '/boda/boda3.avif', alt: 'Fiesta', width: 200, height: 150 },
      { src: '/boda/boda4.avif', alt: 'Celebración', width: 200, height: 150 },
      { src: '/boda/boda5.avif', alt: 'Momentos especiales', width: 200, height: 150 },
      { src: '/boda/boda6.avif', alt: 'Boda', width: 200, height: 150 },
    ],
  },
}


