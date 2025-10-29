import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitacion-boda.vercel.app'),
  title: 'Invitación de Boda - Kati & Fede',
  description: 'Te invitamos a celebrar nuestra boda el 1 de noviembre de 2025',
  keywords: 'boda, invitación, matrimonio, celebración',
  authors: [{ name: 'Kati & Fede' }],
  openGraph: {
    title: 'Invitación de Boda - Kati & Fede',
    description: 'Te invitamos a celebrar nuestra boda el 1 de noviembre de 2025',
    type: 'website',
    images: ['/16_14424.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitación de Boda - Kati & Fede',
    description: 'Te invitamos a celebrar nuestra boda el 1 de noviembre de 2025',
    images: ['/16_14424.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-catchy">
        {children}
      </body>
    </html>
  )
}
