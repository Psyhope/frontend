import { Modal } from '@mantine/core'
import React from 'react'
import { Props } from './interface'

export const DeleteModal: React.FC<Props> = ({
  opened,
  close,
  open,
  tipe,
  judul,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
      size="auto"
    >
      <div className="w-full h-full flex flex-col gap-5">
        <p className="text-[#101828] text-lg font-bold font-inter">
          Hapus {tipe}
        </p>
        <p className="text-[#101828] lg:text-lg md:text-md sm:text-sm text-xs font-inter ">
          Apakah kamu yakin ingin menghapus{' '}
          <span className="font-bold">{tipe}</span> dengan judul{' '}
          <span className="font-bold">{judul}</span> ?
        </p>
        <div className="flex gap-4 md:flex-row flex-col">
          <button
            className="w-full py-2 bg-white border border-[#D0D5DD] text-[#344054] font-inter font-bold md:text-base text-sm rounded-lg drop-shadow-lg active:drop-shadow-none"
            onClick={close}
          >
            Cancel
          </button>
          <button className="w-full py-2 text-[#B42318] bg-[#FEF3F2] rounded-lg font-semibold drop-shadow-lg active:drop-shadow-none md:text-base text-sm">
            Hapus {tipe}
          </button>
        </div>
      </div>
    </Modal>
  )
}
