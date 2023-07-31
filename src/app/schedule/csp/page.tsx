'use client'
import React from 'react'
import { ScheduleModule } from '@modules'
import withAuth from '@/components/hoc/withAuth'

const CSP_Schedule = () => {
  return (
    <main className="min-h-screen md:pt-5">
      <ScheduleModule></ScheduleModule>
    </main>
  )
}

export default withAuth(CSP_Schedule)
