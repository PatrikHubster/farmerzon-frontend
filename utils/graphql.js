import { ApolloClient, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'unfetch';

const cache = new InMemoryCache();
    cache.writeData({
        data: {
            articles: []
        }
});

const link = createHttpLink({
    uri: 'http://localhost:5002/graph',
    fetch: fetch
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }
    }
});

export const client = new ApolloClient({
    cache: cache,
    link: authLink.concat(link)
});

export const getProducts = gql`
      {
         articles {
           articleId,
           name,
           description,
           size,
           amount,
           price,
           unit {
             name
           }
         }
      }
`;
