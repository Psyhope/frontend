"use client"

import withAuth from '@/components/hoc/withAuth'
import React, { ReactNode } from 'react'

const ClientsLayout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

export default withAuth(ClientsLayout)
