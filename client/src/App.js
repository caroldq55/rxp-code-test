import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';

const Container = styled.div`
  padding: 80px 50px;
`;

const App = props => {
  const {
    loading,
    handleGetProducts,
    availableProducts,
    cartItems,
    handleAddToCart,
    handleRemoveCartItem
  } = props;

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <div>
      <Header title='Telstra' />
      <Container>
        {loading && <div>Loading</div>}
        {!loading && (
          <Row noGutters>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
              {availableProducts.length === 0 ? (
                <div>No more products</div>
              ) : (
                <ProductsList
                  availableProducts={availableProducts}
                  handleAddToCart={handleAddToCart}
                />
              )}
            </Col>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
              <ShoppingCart
                cartItems={cartItems}
                handleRemoveCartItem={handleRemoveCartItem}
              />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  availableProducts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleGetProducts: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.shape({})),
  handleAddToCart: PropTypes.func.isRequired,
  handleRemoveCartItem: PropTypes.func.isRequired
};

App.defaultProps = {
  cartItems: []
};

export default App;
