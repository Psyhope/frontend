'use client'
import React from 'react'
import { GHQModule } from '@modules'
import withAuth from '@/components/hoc/withAuth'

const Psyhope_GHQPage = () => {
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

export default withAuth(Psyhope_GHQPage)
