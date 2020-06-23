import { initStore } from '../lib/redux';
import App from 'next/app';
import React from 'react';
import withRedux from 'next-redux-wrapper';
import { ApolloProvider } from '@apollo/react-hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { client } from '../lib/apollo';

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      );
    }
  }
);
