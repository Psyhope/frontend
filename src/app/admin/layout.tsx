'use client'

import { Center, SegmentedControl } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { HiPaperClip, HiSpeakerphone, HiUser } from 'react-icons/hi'
import { LuCalendarHeart, LuFileHeart } from 'react-icons/lu'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname()

  const [tab, setTab] = useState(pathName.replace('/admin', ''))

  useEffect(() => {
    setTab(pathName.replace('/admin', ''))
  }, [pathName])

  return (
    <main className="min-h-screen">
      <section className="p-5 md:px-10">
        <div className="flex flex-col-reverse w-full p-5 md:h-96 bg-primary-300 rounded-3xl md:p-10 md:flex-row">
          <div className="flex flex-col justify-center w-full h-full gap-3 md:w-3/5">
            <div className="relative w-16 h-16">
              <Image src="/assets/HeartBrain.svg" alt="" fill />
            </div>
            <h1 className="text-xl font-bold text-primary-500 font-inter lg:text-5xl md:text-2xl">
              Halo, Admin Akmal
            </h1>
            <p className="px-3 py-1 text-sm bg-red-800 rounded-3xl text-primary-50 w-max">
              Admin Psyhope
            </p>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 px-3 py-2 rounded shadow bg-primary-50 text-primary-500">
                <HiPaperClip /> Lihat Dashboard Artikel
              </button>
              <button className="flex items-center gap-1 px-3 py-2 rounded shadow bg-primary-50 text-primary-500">
                <HiSpeakerphone /> Lihat Dashboard Event
              </button>
            </div>
          </div>
          <div className="relative w-full h-96 md:w-2/5 -top-10">
            <Image
              src="/assets/KonselorImage.svg"
              alt="Hero Assets"
              fill
              className="relative z-0"
            />
          </div>
        </div>
      </section>
      <section className="p-5 md:px-10">
        <SegmentedControl
          fullWidth
          value={tab}
          size="md"
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
                    <p className="mr-2">Daftar Klien</p> <HiUser />
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

export default AdminLayout
