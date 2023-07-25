export interface valueDateSchedule {
  value: string
  label: string
}

export interface pilihanJadwal {
  value: string
  label: string
  disabled: boolean
}

export type RawJadwal = {
  id: number
  workDay: string
  workTime: string[]
}

export type BookingTime = {
  bookingTime: string
  bookingTime2: string
}