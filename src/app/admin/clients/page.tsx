'use client'

import { BookingFilterQuery } from '@/__generated__/graphql'
import {
  ADMIN_ACCEPT_BOOKING,
  ADMIN_TERMINATE,
  GET_BOOKING,
} from '@/actions/booking'
import ClientTable from '@/components/elements/ClientTable'
import { useMutation, useQuery } from '@apollo/client'
import { Badge, Select, TextInput, Button } from '@mantine/core'
import { DatePickerInput, DateValue } from '@mantine/dates'
import { useDebouncedState } from '@mantine/hooks'
import Link from 'next/link'
import React, { forwardRef, useEffect, useState } from 'react'
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs'
import { HiChevronDown, HiOutlineCalendar, HiSearch } from 'react-icons/hi'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  color: string
  value: string
}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ color, value, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <div className={`flex items-center gap-2 rounded cursor-pointer`}>
        <div
          style={{ backgroundColor: color }}
          className="w-3 rounded-full aspect-square"
        ></div>
        <p>{value}</p>
      </div>
    </div>
  )
)

const AdminClientPage = () => {
  const [name, setName] = useDebouncedState('', 200)
  const [date, setDate] = useState(new Date())
  const [status, setStatus] = useState<string | null>('All')
  const [result, setResult] = useState<BookingFilterQuery>()

  Item.displayName = 'Item'

  const { data, refetch } = useQuery(GET_BOOKING, {
    variables: {
      getBookingFilter: {
        day: date.toISOString(),
        // status: status ? StatusRequest[status as keyof typeof StatusRequest] : undefined,
      },
    },
    onCompleted(data) {
      setResult(data)
    },
  })

  const [adminTerminate, {}] = useMutation(ADMIN_TERMINATE, {
    onCompleted(data, clientOptions) {
      refetch({
        getBookingFilter: {
          day: date.toISOString(),
        },
      })
    },
  })

  const [adminAccept, { data: newData }] = useMutation(ADMIN_ACCEPT_BOOKING, {
    onCompleted(data, clientOptions) {
      refetch({
        getBookingFilter: {
          day: date.toISOString(),
        },
      })
    },
  })

  useEffect(() => {
    if (status === 'Accepted') {
      const newBooking = data?.bookingFilter!.filter((val) => val.isAccepted)
      setResult({ bookingFilter: newBooking })
    }
    if (status === 'Terminated') {
      const newBooking = data?.bookingFilter!.filter((val) => val.isTerminated)
      setResult({ bookingFilter: newBooking })
    }
    if (status === 'All') {
      setResult(data)
    }
  }, [status])

  return (
    <>
      <head>
        <title>Clients | Admin Panel | Empower U&I</title>
      </head>
      <section className="p-5 md:px-10">
        <div className="flex flex-col items-center gap-8 sm:gap-4 sm:flex-row md:gap-8">
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
                getBookingFilter: {
                  day: e!.toISOString(),
                },
              })
            }}
            rightSection={<HiChevronDown />}
            size="md"
            className="w-full sm:w-60 md:w-96"
          />
          <Select
            label="Filter berdasarkan Status"
            placeholder="Pilih Status Request"
            size="md"
            data={[
              {
                value: 'All',
                label: 'All',
                color: '#fff',
              },
              {
                value: 'Accepted',
                label: 'Accepted',
                color: 'rgb(74 222 128)',
              },
              {
                value: 'Terminated',
                label: 'Terminated',
                color: '#B42318',
              },
            ]}
            itemComponent={Item}
            value={status}
            onChange={setStatus}
            icon={<BsFilter />}
            className="w-full sm:w-60 md:w-96"
            styles={() => ({
              item: {
                // applies styles to selected item
                '&[data-hovered]': {
                  '&:hover': {
                    backgroundColor: '#F4F3FF',
                  },
                },
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: '#D9D6FE',
                    color: '#53389E',
                  },
                },
              },
            })}
          />
        </div>
      </section>
      <section className="p-5 overflow-x-auto md:px-10">
        <ClientTable
          title="Daftar Booking"
          description="Berikut merupakan daftar klien konseling Psyhope."
          headerTitle={[
            'Nama Klien',
            'Nama Konselor',
            'Jadwal Konseling',
            'Status Request',
          ]}
          data={result?.bookingFilter || []}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td className="min-h-[80px]">
                <Link href={`/clients/${val.id}`}>
                  <p>{val.user?.username}</p>
                  <small className="opacity-70">
                    {val.user?.account.major}
                  </small>
                </Link>
              </td>
              <td className="min-h-[80px]">
                <p>{val.councelor?.user?.fullname}</p>
                <small className="opacity-70">
                  {val.councelor?.user?.account.major}
                </small>
              </td>
              <td className="min-h-[80px]">
                <p>
                  {val.bookingDay}, {val.bookingTime}
                </p>
              </td>
              <td className="flex items-center justify-between h-full min-h-[80px]">
                <Badge color={val.isAccepted ? 'green' : 'red'}>
                  {val.isAccepted ? 'Accepted' : 'Waiting'}
                </Badge>
                {val.adminAcc ? (
                  <Button
                    color="red"
                    variant="outline"
                    onClick={() =>
                      adminTerminate({
                        variables: {
                          adminTerminate: {
                            id: val.id,
                          },
                        },
                      })
                    }
                  >
                    Terminasi
                  </Button>
                ) : (
                  <Button
                    onClick={() =>
                      adminAccept({
                        variables: {
                          adminAccInput: {
                            id: val.id,
                          },
                        },
                      })
                    }
                    color="green"
                    className="bg-green-600"
                  >
                    Konfirmasi
                  </Button>
                )}
                {/* <button>
                  <BsThreeDotsVertical />
                </button> */}
              </td>
            </tr>
          )}
        />
      </section>
    </>
  )
}

export default AdminClientPage
