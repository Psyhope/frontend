import Image from 'next/image'
import React from 'react'
import { Props } from './interface'
import { Edit, Trash } from '@icons'
import { DeleteModal } from '../DeleteModal'
import { useDisclosure } from '@mantine/hooks'

export const ArticleCard: React.FC<Props> = ({
  isAdmin,
  content,
  id,
  posterUrl,
  thumbnailUrl,
  title,
}) => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <div>
      <div className="xl:w-[345px] lg:w-[280px] w-[200px] rounded-lg relative flex-none">
        <div className="w-full aspect-article relative">
          <Image
            alt="Infografis"
            src={thumbnailUrl}
            fill
            className="rounded-t-lg"
          />
        </div>
        <div className="bg-[#D9D6FE] w-full lg:h-[156px] h-[100px] relative rounded-lg -mt-2 lg:p-6 p-2">
          <p className="text-[#53389E] lg:text-2xl text-lg font-bold">
            {title}
          </p>
          <p className="lg:max-h-20 max-h-12 pb-6 overflow-hidden lg:text-base text-xs">
            {content}
          </p>
        </div>
      </div>
      {isAdmin && (
        <div className="flex gap-2 mt-2">
          <button
            className="flex items-center justify-center gap-2 text-[#B42318] bg-[#FEF3F2] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs"
            onClick={open}
          >
            <Trash />
            <p>Hapus</p>
          </button>
          <button className="flex items-center justify-center gap-2 text-white bg-[#7F56D9] py-1 w-full rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none lg:text-base md:text-sm text-xs">
            <Edit />
            <p>Edit</p>
          </button>
        </div>
      )}
      <DeleteModal
        close={close}
        open={open}
        opened={opened}
        tipe="Artikel"
        judul="Judul"
      />
    </div>
  )
}
