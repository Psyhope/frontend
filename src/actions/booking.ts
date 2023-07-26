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
      bookingTopic
      reasonApply
      closestKnown
    }
  }
`)