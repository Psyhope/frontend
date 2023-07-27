'use client'

import {
  Article,
  Event,
  Home,
  Infografic,
  Konseling,
  Psyhope,
  User,
} from '@icons'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu, rem } from '@mantine/core'
import { useAuth } from '@/components/contexts/AuthContext'
import { IconLogout2, IconUserCircle } from '@tabler/icons-react'

export const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false)

  const pathname = usePathname()

  const { user } = useAuth()

  console.log('pathname', pathname)
  useEffect(() => {
    window.addEventListener('scroll', () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    )
  }, [])

  const [opened, setOpened] = useState(false)

  return (
    <div
      className={`bg-[#FEFEF2] h-[84px] w-full drop-shadow-sm shadow-sm flex items-center justify-between px-10 sticky top-0 transition-all duration-1000 z-50 ${
        scroll ? 'md:top-1 md:scale-[0.99] lg:top-2' : 'top-0 scale-100'
      } ${pathname == '/login' && 'hidden'}`}
    >
      <div>
        <Psyhope />
      </div>
      <div className="items-center hidden gap-5 lg:flex">
        <Link
          href={'/'}
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Home />
          Home
        </Link>
        <Link
          href={'/event?page=1'}
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/event'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Event />
          Event
        </Link>
        <Link
          href={'/infographic?page=1'}
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/infographic'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Infografic />
          Infografik
        </Link>
        <Link
          href={'/article?page=1'}
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/article'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Article />
          Article
        </Link>
        <Link
          href={'/'}
          className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
            pathname == '/ghq' || pathname == '/schedule'
              ? 'border-[#026AA2] text-[#026AA2]'
              : 'border-transparent'
          } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
        >
          <Konseling />
          Konseling
        </Link>
        {user ? (
          <>
            <Menu opened={opened} onChange={setOpened}>
              <Menu.Target>
                <button
                  className={`flex font-inter font-semibold gap-2 border-b-2 hover:border-[#026AA2] ${
                    opened
                      ? 'border-[#026AA2] text-[#026AA2]'
                      : 'border-transparent'
                  } px-4 transition-all flex-none text-[#0BA5EC] hover:text-[#026AA2]`}
                >
                  <User />
                </button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item icon={<IconUserCircle size={rem(14)} />}>
                  Profile
                </Menu.Item>
                <Menu.Item icon={<IconLogout2 size={rem(14)} />}>
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>
        ) : (
          <Link
            href="/login"
            className="flex font-inter font-semibold px-4 bg-[#0086C9] text-white py-2 rounded-md shadow-md active:shadow-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}
