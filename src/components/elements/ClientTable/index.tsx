'use client'

import { Table } from '@mantine/core'
import React, { ReactNode } from 'react'

type ClientTableProps<T> = {
  title: string
  description: string
  rowComponent: (val: T, index: number) => ReactNode
  // headerComponent: ReactNode;
  headerTitle: string[]
  data: T[]
}

const ClientTable = <T extends object>({
  title,
  data,
  description,
  rowComponent,
  headerTitle,
}: ClientTableProps<T>) => {
  return (
    <div className="rounded-b-lg shadow-md">
      <div className="rounded-t-lg bg-[#B9E6FE] p-5">
        <h2 className="text-lg font-semibold sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="mt-1 opacity-50">{description}</p>
      </div>
      <Table verticalSpacing="md" horizontalSpacing="lg">
        <thead className="border-b-2 border-b-gray-100">
          <tr className="text-sm">
            {headerTitle.map((val, index) => (
              <th className="" key={index}>
                {val}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-opacity-50 bg-slate-100">
          {data.map(rowComponent)}
        </tbody>
      </Table>
    </div>
  )
}

export default ClientTable
