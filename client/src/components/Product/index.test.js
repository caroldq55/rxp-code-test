import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Product from '.';
import { item } from '../../containers/App/__test__/fixtures';

describe('<Product/>', () => {
  const handleAddToCartSpy = jest.fn();

  it('should render Product correctly', () => {
    const wrapper = shallow(
      <Product product={item} handleAddToCart={handleAddToCartSpy} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Product correctly', () => {
    const wrapper = shallow(
      <Product product={item} handleAddToCart={handleAddToCartSpy} />
    );
    const addToCartButton = wrapper.find('[data-test-id="addToCartButton"]');
    expect(addToCartButton).toHaveLength(1);
    addToCartButton.simulate('click');
    expect(handleAddToCartSpy).toHaveBeenCalledTimes(1);
  });
});
