'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsArrowLeftCircle } from 'react-icons/bs'

export const BannerSection: React.FC = () => {
  const router = useRouter()
  const handlerBack = () => {
    router.push('/dashboard')
  }

  return (
    <div className="flex flex-col gap-5">
      <button
        className="p-2 bg-[#F9F5FF] w-fit rounded-lg"
        onClick={handlerBack}
      >
        <div className="flex w-fit gap-2 items-center justify-center">
          <BsArrowLeftCircle className="text-[#6941C6]"></BsArrowLeftCircle>
          <p className="text-[#6941C6]">Kembali</p>
        </div>
      </button>
      <div className="md:h-[400px] w-full bg-[#E9D7FE] rounded-3xl p-5">
        <div className=" flex flex-col-reverse">
          <div className="flex justify-center text-center">
            <p className="text-[#42307D] font-inter font-bold lg:text-4xl md:text-2xl text-xl">
              Booking Layanan Konseling
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Image
              src="/assets/ScheduleBanner.svg"
              alt="GHQ Banner Assets"
              width={300}
              height={300}
              className="relative z-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
