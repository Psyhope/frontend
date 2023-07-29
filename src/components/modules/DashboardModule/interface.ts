import { Interface } from 'readline/promises'

export interface DashboardModalWord {
  title: string
  desc: string
}

export interface BookingClient {
  bookingId: number
  bookingTime: string
  bookingTime2: string
  bookingDate: Date
  bookingDay: string
  counselor: Councelor
}

export interface Councelor {
  userId: string
  user: User
}

export interface User {
  fullname: string
}
