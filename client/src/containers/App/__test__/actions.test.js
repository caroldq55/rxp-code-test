import {
  getProducts,
  getProductsSuccess,
  getProductsFail,
  addToCart,
  removeCartItem
} from '../actions';
import {
  ADD_TO_CART,
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  REMOVE_CART_ITEM
} from '../constants';
import { products, item } from './fixtures';

describe('actions test', () => {
  describe('getProducts', () => {
    it('should generate getProducts action object', () => {
      const expected = {
        type: GET_PRODUCTS
      };
      expect(getProducts()).toEqual(expected);
    });
  });

  describe('getProductsSuccess', () => {
    it('should generate getProductsSuccess action object', () => {
      const data = products;
      const expected = {
        type: GET_PRODUCTS_SUCCESS,
        data
      };
      expect(getProductsSuccess(data)).toEqual(expected);
    });
  });

  describe('getProductsFail', () => {
    it('should generate getProductsFail action object', () => {
      const err = {};
      const expected = {
        type: GET_PRODUCTS_FAIL,
        err
      };
      expect(getProductsFail(err)).toEqual(expected);
    });
  });

  describe('addToCart', () => {
    it('should generate addToCart action object', () => {
      const expected = {
        type: ADD_TO_CART,
        item
      };
      expect(addToCart(item)).toEqual(expected);
    });
  });

  describe('removeCartItem', () => {
    it('should generate removeCartItem action object', () => {
      const expected = {
        type: REMOVE_CART_ITEM,
        item
      };
      expect(removeCartItem(item)).toEqual(expected);
    });
  });
});
