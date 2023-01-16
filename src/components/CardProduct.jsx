import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CardProduct.module.css';

export default class CardProduct extends Component {
  handleOnClick = (name, price) => {
    if (localStorage.getItem('listCart')) {
      const oldItem = JSON.parse(localStorage.getItem('listCart'));
      const newItem = [...oldItem, { name, price, quantity: 1 }];
      localStorage.setItem(
        'listCart',
        [JSON.stringify(newItem)],
      );
    } else {
      localStorage.setItem('listCart', JSON.stringify([{ name, price, quantity: 1 }]));
    }
  };

  render() {
    const { name, picture, price, id } = this.props;
    return (

      <div data-testid="product" className={ styles.maindiv }>
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <p>{name}</p>
          <img src={ picture } alt={ name } />
          <p>{price}</p>
        </Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => {
            this.handleOnClick(name, price);
          } }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CardProduct.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
