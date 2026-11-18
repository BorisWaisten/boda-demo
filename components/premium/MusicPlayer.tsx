'use client'

import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { VolumeX } from 'lucide-react'

export type MusicHandle = { start: () => void }

/**
 * Botón flotante de música.
 * - Si hay `src` (mp3 del cliente) usa <audio>.
 * - Si no, genera una "cajita musical" con Web Audio (sin derechos de autor),
 *   ideal para demos.
 * Arranca en el toque del sello (los navegadores exigen un gesto del usuario).
 */
const MusicPlayer = forwardRef<MusicHandle, { src?: string; visible: boolean }>(function MusicPlayer(
  { src, visible },
  ref
) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const timerRef = useRef<number | null>(null)
  const stepRef = useRef(0)
  const nextTimeRef = useRef(0)

  const startSynth = useCallback(() => {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AC) return
    let ctx = ctxRef.current
    if (!ctx) {
      ctx = new AC()
      ctxRef.current = ctx
      const master = ctx.createGain()
      master.gain.value = 0
      // eco suave para dar sensación de sala
      const delay = ctx.createDelay()
      delay.delayTime.value = 0.32
      const fb = ctx.createGain()
      fb.gain.value = 0.28
      const wet = ctx.createGain()
      wet.gain.value = 0.35
      master.connect(ctx.destination)
      master.connect(delay)
      delay.connect(fb)
      fb.connect(delay)
      delay.connect(wet)
      wet.connect(ctx.destination)
      masterRef.current = master
    }
    ctx.resume()
    const master = masterRef.current!
    master.gain.cancelScheduledValues(ctx.currentTime)
    master.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 1.5)

    // Progresión I – vi – IV – V en Do, arpegiada como cajita musical
    const chords = [
      [60, 64, 67, 72, 76, 72, 67, 64],
      [57, 60, 64, 69, 72, 69, 64, 60],
      [53, 57, 60, 65, 69, 65, 60, 57],
      [55, 59, 62, 67, 71, 67, 62, 59],
    ]
    const melody = [76, 0, 74, 0, 72, 0, 74, 76, 72, 0, 0, 69, 72, 0, 71, 0]
    const beat = 0.34
    const note = (midi: number, t: number, vol: number, len: number) => {
      const f = 440 * Math.pow(2, (midi - 69) / 12)
      const o = ctx!.createOscillator()
      const o2 = ctx!.createOscillator()
      const g = ctx!.createGain()
      o.type = 'sine'
      o2.type = 'triangle'
      o.frequency.value = f
      o2.frequency.value = f * 2
      const g2 = ctx!.createGain()
      g2.gain.value = 0.15
      o.connect(g)
      o2.connect(g2)
      g2.connect(g)
      g.connect(master)
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(vol, t + 0.012)
      g.gain.exponentialRampToValueAtTime(0.0001, t + len)
      o.start(t)
      o2.start(t)
      o.stop(t + len + 0.05)
      o2.stop(t + len + 0.05)
    }
    nextTimeRef.current = ctx.currentTime + 0.1
    const schedule = () => {
      while (nextTimeRef.current < ctx!.currentTime + 0.6) {
        const s = stepRef.current
        const chord = chords[Math.floor(s / 8) % chords.length]
        note(chord[s % 8], nextTimeRef.current, 0.22, 1.6)
        const m = melody[s % 16]
        if (m && Math.floor(s / 16) % 2 === 1) note(m + 12, nextTimeRef.current, 0.12, 2.2)
        nextTimeRef.current += beat
        stepRef.current = s + 1
      }
    }
    schedule()
    timerRef.current = window.setInterval(schedule, 150)
  }, [])

  const stopSynth = useCallback(() => {
    const ctx = ctxRef.current
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = null
    if (ctx && masterRef.current) {
      masterRef.current.gain.cancelScheduledValues(ctx.currentTime)
      masterRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4)
    }
  }, [])

  const play = useCallback(() => {
    if (src) {
      audioRef.current?.play().catch(() => setPlaying(false))
    } else {
      startSynth()
    }
    setPlaying(true)
  }, [src, startSynth])

  const pause = useCallback(() => {
    if (src) audioRef.current?.pause()
    else stopSynth()
    setPlaying(false)
  }, [src, stopSynth])

  useImperativeHandle(ref, () => ({ start: play }), [play])

  // Pausar si la pestaña queda en segundo plano
  useEffect(() => {
    const onVis = () => {
      if (document.hidden && playing) pause()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [playing, pause])

  useEffect(
    () => () => {
      stopSynth()
      ctxRef.current?.close()
    },
    [stopSynth]
  )

  return (
    <>
      {src && <audio ref={audioRef} src={src} loop preload="none" />}
      <motion.button
        type="button"
        onClick={playing ? pause : play}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
        aria-pressed={playing}
        className="fixed right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-p-paper/80 text-p-ink shadow-lg ring-1 ring-p-ink/10 backdrop-blur-md"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -12 }}
        style={{ pointerEvents: visible ? 'auto' : 'none' }}
        whileTap={{ scale: 0.92 }}
      >
        {playing ? (
          <span className="flex h-4 items-end gap-[3px]" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-p-sea"
                animate={{ height: ['30%', '100%', '45%', '80%', '30%'] }}
                transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </span>
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
      </motion.button>
    </>
  )
})

export default MusicPlayer
