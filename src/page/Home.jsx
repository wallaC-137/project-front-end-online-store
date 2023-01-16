import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import CardProduct from '../components/CardProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import styles from './Home.module.css';

export default class Home extends Component {
  state = {
    search: '',
    productList: [],
    searchVoid: true,
    apiEmpty: false,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  };

  queryApi = async () => {
    const { search } = this.state;
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
  };

  // cartButton = () => {
  //   const { history: { push } } = this.props;
  //   return push('/cart');
  // };

  render() {
    const { search, searchVoid, productList, apiEmpty } = this.state;

    return (
      <div>
        <Header
          input={ this.handleChange }
          querybutton={ this.queryApi }
          search={ search }
        />
        <main className={ styles.main }>
          <Categories />
          {(searchVoid && search === '') && (
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>)}

          {apiEmpty ? <p>Nenhum produto foi encontrado</p> : (
            <div className={ styles.div2 }>
              {
                productList.map((product, index) => (
                  <CardProduct
                    name={ product.title }
                    price={ product.price }
                    picture={ product.thumbnail }
                    key={ index }
                    id={ product.id }
                  />
                ))
              }

            </div>
          )}

        </main>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
