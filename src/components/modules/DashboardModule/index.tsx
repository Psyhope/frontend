'use client'
import React from 'react'
import Image from 'next/image'
import { Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { DashboardModal } from './const'
import { DashboardModalWord } from './interface'

export const DashboardModule: React.FC = () => {
  const DashboardWording: DashboardModalWord[] = DashboardModal
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div>
      <div className="px-10 flex flex-col ">
        <div className="bg-white">
          <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            size="50%"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <Image
                  src="assets/DashboardModal.svg"
                  alt="OnBoard Hero Assets"
                  width="150"
                  height="150"
                  className="z-0 "
                />
              </div>
              <div className="flex justify-center">
                <p className=" text-2xl font-semibold text-center">
                  Psyhope dan Peer Counselor, Apa Bedanya?
                </p>
              </div>
              <div className="flex gap-4">
                {DashboardWording.map(({ title, desc }) => (
                  <div
                    key={title}
                    className="bg-[#6941C6] p-4 flex flex-col gap-2 rounded-xl"
                  >
                    <div className="bg-white p-2 rounded-lg">
                      <p className="text-[#6941C6] text-lg font-semibold drop-shadow-lg">
                        {title}
                      </p>
                    </div>
                    <p className="text-white text-sm">{desc}</p>
                  </div>
                ))}
              </div>
              <div className=" flex justify-center">
                <Button
                  className="text-[#667085] bg-white border-1 drop-shadow-md border-[#667085] items-center rounded w-full"
                  onClick={close}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <p>Oke, Mengerti</p>
                  </div>
                </Button>
              </div>
            </div>
          </Modal>
        </div>
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
        <div className="flex flex-col gap-4">
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
          <div className="flex justify-center gap-4">
            <button className="w-1/4 border border-2 border-[#7F56D9] text-[#7F56D9] p-2 rounded-lg font-semibold text-lg">
              Daftar Konseling di Psyhope
            </button>
            <button className="w-1/4 text-white bg-[#7F56D9] p-2 rounded-lg text-lg">
              Daftar Konseling di CSP
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-1/2">
              <div className="w-full">
                <Button
                  className="text-[#667085] bg-white border-1 drop-shadow-md border-[#667085] flex flex-col items-center rounded w-full"
                  onClick={open}
                >
                  <div className="flex gap-1 justify-center items-center">
                    <div>
                      <Image
                        src="assets/DashboardQuestionMark.svg"
                        alt="OnBoard Question Modal"
                        width={20}
                        height={20}
                        className=""
                      />
                    </div>
                    <p className="text-lg">
                      Apa perbedaan Psyhope dan Peer Counselor?
                    </p>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
