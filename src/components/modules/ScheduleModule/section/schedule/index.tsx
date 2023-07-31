'use client'
import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import {
  DateSegment,
  DateSegmentDummy,
  dayNames,
  querySchedule,
  queryScheduleInterface,
} from '../../const'
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
import {
  GET_BOOKING_DAY,
  GET_SCHEDULE_BY_TIME,
  RESCHEDULE_BOOKING,
} from '@/actions/booking'
import { CounselorType } from '@/__generated__/graphql'
import { useAuth } from '@/components/contexts/AuthContext'

export const ScheduleSection: React.FC = () => {
  const pathname = usePathname()
  const { user, accessToken } = useAuth()
  const router = useRouter()
  const [value, setValue] = useState<string | null>(null)
  const [valueTime, setValueTime] = useState<string | null>(null)
  const [reason, setReason] = useState('')
  const [closest, setClosest] = useState<boolean | null>(null)
  const matches = useMediaQuery('(min-width: 75em)')
  const [topic, setTopic] = useState<string[]>([])

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTopic([...topic, e.target.value])
    } else {
      setTopic(topic.filter((item) => item !== e.target.value))
    }
  }

  const [pilihanJadwal2, setPilihanJadwal2] = useState<pilihanJadwal[]>([])

  const [tempJadwal, setTemp] = useState<RawJadwal[] | null>()
  const [tempBooking, setBooking] = useState<BookingTime[] | null>()

  const handleClosest = () => {
    setClosest(!closest)
  }

  const handleJadwal = (data: RawJadwal[]) => {
    setTemp(data)
  }

  const getPath = () => {
    if (pathname.slice(1, 9) == 'schedule') return true
    else return false
  }

  const handleBooking = (data: BookingTime[]) => {
    setBooking(data)
  }

  const handleGetJadwal = () => {
    getAllRefetch()
    getAllBooking()
  }

  useEffect(() => {
    handleGetJadwal()
  }, [value])

  useEffect(() => {
    const tempBookingArray: String[] = []
    const tempBookingJadwal: String[] = []
    const jadwalFix: pilihanJadwal[] = []

    tempBooking?.forEach((data) => {
      tempBookingArray.push(data.bookingTime)
    })

    tempJadwal?.forEach((data) => {
      data.workTime.forEach((jdwl) => {
        tempBookingJadwal.push(jdwl)
      })
    })

    const test: queryScheduleInterface[] = querySchedule
    test.forEach((data) => {
      const data1 = tempBookingArray.filter((n) => n === data.dayTime).length
      const data2 = tempBookingJadwal.filter((n) => n === data.dayTime).length
      jadwalFix.push({
        disabled: data2 - data1 < 1 ? true : false,
        value: `${data.dayTime} -- ${data.dayTime2}`,
        label: `${data.dayTime} -- ${data.dayTime2}`,
      })

      setPilihanJadwal2(jadwalFix)
    })
  }, [tempJadwal, tempBooking])

  const { refetch: getAllRefetch } = useQuery(GET_SCHEDULE_BY_TIME, {
    variables: {
      getScheduleDto: {
        counselorType:
          pathname.slice(10) == 'psyhope' || pathname.slice(12) == 'psyhope'
            ? CounselorType.Psyhope
            : CounselorType.Faculty,
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
      getBookingFilterGeneral: {
        day: value,
        counselorType:
          pathname.slice(10) == 'psyhope'
            ? CounselorType.Psyhope
            : CounselorType.Faculty,
      },
    },
    onCompleted(data) {
      if (data.bookingFilterGeneral != null)
        handleBooking(data.bookingFilterGeneral)
    },
  })

  const [mutate, {}] = useMutation(RESCHEDULE_BOOKING)

  const handlerNext = () => {
    if (getPath()) {
      localStorage.setItem('date', value as string)
      localStorage.setItem('time', valueTime as string)
      localStorage.setItem('reason', reason)
      localStorage.setItem('closest', `${closest}`)
      localStorage.setItem('topic', topic.toString())

      pathname.slice(10) == 'psyhope'
        ? router.push('/ghq/psyhope')
        : router.push('/ghq/csp')
    } else {
      mutate({
        variables: {
          rescheduleBookingInput: {
            bookingDate: value,
            bookingTime: valueTime?.split(' -- ')[0] as string,
            bookingTime2: valueTime?.split(' -- ')[1] as string,
            id: parseInt(localStorage.getItem('idBooking') as string),
          },
        },
        onCompleted(data) {
          router.push('/dashboard')
        },
      })
    }
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
          setValueTime(null)
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

      {value !== null && valueTime !== null && getPath() ? (
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

          <div>
            <div>
              <input
                type="checkbox"
                value="TOPIC_1"
                onChange={handleCheck}
              ></input>
              123
            </div>
            <div>
              <input
                type="checkbox"
                value="TOPIC_2"
                onChange={handleCheck}
              ></input>
              123
            </div>
            <div>
              <input
                type="checkbox"
                value="TOPIC_3"
                onChange={handleCheck}
              ></input>
              123
            </div>
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
