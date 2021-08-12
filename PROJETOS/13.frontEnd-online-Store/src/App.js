import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';
import Checkout from './Components/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toCart: [],
      productDetails: {},
    };

    this.setProduct = this.setProduct.bind(this);
    this.toCart = this.toCart.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
  }

  setProduct(product) {
    this.setState({
      productDetails: product,
    });
  }

  toCart(newState) {
    this.setState((oldState) => {
      const filtered = oldState.toCart.find((item) => item.id === newState.id);

      if (!filtered) {
        return {
          toCart: [...oldState.toCart, { ...newState, quantidade: 1 }],
        };
      }
    });
  }

  addQuantity(index) {
    const { toCart } = this.state;
    toCart[index].quantidade += 1;
    this.setState({ toCart });
  }

  removeQuantity(index) {
    const { toCart } = this.state;
    if (toCart[index].quantidade > 0) {
      toCart[index].quantidade -= 1;
      this.setState({ toCart });
    }
  }

  render() {
    const { toCart, productDetails } = this.state;

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                  setProduct={ this.setProduct }
                  toCart={ this.toCart }
                />) }
            />
            <Route
              exact
              path="/cart"
              render={ (props) => (<ShoppingCart
                { ...props }
                addQuantity={ this.addQuantity }
                removeQuantity={ this.removeQuantity }
                toCart={ toCart }
              />) }
            />
            <Route
              exact
              path="/details"
              render={ (props) => (
                <ProductDetails
                  { ...props }
                  productDetails={ productDetails }
                  toCart={ this.toCart }
                />) }
            />
            <Route
              exact
              path="/cart/checkout"
              component={ Checkout }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
