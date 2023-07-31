/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query FindAllArticle {\n        findAllArticle {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n": types.FindAllArticleDocument,
    "\n    query FindByPageArticle($page: Int!) {\n        findByPageArticle(page: $page) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n": types.FindByPageArticleDocument,
    "\n    query FindOneArticle($findOneArticleId: Int!) {\n        findOneArticle(id: $findOneArticleId) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n": types.FindOneArticleDocument,
    "\n    mutation CreateArticle($createArticleInput: CreateArticleInput!) {\n        createArticle(createArticleInput: $createArticleInput) {\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n": types.CreateArticleDocument,
    "\n    mutation UpdateArticle($updateArticleInput: UpdateArticleInput!) {\n        updateArticle(updateArticleInput: $updateArticleInput) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n": types.UpdateArticleDocument,
    "\n    mutation RemoveArticle($removeArticleId: Int!) {\n        removeArticle(id: $removeArticleId) {\n        id\n        }\n    }\n": types.RemoveArticleDocument,
    "\n    query FindByLimitArticle($limit: Int!) {\n        findByLimitArticle(limit: $limit) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n": types.FindByLimitArticleDocument,
    "\n    query countArticleQuery {\n        countArticle\n    }\n": types.CountArticleQueryDocument,
    "\n    query Query($getScheduleDto: GetScheduleDTO!) {\n        schedule(getScheduleDTO: $getScheduleDto) {\n        id\n        workDay\n        workTime\n        }\n    }\n  ": types.QueryDocument,
    "query BookingFilterGeneral($getBookingFilterGeneral: GetBookingFilterGeneralDto!) {\n    bookingFilterGeneral(getBookingFilterGeneral: $getBookingFilterGeneral) {\n      bookingTime\n      bookingTime2\n    }\n  }\n  ": types.BookingFilterGeneralDocument,
    "\n  mutation CreateBooking($createBookingInput: CreateBookingInput!) {\n    createBooking(createBookingInput: $createBookingInput) {\n      id\n      bookingTime\n      bookingTime2\n      bookingDate\n      bookingDay\n      userId\n      counselorType\n      bookingTopic\n      reasonApply\n      closestKnown\n    }\n  }\n": types.CreateBookingDocument,
    "\n  query BookingClient {\n    bookingClient {\n      id\n      bookingTime\n      bookingTime2\n      bookingDate\n      bookingDay\n      isAccepted\n      isTerminated\n      adminAcc\n      counselorType\n      councelor {\n        userId\n        user {\n          fullname\n        }\n      }\n    }\n  }\n": types.BookingClientDocument,
    "\nmutation RescheduleBooking($rescheduleBookingInput: UpdateBookingInput!) {\n  rescheduleBooking(rescheduleBookingInput: $rescheduleBookingInput) {\n    id\n  }\n}": types.RescheduleBookingDocument,
    "\n  query BookingFilter($getBookingFilter: GetBookingFilterDto!) {\n  bookingFilter(getBookingFilter: $getBookingFilter) {\n    id\n  user {\n      username\n      account {\n        faculty\n        major\n      }\n    }\n    councelor {\n      user {\n        fullname\n        account {\n          faculty\n          major\n        }\n      }\n      counselorType\n    }\n    bookingDay\n    bookingDate\n    bookingTime2\n    bookingTime\n    isAccepted\n    isTerminated\n    adminAcc  \n  }\n}\n": types.BookingFilterDocument,
    "\nmutation AdminAcc($adminAccInput: AdminAccBooking!) {\n  adminAcc(adminAccInput: $adminAccInput) {\n    id\n    adminAcc\n  }\n}\n": types.AdminAccDocument,
    "\nquery AdminRundown($getBookingFilter: GetAdminRundown!) {\n  adminRundown(getBookingFilter: $getBookingFilter) {\n  councelor {\n    user {\n      fullname\n    }\n  }  \n  user {\n    fullname\n  }\n  bookingTime\n  bookingDay\n  bookingDate\n  }\n}\n": types.AdminRundownDocument,
    "\n    query CounselorFilter($getCounselorDto: GetCouncelorFilter!) {\n  counselorFilter(getCounselorDto: $getCounselorDto) {\n    userId\n    Booking {\n      bookingDay\n      bookingTime\n      user {\n        username\n      }\n    }\n    user {\n      fullname\n    }\n    counselorType\n  }\n}\n": types.CounselorFilterDocument,
    "\n    query FindAllEvent {\n        findAllEvent {\n        id\n        title\n        location\n        date\n        time\n        posterUrl\n        description\n        }\n    }\n": types.FindAllEventDocument,
    "\n    query FindByPageEvent($page: Int!) {\n        findByPageEvent(page: $page) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n": types.FindByPageEventDocument,
    "\n    query FindOneEvent($findOneEventId: Int!) {\n        findOneEvent(id: $findOneEventId) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n": types.FindOneEventDocument,
    "\n    mutation CreateEvent($createEventInput: CreateEventInput!) {\n        createEvent(createEventInput: $createEventInput) {\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n": types.CreateEventDocument,
    "\n    mutation UpdateEvent($updateEventInput: UpdateEventInput!) {\n        updateEvent(updateEventInput: $updateEventInput) {\n        id\n        date\n        title\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n": types.UpdateEventDocument,
    "\n    mutation RemoveEvent($removeEventId: Int!) {\n        removeEvent(id: $removeEventId) {\n        id\n        }\n    }\n": types.RemoveEventDocument,
    "\n    query FindByLimitEvent($limit: Int!) {\n        findByLimitEvent(limit: $limit) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n": types.FindByLimitEventDocument,
    "\n    query countEventQuery {\n        countEvent\n    }\n": types.CountEventQueryDocument,
    "\n    query FindAllInfografic {\n        findAllInfografic {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n": types.FindAllInfograficDocument,
    "\n    query FindByPageInfografic($page: Int!) {\n        findByPageInfografic(page: $page) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n": types.FindByPageInfograficDocument,
    "\n    query FindOneInfografic($findOneInfograficId: Int!) {\n        findOneInfografic(id: $findOneInfograficId) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n": types.FindOneInfograficDocument,
    "\n    mutation CreateInfografic($createInfograficInput: CreateInfograficInput!) {\n        createInfografic(createInfograficInput: $createInfograficInput) {\n        title\n        description\n        infograficUrl\n        }\n    }\n": types.CreateInfograficDocument,
    "\n    mutation UpdateInfografic($updateInfograficInput: UpdateInfograficInput!) {\n        updateInfografic(updateInfograficInput: $updateInfograficInput) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n": types.UpdateInfograficDocument,
    "\n    mutation RemoveInfografic($removeInfograficId: Int!) {\n        removeInfografic(id: $removeInfograficId) {\n        id\n        }\n    }\n": types.RemoveInfograficDocument,
    "\n    query FindByLimitInfografic($limit: Int!) {\n        findByLimitInfografic(limit: $limit) {\n        id\n        title\n        infograficUrl\n        description\n        }\n    }\n": types.FindByLimitInfograficDocument,
    "\n    query countInfograficQuery {\n        countInfografic\n    }\n": types.CountInfograficQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindAllArticle {\n        findAllArticle {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"): (typeof documents)["\n    query FindAllArticle {\n        findAllArticle {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindByPageArticle($page: Int!) {\n        findByPageArticle(page: $page) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"): (typeof documents)["\n    query FindByPageArticle($page: Int!) {\n        findByPageArticle(page: $page) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindOneArticle($findOneArticleId: Int!) {\n        findOneArticle(id: $findOneArticleId) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"): (typeof documents)["\n    query FindOneArticle($findOneArticleId: Int!) {\n        findOneArticle(id: $findOneArticleId) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateArticle($createArticleInput: CreateArticleInput!) {\n        createArticle(createArticleInput: $createArticleInput) {\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"): (typeof documents)["\n    mutation CreateArticle($createArticleInput: CreateArticleInput!) {\n        createArticle(createArticleInput: $createArticleInput) {\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateArticle($updateArticleInput: UpdateArticleInput!) {\n        updateArticle(updateArticleInput: $updateArticleInput) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateArticle($updateArticleInput: UpdateArticleInput!) {\n        updateArticle(updateArticleInput: $updateArticleInput) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveArticle($removeArticleId: Int!) {\n        removeArticle(id: $removeArticleId) {\n        id\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveArticle($removeArticleId: Int!) {\n        removeArticle(id: $removeArticleId) {\n        id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindByLimitArticle($limit: Int!) {\n        findByLimitArticle(limit: $limit) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"): (typeof documents)["\n    query FindByLimitArticle($limit: Int!) {\n        findByLimitArticle(limit: $limit) {\n        id\n        title\n        content\n        posterUrl\n        thumbnailUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query countArticleQuery {\n        countArticle\n    }\n"): (typeof documents)["\n    query countArticleQuery {\n        countArticle\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Query($getScheduleDto: GetScheduleDTO!) {\n        schedule(getScheduleDTO: $getScheduleDto) {\n        id\n        workDay\n        workTime\n        }\n    }\n  "): (typeof documents)["\n    query Query($getScheduleDto: GetScheduleDTO!) {\n        schedule(getScheduleDTO: $getScheduleDto) {\n        id\n        workDay\n        workTime\n        }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query BookingFilterGeneral($getBookingFilterGeneral: GetBookingFilterGeneralDto!) {\n    bookingFilterGeneral(getBookingFilterGeneral: $getBookingFilterGeneral) {\n      bookingTime\n      bookingTime2\n    }\n  }\n  "): (typeof documents)["query BookingFilterGeneral($getBookingFilterGeneral: GetBookingFilterGeneralDto!) {\n    bookingFilterGeneral(getBookingFilterGeneral: $getBookingFilterGeneral) {\n      bookingTime\n      bookingTime2\n    }\n  }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateBooking($createBookingInput: CreateBookingInput!) {\n    createBooking(createBookingInput: $createBookingInput) {\n      id\n      bookingTime\n      bookingTime2\n      bookingDate\n      bookingDay\n      userId\n      counselorType\n      bookingTopic\n      reasonApply\n      closestKnown\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBooking($createBookingInput: CreateBookingInput!) {\n    createBooking(createBookingInput: $createBookingInput) {\n      id\n      bookingTime\n      bookingTime2\n      bookingDate\n      bookingDay\n      userId\n      counselorType\n      bookingTopic\n      reasonApply\n      closestKnown\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BookingClient {\n    bookingClient {\n      id\n      bookingTime\n      bookingTime2\n      bookingDate\n      bookingDay\n      isAccepted\n      isTerminated\n      adminAcc\n      counselorType\n      councelor {\n        userId\n        user {\n          fullname\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query BookingClient {\n    bookingClient {\n      id\n      bookingTime\n      bookingTime2\n      bookingDate\n      bookingDay\n      isAccepted\n      isTerminated\n      adminAcc\n      counselorType\n      councelor {\n        userId\n        user {\n          fullname\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RescheduleBooking($rescheduleBookingInput: UpdateBookingInput!) {\n  rescheduleBooking(rescheduleBookingInput: $rescheduleBookingInput) {\n    id\n  }\n}"): (typeof documents)["\nmutation RescheduleBooking($rescheduleBookingInput: UpdateBookingInput!) {\n  rescheduleBooking(rescheduleBookingInput: $rescheduleBookingInput) {\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query BookingFilter($getBookingFilter: GetBookingFilterDto!) {\n  bookingFilter(getBookingFilter: $getBookingFilter) {\n    id\n  user {\n      username\n      account {\n        faculty\n        major\n      }\n    }\n    councelor {\n      user {\n        fullname\n        account {\n          faculty\n          major\n        }\n      }\n      counselorType\n    }\n    bookingDay\n    bookingDate\n    bookingTime2\n    bookingTime\n    isAccepted\n    isTerminated\n    adminAcc  \n  }\n}\n"): (typeof documents)["\n  query BookingFilter($getBookingFilter: GetBookingFilterDto!) {\n  bookingFilter(getBookingFilter: $getBookingFilter) {\n    id\n  user {\n      username\n      account {\n        faculty\n        major\n      }\n    }\n    councelor {\n      user {\n        fullname\n        account {\n          faculty\n          major\n        }\n      }\n      counselorType\n    }\n    bookingDay\n    bookingDate\n    bookingTime2\n    bookingTime\n    isAccepted\n    isTerminated\n    adminAcc  \n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation AdminAcc($adminAccInput: AdminAccBooking!) {\n  adminAcc(adminAccInput: $adminAccInput) {\n    id\n    adminAcc\n  }\n}\n"): (typeof documents)["\nmutation AdminAcc($adminAccInput: AdminAccBooking!) {\n  adminAcc(adminAccInput: $adminAccInput) {\n    id\n    adminAcc\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery AdminRundown($getBookingFilter: GetAdminRundown!) {\n  adminRundown(getBookingFilter: $getBookingFilter) {\n  councelor {\n    user {\n      fullname\n    }\n  }  \n  user {\n    fullname\n  }\n  bookingTime\n  bookingDay\n  bookingDate\n  }\n}\n"): (typeof documents)["\nquery AdminRundown($getBookingFilter: GetAdminRundown!) {\n  adminRundown(getBookingFilter: $getBookingFilter) {\n  councelor {\n    user {\n      fullname\n    }\n  }  \n  user {\n    fullname\n  }\n  bookingTime\n  bookingDay\n  bookingDate\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query CounselorFilter($getCounselorDto: GetCouncelorFilter!) {\n  counselorFilter(getCounselorDto: $getCounselorDto) {\n    userId\n    Booking {\n      bookingDay\n      bookingTime\n      user {\n        username\n      }\n    }\n    user {\n      fullname\n    }\n    counselorType\n  }\n}\n"): (typeof documents)["\n    query CounselorFilter($getCounselorDto: GetCouncelorFilter!) {\n  counselorFilter(getCounselorDto: $getCounselorDto) {\n    userId\n    Booking {\n      bookingDay\n      bookingTime\n      user {\n        username\n      }\n    }\n    user {\n      fullname\n    }\n    counselorType\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindAllEvent {\n        findAllEvent {\n        id\n        title\n        location\n        date\n        time\n        posterUrl\n        description\n        }\n    }\n"): (typeof documents)["\n    query FindAllEvent {\n        findAllEvent {\n        id\n        title\n        location\n        date\n        time\n        posterUrl\n        description\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindByPageEvent($page: Int!) {\n        findByPageEvent(page: $page) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"): (typeof documents)["\n    query FindByPageEvent($page: Int!) {\n        findByPageEvent(page: $page) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindOneEvent($findOneEventId: Int!) {\n        findOneEvent(id: $findOneEventId) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"): (typeof documents)["\n    query FindOneEvent($findOneEventId: Int!) {\n        findOneEvent(id: $findOneEventId) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateEvent($createEventInput: CreateEventInput!) {\n        createEvent(createEventInput: $createEventInput) {\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"): (typeof documents)["\n    mutation CreateEvent($createEventInput: CreateEventInput!) {\n        createEvent(createEventInput: $createEventInput) {\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateEvent($updateEventInput: UpdateEventInput!) {\n        updateEvent(updateEventInput: $updateEventInput) {\n        id\n        date\n        title\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateEvent($updateEventInput: UpdateEventInput!) {\n        updateEvent(updateEventInput: $updateEventInput) {\n        id\n        date\n        title\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveEvent($removeEventId: Int!) {\n        removeEvent(id: $removeEventId) {\n        id\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveEvent($removeEventId: Int!) {\n        removeEvent(id: $removeEventId) {\n        id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindByLimitEvent($limit: Int!) {\n        findByLimitEvent(limit: $limit) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"): (typeof documents)["\n    query FindByLimitEvent($limit: Int!) {\n        findByLimitEvent(limit: $limit) {\n        id\n        title\n        date\n        location\n        time\n        description\n        posterUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query countEventQuery {\n        countEvent\n    }\n"): (typeof documents)["\n    query countEventQuery {\n        countEvent\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindAllInfografic {\n        findAllInfografic {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"): (typeof documents)["\n    query FindAllInfografic {\n        findAllInfografic {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindByPageInfografic($page: Int!) {\n        findByPageInfografic(page: $page) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"): (typeof documents)["\n    query FindByPageInfografic($page: Int!) {\n        findByPageInfografic(page: $page) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindOneInfografic($findOneInfograficId: Int!) {\n        findOneInfografic(id: $findOneInfograficId) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"): (typeof documents)["\n    query FindOneInfografic($findOneInfograficId: Int!) {\n        findOneInfografic(id: $findOneInfograficId) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateInfografic($createInfograficInput: CreateInfograficInput!) {\n        createInfografic(createInfograficInput: $createInfograficInput) {\n        title\n        description\n        infograficUrl\n        }\n    }\n"): (typeof documents)["\n    mutation CreateInfografic($createInfograficInput: CreateInfograficInput!) {\n        createInfografic(createInfograficInput: $createInfograficInput) {\n        title\n        description\n        infograficUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateInfografic($updateInfograficInput: UpdateInfograficInput!) {\n        updateInfografic(updateInfograficInput: $updateInfograficInput) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"): (typeof documents)["\n    mutation UpdateInfografic($updateInfograficInput: UpdateInfograficInput!) {\n        updateInfografic(updateInfograficInput: $updateInfograficInput) {\n        id\n        title\n        description\n        infograficUrl\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveInfografic($removeInfograficId: Int!) {\n        removeInfografic(id: $removeInfograficId) {\n        id\n        }\n    }\n"): (typeof documents)["\n    mutation RemoveInfografic($removeInfograficId: Int!) {\n        removeInfografic(id: $removeInfograficId) {\n        id\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FindByLimitInfografic($limit: Int!) {\n        findByLimitInfografic(limit: $limit) {\n        id\n        title\n        infograficUrl\n        description\n        }\n    }\n"): (typeof documents)["\n    query FindByLimitInfografic($limit: Int!) {\n        findByLimitInfografic(limit: $limit) {\n        id\n        title\n        infograficUrl\n        description\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query countInfograficQuery {\n        countInfografic\n    }\n"): (typeof documents)["\n    query countInfograficQuery {\n        countInfografic\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;