'use client'

import { Booking } from '@/__generated__/graphql'
import { GET_ALL_SCHEDULES } from '@/actions/booking'
import ClientTable from '@/components/elements/ClientTable'
import { dayNames } from '@/components/modules/ScheduleModule/const'
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

const getIndexTime = (idx: string) => {
  if (idx == '08:00') return 0
  else if (idx == '10:00') return 1
  else if (idx == '12:00') return 2
  else if (idx == '14:00') return 3
  else if (idx == '16:00') return 4
  else if (idx == '18:00') return 5
}

const AdminSchedulePage = () => {
  const [schedule, setSchedule] =
    useState<{ date: String; bookings: (Booking | null)[][] }[]>()

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
              date: dayNames[val.getDay()],
              bookings: [[], [], [], [], [], []],
            }
          })
          .map((item) => ({ [item.date]: item.bookings }))
      )
      for (let i = 0; i < data.adminRundown.length; i++) {
        allSchedules[data.adminRundown[i].bookingDay][
          getIndexTime(data.adminRundown[i].bookingTime) as number
        ].push(data.adminRundown[i])
      }
      const grouped = {
        ...allSchedules,
      }
      setSchedule(
        Object.keys(grouped).map((key) => ({
          date: key,
          bookings: grouped[key] as Booking[][],
        }))
      )
    },
  })

  return (
    <>
      <head>
        <title>Schedules | Admin Panel | Empower U&I</title>
      </head>
      <section className="p-5 md:px-10">
        <ClientTable
          title="Kalender Jadwal Konseling"
          description="Berikut merupakan jadwal konseling Psyhope."
          headerTitle={[
            'Jam/Hari',
            ...Array(6)
              .fill(null)
              .map(
                (_, index) =>
                  `${(8 + index * 2).toString().padStart(2, '0')}:00`
              ),
          ]}
          data={schedule ?? []}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="text-center bg-green-100 border-b-2 border-b-green-200 w-min">
                {val.date}
              </td>
              {([...val.bookings] as Booking[][]).slice(0, 6).map((el, idx) => (
                <td
                  key={idx}
                  className={`${el.length != 0 ? '' : 'bg-yellow-100'}`}
                >
                  {el.length != 0 ? (
                    <div key={idx} className=" bg-white">
                      {el.map((ul, idx) => (
                        <div key={idx} className="">
                          <Link
                            href={`/counselor/${ul.councelor?.user?.fullname}`}
                          >
                            {ul.councelor?.user?.fullname}
                          </Link>
                          <span className="mx-1">-</span>
                          <Link href={`/clients/${ul.id}`}>
                            {ul.user?.fullname}
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <td
                      key={idx}
                      className="min-w-[200px] text-center bg-yellow-100"
                    ></td>
                  )}
                </td>
              ))}
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
    </>
  )
}

export default AdminSchedulePage
