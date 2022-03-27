import { gql } from 'apollo-server';

// gql types, query and mutation
// mutation = operation to do (add, edit ...)
// query = get data
export const greenProductTypes = gql`
  extend type Query {
    "returns all available product categories. Kinda obvious, I know. Maybe there's more information here later"
    getGreenProduct(categoryId: String): GreenProduct
  }

  type GreenProduct {
    name: String
    eaternityProductId: String
    eaternityProduct: EaternityProduct
    productCategoryId: String
    productCategory: ProductCategory
  }
`;
