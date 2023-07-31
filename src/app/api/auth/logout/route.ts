import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  cookies().delete('accessToken')
  cookies().delete('refreshToken')
  request.nextUrl.pathname = '/auth/login'
  return NextResponse.redirect(request.nextUrl)
}
