import {
  ADD_TO_CART,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  REMOVE_CART_ITEM
} from './constants';

// products list actions
export const getProducts = () => ({
  type: GET_PRODUCTS
});

export const getProductsSuccess = data => ({
  type: GET_PRODUCTS_SUCCESS,
  data
});

export const getProductsFail = err => ({
  type: GET_PRODUCTS_FAIL,
  err
});

// cart items actions
export const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

export const removeCartItem = item => ({
  type: REMOVE_CART_ITEM,
  item
});
