import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

export default class Home extends Component {
  state = {
    search: '',
    searchVoid: true,
  };

  render() {
    const { search, searchVoid } = this.state;
    return (
      <div>
        {searchVoid && (
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>)}
        <input
          type="text"
          value={ search }
          onChange={ ({ target: { value } }) => {
            this.setState({
              search: value,
            });
          } }
        />
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
        <Categories />
      </div>
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
