import { gql } from '@/__generated__'

export const GET_ALL_EVENT = gql(`
    query FindAllEvent {
        findAllEvent {
        id
        title
        location
        date
        time
        posterUrl
        description
        }
    }
`)

export const GET_BY_PAGE_EVENT = gql(`
    query FindByPageEvent($page: Int!) {
        findByPageEvent(page: $page) {
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

export const GET_BY_ID_EVENT = gql(`
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

export const CREATE_EVENT = gql(`
    mutation CreateEvent($createEventInput: CreateEventInput!) {
        createEvent(createEventInput: $createEventInput) {
        title
        date
        location
        time
        description
        posterUrl
        }
    }
`)

export const UPDATE_EVENT = gql(`
    mutation UpdateEvent($updateEventInput: UpdateEventInput!) {
        updateEvent(updateEventInput: $updateEventInput) {
        id
        date
        title
        location
        time
        description
        posterUrl
        }
    }
`)

export const DELETE_EVENT = gql(`
    mutation RemoveEvent($removeEventId: Int!) {
        removeEvent(id: $removeEventId) {
        id
        }
    }
`)

export const GET_BY_LIMIT_EVENT = gql(`
    query FindByLimitEvent($limit: Int!) {
        findByLimitEvent(limit: $limit) {
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

export const GET_COUNT_EVENT = gql(`
    query countEventQuery {
        countEvent
    }
`)
