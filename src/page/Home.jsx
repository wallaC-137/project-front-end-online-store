import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import CardProduct from '../components/CardProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends Component {
  state = {
    search: '',
    productList: [],
    searchVoid: true,
    apiEmpty: false,
  };

  render() {
    const { search, searchVoid, productList, apiEmpty } = this.state;

    return (
      <div>
        {searchVoid && (
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>)}
        <input
          data-testid="query-input"
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
          data-testid="query-button"
          onClick={ async () => {
            const infoCard = await getProductsFromCategoryAndQuery(null, search);
            if (infoCard.results.length === 0) {
              this.setState({
                apiEmpty: true,
              });
            } else {
              this.setState({
                productList: infoCard.results,
                apiEmpty: false,
              });
            }
          } }
        >
          Pesquisa

        </button>
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
        {apiEmpty ? <p>Nenhum produto foi encontrado</p> : (productList
          .map((product, index) => (
            <CardProduct
              name={ product.title }
              price={ product.price }
              picture={ product.thumbnail }
              key={ index }
            />
          ))) }

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
