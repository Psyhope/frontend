import Link from 'next/link'
import React, { ReactNode } from 'react'
import { HiArrowLeft } from 'react-icons/hi'

const ClientsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen p-5 md:px-10">
      <section>
        <Link
          href="/"
          className="flex items-center gap-2 p-3 font-semibold rounded-lg bg-primary-50 text-primary-500 w-max"
        >
          <HiArrowLeft /> Kembali
        </Link>
      </section>
      {children}
    </main>
  )
}

export default ClientsLayout
