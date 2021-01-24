import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

class ArticlesLogic {
  constructor(baseUrlGraph) {
    this.httpLink = createHttpLink({
      uri: `${baseUrlGraph}/graphql`,
    });
    this.authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem("token");
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        },
      };
    });
    this.client = new ApolloClient({
      link: this.authLink.concat(this.httpLink),
      cache: new InMemoryCache(),
    });
  }

  async query(query) {
    return this.client
      .query({
        query: gql(query),
        fetchPolicy: "no-cache",
      })
  }
}

export default ArticlesLogic;
