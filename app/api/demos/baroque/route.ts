import { NextResponse } from 'next/server'
import { DEMOS } from '../../../../lib/demos'

export async function GET() {
  const config = DEMOS['demo3']
  return NextResponse.json(config)
}

