import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { CartItemContainer, ItemName, Price } from './styles';

const CartItem = ({ item, handleRemoveCartItem }) => (
  <CartItemContainer>
    <div>
      <ItemName>{item.productName}</ItemName>
      <Price>${item.price}</Price>
    </div>
    <Button
      variant='warning'
      onClick={() => {
        handleRemoveCartItem(item);
      }}
      data-test-id='removeButton'
    >
      Remove
    </Button>
  </CartItemContainer>
);

CartItem.propTypes = {
  item: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPublished: PropTypes.bool
  }).isRequired,
  handleRemoveCartItem: PropTypes.func.isRequired
};

export default CartItem;
