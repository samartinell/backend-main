import { model, Schema } from 'mongoose';
import { Unit } from './unit';

// interface (*class*) definition
export interface ProductCategory {
  id: string;
  name: string;
  amount: number;
  unit: Unit;
  climateScore: number; //0 red, 1 yellow,2 green
  tags: string[];
}

// mongoose --> TypeWrapper --> creates model for mongoDB
export const ProductCategory = model(
  'product-category',
  new Schema<ProductCategory>({
    id: String,
    name: String,
    amount: Number,
    unit: Unit,
    climateScore: Number,
    tags: [String],
  }),
);
