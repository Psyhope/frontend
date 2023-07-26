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
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type AcceptBooking = {
  bookingDate?: InputMaybe<Scalars['DateTime']['input']>
  bookingTime?: InputMaybe<Scalars['String']['input']>
  bookingTime2?: InputMaybe<Scalars['String']['input']>
  bookingTopic?: InputMaybe<Array<BookingTopic>>
  closestKnown?: InputMaybe<Scalars['Boolean']['input']>
  counselorType?: InputMaybe<CounselorType>
  id: Scalars['Int']['input']
  number_1?: InputMaybe<Scalars['Int']['input']>
  number_2?: InputMaybe<Scalars['Int']['input']>
  number_3?: InputMaybe<Scalars['Int']['input']>
  number_4?: InputMaybe<Scalars['Int']['input']>
  number_5?: InputMaybe<Scalars['Int']['input']>
  number_6?: InputMaybe<Scalars['Int']['input']>
  number_7?: InputMaybe<Scalars['Int']['input']>
  number_8?: InputMaybe<Scalars['Int']['input']>
  number_9?: InputMaybe<Scalars['Int']['input']>
  number_10?: InputMaybe<Scalars['Int']['input']>
  number_11?: InputMaybe<Scalars['Int']['input']>
  number_12?: InputMaybe<Scalars['Int']['input']>
  reasonApply?: InputMaybe<Scalars['String']['input']>
}

export type Account = {
  __typename?: 'Account'
  faculty: Scalars['String']['output']
  gender: Scalars['String']['output']
  major: Scalars['String']['output']
  role: Scalars['String']['output']
}

