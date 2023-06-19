'use client'

import ClientTable from '@/components/elements/ClientTable'
import React, { useState } from 'react'
import { HiOutlineUser } from 'react-icons/hi'

const AdminSchedulePage = () => {
  const [counselors, setCounselors] = useState([...Array(10)])

  return <section className="p-5 md:px-10">Timeline Calendar</section>
}

export default AdminSchedulePage
