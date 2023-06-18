'use client'

import { Button, TextInput, PasswordInput } from '@mantine/core'
import { HiLockClosed, HiUser } from 'react-icons/hi'
import { useForm, zodResolver } from '@mantine/form'
import Link from 'next/link'
import { z } from 'zod'
// import { useAuth } from "@/store/authStore";
import { SyntheticEvent, useState } from 'react'
import { useAuth } from '@/components/contexts/AuthContext'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)

  // const router = useRouter();

  const { login } = useAuth()

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: zodResolver(
      z.object({
        username: z.string().min(1),
        password: z.string().min(6),
      })
    ),
  })

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()
    form.validate()
    if (!form.isValid()) return
    setLoading(true)
    login(form.values.username, form.values.password).finally(() =>
      setLoading(false)
    )
  }

  return (
    <section className="z-[1] flex flex-col gap-8 px-5 sm:px-10 md:pl-20 w-full sm:w-1/2 sm:min-w-[500px]">
      <aside>
        <h1 className="text-3xl font-semibold sm:text-5xl">Welcome back</h1>
        <p className="mt-3 text-xl opacity-80">Sign in to continue</p>
      </aside>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <TextInput
          radius="md"
          size="md"
          label="Username"
          classNames={{ input: 'mt-0.5' }}
          placeholder="Username"
          icon={<HiUser />}
          {...form.getInputProps('username')}
        />
        <PasswordInput
          radius="md"
          size="md"
          label="Password"
          classNames={{ input: 'mt-0.5' }}
          placeholder="Password"
          icon={<HiLockClosed />}
          {...form.getInputProps('password')}
        />
        <Button
          loading={loading}
          radius="md"
          size="md"
          className="mt-3 bg-sky-600"
          type="submit"
        >
          Login
        </Button>
      </form>
      {/* <p className="mt-3 text-base opacity-80">
        Getting started? Register{' '}
        <Link href="/register" className="underline underline-offset-4">
          here
        </Link>
      </p> */}
    </section>
  )
}
