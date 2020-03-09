import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { CartItemContainer, ItemName } from './styles';

const CartItem = ({ item, handleRemoveCartItem }) => (
  <CartItemContainer>
    <ItemName>{item.productName}</ItemName>
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
    price: PropTypes.string.isRequired,
    isPublished: PropTypes.bool
  }).isRequired,
  handleRemoveCartItem: PropTypes.func.isRequired
};

export default CartItem;
