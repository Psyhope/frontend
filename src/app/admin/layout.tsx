'use client'

import { Center, SegmentedControl } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { HiPaperClip, HiSpeakerphone, HiUser } from 'react-icons/hi'
import { LuCalendarHeart, LuFileHeart } from 'react-icons/lu'
import { useViewportSize } from '@mantine/hooks'
import withAuth from '@/components/hoc/withAuth'
import { useAuth } from '@/components/contexts/AuthContext'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()

  const [tab, setTab] = useState(pathName.replace('/admin', ''))

  const { width } = useViewportSize()

  const { user, accessToken } = useAuth()

  console.log(accessToken)

  const router = useRouter()

  useEffect(() => {
    // if (!accessToken) router.replace("/login");
    setTab(pathName.replace('/admin', ''))
  }, [pathName])

  return (
    <main className="min-h-screen">
      <section className="p-5 md:px-10">
        <div className="relative flex flex-col w-full p-5 overflow-hidden md:h-96 bg-primary-300 rounded-3xl md:p-10 md:flex-row">
          <div className="absolute w-full -left-2/3 md:relative h-96 md:w-2/5 top-10 sm:-top-10 sm:left-0 sm:hidden">
            <Image
              src="/assets/KonselorImage.svg"
              alt="Hero Assets"
              fill
              className="z-0"
            />
          </div>
          <div className="z-10 flex flex-col items-center justify-center w-full h-full gap-3 sm:items-start md:w-3/5">
            <div className="relative w-16 h-16">
              <Image src="/assets/HeartBrain.svg" alt="" fill />
            </div>
            <h1 className="text-xl font-bold text-primary-500 font-inter lg:text-5xl md:text-2xl">
              Halo, Admin Akmal
            </h1>
            <p className="px-3 py-1 text-sm bg-red-800 rounded-3xl text-primary-50 w-max">
              Admin Psyhope
            </p>
            <div className="flex flex-col flex-wrap items-center justify-center gap-2 text-sm sm:justify-start md:flex-row sm:text-base">
              <button className="flex items-center gap-1 px-3 py-2 rounded shadow bg-primary-50 text-primary-500">
                <HiPaperClip /> Lihat Dashboard Artikel
              </button>
              <button className="flex items-center gap-1 px-3 py-2 rounded shadow bg-primary-50 text-primary-500">
                <HiSpeakerphone /> Lihat Dashboard Event
              </button>
            </div>
          </div>
          <div className="absolute w-full -right-1/3 md:relative h-96 sm:w-2/5 top-10 sm:-top-10 sm:right-0">
            <Image
              src="/assets/KonselorImage.svg"
              alt="Hero Assets"
              fill
              className="z-0"
            />
          </div>
        </div>
      </section>
      <section className="p-5 md:px-10">
        <SegmentedControl
          fullWidth
          value={tab}
          size="md"
          orientation={width < 480 ? 'vertical' : 'horizontal'}
          data={[
            {
              label: (
                <Link href="/admin">
                  <Center>
                    <p className="mr-2">Daftar Konselor</p> <LuFileHeart />
                  </Center>
                </Link>
              ),
              value: '',
            },
            {
              label: (
                <Link href="/admin/clients">
                  <Center>
                    <p className="mr-2">Daftar Booking</p> <HiUser />
                  </Center>
                </Link>
              ),
              value: '/clients',
            },
            {
              label: (
                <Link href="/admin/schedules">
                  <Center>
                    <p className="mr-2">Jadwal Konseling</p> <LuCalendarHeart />
                  </Center>
                </Link>
              ),
              value: '/schedules',
            },
          ]}
        />
      </section>
      {children}
    </main>
  )
}

export default withAuth(AdminLayout)
