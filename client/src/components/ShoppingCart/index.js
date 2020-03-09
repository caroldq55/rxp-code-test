import { isEmpty } from 'lodash';
import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

import CartItem from '../CartItem';
import { ShopingCartContainer, Heading, Content } from './styles';

const ShoppingCart = ({ cartItems, handleRemoveCartItem }) => (
  <ShopingCartContainer>
    <Heading>Shopping Cart</Heading>
    {isEmpty(cartItems) ? (
      <Content>Your cart is empty</Content>
    ) : (
      <Content>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            handleRemoveCartItem={handleRemoveCartItem}
          />
        ))}
      </Content>
    )}
  </ShopingCartContainer>
);

ShoppingCart.propTypes = {
  cartItems: arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired
    })
  ),
  handleRemoveCartItem: PropTypes.func.isRequired
};

ShoppingCart.defaultProps = {
  cartItems: []
};

export default ShoppingCart;
