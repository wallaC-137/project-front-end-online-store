import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  render() {
    const { cartVoid } = this.props;
    return (
      <div>
        {cartVoid && (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cartVoid: PropTypes.bool.isRequired,
};
