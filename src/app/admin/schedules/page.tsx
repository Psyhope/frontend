'use client'

import ClientTable from '@/components/elements/ClientTable'
import React, { useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'

const AdminSchedulePage = () => {
  const [schedules, setSchedules] = useState([...Array(10)])

  return (
    <section className="p-5 md:px-10">
      <ClientTable
        title="Kalender Jadwal Konseling"
        description="Berikut merupakan jadwal konseling Psyhope."
        headerTitle={['Jam/Hari', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']}
        data={schedules}
        rowComponent={(val, index) => (
          <tr key={index}>
            <td className="text-center bg-green-100 border-b-2 border-b-green-200 w-min">
              08:00
            </td>
            {[...Array(5)].map((val, idx) =>
              idx ? (
                <td key={idx} className="w-1/5 text-center">
                  Konselor {idx} - Klien {index}
                </td>
              ) : (
                <td key={idx} className="w-1/5 text-center bg-yellow-100"></td>
              )
            )}
          </tr>
        )}
      />
    </section>
  )
}

export default AdminSchedulePage
