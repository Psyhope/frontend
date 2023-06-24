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
    <section className="w-full min-h-screen flex xl:px-36 p-2 py-10 xl:py-0 items-center justify-center">
      <div className="flex xl:flex-row flex-col-reverse">
        <div className="md:w-[564px] bg-white md:p-10 p-5">
          <p className="font-inter font-light md:text-2xl text-xl">
            Yuk, mulai daftar konseling!
          </p>
          <p className="font-inter font-medium md:text-3xl text-2xl mt-7">
            Login SSO
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-9 mt-7">
            <div>
              <Input.Label
                className="text-black font-inter font-normal text-base pb-2"
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
                className="text-black font-inter font-normal text-base pb-2"
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
