import { gql } from '../__generated__'

export const GET_ALL_ARTICLE = gql(`
    query FindAllArticle {
        findAllArticle {
        id
        title
        content
        posterUrl
        thumbnailUrl
        }
    }
`)

export const GET_BY_PAGE_ARTICLE = gql(`
    query FindByPageArticle($page: Int!) {
        findByPageArticle(page: $page) {
        id
        title
        content
        posterUrl
        thumbnailUrl
        }
    }
`)

export const GET_BY_ID_ARTICLE = gql(`
    query FindOneArticle($findOneArticleId: Int!) {
        findOneArticle(id: $findOneArticleId) {
        id
        title
        content
        posterUrl
        thumbnailUrl
        }
    }
`)

export const CREATE_ARTICLE = gql(`
    mutation CreateArticle($createArticleInput: CreateArticleInput!) {
        createArticle(createArticleInput: $createArticleInput) {
        title
        content
        posterUrl
        thumbnailUrl
        }
    }
`)

export const UPDATE_ATRICLE = gql(`
    mutation UpdateArticle($updateArticleInput: UpdateArticleInput!) {
        updateArticle(updateArticleInput: $updateArticleInput) {
        id
        title
        content
        posterUrl
        thumbnailUrl
        }
    }
`)

export const DELETE_ARTICLE = gql(`
    mutation RemoveArticle($removeArticleId: Int!) {
        removeArticle(id: $removeArticleId) {
        id
        }
    }
`)

export const GET_BY_LIMIT_ARTICLE = gql(`
    query FindByLimitArticle($limit: Int!) {
        findByLimitArticle(limit: $limit) {
        id
        title
        content
        posterUrl
        thumbnailUrl
        }
    }
`)

export const GET_COUNT_ARTICLE = gql(`
    query countArticleQuery {
        countArticle
    }
`)
