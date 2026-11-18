// Helpers para "Agendar": Google Calendar + archivo .ics (Apple / Outlook).
// Usamos horas "flotantes" (sin Z) + zona horaria explícita del evento.

const pad = (n: number) => String(n).padStart(2, '0')

/** Devuelve 'YYYYMMDDTHHMMSS' para una fecha base (YYYY-MM-DD) + hora 'HH:MM' + minutos extra */
export function stamp(baseDate: string, time: string, addMin = 0, dayOffset = 0) {
  const [y, m, d] = baseDate.split('-').map(Number)
  const [hh, mm] = time.split(':').map(Number)
  // Date.UTC evita que la zona del navegador corra la fecha
  const t = new Date(Date.UTC(y, m - 1, d + dayOffset, hh, mm + addMin))
  return `${t.getUTCFullYear()}${pad(t.getUTCMonth() + 1)}${pad(t.getUTCDate())}T${pad(t.getUTCHours())}${pad(t.getUTCMinutes())}00`
}

export type CalEvent = {
  title: string
  details: string
  location: string
  start: string // stamp()
  end: string // stamp()
  timezone: string
}

export function googleCalendarUrl(e: CalEvent) {
  const p = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.title,
    details: e.details,
    location: e.location,
    dates: `${e.start}/${e.end}`,
    ctz: e.timezone,
  })
  return `https://calendar.google.com/calendar/render?${p.toString()}`
}

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')

export function downloadIcs(e: CalEvent, filename: string) {
  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Waisten Programacion//Invitaciones//ES',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${e.start}-${Math.random().toString(36).slice(2)}@invitaciones`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART;TZID=${e.timezone}:${e.start}`,
    `DTEND;TZID=${e.timezone}:${e.end}`,
    `SUMMARY:${esc(e.title)}`,
    `DESCRIPTION:${esc(e.details)}`,
    `LOCATION:${esc(e.location)}`,
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    'DESCRIPTION:¡Mañana es la boda!',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
