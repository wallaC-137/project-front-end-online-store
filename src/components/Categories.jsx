import React, { Component } from 'react';
import { getCategories, getItensFromCategories } from '../services/api';
import CardProduct from './CardProduct';

class Categories extends Component {
  state = {
    categories: [],
    itensCategory: [],
  };

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  }

  handleClick = async ({ target: { id } }) => {
    const data = await getItensFromCategories(id);
    this.setState({
      itensCategory: data.results,
    });
  };

  render() {
    const { categories, itensCategory } = this.state;
    return (
      <div>
        { categories.map((category) => (
          <div key={ category.id }>
            <button
              onClick={ this.handleClick }
              data-testid="category"
              type="button"
              id={ category.id }
            >
              {category.name}
            </button>
          </div>
        ))}
        {itensCategory.map((item) => (
          <CardProduct
            name={ item.title }
            price={ item.price }
            picture={ item.thumbnail }
            key={ item.id }
            id={ item.id }
          />
        ))}
      </div>

    );
  }
}

export default Categories;
