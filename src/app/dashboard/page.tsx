'use client'
import React from 'react'
import { DashboardModule } from '@modules'
import withAuth from '@/components/hoc/withAuth'

const DashboardPage = () => {
  return (
    <>
      <head>
        <title>Dashboard | Empower U&I</title>
      </head>
      <main className="min-h-screen md:pt-5">
        <DashboardModule></DashboardModule>
      </main>
    </>
  )
}

export default withAuth(DashboardPage)
