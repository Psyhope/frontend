'use server'

import { env } from '@/env.mjs'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  // const body = await request.json();
  const refreshToken = request.cookies.get('refresh_token')
  console.log(refreshToken)

  // console.log("From body: ", body.refreshToken)
  try {
    if (!refreshToken?.value) throw new Error()
    const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, {
      method: 'POST',
      body: JSON.stringify({ refresh_token: refreshToken.value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(res.status)
    if (res.status !== 200) {
      return
    }
    const data: TokenResponse = await res.json()
    // console.log(data)
    const response = NextResponse.json(data, { status: 200 })
    // response.cookies.set("access_token", data.access_token, {
    //     httpOnly: true,
    //     maxAge: 60 * 60,
    //     secure: env.NODE_ENV !== "development",
    //     sameSite: "lax",
    //     path: "/",
    // });
    response.cookies.set('refresh_token', data.refresh_token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      secure: env.NODE_ENV !== 'development',
      sameSite: 'lax',
      path: '/',
    })
    // console.log("Refresh: ", data)
    return response
  } catch (error) {
    console.log(error)
  }
}
