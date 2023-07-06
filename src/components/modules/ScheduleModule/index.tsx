'use client'
import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import { BannerSection, ScheduleSection } from './section'
import { dayNames } from './const'

export const ScheduleModule: React.FC = () => {
  const router = useRouter()

  const handlerBack = () => {
    router.push('/dashboard')
  }

  return (
    <div>
      <div className="px-8 lg:px-24 py-10 flex flex-col gap-5">
        {/* Section Banner */}
        <BannerSection></BannerSection>
        {/* Section Schedule */}
        <ScheduleSection></ScheduleSection>
      </div>
    </div>
  )
}
