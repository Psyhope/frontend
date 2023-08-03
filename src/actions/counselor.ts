import { gql } from '@/__generated__'

export const GET_COUNSELOR = gql(`
    query CounselorFilter($getCounselorDto: GetCouncelorFilter!) {
  counselorFilter(getCounselorDto: $getCounselorDto) {
    counselorType
    user {
      username
      lineAcc
      igAcc
      fullname
      
    }
    Booking {
      bookingDate
      bookingDay
      bookingTime
      isTerminated
      isAccepted
      reasonApply
      user {
        username
        account {
          major
        }
      }
    }
  }
}
`)
