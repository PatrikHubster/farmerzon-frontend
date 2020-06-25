import { ApolloClient } from 'apollo-client';
import { config } from './config';
import { getCookie } from 'cookie';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import createLogLink from 'apollo-link-log';

const httpLink = createHttpLink({
    uri: `${config.GRAPH_SERVER}/graph`,
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const logLink = createLogLink();

export const client = new ApolloClient({
    link: ApolloLink.from([logLink, authLink, httpLink]),
    cache: new InMemoryCache()
});
