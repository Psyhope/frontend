'use client'
import React from 'react'
import { ScheduleModule } from '@modules'
import withAuth from '@/components/hoc/withAuth'

const Psyhope_Reschedule = () => {
  return (
    <main className="min-h-screen md:pt-5">
      <ScheduleModule></ScheduleModule>
    </main>
  )
}

export default withAuth(Psyhope_Reschedule)
