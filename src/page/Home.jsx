import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import CardProduct from '../components/CardProduct';
// import { getProductsFromCategoryAndQuery } from '../services/api';
// import Header from '../components/Header';
import styles from './Home.module.css';

export default class Home extends Component {
  // state = {
  //   search: '',
  //   productList: [],
  //   searchVoid: true,
  //   apiEmpty: true,
  // };

  // handleChange = ({ target: { value } }) => {
  //   this.setState({
  //     search: value,
  //   });
  // };

  // queryApi = async () => {
  //   const { search } = this.state;
  //   const infoCard = await getProductsFromCategoryAndQuery(null, search);
  //   if (infoCard.results.length === 0) {
  //     this.setState({
  //       apiEmpty: false,
  //     });
  //   } else {
  //     this.setState({
  //       productList: infoCard.results,
  //       apiEmpty: true,
  //       searchVoid: false,
  //     });
  //   }
  // };

  // cartButton = () => {
  //   const { history: { push } } = this.props;
  //   return push('/cart');
  // };

  handleProduct = (productList, apiEmpty) => (
    apiEmpty ? (
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
    ) : <p>Nenhum produto foi encontrado</p>
  );

  render() {
    const { searchVoid, productList, apiEmpty } = this.props;

    return (
      <div>
        {/* <Header
          input={ this.handleChange }
          queryButton={ this.queryApi }
          search={ search }
        /> */}
        <main className={ styles.main }>
          <Categories />
          {(searchVoid) ? (
            <span data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </span>) : this.handleProduct(productList, apiEmpty)}
        </main>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  status: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.any,
    ),
  ),
}.isRequired;
