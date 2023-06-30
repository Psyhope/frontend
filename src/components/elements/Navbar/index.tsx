'use client'

import { Event, Home, Konseling, Psyhope } from '@icons'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false)

  const pathname = usePathname()

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    )
  }, [])

  return (
    <div
      className={`bg-[#FEFEF2] h-[84px] w-full drop-shadow-sm shadow-sm flex items-center justify-between px-10 sticky top-0 transition-all duration-1000 z-50 ${
        scroll ? 'md:top-1 md:scale-[0.99] lg:top-2' : 'top-0 scale-100'
      } ${pathname == '/login' && 'hidden'}`}
    >
      <div>
        <Psyhope />
      </div>
      <div className="items-center hidden gap-5 md:flex">
        <button
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Home />
          Home
        </button>
        <button
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/123'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Event />
          Event
        </button>
        <button
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/ghq' || pathname == '/schedule'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Konseling />
          Konseling
        </button>
        <button
          className="flex font-inter font-semibold px-4 bg-[#0086C9] text-white py-2 rounded-md shadow-md active:shadow-none"
          onClick={() => router.push('/login')}
        >
          Login
        </button>
      </div>
    </div>
  )
}
