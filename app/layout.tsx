import type { Metadata } from 'next'
import './globals.css'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://invitacion-boda.vercel.app'),
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
        <Footer />
      </body>
    </html>
  )
}
