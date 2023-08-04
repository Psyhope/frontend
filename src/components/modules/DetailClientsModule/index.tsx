;`use client`
import React, { useEffect, useState } from 'react'
import ClientTable from '@/components/elements/ClientTable'
import { IdentityStore } from 'aws-sdk'
import { useParams } from 'next/navigation'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useQuery, useMutation } from '@apollo/client'
import { GET_CLIENT_DETAIL } from '@/actions/booking'
import { Button, Modal } from '@mantine/core'
import { Booking, CounselingLog, DetailClientModule } from './interface'
import { monthNames } from './const'
import { dayNames } from '../ScheduleModule/const'
import { useAuth } from '@/components/contexts/AuthContext'
import { IconPlus } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'

export const DetailClientsModule: React.FC<DetailClientModule> = ({
  bookingId,
}) => {
  const [booking, setBooking] = useState<Booking>()
  const [opened, { open, close }] = useDisclosure(false)
  const { user } = useAuth()

  const { refetch: getBooking } = useQuery(GET_CLIENT_DETAIL, {
    variables: {
      adminGetBooking: {
        id: parseInt(bookingId),
      },
    },
    onCompleted(data) {
      console.log(data.adminGetBooking)
      if (data.adminGetBooking != null)
        setBooking({
          bookingDay: data.adminGetBooking.bookingDay as string,
          bookingTime: data.adminGetBooking.bookingTime as string,
          bookingTime2: data.adminGetBooking.bookingTime2 as string,
          counselorType: data.adminGetBooking.counselorType as string,
          isSuicidal: data.adminGetBooking.isSuicidal as boolean,
          number_1: data.adminGetBooking.number_1 as number,
          number_2: data.adminGetBooking.number_2 as number,
          number_3: data.adminGetBooking.number_3 as number,
          number_4: data.adminGetBooking.number_4 as number,
          number_5: data.adminGetBooking.number_5 as number,
          number_6: data.adminGetBooking.number_6 as number,
          number_7: data.adminGetBooking.number_7 as number,
          number_8: data.adminGetBooking.number_8 as number,
          number_9: data.adminGetBooking.number_9 as number,
          number_10: data.adminGetBooking.number_10 as number,
          number_11: data.adminGetBooking.number_11 as number,
          number_12: data.adminGetBooking.number_12 as number,
          reasonApply: data.adminGetBooking.reasonApply as string,
          councelor: {
            user: {
              fullname: data.adminGetBooking.councelor?.user
                ?.fullname as string,
              username: data.adminGetBooking.councelor?.user
                ?.username as string,
            },
          },
          user: {
            fullname: data.adminGetBooking.user?.fullname as string,
            username: data.adminGetBooking.user?.username as string,
            igAcc: data.adminGetBooking.user?.igAcc as string,
            lineAcc: data.adminGetBooking.user?.lineAcc as string,
            account: {
              faculty: data.adminGetBooking.user?.account.faculty as string,
              major: data.adminGetBooking.user?.account.major as string,
              channel: data.adminGetBooking.user?.account.channel as string,
              gender: data.adminGetBooking.user?.account.gender as string,
            },
          },
          CounselingLog: data.adminGetBooking.CounselingLog as CounselingLog[],
        })
    },
  })

  const formatter = Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
    timeStyle: 'long',
    timeZone: 'Asia/Jakarta',
  })

  return (
    <>
      {booking != null ? (
        <>
        <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size="50%"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <p className=" text-2xl font-semibold text-center">
                  Tambah Log Konseling
                </p>
              </div>
              <div className="flex gap-4">
                
              </div>
              <div className="flex justify-evenly">
                <button
                  className="text-black bg-white border-1 p-2 drop-shadow-md border items-center rounded-lg w-1/3"
                  onClick={close}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <p>Oke, Mengerti</p>
                  </div>
                </button>
                <button
                  className="text-white bg-[#7F56D9] border-1 p-2 drop-shadow-md border-[#667085] items-center rounded-lg w-1/3"
                  onClick={close}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <p>Tambah Log</p>
                  </div>
                </button>

              </div>
            </div>
          </Modal>
          <section className="">
            <article className="">
              <h1 className="py-4 text-2xl font-semibold">Data Diri Klien</h1>
              <aside className="grid grid-cols-1 text-gray-700 sm:grid-cols-2 md:grid-cols-3">
                <ul className="flex flex-col gap-3 list-none">
                  <li>Konselor: {booking.councelor.user.fullname}</li>
                  <li>Jenis Konselor: Konselor {booking.counselorType}</li>
                  <li>Jenis Kelamin: {booking.user.account.gender}</li>
                </ul>
                <ul className="flex flex-col gap-3 list-none">
                  <li>Fakultas: {booking.user.account.faculty}</li>
                  <li>Jenjang dan Prodi: {booking.user.account.major}</li>
                </ul>
                <ul className="list-none">
                  <li>Kanal Curhat: {booking.user.account.channel}</li>
                  <li>
                    <div className="p-3 bg-red-100 border-2 border-gray-100 rounded-md">
                      <h2 className="font-medium">
                        {booking.user.account.channel}
                      </h2>
                      <p className="my-2 text-gray-700">
                        Jadwal Konseling: {booking.bookingDay},{' '}
                        {booking.bookingTime} -- {booking.bookingTime2} WIB
                      </p>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-2 text-white bg-red-500 rounded"
                      >
                        {booking.user.account.channel} :{' '}
                        {booking.user.account.channel == 'LINE'
                          ? booking.user.lineAcc
                          : booking.user.igAcc}
                      </a>
                    </div>
                  </li>
                </ul>
              </aside>
            </article>
          </section>
          <section className="">
            <aside className="flex items-center gap-2 mb-3">
              <div className='flex w-full gap-4'>
                <h1 className="text-3xl font-semibold">Log Konseling</h1>
                {user.role == "PSYHOPE_COUNSELOR" || user.role == "FACULTY_COUNSELOR" ? 
                <div className='flex items-center bg-[#7F56D9] p-2 text-white rounded-lg'>
                  <button onClick={open} className='flex gap-2 items-center'>Tambah Log <IconPlus></IconPlus></button>
                </div> 
                : 
                <></>}
              </div>
            </aside>
            <ClientTable
              title=""
              description=""
              headerTitle={['Tanggal Konseling', 'Notes']}
              rowComponent={(val, index) => (
                <tr key={index}>
                  <td className="w-1/2">
                    <div>
                      <p className=" font-semibold">
                        {new Date(val.time.toString()).getUTCDate()}{' '}
                        {
                          monthNames[
                            new Date(val.time.toString()).getUTCMonth()
                          ]
                        }{' '}
                        {new Date(val.time.toString()).getUTCFullYear()}
                      </p>
                      <p className="">
                        {dayNames[new Date(val.time.toString()).getDay()]},{' '}
                        {new Date(val.time.toString()).getUTCHours()}:
                        {new Date(val.time.toString()).getUTCMinutes()}{' '}
                      </p>
                    </div>
                  </td>
                  <td className="flex items-center justify-between w-1/2">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">{val.title}</p>
                      <p>{val.detail}</p>
                    </div>
                    <button>
                      <BsThreeDotsVertical />
                    </button>
                  </td>
                </tr>
              )}
              // headerComponent={}
              data={booking.CounselingLog}
            />
          </section>
          <section className="">
            <h1 className="text-3xl font-semibold">Analisis GHQ</h1>
            <p className="my-3 opacity-70">
              The GHQ-12 measure has standardized instructions as well as
              scoring interpretations for the clinician to follow and is
              administered as a self-report in which the subject is asked to
              consider 12 questions and how they relate to his or her personal
              life over the past few weeks. Total scores range from 0 to 36 with
              a score of 11 or 12 considered typical, scores &gt; 15 suggesting
              evidence of distress, and scores &gt; 20 are considered severe
              problems with psychological distress.
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
        </>
      ) : (
        <></>
      )}
    </>
  )
}
