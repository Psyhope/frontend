'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { DateSegment, DateSegmentDummy, dayNames } from '../../const'
import { Select, SegmentedControl } from '@mantine/core'
import { BsCalendar2Range } from 'react-icons/bs'
import { useMediaQuery } from '@mantine/hooks'
import {
  BookingTime,
  RawJadwal,
  pilihanJadwal,
  valueDateSchedule,
} from './interface'
import { useQuery, useMutation } from '@apollo/client'
import { GET_BOOKING_DAY, GET_SCHEDULE_BY_TIME } from '@/actions/booking'
import { CounselorType } from '@/__generated__/graphql'

export const ScheduleSection: React.FC = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [value, setValue] = useState<string | null>(null)
  const [valueTime, setValueTime] = useState<string | null>(null)
  const [reason, setReason] = useState('')
  const [closest, setClosest] = useState<boolean | null>(null)
  const matches = useMediaQuery('(min-width: 75em)')
  const [pilihanJadwal, setPilihanJadwal] =
    useState<pilihanJadwal[]>(DateSegment)

  const [pilihanJadwal2, setPilihanJadwal2] = useState<pilihanJadwal[]>([])

  const [rawData, setRawData] = useState<Array<RawJadwal> | null>()

  const [tempJadwal, setTemp] = useState<RawJadwal[] | null>()
  const [tempBooking, setBooking] = useState<BookingTime[] | null>()

  const handleClosest = () => {
    setClosest(!closest)
  }

  const handleJadwal = (data: RawJadwal[]) => {
    setTemp(data)
  }

  const handleBooking = (data: BookingTime[]) => {
    setBooking(data)
  }

  const handleGetJadwal = () => {
    getAllRefetch()
  }

  const handleGetBooking = () => {
    getAllBooking()
  }

  const { refetch: getAllRefetch } = useQuery(GET_SCHEDULE_BY_TIME, {
    variables: {
      getScheduleDto: {
        counselorType: CounselorType.Psyhope,
        day: value,
        dayTime: '08:00',
        dayTime2: '09:00',
      },
    },
    onCompleted(data) {
      if (data.schedule != null) handleJadwal(data.schedule)
    },
  })

  const { refetch: getAllBooking } = useQuery(GET_BOOKING_DAY, {
    variables: {
      getBookingFilter: {
        day: value,
      },
    },
    onCompleted(data) {
      if (data.bookingFilter != null) handleBooking(data.bookingFilter)
    },
  })

  const handlerNext = () => {
    localStorage.setItem('date', value as string)
    localStorage.setItem('time', valueTime as string)
    localStorage.setItem('reason', reason)
    localStorage.setItem('closest', `${closest}`)

    pathname.slice(10) == 'psyhope'
      ? router.push('/ghq/psyhope')
      : router.push('/ghq/csp')
  }

  const pilihJadwal = () => {
    const dateNow = new Date()
    const arrayDate: valueDateSchedule[] = []
    let counter = 0
    while (dateNow.getDay() <= 6) {
      arrayDate.push({
        label: dayNames[dateNow.getDay()],
        value: `${dateNow.getFullYear()}-${
          dateNow.getMonth() + 1
        }-${dateNow.getDate()}`,
      })
      dateNow.setDate(dateNow.getDate() + 1)

      counter += 1
      if (counter >= 7) break
    }

    return arrayDate
  }

  return (
    <div className="flex flex-col gap-4">
      <Select
        onChange={(e) => {
          setValue(e)
          handleGetJadwal()
        }}
        placeholder="Pilih Hari Konseling"
        transitionProps={{
          transition: 'pop-top-left',
          duration: 80,
          timingFunction: 'ease',
        }}
        data={pilihJadwal()}
        icon={<BsCalendar2Range size="1rem" />}
      />
      <button
        onClick={() => {
          console.log(tempJadwal)
          console.log(tempBooking)
        }}
      >
        KLIK
      </button>
      <SegmentedControl
        onChange={setValueTime}
        data={pilihanJadwal2}
        color="violet"
        radius="lg"
        fullWidth={!matches}
        size={matches ? 'lg' : 'xl'}
        orientation={matches ? 'horizontal' : 'vertical'}
        transitionDuration={200}
        transitionTimingFunction="linear"
      ></SegmentedControl>

      {value !== null && valueTime !== null ? (
        <div className="flex flex-col gap-3">
          <div>
            <p className=" font-semibold">
              Silakan ceritakan secara singkat alasan Anda mendaftarkan diri ke
              layanan konseling sebaya Psyhope UI 2023
            </p>
            <span className="text-[#667080] text-sm">
              Jangan khawatir! Kami akan menjaga kerahasiaan jawaban Anda.
            </span>
          </div>
          <input
            value={reason}
            onChange={(e) => {
              setReason(e.target.value)
            }}
            className="outline outline-2 rounded-md outline-[#CBD2E0] p-2"
            type="text"
          />
          <div className="flex gap-2">
            <input name="close" type="radio" onChange={handleClosest}></input>
            <span>Ya</span>
          </div>
          <div className="flex gap-2">
            <input name="close" type="radio" onChange={handleClosest}></input>
            <span>Tidak</span>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="flex lg:justify-end justify-center">
        <button
          disabled={value == null && valueTime == null}
          className={`p-4 w-fit font-semibold rounded-lg ${
            value != null && valueTime != null
              ? `text-[#3538CD] bg-gradient-to-bl from-[#F6CCDF] to-[#E0B3EB]`
              : `text-white bg-[#98A2B3]`
          }`}
          onClick={handlerNext}
        >
          Pilih Jadwal
        </button>
      </div>
    </div>
  )
}
