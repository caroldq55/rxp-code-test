import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import ProductsList from '.';
import Product from '../Product';
import { availableProducts } from '../../containers/App/__test__/fixtures';

Product.displayName = 'Product';

let wrapper;
const handleAddToCartSpy = jest.fn();

describe('<ProductsList/>', () => {
  beforeEach(() => {
    wrapper = shallow(
      <ProductsList
        availableProducts={availableProducts}
        handleAddToCart={handleAddToCartSpy}
      />
    );
  });

  it('should render Product List correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a list of Product', () => {
    expect(wrapper.find('Product')).toHaveLength(availableProducts.length);
  });
});
