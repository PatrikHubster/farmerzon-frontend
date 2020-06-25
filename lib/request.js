import { gql } from 'apollo-boost';

export const getAllArticles = gql `
  {
    articles {
      articleId
      name
      description
      price
      size
      amount
      unit {
        unitId
        name
      }
    }
  }
`;

export const createArticle = gql `
  input Unit {
    name: String!
  }

  input Article {
    name: String!
    description: String!
    amount: Int!
    size: Float!
    price: Float!
    unit: Unit!
  }

  mutation createArticle($article: Article!) {
    createArticle(article: $article) {
      articleId
    }
  }
`;