export type AdminAccBooking = {
  bookingDate?: InputMaybe<Scalars['DateTime']['input']>
  bookingTime?: InputMaybe<Scalars['String']['input']>
  bookingTime2?: InputMaybe<Scalars['String']['input']>
  bookingTopic?: InputMaybe<Array<BookingTopic>>
  closestKnown?: InputMaybe<Scalars['Boolean']['input']>
  counselorType?: InputMaybe<CounselorType>
  id: Scalars['Int']['input']
  number_1?: InputMaybe<Scalars['Int']['input']>
  number_2?: InputMaybe<Scalars['Int']['input']>
  number_3?: InputMaybe<Scalars['Int']['input']>
  number_4?: InputMaybe<Scalars['Int']['input']>
  number_5?: InputMaybe<Scalars['Int']['input']>
  number_6?: InputMaybe<Scalars['Int']['input']>
  number_7?: InputMaybe<Scalars['Int']['input']>
  number_8?: InputMaybe<Scalars['Int']['input']>
  number_9?: InputMaybe<Scalars['Int']['input']>
  number_10?: InputMaybe<Scalars['Int']['input']>
  number_11?: InputMaybe<Scalars['Int']['input']>
  number_12?: InputMaybe<Scalars['Int']['input']>
  reasonApply?: InputMaybe<Scalars['String']['input']>
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

export type Booking = {
  __typename?: 'Booking'
  /** The time of the booking */
  bookingDate: Scalars['DateTime']['output']
  bookingDay: Scalars['String']['output']
  /** The time of the booking */
  bookingTime: Scalars['String']['output']
  /** The time of the booking */
  bookingTime2: Scalars['String']['output']
  bookingTopic: Array<BookingTopic>
  closestKnown: Scalars['Boolean']['output']
  councelor?: Maybe<Councelor>
  counselorType: CounselorType
  id: Scalars['Int']['output']
  /** The reason for applying for a counseling session */
  reasonApply: Scalars['String']['output']
  user?: Maybe<User>
  userId: Scalars['String']['output']
}

export type Councelor = {
  __typename?: 'Councelor'
  counselorType: CounselorType
  id: Scalars['Int']['output']
  isOn: Scalars['Boolean']['output']
  user?: Maybe<User>
  userId: Scalars['String']['output']
}

export type CouncelorSchedule = {
  __typename?: 'CouncelorSchedule'
  id: Scalars['Int']['output']
  workDay: Scalars['String']['output']
  workTime: Array<Scalars['String']['output']>
}

export type CounselingLog = {
  __typename?: 'CounselingLog'
  bookingId: Scalars['Int']['output']
  client: User
  detail: Scalars['String']['output']
  id: Scalars['Int']['output']
  time: Scalars['DateTime']['output']
  userId: Scalars['String']['output']
}

/** The type of counselor, either PSYHOPE or FACULTY */
export enum CounselorType {
  Faculty = 'FACULTY',
  Psyhope = 'PSYHOPE',
}

export type CreateArticleInput = {
  content: Scalars['String']['input']
  posterUrl: Scalars['String']['input']
  thumbnailUrl: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type CreateBookingInput = {
  bookingDate: Scalars['DateTime']['input']
  bookingTime: Scalars['String']['input']
  bookingTime2: Scalars['String']['input']
  bookingTopic: Array<BookingTopic>
  closestKnown: Scalars['Boolean']['input']
  counselorType: CounselorType
  number_1: Scalars['Int']['input']
  number_2: Scalars['Int']['input']
  number_3: Scalars['Int']['input']
  number_4: Scalars['Int']['input']
  number_5: Scalars['Int']['input']
  number_6: Scalars['Int']['input']
  number_7: Scalars['Int']['input']
  number_8: Scalars['Int']['input']
  number_9: Scalars['Int']['input']
  number_10: Scalars['Int']['input']
  number_11: Scalars['Int']['input']
  number_12: Scalars['Int']['input']
  reasonApply: Scalars['String']['input']
}

export type CreateCounselingLogInput = {
  bookingId: Scalars['Int']['input']
  detail: Scalars['String']['input']
  time: Scalars['DateTime']['input']
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

export type GetBookingFilterDto = {
  day?: InputMaybe<Scalars['DateTime']['input']>
  dayTime?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<StatusRequest>
}

export type GetBookingFilterGeneralDto = {
  counselorType?: InputMaybe<CounselorType>
  day?: InputMaybe<Scalars['DateTime']['input']>
}

export type GetScheduleDto = {
  counselorType: CounselorType
  day: Scalars['DateTime']['input']
  dayTime: Scalars['String']['input']
  dayTime2: Scalars['String']['input']
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
  acceptBooking?: Maybe<Booking>
  adminAcc?: Maybe<Booking>
  createArticle: Article
  createBooking?: Maybe<Booking>
  createCounselingLog?: Maybe<CounselingLog>
  createEvent: Event
  createInfografic: Infografic
  rejectBooking?: Maybe<Booking>
  removeArticle: Article
  removeEvent: Event
  removeInfografic: Infografic
  rescheduleBooking: Booking
  updateArticle: Article
  updateEvent: Event
  updateInfografic: Infografic
}

export type MutationAcceptBookingArgs = {
  accBookingInput: AcceptBooking
}

export type MutationAdminAccArgs = {
  adminAccInput: AdminAccBooking
}

export type MutationCreateArticleArgs = {
  createArticleInput: CreateArticleInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateCounselingLogArgs = {
  createCounselingLogInput: CreateCounselingLogInput
}

export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput
}

export type MutationCreateInfograficArgs = {
  createInfograficInput: CreateInfograficInput
}

export type MutationRejectBookingArgs = {
  rejectBookingInput: RejectBookingDto
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

export type MutationRescheduleBookingArgs = {
  rescheduleBookingInput: UpdateBookingInput
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
  booking?: Maybe<Array<Booking>>
  bookingFilter?: Maybe<Array<Booking>>
  bookingFilterGeneral?: Maybe<Array<Booking>>
  counselingLog?: Maybe<Array<CounselingLog>>
  countArticle: Scalars['Float']['output']
  countEvent: Scalars['Float']['output']
  countInfografic: Scalars['Float']['output']
  findAllArticle: Array<Article>
  findAllEvent: Array<Event>
  findAllInfografic: Array<Infografic>
  findById: Event
  findByLimitArticle: Array<Article>
  findByLimitEvent: Array<Event>
  findByLimitInfografic: Array<Infografic>
  findByPageArticle: Array<Article>
  findByPageEvent: Array<Event>
  findByPageInfografic: Array<Infografic>
  findOneArticle: Article
  findOneEvent: Event
  findOneInfografic: Infografic
  schedule?: Maybe<Array<CouncelorSchedule>>
  user: User
}

export type QueryBookingFilterArgs = {
  getBookingFilter: GetBookingFilterDto
}

export type QueryBookingFilterGeneralArgs = {
  getBookingFilterGeneral: GetBookingFilterGeneralDto
}

export type QueryFindByIdArgs = {
  page: Scalars['Int']['input']
}

export type QueryFindByLimitArticleArgs = {
  limit: Scalars['Int']['input']
}

export type QueryFindByLimitEventArgs = {
  limit: Scalars['Int']['input']
}

export type QueryFindByLimitInfograficArgs = {
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

export type QueryScheduleArgs = {
  getScheduleDTO: GetScheduleDto
}

export type RejectBookingDto = {
  id: Scalars['Int']['input']
}

export enum StatusRequest {
  Accepted = 'ACCEPTED',
  NeedAccepted = 'NEED_ACCEPTED',
}

export type UpdateArticleInput = {
  content: Scalars['String']['input']
  id: Scalars['Int']['input']
  posterUrl: Scalars['String']['input']
  thumbnailUrl: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type UpdateBookingInput = {
  bookingDate: Scalars['DateTime']['input']
  bookingTime: Scalars['String']['input']
  bookingTime2: Scalars['String']['input']
  bookingTopic: Array<BookingTopic>
  closestKnown: Scalars['Boolean']['input']
  counselorType?: InputMaybe<CounselorType>
  id: Scalars['Int']['input']
  number_1?: InputMaybe<Scalars['Int']['input']>
  number_2?: InputMaybe<Scalars['Int']['input']>
  number_3?: InputMaybe<Scalars['Int']['input']>
  number_4?: InputMaybe<Scalars['Int']['input']>
  number_5?: InputMaybe<Scalars['Int']['input']>
  number_6?: InputMaybe<Scalars['Int']['input']>
  number_7?: InputMaybe<Scalars['Int']['input']>
  number_8?: InputMaybe<Scalars['Int']['input']>
  number_9?: InputMaybe<Scalars['Int']['input']>
  number_10?: InputMaybe<Scalars['Int']['input']>
  number_11?: InputMaybe<Scalars['Int']['input']>
  number_12?: InputMaybe<Scalars['Int']['input']>
  reasonApply: Scalars['String']['input']
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
  bookings: Array<Booking>
  fullname: Scalars['String']['output']
  id: Scalars['String']['output']
  igAcc?: Maybe<Scalars['String']['output']>
  isOnboarded: Scalars['Boolean']['output']
  lineAcc?: Maybe<Scalars['String']['output']>
  username: Scalars['String']['output']
}

export enum BookingTopic {
  Topic_1 = 'TOPIC_1',
  Topic_2 = 'TOPIC_2',
  Topic_3 = 'TOPIC_3',
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
  findByLimitArticle: Array<{
    __typename?: 'Article'
    id: number
    title: string
    content: string
    posterUrl: string
    thumbnailUrl: string
  }>
}

export type CountArticleQueryQueryVariables = Exact<{ [key: string]: never }>

export type CountArticleQueryQuery = {
  __typename?: 'Query'
  countArticle: number
}

export type QueryQueryVariables = Exact<{
  getScheduleDto: GetScheduleDto
}>

export type QueryQuery = {
  __typename?: 'Query'
  schedule?: Array<{
    __typename?: 'CouncelorSchedule'
    id: number
    workDay: string
    workTime: Array<string>
  }> | null
}

export type BookingFilterGeneralQueryVariables = Exact<{
  getBookingFilterGeneral: GetBookingFilterGeneralDto
}>

export type BookingFilterGeneralQuery = {
  __typename?: 'Query'
  bookingFilterGeneral?: Array<{
    __typename?: 'Booking'
    bookingTime: string
    bookingTime2: string
  }> | null
}

export type CreateBookingMutationVariables = Exact<{
  createBookingInput: CreateBookingInput
}>

export type CreateBookingMutation = {
  __typename?: 'Mutation'
  createBooking?: {
    __typename?: 'Booking'
    id: number
    bookingTime: string
    bookingTime2: string
    bookingDate: any
    bookingDay: string
    userId: string
    counselorType: CounselorType
    bookingTopic: Array<BookingTopic>
    reasonApply: string
    closestKnown: boolean
  } | null
}

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

export type FindByLimitEventQueryVariables = Exact<{
  limit: Scalars['Int']['input']
}>

export type FindByLimitEventQuery = {
  __typename?: 'Query'
  findByLimitEvent: Array<{
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

export type CountEventQueryQueryVariables = Exact<{ [key: string]: never }>

export type CountEventQueryQuery = { __typename?: 'Query'; countEvent: number }

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

export type FindByLimitInfograficQueryVariables = Exact<{
  limit: Scalars['Int']['input']
}>

export type FindByLimitInfograficQuery = {
  __typename?: 'Query'
  findByLimitInfografic: Array<{
    __typename?: 'Infografic'
    id: number
    title: string
    infograficUrl: string
    description: string
  }>
}

export type CountInfograficQueryQueryVariables = Exact<{ [key: string]: never }>

export type CountInfograficQueryQuery = {
  __typename?: 'Query'
  countInfografic: number
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
export const CountArticleQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'countArticleQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'countArticle' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CountArticleQueryQuery,
  CountArticleQueryQueryVariables
>
export const QueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Query' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'getScheduleDto' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GetScheduleDTO' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'schedule' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'getScheduleDTO' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'getScheduleDto' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'workDay' } },
                { kind: 'Field', name: { kind: 'Name', value: 'workTime' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>
export const BookingFilterGeneralDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'BookingFilterGeneral' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'getBookingFilterGeneral' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'GetBookingFilterGeneralDto' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'bookingFilterGeneral' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'getBookingFilterGeneral' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'getBookingFilterGeneral' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'bookingTime' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bookingTime2' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BookingFilterGeneralQuery,
  BookingFilterGeneralQueryVariables
>
export const CreateBookingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateBooking' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createBookingInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateBookingInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createBooking' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createBookingInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createBookingInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bookingTime' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bookingTime2' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bookingDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'bookingDay' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'counselorType' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'bookingTopic' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reasonApply' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'closestKnown' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateBookingMutation,
  CreateBookingMutationVariables
>
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
export const FindByLimitEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindByLimitEvent' },
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
            name: { kind: 'Name', value: 'findByLimitEvent' },
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
  FindByLimitEventQuery,
  FindByLimitEventQueryVariables
>
export const CountEventQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'countEventQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'countEvent' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CountEventQueryQuery,
  CountEventQueryQueryVariables
>
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
export const FindByLimitInfograficDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'FindByLimitInfografic' },
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
            name: { kind: 'Name', value: 'findByLimitInfografic' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'infograficUrl' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  FindByLimitInfograficQuery,
  FindByLimitInfograficQueryVariables
>
export const CountInfograficQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'countInfograficQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'countInfografic' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CountInfograficQueryQuery,
  CountInfograficQueryQueryVariables
>
