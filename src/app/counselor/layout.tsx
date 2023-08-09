'use client'

import counselorHoc from '@/components/hoc/counselorHoc'
import withAuth from '@/components/hoc/withAuth'
import React, { ReactNode } from 'react'

const ClientsLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

export default ClientsLayout
