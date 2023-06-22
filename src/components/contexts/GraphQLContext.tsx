'use client'

import { env } from '@/env.mjs'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { useAuth } from './AuthContext'
import { ReactNode, createContext } from 'react'

const GraphQLContext = createContext({})

export const GraphQLProvider = ({ children }: { children: ReactNode }) => {
  const httpLink = createHttpLink({
    uri: `${env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  })

  const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    // const accessToken = await getItemAsync('accessToken');
    const { accessToken } = useAuth()
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
    link: authLink.concat(httpLink),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
