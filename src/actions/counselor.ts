import { gql } from '@/__generated__'

export const GET_COUNSELOR = gql(`
    query FindOneEvent($findOneEventId: Int!) {
        findOneEvent(id: $findOneEventId) {
        id
        title
        date
        location
        time
        description
        posterUrl
        }
    }
`)
