import { gql } from 'apollo-server';

import { eaternityProductTypes } from './eaternity-product';
import { greenProductTypes } from './green-product';
import { productCategoriesType } from './product-categories';
import { seedDdTypes } from './seed-database';

import { userTypes } from './users';

const commonDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }

  type Mutation {
    test: Boolean
  }
`;

export const typeDefs = [
  commonDefs,
  productCategoriesType,
  eaternityProductTypes,
  greenProductTypes,
  seedDdTypes,
  userTypes,
];
