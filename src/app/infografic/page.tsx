'use client'
import { ArticleCard, InfograficCard } from '@elements'
import { PlusSquare } from '@icons'
import Image from 'next/image'
import React, { useState } from 'react'

const InfograficPage = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  setIsAdmin(false)
  return (
    <div className="min-h-screen p-5 lg:px-28">
      {/* Hero */}
      <div className="bg-[#D9D6FE] rounded-md flex flex-col-reverse md:flex-row">
        <div className="p-5 lg:p-20">
          <p className="font-inter font-bold text-[#53389E] text-xl md:text-2xl lg:text-6xl">
            Infografik
          </p>
          <p className="font-inter text-xs text-[#1D2939] md:text-base lg:text-lg lg:leading-loose lg:mt-5 mt-2">
            Artikel ini akan mengajari Anda tentang dasar-dasar psikologi dan
            kesehatan mental, serta cara mengatasi tantangan umum kesehatan
            mental.
          </p>
          {isAdmin && (
            <button className="bg-[#7F56D9] w-full py-2 font-inter font-semibold lg:text-base md:text-sm text-xs text-white tracking-wider flex items-center justify-center gap-2 rounded-lg drop-shadow-lg active:drop-shadow-none mt-5">
              <PlusSquare />
              <p>Tambah Infografik</p>
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
          <InfograficCard isAdmin={isAdmin} />
          <InfograficCard isAdmin={isAdmin} />
          <InfograficCard isAdmin={isAdmin} />
          <InfograficCard isAdmin={isAdmin} />
        </div>
      </div>
    </div>
  )
}

export default InfograficPage
