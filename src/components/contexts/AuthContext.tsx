// import axios, { AxiosError } from "axios";
'use client'

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/navigation'
import { env } from '@/env.mjs'
import { notifications } from '@mantine/notifications'
import { FaTimes } from 'react-icons/fa'
import { Psyhope } from '../icons/Psyhope'
import { bool } from 'aws-sdk/clients/signer'
import { Loader } from '@mantine/core'

const AuthContext = createContext<{
  accessToken: string
  user: {
    username: string
    id: string
    role: string
    secondRole: string
    isOnboarded: boolean
    faculty: string
  }
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  refreshToken: () => Promise<void>
}>({
  accessToken: '',
  user: { username: '', id: '', role: '', secondRole : '', isOnboarded: false, faculty: '' },
  login: undefined as unknown as (
    username: string,
    password: string
  ) => Promise<void>,
  logout: undefined as unknown as () => void,
  refreshToken: undefined as unknown as () => Promise<void>,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState('')
  const [user, setUser] = useState<{
    username: string
    id: string
    role: string
    isOnboarded: boolean
    faculty: string
    secondRole: string
  }>({ username: '', id: '', role: '', isOnboarded: false, faculty: '', secondRole :'' })
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  const login = async (username: string, password: string) => {
    setLoading(true)
    try {
      const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        method: 'POST',
        // credentials: "include",
      })
      if (res.status !== 200) throw new Error(await res.json())
      // router.replace("/dashboard")
      const data: TokenResponse = await res.json()
      const user = jwt_decode<{
        username: string
        sub: string
        role: string
        isOnboarded: boolean
        faculty: string
        secondRole: string
      }>(data.accessToken)
      setUser({
        username: user.username,
        id: user.sub,
        role: user.role,
        isOnboarded: user.isOnboarded as boolean,
        faculty: user.faculty,
        secondRole: user.secondRole,
      })
      setAccessToken(data.accessToken)
      notifications.show({
        title: 'Success',
        message: 'Login Successfull',
        color: 'teal',
        autoClose: 3000,
      })
      if (!user.isOnboarded) router.replace('/onboarding')
      else router.replace('/')
    } catch (error) {
      // const err = error as AxiosError;
      console.error('Error: ', error)
      notifications.show({
        title: 'Login failed',
        message: 'Please try again',
        color: 'red',
        autoClose: 3000,
        icon: <FaTimes />,
      })
    } finally {
      setLoading(false)
    }
  }

  const refreshToken = async () => {
    try {
      const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/refresh`, {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      if (!res.ok) return
      const data: TokenResponse = await res.json()
      const user = jwt_decode<{
        username: string
        sub: string
        role: string
        isOnboarded: boolean
        faculty: string
        secondRole: string
      }>(data.accessToken)
      setUser({
        username: user.username,
        id: user.sub,
        role: user.role,
        isOnboarded: user.isOnboarded,
        faculty: user.faculty,
        secondRole: user.secondRole
      })
      setAccessToken(data.accessToken)
    } catch (error) {
      // const err = error as AxiosError;
      console.error(error)
      // router.replace('/login')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    // SecureStore.deleteItemAsync("refreshToken");
    setLoading(true)
    router.replace('/login')
    setAccessToken('')
    setUser({ username: '', id: '', role: '', isOnboarded: false, faculty: '', secondRole: '' })
    fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).finally(() => setLoading(false))
  }

  const getCurrentUser = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${env.NEXT_PUBLIC_BASE_URL}/api/auth/user`, {
        credentials: 'include',
      })
      const data: {
        user: {
          username: string
          sub: string
          role: string
          isOnboarded: boolean
          faculty: string
          secondRole: string
        }
        token: string
      } = await res.json()
      setUser({
        id: data.user.sub,
        username: data.user.username,
        role: data.user.role,
        isOnboarded: data.user.isOnboarded,
        faculty: data.user.faculty,
        secondRole: data.user.secondRole
      })
      setAccessToken(data.token)
    } catch (err) {
      return
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  const contextValue = {
    accessToken,
    user,
    login,
    logout,
    refreshToken,
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading ? (
        children
      ) : (
        <main className="flex flex-col items-center justify-center w-full h-screen gap-3 bg-white">
          <div className="scale-150 mb-5">
            <Psyhope />
          </div>
          <Loader variant="dots" size="xl" />
        </main>
      )}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
