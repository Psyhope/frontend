;`use client`
import React, { useState } from 'react'
import ClientTable from '@/components/elements/ClientTable'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useQuery, useMutation } from '@apollo/client'
import { GET_CLIENT_DETAIL } from '@/actions/booking'
import { Modal } from '@mantine/core'
import { Booking, CounselingLog, DetailClientModule } from './interface'
import { monthNames } from './const'
import { dayNames } from '../ScheduleModule/const'
import { useAuth } from '@/components/contexts/AuthContext'
import { IconPlus } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { DateValue } from '@mantine/dates'
import { HiOutlineCalendar } from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi'
import { TextInput, Textarea } from '@mantine/core'
import { CREATE_LOG } from '@/actions/counselingLog'
import { DateTimePicker } from '@mantine/dates'

export const DetailClientsModule: React.FC<DetailClientModule> = ({
  bookingId,
}) => {
  const [booking, setBooking] = useState<Booking>()
  const [opened, { open, close }] = useDisclosure(false)
  const { user } = useAuth()
  const [date, setDate] = useState(new Date(new Date().toISOString()))
  const [title, setTitle] = useState('')
  const [desc, setDesct] = useState('')
  const [dateVal, setDateVal] = useState<DateValue>(new Date())
  const [totalVal, setTotal] = useState(0)

  const [mutate, {}] = useMutation(CREATE_LOG)

  const { refetch: getBooking } = useQuery(GET_CLIENT_DETAIL, {
    variables: {
      adminGetBooking: {
        id: parseInt(bookingId),
      },
    },
    onCompleted(data) {
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
            size="lg"
            sx={{
              height: 100,
            }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-center">
                <p className=" text-2xl font-semibold">Tambah Log Konseling</p>
                <p>Silakan tambah log konseling dengan mengisi data berikut.</p>
              </div>
              <div>
                <div className="bg-[#FFFAEB] p-2 rounded-lg border">
                  <p>
                    {booking.user.account.channel} :{' '}
                    {booking.user.account.channel == 'LINE'
                      ? booking.user.lineAcc
                      : booking.user.igAcc}
                  </p>
                  <p>
                    Jadwal Konseling: {booking.bookingDay},{' '}
                    {booking.bookingTime} WIB
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <DateTimePicker
                  label="Pick date and time"
                  placeholder="Pick date and time"
                  defaultValue={dateVal}
                  className="w-full"
                  icon={<HiOutlineCalendar />}
                  rightSection={<HiChevronDown />}
                  mx="auto"
                  onChange={(e) => {
                    setDateVal(e)
                  }}
                />
                <TextInput
                  label="Judul"
                  size="md"
                  placeholder="e.g. Website design"
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                />
                <Textarea
                  placeholder="Enter a description..."
                  label="Detail Konseling"
                  size="md"
                  withAsterisk
                  onChange={(e) => {
                    setDesct(e.target.value)
                  }}
                />
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
                  onClick={() => {
                    mutate({
                      variables: {
                        createCounselingLogInput: {
                          bookingId: parseInt(bookingId),
                          detail: desc,
                          title,
                          time: dateVal?.toISOString(),
                        },
                      },
                      onCompleted(data, clientOptions) {
                        close()
                        setDateVal(new Date())
                        getBooking()
                      },
                    })
                  }}
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
              <div className="flex w-full gap-4">
                <h1 className="text-3xl font-semibold">Log Konseling</h1>
                {user.role == 'PSYHOPE_COUNSELOR' ||
                user.role == 'FACULTY_COUNSELOR' ? (
                  <div className="flex items-center bg-[#7F56D9] p-2 text-white rounded-lg">
                    <button onClick={open} className="flex gap-2 items-center">
                      Tambah Log <IconPlus></IconPlus>
                    </button>
                  </div>
                ) : (
                  <></>
                )}
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
                  <td className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold">{val.title}</p>
                      <p>{val.detail}</p>
                    </div>
                  </td>
                </tr>
              )}
              // headerComponent={}
              data={booking.CounselingLog}
            />
          </section>
          <section className="">
            <h1 className="text-3xl font-semibold">Analisis GHQ</h1>
            <p className="my-3 opacity-70 text-justify">
            Alat ukur GHQ-12 digunakan sebagai instrumen skrining kesehatan mental dalam konseling sebaya. Melalui skrining kesehatan mental, konselor dapat memperoleh gambaran permasalahan psikologis yang dialami klien. Klien dinyatakan memiliki indikasi gangguan psikologis tertentu apabila memiliki skor GHQ-12 sama atau lebih besar dari titik potong. Selain itu, konselor juga dapat memeriksa respons per item GHQ-12 untuk mengidentifikasi gejala yang paling menjadi permasalahan klien.
            </p>

            <div className="my-3 opacity-70 flex flex-col bg-yellow-100 w-fit rounded-lg p-3">
              <p className='text-justify'>Titik potong untuk distres psikologis menggunakan skala likerts adalah sebagai berikut</p>
              <span>•Skor 0-12</span>
              <span className='px-3'>  Kategori: Rendah</span>
              <span>•Skor 13-24</span>
              <span className='px-3'>  Kategori: Sedang</span>
              <span>•Skor 25-36</span>
              <span className='px-3'>  Kategori: Tinggi</span>
            </div>
            <ul className="grid grid-cols-1 gap-5 mt-5 list-none sm:grid-cols-2 md:grid-cols-3">
              <li>
                <h4 className="px-3">
                  Nilai:{' '}
                  {booking.number_1 +
                    booking.number_2 +
                    booking.number_3 +
                    booking.number_4 +
                    booking.number_5 +
                    booking.number_6 +
                    booking.number_7 +
                    booking.number_8 +
                    booking.number_9 +
                    booking.number_10 +
                    booking.number_11 +
                    booking.number_12}
                </h4>
                <div className="px-4 py-2 text-center text-white rounded-full bg-primary-500 w-max">
                  <h3>
                    {booking.number_1 +
                      booking.number_2 +
                      booking.number_3 +
                      booking.number_4 +
                      booking.number_5 +
                      booking.number_6 +
                      booking.number_7 +
                      booking.number_8 +
                      booking.number_9 +
                      booking.number_10 +
                      booking.number_11 +
                      booking.number_12 >
                    12
                      ? booking.number_1 +
                          booking.number_2 +
                          booking.number_3 +
                          booking.number_4 +
                          booking.number_5 +
                          booking.number_6 +
                          booking.number_7 +
                          booking.number_8 +
                          booking.number_9 +
                          booking.number_10 +
                          booking.number_11 +
                          booking.number_12 >
                        24
                        ? 'Tingkat Distres Tinggi'
                        : 'Tingkat Distres Menengah'
                      : 'Tingkat Distres Rendah'}
                  </h3>
                </div>
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
