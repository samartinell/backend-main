import { gql } from 'apollo-server';

// gql types, query and mutation
// mutation = operation to do (add, edit ...)
// query = get data
export const eaternityProductTypes = gql`
  extend type Query {
    "returns all available product categories. Kinda obvious, I know. Maybe there's more information here later"
    getEaternityProduct(gtin: String): EaternityProduct
  }

  type EaternityProduct {
    name: String
    id: String
    gtin: String
    co2Value: Float
    rating: String
  }
`;
