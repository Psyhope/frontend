import { env } from '@/env.mjs'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const registerData = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
  email: z.string().email(),
})

export async function POST(req: NextApiRequest) {
  if (!registerData.safeParse(req.body)) {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 })
  }

  const { username, password, email }: z.infer<typeof registerData> = req.body

  try {
    const res = await fetch(`${env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
      method: 'POST',
      body: JSON.stringify({ username, password, email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (res.status === 200) {
      const response = NextResponse.json(
        { message: 'Register successfull' },
        { status: 200 }
      )
      return response
    } else if (res.status === 403) {
      return NextResponse.json(
        { message: 'Wrong username or password' },
        { status: 403 }
      )
    }
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}
