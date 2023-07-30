import { gql } from '@/__generated__'

export const GET_COUNSELOR_SCHEDULE = gql(`
    query CounselorFilter($getCounselorDto: GetCouncelorFilter!) {
  counselorFilter(getCounselorDto: $getCounselorDto) {
    userId
    Booking {
      bookingDay
      bookingTime
      user {
        username
      }
    }
    user {
      fullname
    }
    counselorType
  }
}
`)
