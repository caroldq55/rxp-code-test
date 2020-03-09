import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

import {
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductPrice,
  ProductName,
  ButtonWrapper
} from './styles';

const Product = props => {
  const { product, handleAddToCart } = props;

  const { productImage, productName, price } = product;

  return (
    <ProductContainer>
      <ProductImage src={productImage} alt={productImage} />
      <ProductInfo>
        <Row>
          <Col xs={12} md={8}>
            <OverlayTrigger
              placement='right'
              overlay={<Tooltip>{productName}</Tooltip>}
            >
              <ProductName>{productName}</ProductName>
            </OverlayTrigger>
          </Col>
          <Col xs={12} md={4}>
            <ProductPrice>${price}</ProductPrice>
          </Col>
        </Row>
        <ButtonWrapper>
          <Button
            variant='info'
            onClick={() => {
              handleAddToCart(product);
            }}
            data-test-id='addToCartButton'
          >
            Add to cart
          </Button>
        </ButtonWrapper>
      </ProductInfo>
    </ProductContainer>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPublished: PropTypes.bool
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

export default Product;
