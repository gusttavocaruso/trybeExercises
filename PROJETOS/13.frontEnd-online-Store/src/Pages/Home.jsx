import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ProductList from '../Components/ProductList';
import SearchBar from '../Components/SearchBar';
import SideBar from '../Components/SideBar';
import * as Api from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      resultadoDoPai: [],
      product: '',
      shouldDisplay: false,
    };

    this.alterarEstado = this.alterarEstado.bind(this);
    this.filter = this.filter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      product: target.value,
      shouldDisplay: target.value.length > 0,
    });
  }

  async alterarEstado() {
    const { product } = this.state;
    await Api.getProductsFromCategoryAndQuery('', product)
      .then((data) => this.setState({
        resultadoDoPai: data.results,
      }));
  }

  async filter(param1) {
    const { product } = this.state;
    await Api.getProductsFromCategoryAndQuery(param1, product)
      .then((data) => {
        this.setState({
          resultadoDoPai: data.results,
          shouldDisplay: true,
        });
      });
  }

  render() {
    const { toCart } = this.props;
    const { resultadoDoPai, product, shouldDisplay } = this.state;
    const { setProduct } = this.props;

    return (
      <div style={ { display: 'flex' } }>
        <SideBar filter={ this.filter } />
        <main>
          <div>
            <SearchBar
              alterarEstado={ this.alterarEstado }
              handleChange={ this.handleChange }
              product={ product }
            />
            <Link to="/cart" data-testid="shopping-cart-button">Shopping Cart</Link>
          </div>
          <ProductList
            resultadoDoPai={ resultadoDoPai }
            product={ product }
            shouldDisplay={ shouldDisplay }
            toCart={ toCart }
            setProduct={ setProduct }
          />
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  toCart: PropTypes.func.isRequired,
  setProduct: PropTypes.func.isRequired,
};

export default Home;
// feito pelo grupo via pair programming
