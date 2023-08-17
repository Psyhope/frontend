'use client'

import { GET_BOOKING_CLIENT } from '@/actions/booking'
import { useParams } from 'next/navigation'
import React from 'react'
import { useQuery } from '@apollo/client'
import { DetailClientsModule } from '@/components/modules/DetailClientsModule'

const ClientByIDPage = () => {
  const { id } = useParams()
  const { data } = useQuery(GET_BOOKING_CLIENT, {
    variables: {},
  })

  return (
    <>
      <head>
        <title>Clients | Empower U&I</title>
      </head>
      <DetailClientsModule bookingId={decodeURI(id)}></DetailClientsModule>
    </>
  )
}

export default ClientByIDPage
