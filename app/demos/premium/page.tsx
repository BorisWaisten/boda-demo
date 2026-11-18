import type { Metadata, Viewport } from 'next'
import PremiumExperience from '../../../components/premium/PremiumExperience'
import { PREMIUM_DEMO } from '../../../lib/premium'

const d = PREMIUM_DEMO

export const metadata: Metadata = {
  title: `${d.coupleA} & ${d.coupleB} · ¡Nos casamos!`,
  description: `${d.dateLabel} · ${d.city}. Abrí tu invitación y confirmá tu asistencia.`,
  openGraph: {
    title: `${d.coupleA} & ${d.coupleB} · ¡Nos casamos!`,
    description: `${d.dateLabel} · ${d.city}`,
    images: [{ url: '/boda/boda2.avif' }],
  },
}

export const viewport: Viewport = { themeColor: '#1f2a44' }

/**
 * Link personalizado por invitado:
 *   /demos/premium?invitado=Juli%20y%20Nico&cupos=2
 */
export default function PremiumDemoPage({ searchParams }: { searchParams: { invitado?: string; cupos?: string } }) {
  const guest = searchParams.invitado?.trim().slice(0, 60) || undefined
  const seatsNum = Number(searchParams.cupos)
  const seats = Number.isFinite(seatsNum) && seatsNum > 0 ? Math.floor(seatsNum) : undefined
  return <PremiumExperience data={d} guestName={guest} seats={seats} />
}
