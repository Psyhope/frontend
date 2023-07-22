'use client'

import ClientTable from '@/components/elements/ClientTable'
import { Select, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useDebouncedState } from '@mantine/hooks'
import React, { forwardRef, useState } from 'react'
import { BsFilter, BsThreeDotsVertical } from 'react-icons/bs'
import { HiChevronDown, HiOutlineCalendar, HiSearch } from 'react-icons/hi'

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  color: string
  value: string
}

const Item = forwardRef<HTMLDivElement, ItemProps>(
  ({ color, value, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <div className={`flex items-center gap-2 rounded cursor-pointer`}>
        <div
          style={{ backgroundColor: color }}
          className="w-3 rounded-full aspect-square"
        ></div>
        <p>{value}</p>
      </div>
    </div>
  )
)

const AdminClientPage = () => {
  const [data, setData] = useState([...Array(10)])

  const [name, setName] = useDebouncedState('', 200)
  const [date, setDate] = useState(new Date())
  const [status, setStatus] = useState<string | null>('')

  Item.displayName = 'Item'

  return (
    <>
      <section className="p-5 md:px-10">
        <div className="flex flex-col items-center gap-8 sm:gap-4 sm:flex-row md:gap-8">
          <TextInput
            label="Cari Konselor"
            icon={<HiSearch />}
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Nama Konselor"
            size="md"
            className="w-full sm:w-60 md:w-96"
          />
          <DatePickerInput
            label="Cari Hari Konseling"
            icon={<HiOutlineCalendar />}
            value={date}
            onChange={(e) => setDate(date)}
            rightSection={<HiChevronDown />}
            size="md"
            className="w-full sm:w-60 md:w-96"
          />
          <Select
            label="Filter berdasarkan Status"
            placeholder="Pilih Status Request"
            size="md"
            data={[
              {
                value: 'Accepted',
                label: 'Accepted',
                color: 'rgb(74 222 128)',
              },
              {
                value: 'Terminated',
                label: 'Terminated',
                color: '#B42318',
              },
              {
                value: 'Need Reschedule',
                label: 'Need Reschedule',
                color: 'rgb(253 224 71)',
              },
              {
                value: 'Rescheduled',
                label: 'Rescheduled',
                color: '#026AA2',
              },
            ]}
            itemComponent={Item}
            value={status}
            onChange={setStatus}
            icon={<BsFilter />}
            className="w-full sm:w-60 md:w-96"
            styles={() => ({
              item: {
                // applies styles to selected item
                '&[data-hovered]': {
                  '&:hover': {
                    backgroundColor: '#F4F3FF',
                  },
                },
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: '#D9D6FE',
                    color: '#53389E',
                  },
                },
              },
            })}
          />
        </div>
      </section>
      <section className="p-5 overflow-x-auto md:px-10">
        <ClientTable
          title="Daftar Booking"
          description="Berikut merupakan daftar klien konseling Psyhope."
          headerTitle={[
            'Nama Klien',
            'Nama Konselor',
            'Jadwal Konseling',
            'Daftar Klien',
          ]}
          data={data}
          rowComponent={(val, index) => (
            <tr key={index}>
              <td>
                <p>Nama Panggilan {index}</p>
              </td>
              <td>
                <p>Nama Panggilan {index}</p>
              </td>
              <td>
                <p>Senin, 08:00</p>
              </td>
              <td className="flex items-center justify-between">
                <div>Status</div>
                <button>
                  <BsThreeDotsVertical />
                </button>
              </td>
            </tr>
          )}
        />
      </section>
    </>
  )
}

export default AdminClientPage
