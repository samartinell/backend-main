import { mergeResolvers } from 'merge-graphql-schemas';
import { eaternityProductResolvers } from './eaternity-product';
import { greenProductResolver } from './green-product';
import { productCategoryResolvers } from './product-categories';
import { seedDbResolver } from './seed-database';
import { userResolvers } from './user';

export const resolvers = mergeResolvers([
  {
    Query: {
      hello: () => 'world',
    },
  },
  productCategoryResolvers,
  eaternityProductResolvers,
  greenProductResolver,
  seedDbResolver,
  userResolvers,
]);
