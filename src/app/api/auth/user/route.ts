import { env } from '@/env.mjs'
import jwtDecode from 'jwt-decode'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
const handler = async (request: NextRequest) => {
  try {
    let accessToken = request.cookies.get('accessToken')?.value ?? ''
    let refreshToken = request.cookies.get('refreshToken')?.value ?? ''

    if (!accessToken && !refreshToken) {
      throw new Error()
    }

    if (refreshToken && !accessToken) {
      const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`, {
        credentials: 'include',
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      })
      const tokens: TokenResponse = await res.json()
      accessToken = tokens.accessToken
      refreshToken = tokens.refreshToken
    }

    const user: { username: string; sub: string } = jwtDecode(accessToken)

    const response = NextResponse.json(
      { user, token: accessToken },
      { status: 200 }
    )
    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 60 * 60,
      secure: env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
    })
    response.cookies.set('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      secure: env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
    })
    return response
  } catch (err) {
    return NextResponse.json({}, { status: 401 })
  }
}

export { handler as GET }
