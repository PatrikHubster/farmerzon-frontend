import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Products from '../components/Product/Products';
import Layout from '../components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { client } from '../utils/graphql';

const data = {
  products: [
  ]
}

const Index = () => (
  <Layout title="Home" needAuthentication="true">
    <div className="container">
      <main>
        <ApolloProvider client={client}>
          <Products />
        </ApolloProvider>
      </main>
    </div>
    <style jsx>{`
    .container {
      min-height: 100vh;
      padding: 0 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
    }

    main {
      padding: 5rem 0;
      flex: 1;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

  `}
    </style>
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
