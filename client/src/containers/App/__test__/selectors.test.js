import selectAvailableProducts from '../selectors';
import {
  products,
  availableProducts,
  cartItems,
  publishedProducts
} from './fixtures';

it('should return availableProducts', () => {
  const result = selectAvailableProducts(cartItems, products);
  expect(result).toEqual(availableProducts);
  const result2 = selectAvailableProducts([], products);
  expect(result2).toEqual(publishedProducts);
});
