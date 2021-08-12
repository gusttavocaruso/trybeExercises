import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  carrinho() {
    const { toCart, addQuantity, removeQuantity } = this.props;
    return (toCart.map((item, index) => (
      <li id={ item.id } key={ item.id }>
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <button
          type="button"
          onClick={ () => removeQuantity(index) }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{item.quantidade}</p>
        <button
          type="button"
          onClick={ () => addQuantity(index) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </li>
    ))
    );
  }

  vazio() {
    return (
      <p
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </p>
    );
  }

  render() {
    const { toCart } = this.props;
    return (
      <div>
        { toCart.length > 0 ? this.carrinho() : this.vazio() }
        <Link to="/cart/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  toCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  addQuantity: PropTypes.func.isRequired,
  removeQuantity: PropTypes.func.isRequired,
};

export default ShoppingCart;
// feito pelo grupo via pair programming
