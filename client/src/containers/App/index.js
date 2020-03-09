import { connect } from 'react-redux';

import App from '../../App';
import { selectAvailableProducts } from './selectors';
import { addToCart, getProducts, removeCartItem } from './actions';

const mapStateToProps = state => ({
  availableProducts: selectAvailableProducts(
    state.app.get('cartItems').toJS(),
    state.app.get('products').toJS()
  ),
  loading: state.app.get('loading'),
  cartItems: state.app.get('cartItems').toJS()
});

const mapDispatchToProps = dispatch => ({
  handleGetProducts: () => dispatch(getProducts()),
  handleAddToCart: item => dispatch(addToCart(item)),
  handleRemoveCartItem: item => dispatch(removeCartItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
