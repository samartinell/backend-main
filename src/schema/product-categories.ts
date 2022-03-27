import { gql } from 'apollo-server';

// gql types, query and mutation
// mutation = operation to do (add, edit ...)
// query = get data
export const productCategoriesType = gql`
  extend type Query {
    "returns all available product categories. Kinda obvious, I know. Maybe there's more information here later"
    getProductCategories(searchString: String): [ProductCategory]
  }

  extend type Mutation {
    "adds a new product category. Well isn't this documentation just great."
    addProductCategory(productCategoryInput: ProductCategoryInput): Boolean
    addProductCategoryDetailed(name: String, unit: UnitInput, amount: Float, climateScore: Int, tags: [String]): Boolean
    removeProductCategory(name: String): Boolean
  }

  input UnitInput {
    name: String
    shortName: String
  }

  type Unit {
    id: String
    name: String
    shortName: String
  }

  input ProductCategoryInput {
    name: String
    unit: UnitInput
    amount: Float
    climateScore: Int
    tags: [String]
  }

  type ProductCategory {
    id: String
    name: String
    unit: Unit
    amount: Float
    climateScore: Int
    tags: [String]
  }
`;
