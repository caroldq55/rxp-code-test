import { isEmpty } from 'lodash';
import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

import CartItem from '../CartItem';
import { ShopingCartContainer, Heading, Content, TotalPrice } from './styles';

const ShoppingCart = ({ cartItems, handleRemoveCartItem }) => {
  const totalPrice = cartItems.reduce(
    (previousValue, current) => previousValue + current.price,
    0
  );

  return (
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
          <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
        </Content>
      )}
    </ShopingCartContainer>
  );
};

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
