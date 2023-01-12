import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProduct extends Component {
  render() {
    const { name, picture, price } = this.props;
    return (
      <div data-testid="product">
        <p>{name}</p>
        <img src={ picture } alt={ name } />
        <p>{price}</p>
      </div>
    );
  }
}

CardProduct.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
