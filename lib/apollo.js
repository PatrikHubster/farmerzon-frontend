import React from "react";
import Head from "next/head";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import { getAccessToken, setAccessToken } from "./accessToken";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

const isServer = () => typeof window === undefined;

// TODO: configure and adapt
// source: https://github.com/benawad/jwt-auth-example/blob/nextjs-starter-code/web-nextjs/lib/apollo.tsx
export const withApollo = (PageComponent, { ssr = true } = {}) => {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState);
        return <PageComponent {...pageProps }
        apolloClient = { client }
        />;
    };

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async(ctx) => {
            const {
                AppTree,
                ctx: { res }
            } = ctx;

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            const apolloClient = (ctx.ctx.apolloClient = initApolloClient({}));

            const pageProps = PageComponent.getInitialProps ?
                await PageComponent.getInitialProps(ctx) :
                {};

            // Only on the server
            if (isServer()) {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (res && res.finished) {
                    return {};
                }

                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await
                        import ("@apollo/react-ssr");
                        await getDataFromTree( <
                            AppTree pageProps = {
                                {
                                    ...pageProps,
                                    apolloClient
                                }
                            }
                            apolloClient = { apolloClient }
                            />
                        );
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error("Error while running `getDataFromTree`", error);
                    }
                }

                Head.rewind();
            }

            const apolloState = apolloClient.cache.extract();

            return {
                ...pageProps,
                apolloState
            };
        };
    }

    return WithApollo;
}

let apolloClient = null;

const initApolloClient = (initState) => {
    if (isServer()) {
        return createApolloClient(initState);
    }

    if (!apolloClient) {
        apolloClient = createApolloClient(initState);
    }

    return apolloClient;
}

const createApolloClient = (initialState = {}) => {
    const httpLink = new HttpLink({
        uri: "http://localhost:4000/graphql",
        credentials: "include",
        fetch
    });

    const refreshLink = new TokenRefreshLink({
        accessTokenField: "accessToken",
        isTokenValidOrUndefined: () => {
            const token = getAccessToken();

            if (!token) {
                return true;
            }

            try {
                const { exp } = jwtDecode(token);
                if (Date.now() >= exp * 1000) {
                    return false;
                } else {
                    return true;
                }
            } catch {
                return false;
            }
        },
        fetchAccessToken: () => {
            // TODO: fetch refresh_token
            // return fetch("http://localhost:4000/refresh_token", {
            //   method: "POST",
            //   credentials: "include"
            // });
            return fetch("http://todo", {
                method: 'POST'
            })
        },
        handleFetch: accessToken => {
            setAccessToken(accessToken);
        },
        handleError: err => {
            console.warn("Your refresh token is invalid. Try to relogin");
            console.error(err);
        }
    });

    const authLink = setContext((_request, { headers }) => {
        const token = getAccessToken();
        return {
            headers: {
                ...headers,
                authorization: token ? `bearer ${token}` : ""
            }
        };
    });

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        console.log(graphQLErrors);
        console.log(networkError);
    });

    return new ApolloClient({
        ssrMode: isServer(), // Disables forceFetch on the server (so queries are only run once)
        link: ApolloLink.from([refreshLink, authLink, errorLink, httpLink]),
        cache: new InMemoryCache().restore(initialState)
    });
}