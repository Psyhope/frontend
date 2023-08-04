'use client'

import { GET_BOOKING_CLIENT } from '@/actions/booking'
import ClientTable from '@/components/elements/ClientTable'
import { IdentityStore } from 'aws-sdk'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useQuery, useMutation } from '@apollo/client'
import { GET_CLIENT_DETAIL } from '@/actions/booking'
import { DetailClientsModule } from '@/components/modules/DetailClientsModule'

const ClientByIDPage = () => {
  const { id } = useParams()
  const { data } = useQuery(GET_BOOKING_CLIENT, {
    variables: {},
  })

  return (
    <>
      <DetailClientsModule bookingId={decodeURI(id)}></DetailClientsModule>
    </>
  )
}

export default ClientByIDPage
