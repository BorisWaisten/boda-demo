'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useDragControls } from 'framer-motion'
import { Check, X } from 'lucide-react'

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Títulos de sección ---------- */
export function SectionTitle({ eyebrow, title, light }: { eyebrow: string; title: string; light?: boolean }) {
  return (
    <Reveal className="mb-10 text-center">
      <p className={`eyebrow ${light ? 'text-p-lemon' : 'text-p-sea'}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-alex text-5xl leading-tight ${light ? 'text-p-paper' : 'text-p-ink'}`}>{title}</h2>
      <Divider light={light} />
    </Reveal>
  )
}

export function Divider({ light }: { light?: boolean }) {
  return (
    <div className={`mx-auto mt-4 flex items-center justify-center gap-3 ${light ? 'text-p-lemon/70' : 'text-p-sea/50'}`}>
      <span className="h-px w-12 bg-current" />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2c1.5 4.5 5.5 8.5 10 10-4.5 1.5-8.5 5.5-10 10-1.5-4.5-5.5-8.5-10-10C6.5 10.5 10.5 6.5 12 2z" />
      </svg>
      <span className="h-px w-12 bg-current" />
    </div>
  )
}

/* ---------- Toast ---------- */
const ToastCtx = createContext<(msg: string) => void>(() => {})
export const useToast = () => useContext(ToastCtx)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null)
  const t = useRef<number | null>(null)
  const show = useCallback((m: string) => {
    setMsg(m)
    if (t.current) window.clearTimeout(t.current)
    t.current = window.setTimeout(() => setMsg(null), 2200)
  }, [])
  return (
    <ToastCtx.Provider value={show}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-20 z-[90] flex justify-center px-4" aria-live="polite">
        <AnimatePresence>
          {msg && (
            <motion.div
              key={msg}
              initial={{ opacity: 0, y: -16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 rounded-full bg-p-ink px-5 py-3 text-sm text-p-paper shadow-xl"
            >
              <Check className="h-4 w-4 text-p-lemon" />
              {msg}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  )
}

/* ---------- Bottom sheet (patrón nativo iOS/Android) ---------- */
export function BottomSheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}) {
  const controls = useDragControls()
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={title}>
          <motion.div
            className="absolute inset-0 bg-p-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="relative max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] bg-p-paper px-6 pb-8 pt-3 shadow-2xl sm:max-w-md sm:rounded-[28px] safe-bottom"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            drag="y"
            dragControls={controls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 120 || info.velocity.y > 600) onClose()
            }}
          >
            <div
              className="-mx-6 -mt-3 mb-2 flex cursor-grab touch-none justify-center pb-2 pt-3"
              onPointerDown={(e) => controls.start(e)}
            >
              <div className="h-1.5 w-10 rounded-full bg-p-ink/15" />
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 rounded-full p-2 text-p-ink/60 hover:bg-p-ink/5"
            >
              <X className="h-5 w-5" />
            </button>
            {title && <h3 className="mb-5 pr-8 text-center font-alex text-4xl text-p-ink">{title}</h3>}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

/* ---------- Botones ---------- */
export function PillButton({
  children,
  onClick,
  href,
  variant = 'solid',
  className = '',
  type = 'button',
  disabled,
}: {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'solid' | 'outline' | 'lemon' | 'ghost-light'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}) {
  const styles = {
    solid: 'bg-p-ink text-p-paper shadow-lg shadow-p-ink/20',
    outline: 'border border-p-ink/25 text-p-ink bg-white/40',
    lemon: 'bg-p-lemon text-p-ink shadow-lg shadow-p-lemon/30',
    'ghost-light': 'border border-p-paper/30 text-p-paper bg-white/5',
  }[variant]
  const cls = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold tracking-wide transition active:scale-[0.97] disabled:opacity-40 ${styles} ${className}`
  if (href)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    )
  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}
