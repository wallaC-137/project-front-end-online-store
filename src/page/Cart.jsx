import React, { Component } from 'react';
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
    return (
      <div>
        {cartVoid && (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        )}
        {listCart.map(({ name, price, quantity }) => (
          <dir key={ name }>
            <button
              data-testid="remove-product"
              type="button"
              onClick={ () => this.onClickRemove(name) }
            >
              Excluir

            </button>
            <p data-testid="shopping-cart-product-name">{name}</p>
            <p>{price}</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ this.addItem }
              id={ name }
            >
              Adicionar
            </button>
            <p data-testid="shopping-cart-product-quantity">{`Quantidade ${quantity}`}</p>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ this.removeItem }
              id={ name }
            >
              Remover
            </button>
          </dir>
        ))}
        <p>{listCart.length}</p>
      </div>
    );
  }
}

// Cart.propTypes = {
//   cartVoid: PropTypes.bool.isRequired,
// };
