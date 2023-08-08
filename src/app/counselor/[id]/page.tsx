'use client'

import { GET_COUNSELOR } from '@/actions/counselor'
import ClientTable from '@/components/elements/ClientTable'
import { useQuery } from '@apollo/client'
import { Badge, Button } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiArrowLeft } from 'react-icons/hi'

const formatter = Intl.DateTimeFormat('id-ID', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'Asia/Jakarta',
})

const CounselorByNamePage = () => {
  const router = useRouter()

  const { data } = useQuery(GET_COUNSELOR, {
    variables: {
      getCounselorDto: {
        counselorName: router.query.id as string,
      },
    },
  })

  console.log(data)

  return (
    <>
      <head>
        <title>Konselor | Empower U&I</title>
      </head>
      <main className="flex flex-col min-h-screen gap-5 p-5 sm:gap-10 md:px-10 lg:px-20">
        <section>
          <Link
            href="/"
            className="flex items-center gap-2 p-3 mt-5 font-semibold rounded-lg bg-primary-50 text-primary-500 w-max"
          >
            <HiArrowLeft /> Kembali
          </Link>
        </section>
        <section className="">
          <article className="">
            <h1 className="py-4 text-2xl font-semibold">Data Diri Konselor</h1>
            <aside className="grid grid-cols-1 text-gray-700 sm:grid-cols-2 md:grid-cols-3">
              <ul className="flex flex-col gap-3 list-none">
                <li>Konselor: Akmal Hakim</li>
                <li>Jenis Konselor: Konselor Psyhope</li>
                <li>Nama/Inisial: MAH</li>
                <li>Jenis Kelamin: Laki-laki</li>
              </ul>
              <ul className="flex flex-col gap-3 list-none">
                <li>NPM: 2106750383</li>
                <li>Fakultas: Fakultas Ilmu Komputer</li>
                <li>Jenjang: S1 Reguler</li>
                <li>Program Studi: Ilmu Komputer</li>
              </ul>
              <ul className="flex flex-col gap-2 list-none">
                <li>Kanal Curhat:</li>
                <li>
                  <div className="p-3 bg-red-100 border-2 border-gray-200 rounded-md">
                    <h2 className="mb-2 font-medium">Instagram</h2>
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-2 text-white bg-red-500 rounded"
                    >
                      Instagram: akmalhakim
                    </a>
                  </div>
                </li>
                <li>
                  <div className="p-3 bg-green-100 border-2 border-gray-200 rounded-md">
                    <h2 className="mb-2 font-medium">Line</h2>
                    <a
                      href="http://"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-2 text-white bg-green-600 rounded"
                    >
                      LINE ID: akmalhakim
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
          </article>
        </section>
        <section className="">
          <aside className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl font-semibold">Daftar Klien</h1>
          </aside>
          <ClientTable
            title=""
            // description="Berikut merupakan daftar klien konseling Psyhope."
            description=""
            headerTitle={['Nama Klien', 'Jadwal Konseling', 'Status Request']}
            data={[...Array(10)]}
            rowComponent={(val, index) => (
              <tr key={index}>
                <td className="min-h-[80px]">
                  <p>Nama panggilan</p>
                  <small className="opacity-70">S1 Reguler Ilmu Komputer</small>
                </td>
                <td className="min-h-[80px]">
                  <p>Senin, 08:00</p>
                </td>
                <td className="flex items-center justify-between h-full min-h-[80px]">
                  <Badge color={true ? 'green' : 'red'}>
                    {true ? 'Accepted' : 'Terminated'}
                  </Badge>
                  <button>
                    <BsThreeDotsVertical />
                  </button>
                </td>
              </tr>
            )}
          />
        </section>
        <section className="">
          <aside className="flex items-center gap-2 mb-3">
            <h1 className="text-3xl font-semibold">Log Konseling</h1>
          </aside>
          <ClientTable
            title=""
            description=""
            headerTitle={['Nama Klien', 'Tanggal Konseling', 'Notes']}
            rowComponent={(val, index) => (
              <tr key={index}>
                <td>
                  <p>Nama panggilan</p>
                  <small className="opacity-70">S1 Reguler Ilmu Komputer</small>
                </td>
                <td className="">
                  {formatter.format(new Date()).replace(' pukul', ',')}
                </td>
                <td className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p>Judul</p>
                    <p>Notes</p>
                  </div>
                  <button>
                    <BsThreeDotsVertical />
                  </button>
                </td>
              </tr>
            )}
            // headerComponent={}
            data={[...Array(5)]}
          />
        </section>
      </main>
    </>
  )
}

export default CounselorByNamePage
