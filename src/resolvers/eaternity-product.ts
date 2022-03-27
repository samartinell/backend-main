import needle from 'needle';
import { EaternityProduct } from '../models/eaternity-product';

export const eaternityProductResolvers = {
  // TODO Caching
  // TODO ErrorHandling
  Query: {
    getEaternityProduct: async (_, args: { gtin }) => {
      return await retrieveDataFromEaternity(args.gtin);
    },
  },
};

export async function retrieveDataFromEaternity(gtin: String) {
  const result = await needle('get', 'https://api.eaternity.ch/api/retail/' + gtin);
  var json = JSON.parse(result.body.toString());

  return {
    name: json['names'].find(item => item.language === 'de').value,
    id: json['id'],
    gtin: json['gtin'],
    co2Value: json['co2-value'],
    rating: json['rating'],
  } as EaternityProduct;
}
