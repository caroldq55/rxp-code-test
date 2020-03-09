import { fromJS } from 'immutable';

import {
  ADD_TO_CART,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  REMOVE_CART_ITEM
} from './constants';

const initState = fromJS({
  products: [],
  loading: false,
  cartItems: []
});

const app = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state.set('loading', true);
    case GET_PRODUCTS_SUCCESS:
      return state.set('products', fromJS(action.data)).set('loading', false);
    case GET_PRODUCTS_FAIL:
      return state.set('products', fromJS(action.data)).set('loading', false);
    case ADD_TO_CART:
      return state.set(
        'cartItems',
        state.get('cartItems').push(fromJS(action.item))
      );
    case REMOVE_CART_ITEM:
      return state.set(
        'cartItems',
        state
          .get('cartItems')
          .filter(
            cartItem => cartItem.get('productName') !== action.item.productName
          )
      );
    default:
      return state;
  }
};

export default app;
