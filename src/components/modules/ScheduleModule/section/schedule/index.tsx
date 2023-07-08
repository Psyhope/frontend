'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { DateSegment, DateSegmentDummy, dayNames } from '../../const'
import { Select, SegmentedControl } from '@mantine/core'
import { BsCalendar2Range } from 'react-icons/bs'
import { useMediaQuery } from '@mantine/hooks'
import { pilihanJadwal, valueDateSchedule } from './interface'

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

  const handleClosest = () => {
    setClosest(!closest)
  }
  
  const handlerNext = () => {
    pathname.slice(10) == 'psyhope'
    ? router.push('/ghq/psyhope')
    : router.push('/ghq/csp')
  }
  

  const pilihJadwal = () => {
    const dateNow = new Date()
    const arrayDate: valueDateSchedule[] = []
    while (dateNow.getDay() <= 6) {
      arrayDate.push({
        label: dayNames[dateNow.getDay()],
        value: `${dateNow.getDate()}/${dateNow.getMonth()}/${dateNow.getFullYear()}`,
      })
      dateNow.setDate(dateNow.getDate() + 1)

      if (dateNow.getDay() === 1 && arrayDate.length !== 0) break
    }

    return arrayDate
  }

  return (
    <div className="flex flex-col gap-4">
      <Select
        onChange={(e) => {
          setValue(e)
          setPilihanJadwal(DateSegmentDummy)
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
        data={pilihanJadwal}
        color="violet"
        radius="lg"
        fullWidth={!matches}
        size={matches ? 'lg' : 'xl'}
        orientation={matches ? 'horizontal' : 'vertical'}
        transitionDuration={200}
        transitionTimingFunction="linear"
      ></SegmentedControl>

      {
        (value !== null && valueTime !== null) ? 
        (
          <div className='flex flex-col gap-3'>
            <div>
              <p className=' font-semibold'>
                Silakan ceritakan secara singkat alasan Anda mendaftarkan diri ke layanan konseling sebaya Psyhope UI 2023
              </p>
              <span className='text-[#667080] text-sm'>
                Jangan khawatir! Kami akan menjaga kerahasiaan jawaban Anda.
              </span>
            </div>
            <input value={reason} onChange={(e) => {setReason(e.target.value)}} className='outline outline-2 rounded-md outline-[#CBD2E0] p-2' type='text'/>
            <div className='flex gap-2'>
              <input name='close' type='radio' onChange={handleClosest}></input>
              <span>Ya</span>
            </div>
            <div className='flex gap-2'>
              <input name='close' type='radio' onChange={handleClosest}></input>
              <span>Tidak</span>
            </div>
          </div>
        )
        :
        (<></>)
      }
      <div className='flex lg:justify-end justify-center'>
        <button
        disabled={value== null && valueTime==null}
        className={`p-4 w-fit font-semibold rounded-lg ${(value != null && valueTime !=null) ? `text-[#3538CD] bg-gradient-to-bl from-[#F6CCDF] to-[#E0B3EB]` : `text-white bg-[#98A2B3]`}`}
        onClick={handlerNext}>
          Pilih Jadwal
        </button>
      </div>
    </div>
  )
}
