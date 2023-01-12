import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Cart extends Component {
  state = {
    listCart: [] || true,
    cartVoid: true,
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

  render() {
    // const { cartVoid } = this.props;
    const { listCart, cartVoid } = this.state;
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
            <p data-testid="shopping-cart-product-name">{name}</p>
            <p>{price}</p>
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
