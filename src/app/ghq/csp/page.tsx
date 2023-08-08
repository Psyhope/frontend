'use client'
import React from 'react'
import { DashboardModule } from '@modules'
import { GHQModule } from '@modules'
import withAuth from '@/components/hoc/withAuth'

const CSP_GHQPage = () => {
  return (
    <>
      <head>
        <title>GHQ | Empower U&I</title>
      </head>
      <main className="min-h-screen md:pt-5">
        <GHQModule></GHQModule>
      </main>
    </>
  )
}

export default withAuth(CSP_GHQPage)
