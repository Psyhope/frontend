'use client'
import { useAuth } from '@/components/contexts/AuthContext'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { HiArrowLeft } from 'react-icons/hi'

const ClientsLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  return (
    <main className="flex flex-col min-h-screen gap-5 p-5 sm:gap-10 md:px-10 lg:px-20">
      <section>
        <Link
          href = {user.role == "PSYHOPE_ADMIN" || user.role == "FACULTY_ADMIN" ? '/admin' : '/counselor'} 
          className="flex items-center gap-2 p-3 mt-5 font-semibold rounded-lg bg-primary-50 text-primary-500 w-max"
        >
          <HiArrowLeft /> Kembali
        </Link>
      </section>
      {children}
    </main>
  )
}

export default ClientsLayout
