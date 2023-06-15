import { env } from '@/env.mjs'
import { NextResponse, NextRequest } from 'next/server'
import { z } from 'zod'

const loginData = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
})

export async function POST(req: NextRequest) {
  if (!loginData.safeParse(req.body)) {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 })
  }

  const { username, password }: z.infer<typeof loginData> = await req.json()
  // console.log(req.body);

  try {
    const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.status === 403) {
      return NextResponse.json(
        { message: 'Wrong username or password' },
        { status: 403 }
      )
    }
    const data: TokenResponse = await res.json()
    console.log(data)
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
    return response
  } catch (err) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
