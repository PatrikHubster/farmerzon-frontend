export const articlesQuery = `query {
  articles {
    id
    description
    name
    amount
    size
    price
    expirationDate
    unit {
        name
    }
  }
}`;
