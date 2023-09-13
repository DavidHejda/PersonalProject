import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: 'http://localhost:8282/graphql', // Replace with your server GraphQL endpoint
  headers: {
    'content-type': 'application/json',
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
