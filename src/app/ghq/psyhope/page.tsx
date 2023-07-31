'use client'
import React from 'react'
import { GHQModule } from '@modules'
import withAuth from '@/components/hoc/withAuth'

const Psyhope_GHQPage = () => {
  return (
    <main className="min-h-screen md:pt-5">
      <GHQModule></GHQModule>
    </main>
  )
}

export default withAuth(Psyhope_GHQPage)
