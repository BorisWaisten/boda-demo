'use client'

import Demo from '../[slug]/page'

export default function ClassicDemo() {
  // Reutilizamos el diseño "clásico" exactamente como en demo1
  // usando el componente dinámico pero con slug fijo.
  // Next ignora props en Server Components, pero este es client.
  // Pasamos el slug mediante props para mantener el comportamiento.
  // eslint-disable-next-line react/jsx-no-undef
  return <Demo params={{ slug: 'demo1' }} />
}


