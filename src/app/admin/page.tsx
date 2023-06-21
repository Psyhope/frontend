'use client'

import ClientTable from '@/components/elements/ClientTable'
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi'
import { HiChevronDown, HiOutlineCalendar, HiSearch } from 'react-icons/hi'
import { TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useDebouncedState } from '@mantine/hooks'

const AdminPage = () => {
  const [counselors, setCounselors] = useState([...Array(10)])

  const [name, setName] = useDebouncedState('', 200)
  const [date, setDate] = useState(new Date())

  return (
    <>
      <section className="p-5 md:px-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <TextInput
            label="Cari Konselor"
            icon={<HiSearch />}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Nama Konselor"
            size="md"
            className="w-full sm:w-60 md:w-96"
          />
          <DatePickerInput
            label="Cari Hari Konseling"
            icon={<HiOutlineCalendar />}
            value={date}
            onChange={(e) => setDate(date)}
            rightSection={<HiChevronDown />}
            size="md"
            className="w-full sm:w-60 md:w-96"
          />
        </div>
      </section>
      <section className="p-5 md:px-10">
        <ClientTable
          title="Daftar Konselor"
          description="Berikut merupakan daftar konselor pada konseling Psyhope."
          headerTitle={['Nama Konselor', 'Jadwal Konseling', 'Daftar Klien']}
          data={counselors}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td>
                <p>Nama Panggilan {index}</p>
                <p className="px-3 py-1 mt-1 text-sm bg-primary-500 rounded-3xl text-primary-50 w-max">
                  Admin Psyhope
                </p>
              </td>
              <td>
                <p>Klien 1: Senin, 08:00</p>
                <p>Klien 1: Senin, 08:00</p>
              </td>
              <td>
                <div className="flex items-center justify-between gap-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="grid w-8 border-4 rounded-full aspect-square place-items-center border-primary-300 bg-primary-50">
                        <HiOutlineUser />
                      </div>
                      <p>Muhammad Akmal Hakim</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="grid w-8 border-4 rounded-full aspect-square place-items-center border-primary-300 bg-primary-50">
                        <HiOutlineUser />
                      </div>
                      <p>Muhammad Akmal Hakim</p>
                    </div>
                  </div>
                  <button>
                    <BsThreeDotsVertical />
                  </button>
                </div>
              </td>
            </tr>
          )}
        />
      </section>
    </>
  )
}

export default AdminPage
