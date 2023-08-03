import { gql } from '@/__generated__'

export const GET_SCHEDULE_BY_TIME = gql(`
    query Query($getScheduleDto: GetScheduleDTO!) {
        schedule(getScheduleDTO: $getScheduleDto) {
        id
        workDay
        workTime
        }
    }
  `)

export const GET_BOOKING_DAY =
  gql(`query BookingFilterGeneral($getBookingFilterGeneral: GetBookingFilterGeneralDto!) {
    bookingFilterGeneral(getBookingFilterGeneral: $getBookingFilterGeneral) {
      bookingTime
      bookingTime2
    }
  }
  `)

export const MUTATION_CREATE_BOOKING = gql(`
  mutation CreateBooking($createBookingInput: CreateBookingInput!) {
    createBooking(createBookingInput: $createBookingInput) {
      id
      bookingTime
      bookingTime2
      bookingDate
      bookingDay
      userId
      counselorType
      reasonApply
      closestKnown
    }
  }
`)

export const GET_BOOKING_CLIENT = gql(`
  query BookingClient {
    bookingClient {
      id
      bookingTime
      bookingTime2
      bookingDate
      bookingDay
      isAccepted
      isTerminated
      adminAcc
      counselorType
      councelor {
        userId
        user {
          fullname
        }
      }
    }
  }
`)

export const RESCHEDULE_BOOKING = gql(`
mutation RescheduleBooking($rescheduleBookingInput: UpdateBookingInput!) {
  rescheduleBooking(rescheduleBookingInput: $rescheduleBookingInput) {
    id
  }
}`)

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
    id
  }  
  user {
    fullname
    id
  }
  bookingTime
  bookingDay
  bookingDate
  }
}
`)

export const GET_CLIENT_DETAIL = gql(`
query AdminGetBooking($adminGetBooking: AdminGetBooking!) {
  adminGetBooking(adminGetBooking: $adminGetBooking) {
    bookingTime
    bookingTime2
    bookingDay
    counselorType
    reasonApply
    CounselingLog {
      id
      bookingId
      time
      detail
      title
    }
    user {
      username
      fullname
      igAcc
      lineAcc
      account {
        faculty
        major
        channel
        gender
      }
    }
    councelor {
      user {
        username
        fullname
      }
    }
    number_1
    number_2
    number_3
    number_4
    number_5
    number_6
    number_7
    number_8
    number_9
    number_10
    number_11
    number_12
    isSuicidal
  }
}
`)
