import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Cart extends Component {
  state = {
    listCart: [],
    cartVoid: true,
    addItem: 0,
  };

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage = () => {
    if (localStorage.getItem('listCart')) {
      const list = localStorage.getItem('listCart');
      const newList = JSON.parse(list);
      console.log(newList);
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

  removeItem = () => {

  };

  addItem = () => {

  };

  render() {
    // const { cartVoid } = this.props;
    const { listCart, cartVoid, addItem } = this.state;
    console.log(listCart);
    return (
      <div>
        {cartVoid && (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        )}
        {listCart.map(({ name, price }) => (
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
            >
              Adicionar
            </button>
            <p>{`Quantidade ${addItem}`}</p>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.removeItem() }
            >
              Remover
            </button>
          </dir>
        ))}
        <p data-testid="shopping-cart-product-quantity">{listCart.length}</p>
      </div>
    );
  }
}

// Cart.propTypes = {
//   cartVoid: PropTypes.bool.isRequired,
// };
