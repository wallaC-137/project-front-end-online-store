import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import styles from './Product.module.css';

class Product extends Component {
  state = {
    itens: {},
    img: '',
    attributes: [],
    price: '',
  };

  componentDidMount() {
    this.showProducts();
  }

  showProducts = async () => {
    const { match: { params: { id } } } = this.props;
    const data = await getProductById(id);
    console.log(data.pictures[1].secure_url);
    this.setState({
      itens: data,
      img: data.pictures[1].secure_url,
      attributes: [...data.attributes],
      price: data.price,
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
    const { itens, img, attributes, price } = this.state;
    const { itens: { title } } = this.state;
    console.log(itens);
    // console.log(itens.pictures[1].secure_url);
    return (
      <div className={ styles.product }>
        <div className={ styles.picture }>
          <p data-testid="product-detail-name">{itens.title}</p>
          <img
            data-testid="product-detail-image"
            src={ img }
            alt="tchau"
            srcSet=""
          />
        </div>
        <div className={ styles.description }>
          <ul>
            {attributes.map(({ name }, index) => (<li key={ index }>{`- ${name}`}</li>))}
          </ul>
          <div className={ styles.price }>
            <p data-testid="product-detail-price">
              <span className={ styles.real }>R$:</span>
              {' '}
              {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
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
        </div>
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
