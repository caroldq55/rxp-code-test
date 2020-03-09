import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import {
  cartItems,
  availableProducts
} from './containers/App/__test__/fixtures';

const simpleProps = {
  loading: false,
  handleGetProducts: () => {},
  availableProducts,
  cartItems,
  handleAddToCart: () => {},
  handleRemoveCartItem: () => {}
};

test('renders App correctly', () => {
  const wrapper = shallow(<App {...simpleProps} />);
  expect(wrapper).toMatchSnapshot();
});
