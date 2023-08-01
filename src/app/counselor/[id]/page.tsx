'use client'

import ClientTable from '@/components/elements/ClientTable'
import Link from 'next/link'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiArrowLeft } from 'react-icons/hi'

const formatter = Intl.DateTimeFormat('id-ID', {
  dateStyle: 'full',
  timeStyle: 'long',
  timeZone: 'Asia/Jakarta',
})

const ClientByIDPage = () => {



  return (
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
            <ul className="list-none">
              <li>Kanal Curhat: Instagram</li>
              <li>
                <div className="p-3 bg-red-100 border-2 border-gray-100 rounded-md">
                  <h2 className="font-medium">Instagram</h2>
                  <p className="my-2 text-gray-700">
                    Jadwal Konseling: Minggu, 08:00 WIB
                  </p>
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-2 text-white bg-red-500 rounded"
                  >
                    Instagram: akmalhakin
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        </article>
      </section>
      <section className="">
        <aside className="flex items-center gap-2 mb-3">
          <h1 className="text-3xl font-semibold">Request Reschedule</h1>
        </aside>
        <ClientTable
          title=""
          description=""
          headerTitle={[
            'Jadwal Sebelumnya',
            'Permintaan Jadwal',
            'Konfirmasi Permintaan',
          ]}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="bg-yellow-50">
                {formatter.format(new Date()).replace(' pukul', ',')}
              </td>
              <td className="bg-blue-50">
                {formatter.format(new Date()).replace(' pukul', ',')}
              </td>
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
      <section className="">
        <aside className="flex items-center gap-2 mb-3">
          <h1 className="text-3xl font-semibold">Log Konseling</h1>
        </aside>
        <ClientTable
          title=""
          description=""
          headerTitle={['Tanggal Konseling', 'Notes']}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="w-1/2">
                {formatter.format(new Date()).replace(' pukul', ',')}
              </td>
              <td className="flex items-center justify-between w-1/2">
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
          data={[...Array(10)]}
        />
      </section>
      <section className="">
        <h1 className="text-3xl font-semibold">Analisis GHQ</h1>
        <p className="my-3 opacity-70">
          The GHQ-12 measure has standardized instructions as well as scoring
          interpretations for the clinician to follow and is administered as a
          self-report in which the subject is asked to consider 12 questions and
          how they relate to his or her personal life over the past few weeks.
          Total scores range from 0 to 36 with a score of 11 or 12 considered
          typical, scores &gt; 15 suggesting evidence of distress, and scores
          &gt; 20 are considered severe problems with psychological distress.
        </p>
        <ul className="grid grid-cols-1 gap-5 mt-5 list-none sm:grid-cols-2 md:grid-cols-3">
          <li>
            <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
              <h3>Metrics 1</h3>
            </div>
            <h4 className="mt-3">Nilai: {8}</h4>
            <p>
              Penjelasan:{' '}
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore voluptatem ipsam optio nostrum, officiis ea pariatur, possimus harum nobis ullam fugit nam necessitatibus ex. Laborum saepe quis minus molestias!'
              }
            </p>
          </li>
          <li>
            <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
              <h3>Metrics 1</h3>
            </div>
            <h4 className="mt-3">Nilai: {8}</h4>
            <p>
              Penjelasan:{' '}
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore voluptatem ipsam optio nostrum, officiis ea pariatur, possimus harum nobis ullam fugit nam necessitatibus ex. Laborum saepe quis minus molestias!'
              }
            </p>
          </li>
          <li>
            <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
              <h3>Metrics 1</h3>
            </div>
            <h4 className="mt-3">Nilai: {8}</h4>
            <p>
              Penjelasan:{' '}
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore voluptatem ipsam optio nostrum, officiis ea pariatur, possimus harum nobis ullam fugit nam necessitatibus ex. Laborum saepe quis minus molestias!'
              }
            </p>
          </li>
          <li>
            <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
              <h3>Metrics 1</h3>
            </div>
            <h4 className="mt-3">Nilai: {8}</h4>
            <p>
              Penjelasan:{' '}
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore voluptatem ipsam optio nostrum, officiis ea pariatur, possimus harum nobis ullam fugit nam necessitatibus ex. Laborum saepe quis minus molestias!'
              }
            </p>
          </li>
          <li>
            <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
              <h3>Metrics 1</h3>
            </div>
            <h4 className="mt-3">Nilai: {8}</h4>
            <p>
              Penjelasan:{' '}
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore voluptatem ipsam optio nostrum, officiis ea pariatur, possimus harum nobis ullam fugit nam necessitatibus ex. Laborum saepe quis minus molestias!'
              }
            </p>
          </li>
          <li>
            <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
              <h3>Metrics 1</h3>
            </div>
            <h4 className="mt-3">Nilai: {8}</h4>
            <p>
              Penjelasan:{' '}
              {
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, inventore voluptatem ipsam optio nostrum, officiis ea pariatur, possimus harum nobis ullam fugit nam necessitatibus ex. Laborum saepe quis minus molestias!'
              }
            </p>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default ClientByIDPage
