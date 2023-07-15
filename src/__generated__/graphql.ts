/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Account = {
  __typename?: 'Account'
  faculty: Scalars['String']['output']
  gender: Scalars['String']['output']
  major: Scalars['String']['output']
  role: Scalars['String']['output']
}

export type Article = {
  __typename?: 'Article'
  content: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  posterUrl: Scalars['String']['output']
  thumbnailUrl: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type CreateArticleInput = {
  content: Scalars['String']['input']
  posterUrl: Scalars['String']['input']
  thumbnailUrl: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type CreateEventInput = {
  date: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  location: Scalars['String']['input']
  posterUrl: Scalars['String']['input']
  time: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type CreateInfograficInput = {
  description: Scalars['String']['input']
  infograficUrl: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type Event = {
  __typename?: 'Event'
  createdAt: Scalars['DateTime']['output']
  date: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  location: Scalars['String']['output']
  posterUrl: Scalars['String']['output']
  time: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type Infografic = {
  __typename?: 'Infografic'
  createdAt: Scalars['DateTime']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  infograficUrl: Scalars['String']['output']
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createArticle: Article
  createEvent: Event
  createInfografic: Infografic
  removeArticle: Article
  removeEvent: Event
  removeInfografic: Infografic
  updateArticle: Article
  updateEvent: Event
  updateInfografic: Infografic
}

export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput
}

export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput
}

export type MutationCreateInfograficArgs = {
  createInfograficInput: CreateInfograficInput
}

export type MutationRemoveArticleArgs = {
  id: Scalars['Int']['input']
}

export type MutationRemoveEventArgs = {
  id: Scalars['Int']['input']
}

export type MutationRemoveInfograficArgs = {
  id: Scalars['Int']['input']
}

export type MutationUpdateArticleArgs = {
  updateArticleInput: UpdateArticleInput
}

export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput
}

export type MutationUpdateInfograficArgs = {
  updateInfograficInput: UpdateInfograficInput
}

export type Query = {
  __typename?: 'Query'
  countArticle: Scalars['Float']['output']
  findAllArticle: Array<Article>
  findAllEvent: Array<Event>
  findAllInfografic: Array<Infografic>
  findByLimitArticle: Article
  findByPageArticle: Array<Article>
  findByPageEvent: Array<Event>
  findByPageInfografic: Array<Infografic>
  findOneArticle: Article
  findOneEvent: Event
  findOneInfografic: Infografic
  user: User
}

export type QueryFindByLimitArticleArgs = {
  limit: Scalars['Int']['input']
}

export type QueryFindByPageArticleArgs = {
  page: Scalars['Int']['input']
}

export type QueryFindByPageEventArgs = {
  page: Scalars['Int']['input']
}

export type QueryFindByPageInfograficArgs = {
  page: Scalars['Int']['input']
}

export type QueryFindOneArticleArgs = {
  id: Scalars['Int']['input']
}

export type QueryFindOneEventArgs = {
  id: Scalars['Int']['input']
}

export type QueryFindOneInfograficArgs = {
  id: Scalars['Int']['input']
}

export type UpdateArticleInput = {
  content: Scalars['String']['input']
  id: Scalars['Int']['input']
  posterUrl: Scalars['String']['input']
  thumbnailUrl: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type UpdateEventInput = {
  date: Scalars['DateTime']['input']
  description: Scalars['String']['input']
  id: Scalars['Int']['input']
  location: Scalars['String']['input']
  posterUrl: Scalars['String']['input']
  time: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type UpdateInfograficInput = {
  description: Scalars['String']['input']
  id: Scalars['Int']['input']
  infograficUrl: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  account: Account
  fullname: Scalars['String']['output']
  id: Scalars['String']['output']
  isOnboarded: Scalars['Boolean']['output']
  username: Scalars['String']['output']
}

export type FindAllArticleQueryVariables = Exact<{ [key: string]: never }>

export type FindAllArticleQuery = {
  __typename?: 'Query'
  findAllArticle: Array<{
    __typename?: 'Article'
    id: number
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }>
}

export type FindByPageArticleQueryVariables = Exact<{
  page: Scalars['Int']['input']
}>

export type FindByPageArticleQuery = {
  __typename?: 'Query'
  findByPageArticle: Array<{
    __typename?: 'Article'
    id: number
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }>
}

export type FindOneArticleQueryVariables = Exact<{
  findOneArticleId: Scalars['Int']['input']
}>

export type FindOneArticleQuery = {
  __typename?: 'Query'
  findOneArticle: {
    __typename?: 'Article'
    id: number
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }
}

export type CreateArticleMutationVariables = Exact<{
  createArticleInput: CreateArticleInput
}>

export type CreateArticleMutation = {
  __typename?: 'Mutation'
  createArticle: {
    __typename?: 'Article'
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }
}

export type UpdateArticleMutationVariables = Exact<{
  updateArticleInput: UpdateArticleInput
}>

export type UpdateArticleMutation = {
  __typename?: 'Mutation'
  updateArticle: {
    __typename?: 'Article'
    id: number
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }
}

export type RemoveArticleMutationVariables = Exact<{
  removeArticleId: Scalars['Int']['input']
}>

export type RemoveArticleMutation = {
  __typename?: 'Mutation'
  removeArticle: { __typename?: 'Article'; id: number }
}

export type FindByLimitArticleQueryVariables = Exact<{
  limit: Scalars['Int']['input']
}>

export type FindByLimitArticleQuery = {
  __typename?: 'Query'
  findByLimitArticle: {
    __typename?: 'Article'
    id: number
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }
}

export type QueryQueryVariables = Exact<{ [key: string]: never }>

export type QueryQuery = { __typename?: 'Query'; countArticle: number }

export type FindAllEventQueryVariables = Exact<{ [key: string]: never }>

export type FindAllEventQuery = {
  __typename?: 'Query'
  findAllEvent: Array<{
    __typename?: 'Event'
    id: number
    title: string
    location: string
    date: any
    time: string
    posterUrl: string
    description: string
  }>
}

export type FindByPageEventQueryVariables = Exact<{
  page: Scalars['Int']['input']
}>

export type FindByPageEventQuery = {
  __typename?: 'Query'
  findByPageEvent: Array<{
    __typename?: 'Event'
    id: number
    title: string
    date: any
    location: string
    time: string
    description: string
    posterUrl: string
  }>
}

export type FindOneEventQueryVariables = Exact<{
  findOneEventId: Scalars['Int']['input']
}>

export type FindOneEventQuery = {
  __typename?: 'Query'
  findOneEvent: {
    __typename?: 'Event'
    id: number
    title: string
    date: any
    location: string
    time: string
    description: string
    posterUrl: string
  }
}

export type CreateEventMutationVariables = Exact<{
  createEventInput: CreateEventInput
}>

export type CreateEventMutation = {
  __typename?: 'Mutation'
  createEvent: {
    __typename?: 'Event'
    title: string
    date: any
    location: string
    time: string
    description: string
    posterUrl: string
  }
}

export type UpdateEventMutationVariables = Exact<{
  updateEventInput: UpdateEventInput
}>

export type UpdateEventMutation = {
  __typename?: 'Mutation'
  updateEvent: {
    __typename?: 'Event'
    id: number
    date: any
    title: string
    location: string
    time: string
    description: string
    posterUrl: string
  }
}

export type RemoveEventMutationVariables = Exact<{
  removeEventId: Scalars['Int']['input']
}>

export type RemoveEventMutation = {
  __typename?: 'Mutation'
  removeEvent: { __typename?: 'Event'; id: number }
}

export type FindAllInfograficQueryVariables = Exact<{ [key: string]: never }>

export type FindAllInfograficQuery = {
  __typename?: 'Query'
  findAllInfografic: Array<{
    __typename?: 'Infografic'
    id: number
    title: string
    description: string
    infograficUrl: string
  }>
}

export type FindByPageInfograficQueryVariables = Exact<{
  page: Scalars['Int']['input']
}>

export type FindByPageInfograficQuery = {
  __typename?: 'Query'
  findByPageInfografic: Array<{
    __typename?: 'Infografic'
    id: number
    title: string
    description: string
    infograficUrl: string
  }>
}

export type FindOneInfograficQueryVariables = Exact<{
  findOneInfograficId: Scalars['Int']['input']
}>

export type FindOneInfograficQuery = {
  __typename?: 'Query'
  findOneInfografic: {
    __typename?: 'Infografic'
    id: number
    title: string
    description: string
    infograficUrl: string
  }
}

export type CreateInfograficMutationVariables = Exact<{
  createInfograficInput: CreateInfograficInput
}>

export type CreateInfograficMutation = {
  __typename?: 'Mutation'
  createInfografic: {
    __typename?: 'Infografic'
    title: string
    description: string
    infograficUrl: string
  }
}

export type UpdateInfograficMutationVariables = Exact<{
  updateInfograficInput: UpdateInfograficInput
}>

export type UpdateInfograficMutation = {
  __typename?: 'Mutation'
  updateInfografic: {
    __typename?: 'Infografic'
    id: number
    title: string
    description: string
    infograficUrl: string
  }
}

export type RemoveInfograficMutationVariables = Exact<{
  removeInfograficId: Scalars['Int']['input']
}>

export type RemoveInfograficMutation = {
  __typename?: 'Mutation'
  removeInfografic: { __typename?: 'Infografic'; id: number }
}

export const FindAllArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindAllArticle' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findAllArticle' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindAllArticleQuery, FindAllArticleQueryVariables>
export const FindByPageArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindByPageArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findByPageArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindByPageArticleQuery,
  FindByPageArticleQueryVariables
>
export const FindOneArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindOneArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'findOneArticleId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findOneArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'findOneArticleId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindOneArticleQuery, FindOneArticleQueryVariables>
export const CreateArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createArticleInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateArticleInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createArticleInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createArticleInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateArticleMutation,
  CreateArticleMutationVariables
>
export const UpdateArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateArticleInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateArticleInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateArticleInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateArticleInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateArticleMutation,
  UpdateArticleMutationVariables
>
export const RemoveArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'removeArticleId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'removeArticleId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveArticleMutation,
  RemoveArticleMutationVariables
>
export const FindByLimitArticleDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindByLimitArticle' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findByLimitArticle' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'thumbnailUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindByLimitArticleQuery,
  FindByLimitArticleQueryVariables
>
export const QueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Query' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'countArticle' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>
export const FindAllEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindAllEvent' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findAllEvent' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindAllEventQuery, FindAllEventQueryVariables>
export const FindByPageEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindByPageEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findByPageEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindByPageEventQuery,
  FindByPageEventQueryVariables
>
export const FindOneEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindOneEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'findOneEventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findOneEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'findOneEventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FindOneEventQuery, FindOneEventQueryVariables>
export const CreateEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createEventInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateEventInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createEventInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createEventInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>
export const UpdateEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateEventInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateEventInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateEventInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateEventInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'location' } },
                { kind: 'Field', name: { kind: 'Name', value: 'time' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'posterUrl' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateEventMutation, UpdateEventMutationVariables>
export const RemoveEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'removeEventId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeEvent' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'removeEventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveEventMutation, RemoveEventMutationVariables>
export const FindAllInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindAllInfografic' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findAllInfografic' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'infograficUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindAllInfograficQuery,
  FindAllInfograficQueryVariables
>
export const FindByPageInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindByPageInfografic' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'page' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findByPageInfografic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'page' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'page' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'infograficUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindByPageInfograficQuery,
  FindByPageInfograficQueryVariables
>
export const FindOneInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindOneInfografic' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'findOneInfograficId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'findOneInfografic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'findOneInfograficId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'infograficUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindOneInfograficQuery,
  FindOneInfograficQueryVariables
>
export const CreateInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateInfografic' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createInfograficInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateInfograficInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createInfografic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createInfograficInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createInfograficInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'infograficUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateInfograficMutation,
  CreateInfograficMutationVariables
>
export const UpdateInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateInfografic' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'updateInfograficInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateInfograficInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateInfografic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'updateInfograficInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'updateInfograficInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'infograficUrl' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateInfograficMutation,
  UpdateInfograficMutationVariables
>
export const RemoveInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RemoveInfografic' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'removeInfograficId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'removeInfografic' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'removeInfograficId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveInfograficMutation,
  RemoveInfograficMutationVariables
>
