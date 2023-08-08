'use client'

import ClientTable from '@/components/elements/ClientTable'
import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi'
import { HiChevronDown, HiOutlineCalendar, HiSearch } from 'react-icons/hi'
import { TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useDebouncedState } from '@mantine/hooks'
import { GET_COUNSELOR } from '@/actions/counselor'
import { useQuery } from '@apollo/client'
import { CounselorFilterQuery } from '@/__generated__/graphql'
import { dayNames } from '@/components/modules/ScheduleModule/const'
import Link from 'next/link'

const date = new Date()

const AdminPage = () => {
  const [name, setName] = useDebouncedState('', 500)
  const [date, setDate] = useState(new Date())

  const [result, setResult] = useState<CounselorFilterQuery>()

  const { refetch, loading } = useQuery(GET_COUNSELOR, {
    variables: {
      getCounselorDto: {
        bookingDay: dayNames[date.getDay()],
      },
    },
    onCompleted(data) {
      setResult(data)
    },
  })

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
            onChange={(e) => {
              setDate(e as Date)
              refetch({
                getCounselorDto: {
                  bookingDay: dayNames[e!.getDay()],
                },
              })
            }}
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
          data={result?.counselorFilter || []}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td>
                <Link href={`/counselor/${val.user?.fullname}`}>
                  <p>{val.user?.fullname}</p>
                  <p className="px-3 py-1 mt-1 text-sm bg-primary-500 rounded-3xl text-primary-50 w-max">
                    {val.counselorType}
                  </p>
                </Link>
              </td>
              <td>
                {val.Booking?.map((val, index) => (
                  <p key={index}>
                    Klien {index + 1}: {val.bookingDay}, {val.bookingTime}
                  </p>
                ))}
              </td>
              <td>
                <div className="flex items-center justify-between gap-8">
                  <ul className="flex flex-col items-center gap-2">
                    {val.Booking?.map((val, index) => (
                      <li key={index} className="flex items-center gap-1">
                        <div className="grid w-8 border-4 rounded-full aspect-square place-items-center border-primary-300 bg-primary-50">
                          <HiOutlineUser />
                        </div>
                        <p>{val.user?.username}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
            </tr>
          )}
          emptyComponent={
            loading ? (
              <div className="flex flex-col items-center justify-center w-full h-full gap-3 p-3">
                <div className="grid w-16 h-16 rounded-full place-items-center animate-pulse bg-primary-300"></div>
                <p className="text-lg font-semibold">Loading...</p>
              </div>
            ) : null
          }
        />
      </section>
    </>
  )
}

export default AdminPage
