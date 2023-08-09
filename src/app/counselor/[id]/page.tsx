'use client'

import { CounselingLog, CounselorFilterQuery } from '@/__generated__/graphql'
import { GET_COUNSELOR } from '@/actions/counselor'
import ClientTable from '@/components/elements/ClientTable'
import adminHoc from '@/components/hoc/adminHoc'
import { useQuery } from '@apollo/client'
import { Badge, Button } from '@mantine/core'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiArrowLeft } from 'react-icons/hi'

const formatter = Intl.DateTimeFormat('id-ID', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'Asia/Jakarta',
})

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never

const CounselorByNamePage = () => {
  const { id } = useParams()

  const [counselor, setCounselor] =
    useState<ArrElement<CounselorFilterQuery['counselorFilter']>>()

  const router = useRouter()

  const { data, refetch } = useQuery(GET_COUNSELOR, {
    variables: {
      getCounselorDto: {
        counselorName: decodeURI(id),
      },
    },
    onCompleted(data) {
      console.log(data)
      if (!data.counselorFilter) {
        void router.replace('/')
        return
      }
      setCounselor(data.counselorFilter[0])
    },
  })

  return (
    <main className="flex flex-col min-h-screen gap-5 p-5 sm:gap-10 md:px-10 lg:px-20">
      <section>
        <Link
          href="/admin"
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
              <li>Konselor: {counselor?.user?.fullname}</li>
              <li>Jenis Konselor: {counselor?.counselorType}</li>
              <li>Nama/Inisial: {counselor?.user?.username}</li>
              <li>Jenis Kelamin: {counselor?.user?.account.gender}</li>
            </ul>
            <ul className="flex flex-col gap-3 list-none">
              <li>NPM: {counselor?.user?.id}</li>
              <li>Fakultas: {counselor?.user?.account.faculty}</li>
              <li>
                Program Studi:
                <p>{counselor?.user?.account.major}</p>
              </li>
            </ul>
            <ul className="flex flex-col gap-2 list-none">
              <li>Kanal Curhat:</li>
              <li>
                <div className="p-3 bg-red-100 border-2 border-gray-200 rounded-md">
                  <h2 className="mb-2 font-medium">Instagram</h2>
                  <a
                    href={`http://www.instagram.com/${counselor?.user?.igAcc}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 text-white bg-red-500 rounded"
                  >
                    Instagram: {counselor?.user?.igAcc}
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
                    LINE ID: {counselor?.user?.lineAcc}
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
          data={counselor?.Booking ?? []}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="min-h-[80px]">
                <Link href={`/clients/${val.id}`} className="block">
                  {val.user?.username}
                </Link>
                <small className="opacity-70">{val.user?.account.major}</small>
              </td>
              <td className="min-h-[80px]">
                <p>
                  {val.bookingDay}, {val.bookingTime}
                </p>
              </td>
              <td className="flex items-center justify-between h-full min-h-[80px]">
                <Badge color={val.isAccepted ? 'green' : 'red'}>
                  {val.isAccepted ? 'Accepted' : 'Terminated'}
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
          rowComponent={(val, index) => {
            console.log(val)
            return (
              <tr key={index}>
                <td>
                  <Link href={`/clients/${val.bookingId}`} className="block">
                    {val.client?.username}
                  </Link>
                  <small className="opacity-70">
                    {val.client?.account.major}
                  </small>
                </td>
                <td className="">
                  {new Date(val.time).toLocaleDateString('id-ID')}
                </td>
                {/* <td className="">{val.time}</td> */}
                <td className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <p>{val.title ?? '-'}</p>
                    <p>{val.detail ?? '-'}</p>
                  </div>
                  <button>
                    <BsThreeDotsVertical />
                  </button>
                </td>
              </tr>
            )
          }}
          // headerComponent={}
          data={
            counselor?.Booking
              ? (
                  counselor.Booking.map(
                    (val) => val.CounselingLog
                  ).flat() as CounselingLog[]
                ).sort(
                  (a, b) =>
                    new Date(a.time).getTime() - new Date(b.time).getTime()
                )
              : []
          }
        />
      </section>
    </main>
  )
}

export default adminHoc(CounselorByNamePage)
