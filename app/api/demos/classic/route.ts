import { NextResponse } from 'next/server'
import { DEMOS } from '../../../../lib/demos'

export async function GET() {
  const data = DEMOS['demo1']
  return NextResponse.json(data)
}


