import { gql } from "@/__generated__"

export const GET_SCHEDULE_BY_TIME = gql(`
    query Query($getScheduleDto: GetScheduleDTO!) {
        schedule(getScheduleDTO: $getScheduleDto) {
        id
        workDay
        workTime
        }
    }
  `)

export const GET_BOOKING_DAY = gql(`query BookingFilter($getBookingFilter: GetBookingFilterDto!) {
    bookingFilter(getBookingFilter: $getBookingFilter) {
      bookingTime
      bookingTime2
    }
  }`
)