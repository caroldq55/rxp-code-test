import reducer from '../reducer';
import { initialValue, products, item, cartItems } from './fixtures';
import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  ADD_TO_CART,
  REMOVE_CART_ITEM
} from '../constants';

it('should setup default initialValue', () => {
  const state = reducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(initialValue);
});

it('should get products', () => {
  const state = reducer(initialValue, { type: GET_PRODUCTS });
  expect(state.get('loading')).toBe(true);
});

it('should get products success', () => {
  const data = products;
  const state = reducer(initialValue, { type: GET_PRODUCTS_SUCCESS, data });
  expect(state.get('loading')).toBe(false);
  expect(state.get('products').toJS()).toStrictEqual(data);
});

it('should get products fail', () => {
  const err = {};
  const state = reducer(initialValue, { type: GET_PRODUCTS_FAIL, err });
  expect(state.get('loading')).toBe(false);
});

it('should add to cart', () => {
  const state = reducer(initialValue, { type: ADD_TO_CART, item });
  expect(state.get('cartItems').toJS()).toEqual(cartItems);
});

it('should remove cart item', () => {
  const state = reducer(initialValue, { type: REMOVE_CART_ITEM, item });
  expect(state.get('cartItems').toJS()).toEqual([]);
});
