import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    const { input, queryButton, search } = this.props;
    return (
      <div className={ styles.maindiv }>
        <div className={ styles.divinput }>
          <input
            data-testid="query-input"
            type="text"
            value={ search }
            onChange={ input }
            onKeyDown={ (e) => {
              if (e.key === 'Enter') {
                queryButton();
              }
            } }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ queryButton }
          >
            <img src="lupa.svg" alt="" />

          </button>
        </div>
        <Link to="/"><img src="logo.svg" alt="" /></Link>

        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          <img
            className={ styles.cart }
            src="cart.svg"
            alt="cart"
          />
        </Link>

      </div>
    );
  }
}

Header.propTypes = {
  input: PropTypes.func,
  querybutton: PropTypes.func,
  search: PropTypes.string,
}.isRequired;

export default Header;
