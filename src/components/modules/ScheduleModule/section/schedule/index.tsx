'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { DateSegment, DateSegmentDummy, dayNames } from '../../const'
import { Select, SegmentedControl } from '@mantine/core'
import { BsCalendar2Range } from 'react-icons/bs'
import { useMediaQuery } from '@mantine/hooks'
import { pilihanJadwal, valueDateSchedule } from './interface'

export const ScheduleSection: React.FC = () => {
  const [value, setValue] = useState<string | null>(null)
  const [valueTime, setValueTime] = useState<string | null>(null)
  const matches = useMediaQuery('(min-width: 75em)')

  const [pilihanJadwal, setPilihanJadwal] =
    useState<pilihanJadwal[]>(DateSegment)

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
    </div>
  )
}
