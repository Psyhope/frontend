'use client'

import { AdminRundownQuery, Booking } from '@/__generated__/graphql'
import { GET_ALL_SCHEDULES } from '@/actions/booking'
import ClientTable from '@/components/elements/ClientTable'
import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
  arr.reduce((groups, item) => {
    ;(groups[key(item)] ||= []).push(item)
    return groups
  }, {} as Record<K, T[]>)

function selectWeek(date: Date) {
  return Array(7)
    .fill(date)
    .map((el, idx) => new Date(el.setDate(el.getDate() - el.getDay() + idx)))
}

const AdminSchedulePage = () => {
  const [schedule, setSchedule] =
    useState<{ time: String; bookings: (Booking | null)[] }[]>()

  const { loading } = useQuery(GET_ALL_SCHEDULES, {
    variables: {
      getBookingFilter: {},
    },
    onCompleted(data) {
      if (!data || !data.adminRundown) return
      const grouped = groupBy(data.adminRundown, (val) => val.bookingTime)
      setSchedule(
        Object.keys(grouped).map((key) => ({
          time: key,
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
          ...selectWeek(new Date())
            .slice(0, 5)
            .map((el) => el.toLocaleDateString()),
        ]}
        data={schedule ?? []}
        rowComponent={(val, index) => (
          <tr key={index}>
            <td className="text-center bg-green-100 border-b-2 border-b-green-200 w-min">
              {val.time}
            </td>
            {[...val.bookings, ...new Array(5)].slice(0, 5).map((el, idx) =>
              el ? (
                <td key={idx} className="w-1/5 text-center">
                  {el.councelor?.user?.fullname} - {el.user?.fullname}
                </td>
              ) : (
                <td key={idx} className="w-1/5 text-center bg-yellow-100"></td>
              )
            )}
          </tr>
        )}
      />
    </section>
  )
}

export default AdminSchedulePage
