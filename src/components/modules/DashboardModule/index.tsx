'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Modal, Button, Group } from '@mantine/core'

export const DashboardModule: React.FC = () => {
  return (
    <div>
      <div className="p-10 flex flex-col gap-20">
        <div className="lg:h-[330px] h-full w-full bg-[#D9D6FE] rounded-3xl flex flex-col lg:flex-row lg:p-5 lg:px-10">
          <div className="lg:w-3/5 w-full h-full justify-center flex flex-col md:p-10 gap-4">
            <div className="flex justify-center lg:flex-none lg:justify-start p-2 lg:p-0">
              <Image
                src="assets/DashboardHeartBanner.svg"
                alt="OnBoard Hero Assets"
                width="100"
                height="80"
                className="z-0 "
              />
            </div>
            <div className="flex justify-center lg:flex-none lg:justify-start">
              <p className="text-[#42307D] font-inter font-bold lg:text-4xl md:text-2xl text-xl drop-shadow-md">
                Halo, Naput!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/5 h-[200px] md:h-auto flex justify-between lg:flex-none lg:justify-end">
            <div className="w-[150px] lg:w-full h-[200px] lg:h-full relative flex justify-end mx-[-30px]">
              <Image
                src="assets/DashboardBanner.svg"
                alt="OnBoard Hero Assets"
                fill
                className="z-0"
              />
            </div>
            <div className="w-[150px] h-[200px] md:h-auto relative flex justify-end block lg:hidden">
              <Image
                src="assets/DashboardBanner.svg"
                alt="OnBoard Hero Assets"
                fill
                className="z-0"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center ">
            <div className="relative h-[300px] w-[300px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="assets/DashboardCalendar.svg"
                alt="OnBoard Hero Assets"
                fill
                className="z-0 relative"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="flex justify-center">
              Yah, kamu belum memiliki jadwal konseling :(
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
