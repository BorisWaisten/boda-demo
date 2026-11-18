'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { PremiumInvitation } from '../../lib/premium'
import Envelope from './Envelope'
import MusicPlayer, { type MusicHandle } from './MusicPlayer'
import BottomDock from './BottomDock'
import Rsvp from './Rsvp'
import { Agenda, DressCode, Faq, Gallery, Gifts, Hero, Story, Welcome } from './Sections'
import { Divider, ToastProvider, useToast } from './ui'

type Props = { data: PremiumInvitation; guestName?: string; seats?: number }

export default function PremiumExperience(props: Props) {
  return (
    <ToastProvider>
      <Inner {...props} />
    </ToastProvider>
  )
}

function Inner({ data, guestName, seats }: Props) {
  const [opened, setOpened] = useState(false)
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const music = useRef<MusicHandle>(null)
  const toast = useToast()

  useEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'smooth'
    return () => {
      html.style.scrollBehavior = prev
    }
  }, [])

  const share = useCallback(async () => {
    const url = window.location.origin + window.location.pathname
    const payload = { title: `${data.coupleA} & ${data.coupleB}`, text: `¡Nos casamos! ${data.dateLabel}`, url }
    try {
      if (navigator.share) {
        await navigator.share(payload)
        return
      }
      await navigator.clipboard.writeText(url)
      toast('Link copiado')
    } catch {
      /* el usuario canceló */
    }
  }, [data, toast])

  const monogram = `${data.coupleA[0]}${data.coupleB[0]}`

  return (
    <main className="premium min-h-screen overflow-x-clip">
      <Envelope
        guestName={guestName}
        monogram={monogram}
        names={`${data.coupleA} & ${data.coupleB}`}
        dateLabel={data.dateLabel}
        backdrop={data.envelopeImage}
        onOpenStart={() => music.current?.start()}
        onOpened={() => setOpened(true)}
      />
      <MusicPlayer ref={music} src={data.musicSrc} visible={opened} />

      <Hero data={data} guestName={guestName} />
      <Welcome data={data} onShare={share} />
      <Story data={data} />
      <Agenda data={data} />
      <DressCode data={data} />
      <Gallery data={data} />
      <Gifts data={data} />
      <Rsvp data={data} guestName={guestName} seats={seats} open={rsvpOpen} setOpen={setRsvpOpen} />
      <Faq data={data} />

      <section className="bg-p-ink px-6 pb-36 pt-24 text-center text-p-paper">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-alex text-6xl"
        >
          {data.coupleA} &amp; {data.coupleB}
        </motion.p>
        <Divider light />
        <p className="mt-6 text-xl text-p-paper/80">Compartí tus fotos con</p>
        <p className="mt-1 font-playfair text-2xl text-p-lemon">{data.hashtag}</p>
      </section>

      <BottomDock visible={opened} onRsvp={() => setRsvpOpen(true)} />
    </main>
  )
}
