import React, { ReactNode } from 'react'

const ClientsLayout = ({ children }: { children: ReactNode }) => {
  return <main className="min-h-screen">{children}</main>
}

export default ClientsLayout
