import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';

class ProductDetails extends React.Component {
  render() {
    const { productDetails, toCart } = this.props;

    return (
      <div>
        <h1 data-testid="product-detail-name">{productDetails.title}</h1>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => toCart(productDetails) }
        >
          Adicionar ao carrinho
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">Shopping Cart</Link>
        <Rating />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productDetails: PropTypes.objectOf(PropTypes.any).isRequired,
  toCart: PropTypes.func.isRequired,
};

export default ProductDetails;
