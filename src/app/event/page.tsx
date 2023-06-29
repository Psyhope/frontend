'use client'
import { EventCard } from '@elements'
import { PlusSquare } from '@icons'
import Image from 'next/image'
import React, { useState } from 'react'

const EventPage = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className="min-h-screen p-5 lg:px-28">
      {/* Hero */}
      <div className="bg-[#D9D6FE] rounded-md flex flex-col-reverse md:flex-row">
        <div className="p-5 lg:p-20">
          <p className="font-inter font-bold text-[#53389E] text-xl md:text-2xl lg:text-6xl">
            Event Mendatang
          </p>
          <p className="font-inter text-xs text-[#1D2939] md:text-base lg:text-lg lg:leading-loose lg:mt-5 mt-2">
            Kami selalu mengadakan acara untuk membantu Anda mempelajari lebih
            lanjut tentang psikologi dan kesehatan mental. Lihat acara mendatang
            kami di bawah ini:
          </p>
          {isAdmin && (
            <button className="bg-[#7F56D9] w-full py-2 font-inter font-semibold lg:text-base md:text-sm text-xs text-white tracking-wider flex items-center justify-center gap-2 rounded-lg drop-shadow-lg active:drop-shadow-none mt-5">
              <PlusSquare />
              <p>Tambah Event</p>
            </button>
          )}
        </div>
        <div className="relative lg:h-[300px] h-[150px] lg:w-[880px] w-full lg:my-10 lg:mr-10">
          <Image
            alt="Login Asset"
            src={'assets/LoginAsset.svg'}
            fill
            className="relative"
          />
        </div>
      </div>
      {/* Grid */}
      <div className=" flex justify-center mt-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
          <EventCard isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  )
}

export default EventPage
