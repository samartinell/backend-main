import { EaternityProduct } from './eaternity-product';
import { ProductCategory } from './product-categories';

export interface GreenProduct {
  name: string;
  eaternityProductId: String;
  eaternityProduct: EaternityProduct;
  productCategoryId: String;
  productCategory: ProductCategory;
}
