import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';

class Product extends Component {
  state = {
    itens: {},
  };

  componentDidMount() {
    this.showProducts();
  }

  showProducts = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    this.setState({
      itens: data,
    });
    console.log(data);
  };

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
    const { itens } = this.state;
    const { itens: { title, price } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{itens.title}</p>
        <img
          data-testid="product-detail-image"
          src={ itens.thumbnail }
          alt="tchau"
          srcSet=""
        />
        <p data-testid="product-detail-price">
          Preço:
          {' '}
          {itens.price}
        </p>
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
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => {
            this.handleOnClick(title, price);
          } }
        >
          adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default Product;
