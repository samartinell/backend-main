import { ProductCategory } from '../models/product-categories';

export const productCategoryResolvers = {
  Query: {
    getProductCategories: async () => {
      return (await ProductCategory.find({}).exec()) || [];
    },
  },
  Mutation: { 
    addProductCategory: async (_, args: { productCategoryInput }) => {
      await new ProductCategory(args.productCategoryInput).save(); // already validates according to mongoose schema
      return true;
    },

    addProductCategoryDetailed: async (_, { name }) => {
      await new ProductCategory({ name }).save(); // already validates according to mongoose schema
      return true;
    },

    removeProductCategory: async (_, args: { name: String }) => {
      await ProductCategory.remove({ name: args.name }); // already validates according to mongoose schema
      return true;
    },
  },
};
