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
import { Drawer, Menu, rem } from '@mantine/core'
import { useAuth } from '@/components/contexts/AuthContext'
import {
  IconArrowsLeftRight,
  IconArticle,
  IconChartInfographic,
  IconClipboardHeart,
  IconLogout2,
  IconMenu2,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconSmartHome,
  IconSpeakerphone,
  IconTrash,
  IconUserCircle,
} from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'

export const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false)

  const pathname = usePathname()

  const { user, logout } = useAuth()

  console.log('pathname', pathname)
  useEffect(() => {
    window.addEventListener('scroll', () =>
      !window.scrollY ? setScroll(false) : setScroll(true)
    )
  }, [])

  const [opened, setOpened] = useState(false)

  const [openedMenu, setOpenedMenu] = useState(false)

  return (
    <div
      className={`bg-[#FEFEF2] h-[60px] md:h-[84px] w-full drop-shadow-sm shadow-sm flex items-center justify-between px-5 md:px-10 sticky top-0 transition-all duration-1000 z-50 ${
        scroll ? 'md:top-1 md:scale-[0.99] lg:top-2' : 'top-0 scale-100'
      } ${pathname == '/login' && 'hidden'}`}
    >
      <Link className="scale-75 md:scale-100" href={'/'}>
        <Psyhope />
      </Link>
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
                <Menu.Item
                  icon={<IconLogout2 size={rem(14)} />}
                  onClick={logout}
                >
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

      <Menu
        shadow="md"
        width={200}
        opened={openedMenu}
        onChange={setOpenedMenu}
      >
        <Menu.Target>
          <button
            className={`border transition-colors ${
              openedMenu
                ? 'border-[#026AA2] text-[#026AA2]'
                : 'border-[#0BA5EC] text-[#0BA5EC]'
            } p-2 rounded-md drop-shadow-md active:drop-shadow-none shadow-black lg:hidden`}
          >
            <IconMenu2 />
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Link href={'/'}>
            <Menu.Item icon={<IconSmartHome size={14} />}>Home</Menu.Item>
          </Link>
          <Link href={'/event?page=1'}>
            <Menu.Item icon={<IconSpeakerphone size={14} />}>Event</Menu.Item>
          </Link>
          <Link href={'/infographic?page=1'}>
            <Menu.Item icon={<IconChartInfographic size={14} />}>
              Infografik
            </Menu.Item>
          </Link>
          <Link href={'/article?page=1'}>
            <Menu.Item icon={<IconArticle size={14} />}>Artikel</Menu.Item>
          </Link>
          <Link href={'/'}>
            <Menu.Item icon={<IconClipboardHeart size={14} />}>
              Konseling
            </Menu.Item>
          </Link>

          <Menu.Divider />

          <Menu.Label>Akun</Menu.Label>
          <Link href={'/'}>
            <Menu.Item icon={<IconUserCircle size={rem(14)} />}>
              Profile
            </Menu.Item>
          </Link>
          <Menu.Item
            icon={<IconLogout2 size={rem(14)} />}
            onClick={logout}
            color="red"
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  )
}
