'use client'

import { Table } from '@mantine/core'
import React, { ReactNode } from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi'

type ClientTableProps<T> = {
  title: string
  description: string
  rowComponent: (val: T, index: number) => ReactNode
  headerTitle: string[]
  data: T[]
  emptyComponent?: ReactNode
}

const ClientTable = <T extends object>({
  title,
  data,
  description,
  rowComponent,
  headerTitle,
  emptyComponent,
}: ClientTableProps<T>) => {
  return (
    <div className="rounded-b-lg shadow-md">
      <div className="rounded-t-lg bg-[#B9E6FE] p-5">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-1 opacity-50">{description}</p>
        <div className="flex gap-2 rounded-md bg-[#0086C9] sm:hidden mt-2">
          <div className="aspect-[5/6] px-2 grid place-items-center bg-[#0B4A6F] rounded-md">
            <HiOutlineInformationCircle className="text-[#3EEBBE] text-xl" />
          </div>
          <p className="py-2 text-sm text-white">
            Slide tabel ke kanan untuk melihat info lainnya.
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        {data.length > 0 ? (
          <Table
            verticalSpacing="md"
            horizontalSpacing="lg"
            cellPadding="12px"
            className="min-w-full w-max"
          >
            <thead className="border-b-2 border-b-gray-100">
              <tr className="text-sm">
                {headerTitle.map((val, index) => (
                  <th key={index}>
                    <p className="text-center">{val}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-opacity-50 bg-slate-100">
              {data.map(rowComponent)}
            </tbody>
          </Table>
        ) : (
          emptyComponent ?? (
            <div className="w-full p-3 text-center">
              <p className="text-lg font-semibold">Tidak ada data</p>
              <p className="text-sm text-center opacity-70">
                Tidak ada data yang dapat ditampilkan
              </p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default ClientTable
