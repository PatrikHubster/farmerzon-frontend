import { ApolloClient } from 'apollo-client';
import { config } from './config';
import { getCookie } from 'cookie';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
    uri: `${config.GRAPH_SERVER}/graph`,
});

const authLink = setContext((_, { headers }) => {
    // const token = getCookie('token');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJQQVRSSUstSFVCRVIiLCJqdGkiOiJjNjEzYWQ3NC01NjI4LTQwZDYtYWVmOS1mYWU4YTk0ZjI0YzYiLCJlbWFpbCI6InBhdHJpay1odWJlckBhb24uYXQiLCJpZCI6IjI3YTMyYjU1LWE4ZjQtNGY2Ny04MDg3LTEwNzJhMzFkZDZhZCIsInVzZXJuYW1lIjoicGF0cmlrLWh1YmVyIiwic3RyZWV0IjoiTXVzdGVyc3RyYcOfZSIsImRvb3JOdW1iZXIiOiIxOEIiLCJ6aXBDb2RlIjoiNDIzMiIsImNpdHlOYW1lIjoiSGFnZW5iZXJnIiwiY291bnRyeUNvZGUiOiJBVCIsImNvdW50cnlOYW1lIjoiw5ZzdGVycmVpY2giLCJzdGF0ZU5hbWUiOiJPYmVyw7ZzdGVycmVpY2giLCJuYmYiOjE1OTI4NDQ0NjAsImV4cCI6MTU5Mjg1MTY2MCwiaWF0IjoxNTkyODQ0NDYwLCJpc3MiOiJ3d3cuZmFybWVyem9uLmF0IiwiYXVkIjoid3d3LmZhcm1lcnpvbi5hdCJ9._WzkTgHX7XVlu0RPMNAfoTa2pGCnRcUjtr4VuS4w6II";
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});