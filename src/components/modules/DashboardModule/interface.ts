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
