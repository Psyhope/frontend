'use client'
import React, { ComponentType } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const withAuth = <T extends object>(Component: ComponentType<T>) => {
  return function WithAuth(props: T) {
    const { user, accessToken } = useAuth()

    const router = useRouter()

    if (!accessToken) {
      router.replace('/login')
      return <></>
    } else if (!user.isOnboarded) {
      router.replace('/onboarding')
      return <></>
    }

    return <Component {...props} />
  }
}

export default withAuth
