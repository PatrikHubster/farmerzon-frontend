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

  test() {
    this.client
      .query({
        query: gql(`query {
        articles {
            id
            description
            name
            amount
            size
            createdAt
            updatedAt
            expirationDate
        }
    }`),
        fetchPolicy: "no-cache",
      })
      .then((result) => console.log(result));
  }
}

export default ArticlesLogic;
