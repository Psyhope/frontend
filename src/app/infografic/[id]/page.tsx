'use client'
import { ArrowLeft } from '@icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const InfograficByIdPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen p-5 lg:px-28 flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <button
          className="bg-[#7F56D9] md:p-2 p-1 rounded-lg drop-shadow-lg active:drop-shadow-none"
          onClick={() => router.push('/infografic')}
        >
          <ArrowLeft />
        </button>
        <div className="flex text-[#344054] font-inter gap-2 md:text-xl text-sm">
          <button onClick={() => router.push('/')}>
            <p className="">Home</p>
          </button>
          <p>/</p>
          <button onClick={() => router.push('/infografic')}>
            <p className="font-bold">Infografic</p>
          </button>
        </div>
      </div>
      <div className="aspect-infografic w-full rounded-3xl relative">
        <Image
          alt="Article Cover"
          src={'/assets/Placeholder.png'}
          className="relative"
          fill
        />
      </div>
      <div className="w-full md:p-10 p-5 bg-[#D6BBFB40]">
        <p className="text-[#53389E] font-inter lg:text-6xl md:text-4xl font-bold">
          Judul
        </p>
        <p className="mt-5 font-inter leading-loose text-[#667085] lg:text-xl md:text-lg text-sm">
          Lorem ipsum dolor sit amet consectetur. Dui in iaculis non dui amet
          imperdiet Lorem ipsum dolor sit amet consectetur. Dui in iaculis non
          dui amet imperdiet
        </p>
      </div>
    </div>
  )
}

export default InfograficByIdPage
