import { filter, isEqual } from 'lodash';
import normalizedData from '../../util/normalizedData';

const selectAvailableProducts = (cartItems, products) => {
  const publishedProducts = filter(
    normalizedData(products),
    product => product && product.isPublished
  );

  // remove product from shopping list if it been addded to cart
  return filter(
    publishedProducts,
    product => !cartItems.find(cartItem => isEqual(cartItem, product))
  );
};

export default selectAvailableProducts;
