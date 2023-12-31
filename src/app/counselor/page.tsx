'use client'

import { GetCounselorByUnameQuery } from '@/__generated__/graphql'
import { ACCEPT_BOOKING, REJECT_BOOKING } from '@/actions/booking'
import { GET_COUNSELOR_BY_ID } from '@/actions/counselor'
import { useAuth } from '@/components/contexts/AuthContext'
import ClientTable from '@/components/elements/ClientTable'
import counselorHoc from '@/components/hoc/counselorHoc'
import { useMutation, useQuery } from '@apollo/client'
import { Badge } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never

const DashboardPage = () => {
  const { user } = useAuth()

  const [counselor, setCounselor] =
    useState<ArrElement<GetCounselorByUnameQuery['getCounselorByUname']>>()

  const router = useRouter()

  const [stateAcc, setAcc] = useState(false)
  const [stateReject, setReject] = useState(false)

  const { loading, refetch: getCounselor } = useQuery(GET_COUNSELOR_BY_ID, {
    variables: {
      getCounselor: {
        username: user.username,
      },
    },
    onCompleted(data) {
      if (!data.getCounselorByUname) {
        void router.replace('/')
        return
      }
      setCounselor(data.getCounselorByUname[0])
    },
  })

  const [acceptBooking] = useMutation(ACCEPT_BOOKING, {
    onCompleted(data) {
      counselor?.Booking?.filter((val) => val.id !== data.acceptBooking?.id)
      setReject(false)
    },
  })

  const [rejectBooking] = useMutation(REJECT_BOOKING, {
    onCompleted(data) {
      counselor?.Booking?.filter((val) => val.id !== data.rejectBooking?.id)
      setReject(false)
    },
  })

  useEffect(() => {
    getCounselor()
  }, [stateAcc, stateReject])

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
              {user.role.split('_')[0]}
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
              <td className="">
                <Link href={`/clients/${val.id}`} className="block">
                  {val.user?.username}
                </Link>
                <small className="opacity-70">{val.user?.account.major}</small>
              </td>
              <td className="">
                <p>
                  {val.bookingDay}, {val.bookingTime}
                </p>
              </td>
              <td className="flex items-center justify-between h-full min-h-[80px]">
                <Badge color={val.isAccepted ? 'green' : 'red'}>
                  {val.isAccepted ? 'Accepted' : 'Terminated'}
                </Badge>
              </td>
            </tr>
          )}
          // headerComponent={}
          data={
            counselor?.Booking
              ? counselor.Booking.filter(
                  (val) => val.isAccepted && !val.isTerminated
                )
              : []
          }
          headerTitle={['Nama Klien', 'Jadwal Konseling', 'Status Request']}
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
              <td className="">{val.user?.username}</td>
              <td className="">
                <p>
                  {val.bookingDay}, {val.bookingTime}
                </p>
              </td>
              <td className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    disabled={stateReject}
                    onClick={() => {
                      setReject(true)
                      rejectBooking({
                        variables: {
                          rejectBookingInput: {
                            id: val.id,
                          },
                        },
                      })
                    }}
                    className={`${
                      stateReject || stateAcc ? 'hidden' : 'block'
                    } px-3 py-2 text-red-700 bg-red-100 rounded-md shadow`}
                  >
                    Tolak
                  </button>
                  <button
                    disabled={stateAcc}
                    onClick={() => {
                      setAcc(true)
                      acceptBooking({
                        variables: {
                          accBookingInput: {
                            id: val.id,
                          },
                        },
                      })
                    }}
                    className={`${
                      stateReject || stateAcc ? 'hidden' : 'block'
                    } px-3 py-2 rounded-md shadow bg-primary-50 text-primary-500`}
                  >
                    Setujui
                  </button>
                </div>
                <button>
                  <BsThreeDotsVertical />
                </button>
              </td>
            </tr>
          )}
          data={
            counselor?.Booking
              ? counselor.Booking.filter(
                  (val) => val.adminAcc && !val.isAccepted && !val.isTerminated
                )
              : []
          }
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
    </main>
  )
}

export default counselorHoc(DashboardPage)
