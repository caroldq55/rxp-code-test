import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import Product from '../Product';

const ProductsList = props => {
  const { availableProducts, handleAddToCart } = props;

  return (
    <Row noGutters>
      {availableProducts.map((product, index) => (
        <Col xl={4} md={6} xs={12} key={index}>
          <Product product={product} handleAddToCart={handleAddToCart} />
        </Col>
      ))}
    </Row>
  );
};

ProductsList.propTypes = {
  availableProducts: arrayOf(
    PropTypes.shape({
      productImage: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isPublished: PropTypes.bool
    })
  ).isRequired,
  handleAddToCart: PropTypes.func.isRequired
};

export default ProductsList;
