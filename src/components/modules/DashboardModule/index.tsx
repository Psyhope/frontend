'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DashboardModal } from './const'
import { BookingClient, DashboardModalWord } from './interface'
import { useQuery } from '@apollo/client'
import { GET_BOOKING_CLIENT } from '@/actions/booking'
import { usePathname, useRouter } from 'next/navigation'

export const DashboardModule: React.FC = () => {

  const router = useRouter()
  const pathname = usePathname()
  const hanldleReschedule = () => {
    if (booking != null) localStorage.setItem('idBooking', booking?.id as unknown as string)
    if(booking?.counselorType == "PSYHOPE") router.push('/reschedule/psyhope')
    else if (booking?.counselorType == "CSP") router.push('/reschedule/csp')
  }

  const DashboardWording: DashboardModalWord[] = DashboardModal
  const [opened, { open, close }] = useDisclosure(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [booking, setBooking] = useState<BookingClient | null>(null)
  const { refetch: getBookingClient } = useQuery(GET_BOOKING_CLIENT, {
    onCompleted(data) {
      if (data != null) {
        setLoading(true)
        setBooking({
          id: data.bookingClient?.id as number,
          bookingDate: data.bookingClient?.bookingDate as Date,
          bookingId: data.bookingClient?.id as number,
          isAccepted: data.bookingClient?.isAccepted as boolean,
          isTerminated: data.bookingClient?.isTerminated as boolean,
          adminAcc: data.bookingClient?.adminAcc as boolean,
          bookingTime: data.bookingClient?.bookingTime as string,
          bookingTime2: data.bookingClient?.bookingTime2 as string,
          bookingDay: data.bookingClient?.bookingDay as string,
          counselorType: data.bookingClient?.counselorType as string,
          councelor: {
            userId: data.bookingClient?.councelor?.userId as string,
            user: {
              fullname: data.bookingClient?.councelor?.user?.fullname as string,
            },
          },
        })
      }
    },
  })
  return (
    <div className=''>
      <div className="px-10 py-4 flex flex-col gap-4">
        <div className="bg-white">
          <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size="50%"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <Image
                  src="assets/DashboardModal.svg"
                  alt="OnBoard Hero Assets"
                  width="150"
                  height="150"
                  className="z-0 "
                />
              </div>
              <div className="flex justify-center">
                <p className=" text-2xl font-semibold text-center">
                  Psyhope dan Peer Counselor, Apa Bedanya?
                </p>
              </div>
              <div className="flex gap-4">
                {DashboardWording.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="bg-[#6941C6] p-4 flex flex-col gap-2 rounded-xl"
                  >
                    <div className="bg-white p-2 rounded-lg">
                      <p className="text-[#6941C6] text-lg font-semibold drop-shadow-lg">
                        {title}
                      </p>
                    </div>
                    <p className="text-white text-sm">{desc}</p>
                  </div>
                ))}
              </div>
              <div className=" flex justify-center">
                <Button
                  className="text-[#667085] bg-white border-1 drop-shadow-md border-[#667085] items-center rounded w-full"
                  onClick={close}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <p>Oke, Mengerti</p>
                  </div>
                </Button>
              </div>
            </div>
          </Modal>
        </div>
        <div className="lg:h-[330px] h-full w-full bg-[#D9D6FE] rounded-3xl flex flex-col lg:flex-row lg:p-5 lg:px-10">
          <div className="lg:w-3/5 w-full h-full justify-center flex flex-col md:p-10 gap-4">
            <div className="flex justify-center lg:flex-none lg:justify-start p-2 lg:p-0">
              <Image
                src="assets/DashboardHeartBanner.svg"
                alt="OnBoard Hero Assets"
                width="100"
                height="80"
                className="z-0 "
              />
            </div>
            <div className="flex justify-center lg:flex-none lg:justify-start">
              <p className="text-[#42307D] font-inter font-bold lg:text-4xl md:text-2xl text-xl drop-shadow-md">
                Halo, Client Naput!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 h-[200px] md:h-auto flex justify-between lg:flex-none lg:justify-end">
            <div className="w-[150px] lg:w-full h-[200px] lg:h-full relative flex justify-end mx-[-30px]">
              <Image
                src="assets/DashboardBanner.svg"
                alt="OnBoard Hero Assets"
                fill
                className="z-0"
              />
            </div>
            <div className="w-[150px] h-[200px] md:h-auto relative flex justify-end block lg:hidden">
              <Image
                src="assets/DashboardBanner.svg"
                alt="OnBoard Hero Assets"
                fill
                className="z-0"
              />
            </div>
          </div>
        </div>
        {loading ? (
          <div className='flex flex-col gap-4'>
            {booking?.bookingDate !== undefined ? (
              <div className='flex flex-col gap-4'>
                <div>
                  <p className=' font-semibold text-2xl'>Jadwal Konseling</p>
                </div>
                <div className='w-full md:w-1/3'>
                  <div className={`flex flex-col gap-3 w-full bg-gradient-to-l rounded-t-lg ${!booking.adminAcc && !booking.isAccepted && booking.isTerminated ? 'bg-[#FECDCA]' : 'from-[#7F56D9] from-5% via-[#F6CCDF] via-100% to-[#7F56D9] to-5%'} p-5 px-12`}>
                    <div className='flex flex-col gap-1'>

                      {!booking.adminAcc && !booking.isAccepted && booking.isTerminated ? 
                      <div className='bg-[#FFFAEB] rounded-2xl p-1 px-3'>
                        <span className='text-[#B42318] drop-shadow-lg font-semibold text-xl'>Jadwal konseling kamu tidak dapat diproses lebih lanjut :(</span>
                        <p className='text-black drop-shadow-lg font-medium text-xl'>
                          Apakah kamu mau memilih jadwal lainnya?
                        </p>
                      </div>
                      :
                      <div></div>}

                      {!booking.adminAcc && !booking.isAccepted && !booking.isTerminated ? 
                      <div className='flex flex-col justify-center'>
                        <span className='text-[#53389E] drop-shadow-lg font-semibold text-xl'>{booking.bookingDay}</span>
                        <p className='text-[#53389E] drop-shadow-lg font-medium text-xl'>
                          {booking.bookingTime} - {booking.bookingTime2}
                        </p>
                        <div className='bg-[#FFFAEB] rounded-2xl p-1 px-3 w-fit'>
                          <p className='text-[#B54708] font-medium text-lg'>
                            Menunggu Persetujuan
                          </p>
                        </div>
                      </div>
                      :
                      <div></div>}

                      {booking.adminAcc && booking.isAccepted ? 
                      <div className='bg-[#FFFAEB] rounded-2xl p-1 px-3'>
                        <span className='text-[#53389E] drop-shadow-lg font-semibold text-xl'>{booking.bookingDay}</span>
                        <p className='text-[#53389E] drop-shadow-lg font-medium text-xl'>
                          {booking.bookingTime} - {booking.bookingTime2}
                        </p>
                        <p className='text-[#B54708] font-medium text-lg'>
                          Counselor : {booking.councelor.user.fullname}
                        </p>
                      </div>
                      :
                      <div></div>}
                    </div>
                  </div> 
                    
                  <div className=' rounded-b-2xl p-4 bg-[#42307D]'>
                    <div>
                      <div className={`bg-[#7F56D9] ${booking.adminAcc && booking.isAccepted ? ' bg-slate-600 hover:cursor-not-allowed' : ''} rounded-lg p-2 flex justify-center hover:cursor-pointer`}
                      onClick={hanldleReschedule}>
                        <p className=' text-white font-semibold'>
                          Reschedule
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>GAADA ORANG</div>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex justify-center ">
            <div className="relative h-[300px] w-[300px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="assets/DashboardCalendar.svg"
                alt="OnBoard Hero Assets"
                fill
                className="z-0 relative"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="flex justify-center">
              Yah, kamu belum memiliki jadwal konseling
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <button className="w-1/4 border border-2 border-[#7F56D9] text-[#7F56D9] p-2 rounded-lg font-semibold text-lg">
              Daftar Konseling di Psyhope
            </button>
            <button className="w-1/4 text-white bg-[#7F56D9] p-2 rounded-lg text-lg">
              Daftar Konseling di CSP
            </button>
          </div>
          <button
            onClick={() => {
              console.log(booking)
            }}
          >
            klik
          </button>

          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="w-full">
                <Button
                  className="text-[#667085] bg-white border-1 drop-shadow-md border-[#667085] flex flex-col items-center rounded w-full"
                  onClick={open}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <div>
                      <Image
                        src="assets/DashboardQuestionMark.svg"
                        alt="OnBoard Question Modal"
                        width={20}
                        height={20}
                        className=""
                      />
                    </div>
                    <p className="lg:text-lg text-md">
                      Apa perbedaan Psyhope dan Peer Counselor?
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
