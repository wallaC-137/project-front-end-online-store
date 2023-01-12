import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../page/Cart';
import Home from '../page/Home';
import Product from '../page/Product';

class Rotas extends Component {
  state = {
    cartVoid: true,
  };

  render() {
    const { cartVoid } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" render={ () => <Cart cartVoid={ cartVoid } /> } />
          <Route path="/product/:id" component={ Product } />
        </Switch>
      </div>
    );
  }
}

export default Rotas;
