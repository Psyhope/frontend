import { gql } from "@/__generated__";

export const CREATE_LOG = gql(`
mutation CreateCounselingLog($createCounselingLogInput: CreateCounselingLogInput!) {
    createCounselingLog(createCounselingLogInput: $createCounselingLogInput) {
      bookingId
      title
      detail
    }
  }`)