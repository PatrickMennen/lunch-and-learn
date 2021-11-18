import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: '/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:4000',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        task: {
          read(_, { args, toReference }) {
            return toReference({
              __typename: 'Task',
              id: args!.where.id,
            });
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  link: splitLink,
  cache,
});
