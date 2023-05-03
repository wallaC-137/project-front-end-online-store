import React, { Component } from 'react';
import styles from './Cart.module.css';
// import PropTypes from 'prop-types';

export default class Cart extends Component {
  state = {
    listCart: [],
    cartVoid: true,
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    if (localStorage.getItem('listCart')) {
      const list = localStorage.getItem('listCart');
      const newList = JSON.parse(list);
      this.setState({
        listCart: [...newList],
        cartVoid: false,
      });
    }
  };

  onClickRemove = (item) => {
    const list = localStorage.getItem('listCart');
    const newList = JSON.parse(list);
    const filterList = newList.filter((product) => product.name !== item);
    localStorage.setItem('listCart', JSON.stringify(filterList));
    this.setState({
      listCart: filterList,
    });
  };

  removeItem = ({ target: { id } }) => {
    const list = localStorage.getItem('listCart');
    const newList = JSON.parse(list);
    const filterList = newList.map((product) => {
      if (product.name === id && product.quantity > 1) {
        product.quantity -= 1;
      }
      return product;
    });
    localStorage.setItem('listCart', JSON.stringify(filterList));
    this.setState({
      listCart: filterList,
    });
  };

  addItem = ({ target: { id } }) => {
    const list = localStorage.getItem('listCart');
    const newList = JSON.parse(list);
    const filterList = newList.map((product) => {
      if (product.name === id) {
        product.quantity += 1;
      }
      return product;
    });
    localStorage.setItem('listCart', JSON.stringify(filterList));
    this.setState({
      listCart: filterList,
    });
  };

  render() {
    // const { cartVoid } = this.props;
    const { listCart, cartVoid } = this.state;
    console.log(listCart);
    return (
      <div className={ styles.containerCart }>
        {cartVoid && (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        )}
        <div className={ styles.listItens }>
          <p className={ styles.title }>Carrinho de Compras</p>
          {listCart.map(({ name, price, quantity, picture }) => (
            <>
              <hr />
              <dir key={ name } className={ styles.item }>
                <button
                  className={ styles.buttonRemover }
                  data-testid="remove-product"
                  type="button"
                  onClick={ () => this.onClickRemove(name) }
                >
                  X
                </button>
                <img src={ picture } alt={ name } />
                <p data-testid="shopping-cart-product-name">{name}</p>
                <p className={ styles.price }>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <button
                  className={ styles.button }
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ this.addItem }
                  id={ name }
                >
                  +
                </button>
                <p
                  data-testid="shopping-cart-product-quantity"
                  className={ styles.quantity }
                >
                  {quantity}

                </p>
                <button
                  className={ styles.button }
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ this.removeItem }
                  id={ name }
                >
                  -
                </button>
              </dir>
            </>
          ))}
        </div>
        <div className={ styles.total }>
          <p className={ styles.totalTitle }>Valor total da compra</p>
          <p className={ styles.totalPrice }>
            {listCart.reduce((acc, cr) => {
              acc += cr.price;
              return acc;
            }, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
          <button className={ styles.totalButton } type="button">Finalizar compra</button>
        </div>
      </div>
    );
  }
}

// Cart.propTypes = {
//   cartVoid: PropTypes.bool.isRequired,
// };
