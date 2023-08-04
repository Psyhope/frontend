export interface DetailClientModule {
  bookingId: string
}

export interface Booking {
  bookingDay: string
  bookingTime: string
  bookingTime2: string
  counselorType: string
  isSuicidal: boolean
  number_1: number
  number_2: number
  number_3: number
  number_4: number
  number_5: number
  number_6: number
  number_7: number
  number_8: number
  number_9: number
  number_10: number
  number_11: number
  number_12: number
  reasonApply: string
  councelor: Councelor
  CounselingLog: CounselingLog[]
  user: User
}

export interface CounselingLog {
  title: string
  time: Date
  detail: string
}

export interface Councelor {
  user: UserCounselor
}

export interface UserCounselor {
  fullname: string
  username: string
}

export interface User {
  fullname: string
  username: string
  igAcc: string
  lineAcc: string
  account: Account
}

export interface Account {
  channel: string
  faculty: string
  major: string
  gender: string
}
