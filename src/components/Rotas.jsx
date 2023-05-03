import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cart from '../page/Cart';
import Home from '../page/Home';
import Product from '../page/Product';

class Rotas extends Component {
  state = {
    cartVoid: true,
  };

  render() {
    const { cartVoid } = this.state;
    const { searchVoid, productList, apiEmpty } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              searchVoid={ searchVoid }
              productList={ productList }
              apiEmpty={ apiEmpty }
            />) }
          />
          <Route path="/cart" render={ () => <Cart cartVoid={ cartVoid } /> } />
          <Route path="/product/:id" component={ Product } />
        </Switch>
      </div>
    );
  }
}

Rotas.propTypes = {
  status: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.any,
    ),
  ),
}.isRequired;

export default Rotas;
