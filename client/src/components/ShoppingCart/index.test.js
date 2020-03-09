import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ShoppingCart from '.';
import CartItem from '../CartItem';
import { cartItems } from '../../containers/App/__test__/fixtures';

CartItem.displayName = 'CartItem';

let wrapper;
const handleRemoveCartItemSpy = jest.fn();

describe('<ShoppingCart/>', () => {
  beforeEach(() => {
    wrapper = shallow(
      <ShoppingCart
        cartItems={cartItems}
        handleRemoveCartItem={handleRemoveCartItemSpy}
      />
    );
  });

  it('should render Shopping Cart correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list of Cart Items', () => {
    expect(wrapper.find('CartItem')).toHaveLength(cartItems.length);
  });
});
