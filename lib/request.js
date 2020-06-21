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