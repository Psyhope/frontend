'use client'

import { Button, TextInput, PasswordInput } from '@mantine/core'
import { useForm, zodResolver } from '@mantine/form'
import { Input } from '@mantine/core'
import { z } from 'zod'
import { SyntheticEvent, useState } from 'react'
import Image from 'next/image'
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
    <section className="flex items-center justify-center w-full min-h-screen p-2 py-10 xl:px-36 xl:py-0">
      <div className="flex flex-col-reverse xl:flex-row">
        <div className="md:w-[564px] bg-white md:p-10 p-5 rounded-md">
          <p className="text-xl font-light font-inter md:text-2xl">
            Yuk, mulai daftar konseling!
          </p>
          <p className="text-2xl font-medium font-inter md:text-3xl mt-7">
            Login SSO
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-9 mt-7">
            <div>
              <Input.Label
                className="pb-2 text-base font-normal text-black font-inter"
                required
              >
                Username
              </Input.Label>
              <TextInput
                radius="md"
                size="lg"
                placeholder="Username"
                {...form.getInputProps('username')}
              />
            </div>
            <div>
              <Input.Label
                className="pb-2 text-base font-normal text-black font-inter"
                required
              >
                Password
              </Input.Label>
              <PasswordInput
                radius="md"
                size="lg"
                placeholder="Password"
                {...form.getInputProps('password')}
              />
            </div>
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
        </div>
        <div className="relative xl:h-auto h-[221px] xl:w-[580px] w-full">
          <Image
            alt="Login Asset"
            src={'assets/LoginAsset.svg'}
            fill
            className="relative"
          />
        </div>
      </div>
    </section>
  )
}
