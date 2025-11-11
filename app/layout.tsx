import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitacion-boda.vercel.app'),
  title: 'Invitación de Boda ',
  description: 'Te invitamos a celebrar nuestra boda',
  keywords: 'boda, invitación, matrimonio, celebración',
  openGraph: {
    title: 'Invitación de Boda ',
    description: 'Te invitamos a celebrar nuestra boda',
    type: 'website',
    images: ['/16_14424.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitación de Boda',
    description: 'Te invitamos a celebrar nuestra boda',
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
