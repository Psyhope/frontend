'use client'

import { env } from '@/env.mjs'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  ApolloLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth } from './AuthContext'
import { ReactNode } from 'react'
import { onError } from '@apollo/client/link/error'

export const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  const { accessToken, refreshToken } = useAuth()

  const httpLink = createHttpLink({
    uri: `${env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  })

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          switch (err.extensions.code) {
            // Apollo Server sets code to UNAUTHENTICATED
            // when an AuthenticationError is thrown in a resolver
            case 'UNAUTHENTICATED':
              // Modify the operation context with a new token
              // const oldHeaders = operation.getContext().headers;
              // operation.setContext({
              //   headers: {
              //     ...oldHeaders,
              //     authorization: getNewToken(),
              //   },
              // });
              refreshToken()
              // Retry the request, returning the new observable
              return forward(operation)
          }
        }
      }
      if (networkError) console.log(`[Network error]: ${networkError}`)
    }
  )

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const accessToken = await getItemAsync('accessToken');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${accessToken}`,
      },
    }
  })

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, authLink, httpLink]),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
