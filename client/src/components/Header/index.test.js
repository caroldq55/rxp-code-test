import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import Header from '.';
import { Brand } from './styles';

Brand.displayName = 'Brand';

describe('<Header/>', () => {
  it('should render Header correctly', () => {
    const wrapper = shallow(<Header title='Telstra' />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('Brand').contains('Telstra')).toBe(true);
  });
});
