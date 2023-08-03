import { gql } from '@/__generated__'

export const GET_COUNSELOR = gql(`
query CounselorFilter($getCounselorDto: GetCouncelorFilter!) {
  counselorFilter(getCounselorDto: $getCounselorDto) {
    counselorType
    user {
      id
      username
      lineAcc
      igAcc
      fullname
      account {
        gender
        faculty
        major
      }
    }
    Booking {
      id
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

export const GET_COUNSELOR_BY_ID = gql(`
query GetCounselorByUname($getCounselor: GetCouncelor!) {
  getCounselorByUname(getCounselor: $getCounselor) {
    counselorType
    user {
      id
      username
      lineAcc
      igAcc
      fullname
      account {
        gender
        faculty
        major
      }
    }
    Booking {
      id
      bookingDate
      bookingDay
      bookingTime
      isTerminated
      adminAcc
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
