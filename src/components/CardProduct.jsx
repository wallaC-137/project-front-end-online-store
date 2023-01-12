import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CardProduct extends Component {
  render() {
    const { name, picture, price, id } = this.props;
    return (

      <div data-testid="product">
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <p>{name}</p>
          <img src={ picture } alt={ name } />
          <p>{price}</p>
        </Link>
      </div>

    );
  }
}

CardProduct.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
