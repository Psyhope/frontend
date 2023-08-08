import { Interface } from 'readline/promises'

export interface DashboardModalWord {
  title: string
  desc: string
}

export interface BookingClient {
  bookingId: number
  id: number
  bookingTime: string
  bookingTime2: string
  bookingDate: Date
  bookingDay: string
  councelor: Councelor
  isTerminated: Boolean
  isAccepted: Boolean
  adminAcc: Boolean
  counselorType: string
}

export interface Councelor {
  userId: string
  user: User
}

export interface User {
  fullname: string
}

export interface FacultyKeys {
  [key : string]: FacultyType | undefined
}

export interface FacultyType {
  title: string
  link: string
}
