import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <button
        type="button"
        data-testid="shopping-cart-button"
        onClick={ () => {
          const { history: { push } } = this.props;
          return push('/cart');
        } }
      >
        Cart

      </button>
      // <ul>
      //   <li><Link data-testid="shopping-cart-button" to="/cart">Cart</Link></li>
      // </ul>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
