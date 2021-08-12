import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductList extends Component {
  ifNotResult = () => (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  ifResult = () => {
    const { resultadoDoPai, toCart, setProduct } = this.props;
    return (resultadoDoPai.map((res) => (
      <li
        data-testid="product"
        key={ res.id }
      >
        <Link
          to="/details"
          onClick={ () => setProduct(res) }
          data-testid="product-detail-link"
        >
          <h2>{res.title}</h2>
        </Link>
        <img src={ res.thumbnail } alt={ res.title } />
        <span>{res.price}</span>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => toCart(res) }
        >
          Adicionar ao carrinho
        </button>
      </li>)));
  }

  render() {
    const { shouldDisplay } = this.props;

    const { ifResult, ifNotResult } = this;
    return (
      <div>
        { !shouldDisplay ? ifNotResult() : ifResult() }
      </div>
    );
  }
}

ProductList.propTypes = {
  resultadoDoPai: PropTypes.arrayOf(PropTypes.object).isRequired,
  shouldDisplay: PropTypes.bool.isRequired,
  toCart: PropTypes.func.isRequired,
  setProduct: PropTypes.func.isRequired,
};

export default ProductList;
