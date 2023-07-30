import { gql } from '@/__generated__'

export const GET_BOOKING = gql(`
  query BookingFilter($getBookingFilter: GetBookingFilterDto!) {
  bookingFilter(getBookingFilter: $getBookingFilter) {
    id
  user {
      username
      account {
        faculty
        major
      }
    }
    councelor {
      user {
        fullname
        account {
          faculty
          major
        }
      }
      counselorType
    }
    bookingDay
    bookingDate
    bookingTime2
    bookingTime
    isAccepted
    isTerminated
    adminAcc  
  }
}
`)

export const ADMIN_ACCEPT_BOOKING = gql(`
mutation AdminAcc($adminAccInput: AdminAccBooking!) {
  adminAcc(adminAccInput: $adminAccInput) {
    id
    adminAcc
  }
}
`)

export const GET_ALL_SCHEDULES = gql(`
query AdminRundown($getBookingFilter: GetAdminRundown!) {
  adminRundown(getBookingFilter: $getBookingFilter) {
  councelor {
    user {
      fullname
    }
  }  
  user {
    fullname
  }
  bookingTime
  bookingDay
  bookingDate
  }
}
`)
