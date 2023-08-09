'use client'
import React, { ComponentType } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const counselorHoc = <T extends object>(Component: ComponentType<T>) => {
  return function WithAuth(props: T) {
    const { user, accessToken } = useAuth()

    const router = useRouter()

    if (!accessToken) {
      router.replace('/login')
      return <></>
    } else if (!user.isOnboarded) {
      router.replace('/onboarding')
      return <></>
    } else if (
      user.role == 'FACULTY_COUNSELOR' ||
      user.role == 'PSYHOPE_COUNSELOR'
    ) {
      return <Component {...props} />
    }
    router.replace('/')
    return <></>
  }
}

export default counselorHoc
