import Image from 'next/image'
import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal } from '@mantine/core'
import { Props } from './interface'
import { Edit, Trash } from '@icons'

export const EventCard: React.FC<Props> = ({ isAdmin }) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div>
      <button
        className="xl:w-[345px] lg:w-[280px] w-[200px] rounded-lg relative flex-none drop-shadow-xl active:drop-shadow-none"
        onClick={open}
      >
        <div className="w-full aspect-article relative">
          <Image
            alt="Infografis"
            src={'/assets/ArticlePlaceholder.jpg'}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="bg-[#D9D6FE] w-full lg:h-[156px] h-[100px] relative rounded-lg -mt-2 lg:p-6 p-2">
          <p className="text-[#53389E] lg:text-2xl text-lg font-bold text-start">
            Judul
          </p>
          <p className="lg:max-h-20 max-h-12 pb-6 overflow-hidden lg:text-base text-xs text-start">
            Lorem ipsum dolor sit amet consectetur. Dui in iaculis non dui amet
            imperdiet Lorem ipsum dolor sit amet consectetur. Dui in iaculis non
            dui amet imperdietLorem ipsum dolor sit amet consectetur. Dui in
            iaculis non dui amet imperdiet Lorem ipsum dolor sit amet
            consectetur. Dui in iaculis non dui amet imperdiet
          </p>
        </div>
      </button>
      {isAdmin && (
        <div className="flex gap-2 mt-2">
          <button className="flex items-center justify-center gap-2 text-[#B42318] bg-[#FEF3F2] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs">
            <Trash />
            <p>Hapus</p>
          </button>
          <button className="flex items-center justify-center gap-2 text-white bg-[#7F56D9] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs">
            <Edit />
            <p>Edit</p>
          </button>
        </div>
      )}

      <Modal
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        size="auto"
      >
        <div className="w-full h-full flex flex-col gap-5">
          <p className="font-inter md:text-4xl text-2xl font-bold">
            Event Mental Health Day 2023
          </p>
          <div className="flex gap-7 flex-col md:flex-row">
            <div className="relative aspect-article md:w-80 h-30 md:h-auto">
              <Image
                alt="Event Modal Placeholder"
                src={'/assets/ArticlePlaceholder.jpg'}
                className="relative rounded-lg"
                fill
              />
            </div>
            <div className="bg-[#F9F5FF] rounded-2xl md:w-[756px] p-5 flex flex-col gap-5 h-auto max-h-[285px] overflow-y-auto scrollbar-hidden">
              <div className="flex gap-5 flex-col md:flex-row">
                <div>
                  <p className="text-[#344054] font-inter text-sm font-medium">
                    Tanggal Event
                  </p>
                  <p className="text-base text-[#667085] font-inter">
                    Senin, 28 Maret 2023
                  </p>
                </div>
                <div>
                  <p className="text-[#344054] font-inter text-sm font-medium">
                    Waktu Penyelenggaraan
                  </p>
                  <p className="text-base text-[#667085] font-inter">
                    08:00 - 13:00
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[#344054] font-inter text-sm font-medium">
                  Lokasi
                </p>
                <p className="text-base text-[#667085] font-inter">
                  Balai Purnomo
                </p>
              </div>
              <div>
                <p className="text-[#344054] font-inter text-sm font-medium">
                  Detail Acara
                </p>
                <p className="md:text-base text-sm text-[#667085] font-inter">
                  Lorem ipsum dolor sit amet consectetur. Sollicitudin nec
                  venenatis amet tincidunt imperdiet eget dis pretium est.
                  Magnis quis morbi sed quis orci in. Consectetur pharetra nisl
                  et dictum in tristique quis pellentesque.Lorem ipsum dolor sit
                  amet consectetur. Sollicitudin nec venenatis amet tincidunt
                  imperdiet eget dis pretium est. Magnis quis morbi sed quis
                  orci in. Consectetur pharetra nisl et dictum in tristique quis
                  pellentesque.Lorem ipsum dolor sit amet consectetur.
                  Sollicitudin nec venenatis amet tincidunt imperdiet eget dis
                  pretium est. Magnis quis morbi sed quis orci in. Consectetur
                  pharetra nisl et dictum in tristique quis pellentesque.
                </p>
              </div>
            </div>
          </div>
          <button
            className="w-full px-2 py-2 border border-[#FDA29B] text-[#B42318] bg-white rounded-lg drop-shadow-xl active:drop-shadow-none"
            onClick={close}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  )
}
