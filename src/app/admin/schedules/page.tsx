'use client'

import { Booking } from '@/__generated__/graphql'
import { GET_ALL_SCHEDULES } from '@/actions/booking'
import ClientTable from '@/components/elements/ClientTable'
import { useQuery } from '@apollo/client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    ;(groups[key(item)] ||= []).push(item)
    return groups
  }, {} as Record<K, T[]>)

function selectWeek(date: Date) {
  return (
    Array(7)
      .fill(date)
      // .map((el, idx) => new Date(el.setDate(el.getDate() + idx)))
      .map((el, idx) => new Date(el.setDate(el.getDate() - el.getDay() + idx)))
  )
}

const AdminSchedulePage = () => {
  const [schedule, setSchedule] =
    useState<{ date: String; bookings: (Booking | null)[] }[]>()

  const { loading } = useQuery(GET_ALL_SCHEDULES, {
    variables: {
      getBookingFilter: {},
    },
    onCompleted(data) {
      if (!data || !data.adminRundown) return
      const allSchedules = Object.assign(
        {},
        ...selectWeek(new Date())
          .slice(1, 6)
          .map((val, index) => {
            return {
              date: val.toLocaleDateString('id-ID'),
              bookings: [null, null, null, null, null, null],
            }
          })
          .map((item) => ({ [item.date]: item.bookings }))
      )
      const grouped = {
        ...allSchedules,
        ...groupBy(data.adminRundown, (val) =>
          new Date(val.bookingDate).toLocaleDateString('id-ID')
        ),
      }
      console.log(allSchedules)
      console.log(grouped)
      setSchedule(
        Object.keys(grouped).map((key) => ({
          date: key,
          bookings: grouped[key] as Booking[],
        }))
      )
    },
  })

  return (
    <section className="p-5 md:px-10">
      <ClientTable
        title="Kalender Jadwal Konseling"
        description="Berikut merupakan jadwal konseling Psyhope."
        headerTitle={[
          'Jam/Tanggal',
          ...Array(6)
            .fill(null)
            .map(
              (_, index) => `${(8 + index * 2).toString().padStart(2, '0')}:00`
            ),
        ]}
        data={schedule ?? []}
        rowComponent={(val, index) => (
          <tr key={index}>
            <td className="text-center bg-green-100 border-b-2 border-b-green-200 w-min">
              {val.date}
            </td>
            {([...val.bookings, ...new Array(6)] as Partial<Booking>[])
              .slice(0, 6)
              .map((el, idx) =>
                el ? (
                  <td key={idx} className="min-w-[200px]">
                    <div className="">
                      <Link href={`/counselor/${el.councelor?.user?.fullname}`}>
                        {el.councelor?.user?.fullname}
                      </Link>
                      <span className="mx-1">-</span>
                      <Link href={`/clients/${el?.id}`}>
                        {el.user?.fullname}
                      </Link>
                    </div>
                  </td>
                ) : (
                  <td
                    key={idx}
                    className="min-w-[200px] text-center bg-yellow-100"
                  ></td>
                )
              )}
          </tr>
        )}
        emptyComponent={
          loading ? (
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
          ) : null
        }
      />
    </section>
  )
}

export default AdminSchedulePage
