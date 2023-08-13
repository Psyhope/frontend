'use client'
import React from 'react'

import { useRouter } from 'next/navigation'
import { BannerSection, ScheduleSection } from './section'

export const ScheduleModule: React.FC = () => {
  const router = useRouter()

  const handlerBack = () => {
    router.push('/dashboard')
  }

  return (
    <div>
      <div className="px-8 lg:px-24 py-5 flex flex-col gap-5">
        {/* Section Banner */}
        <BannerSection></BannerSection>
        {/* Section Schedule */}
        <ScheduleSection></ScheduleSection>
      </div>
    </div>
  )
}
