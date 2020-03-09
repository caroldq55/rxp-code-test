import React from 'react';
import PropTypes from 'prop-types';

import { HeaderContainer, Brand } from './styles';

const Header = props => (
  <HeaderContainer>
    <Brand>{props.title}</Brand>
  </HeaderContainer>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired
};
