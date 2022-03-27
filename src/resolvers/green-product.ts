import { GreenProduct } from '../models/green-product';
import { ProductCategory } from '../models/product-categories';
import { retrieveDataFromEaternity } from './eaternity-product';

export const greenProductResolver = {
  // TODO Caching
  // TODO ErrorHandling
  Query: {
    getGreenProduct: async (_, args: { categoryId }) => {
      return {
        name: 'Milchscnitte',
        eaternityProductId: '00000040084794',
        // TODO: define Fieldresolver
        eaternityProduct: await retrieveDataFromEaternity('00000040084794'),
        productCategoryId: args.categoryId,
        productCategory: await ProductCategory.findOne({ _id: args.categoryId }),
      } as GreenProduct;
    },
  },
};
