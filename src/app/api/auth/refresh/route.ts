'use server'

import { env } from '@/env.mjs'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  // const body = await request.json();
  const refreshToken = request.cookies.get('refreshToken')

  try {
    if (!refreshToken?.value) throw new Error()
    const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, {
      // method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `refreshToken=${refreshToken.value}`,
      },
      credentials: 'include',
    })
    if (res.status !== 200) throw new Error()
    const data: TokenResponse = await res.json()
    const response = NextResponse.json(data, { status: 200 })
    response.cookies.set('accessToken', data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60,
      secure: env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
    })
    response.cookies.set('refreshToken', data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      secure: env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
    })
    return response
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
