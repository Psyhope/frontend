'use client'
import React, { ComponentType } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const withAuth = <T extends object>(Component: ComponentType<T>) => {
  return function WithAuth(props: T) {
    const { accessToken } = useAuth()

    console.log(accessToken)

    const router = useRouter()

    if (!accessToken) {
      router.replace('/login')
      return <></>
    }

    return <Component {...props} />
  }
}

export default withAuth
