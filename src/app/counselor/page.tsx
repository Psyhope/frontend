'use client'

import { useAuth } from '@/components/contexts/AuthContext'
import ClientTable from '@/components/elements/ClientTable'
import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const DashboardPage = () => {
  const { user } = useAuth()

  return (
    <main className="min-h-screen">
      <section className="p-5 md:px-10">
        <div className="relative flex flex-col w-full p-5 overflow-hidden md:h-96 bg-primary-300 rounded-3xl md:p-10 md:flex-row">
          <div className="z-10 flex flex-col justify-center w-full h-full gap-3 md:w-3/5">
            <div className="relative w-16 h-16">
              <Image src="assets/HeartBrain.svg" alt="" fill />
            </div>
            <h1 className="text-xl font-bold text-primary-500 font-inter lg:text-5xl md:text-2xl">
              Halo, Konselor {user.username}
            </h1>
            <p className="px-3 py-1 text-sm rounded-3xl bg-primary-500 text-primary-50 w-max">
              {user.role}
            </p>
          </div>
          <div className="absolute w-3/5 h-72 md:h-96 -right-12 md:w-2/5 md:relative sm:-top-10 sm:right-0">
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
        <ClientTable
          title="Jadwal Klien"
          description="Berikut merupakan daftar jadwal yang telah kamu setujui dengan klien."
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="">Name {index}</td>
              <td className="">{new Date().toLocaleDateString()}</td>
              <td className="flex items-center justify-between">
                <div>Status</div>
                <button>
                  <BsThreeDotsVertical />
                </button>
              </td>
            </tr>
          )}
          // headerComponent={}
          data={[...Array(10)]}
          headerTitle={['Nama Klien', 'Jadwal Konseling', 'Status Request']}
        />
      </section>
      <section className="p-5 md:px-10">
        <ClientTable
          title="Daftar Calon Klien"
          description="Silakan beri konfirmasi kepada daftar calon klien berikut."
          headerTitle={[
            'Nama Calon Klien',
            'Permintaan Jadwal',
            'Konfirmasi Permintaan',
          ]}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="">Name {index}</td>
              <td className="">{new Date().toLocaleDateString()}</td>
              <td className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 text-red-700 bg-red-100 rounded-md shadow">
                    Tolak
                  </button>
                  <button className="px-3 py-2 rounded-md shadow bg-primary-50 text-primary-500">
                    Setujui
                  </button>
                </div>
                <button>
                  <BsThreeDotsVertical />
                </button>
              </td>
            </tr>
          )}
          // headerComponent={}
          data={[...Array(10)]}
        />
      </section>
    </main>
  )
}

export default DashboardPage
