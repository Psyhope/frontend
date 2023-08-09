'use client'
import React, { ComponentType } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const adminHoc = <T extends object>(Component: ComponentType<T>) => {
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
      user.role == 'FACULTY_ADMIN' ||
      user.role == 'PSYHOPE_ADMIN' ||
      user.secondRole == 'PSYHOPE_ADMIN' ||
      user.secondRole == 'FACULTY_ADMIN'
    ) {
      return <Component {...props} />
    } else {
      router.replace('/')
      return <></>
    }
  }
}

export default adminHoc
