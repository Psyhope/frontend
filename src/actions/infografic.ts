import { gql } from '../__generated__'

export const GET_ALL_INFOGRAFIC = gql(`
    query FindAllInfografic {
        findAllInfografic {
        id
        title
        description
        infograficUrl
        }
    }
`)

export const GET_BY_PAGE_INFOGRAFIC = gql(`
    query FindByPageInfografic($page: Int!) {
        findByPageInfografic(page: $page) {
        id
        title
        description
        infograficUrl
        }
    }
`)

export const GET_BY_ID_INFOGRAFIC = gql(`
    query FindOneInfografic($findOneInfograficId: Int!) {
        findOneInfografic(id: $findOneInfograficId) {
        id
        title
        description
        infograficUrl
        }
    }
`)

export const CREATE_INFOGRAFIC = gql(`
    mutation CreateInfografic($createInfograficInput: CreateInfograficInput!) {
        createInfografic(createInfograficInput: $createInfograficInput) {
        title
        description
        infograficUrl
        }
    }
`)

export const UPDATE_INFOGRAFIC = gql(`
    mutation UpdateInfografic($updateInfograficInput: UpdateInfograficInput!) {
        updateInfografic(updateInfograficInput: $updateInfograficInput) {
        id
        title
        description
        infograficUrl
        }
    }
`)

export const DELETE_INFOGRAFIC = gql(`
    mutation RemoveInfografic($removeInfograficId: Int!) {
        removeInfografic(id: $removeInfograficId) {
        id
        }
    }
`)

export const GET_BY_LIMIT_INFOGRAFIC = gql(`
    query FindByLimitInfografic($limit: Int!) {
        findByLimitInfografic(limit: $limit) {
        id
        title
        infograficUrl
        description
        }
    }
`)

export const GET_COUNT_INFOGRAFIC = gql(`
    query countInfograficQuery {
        countInfografic
    }
`)
