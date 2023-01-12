import React, { Component } from 'react';
import { getCategories, getItensFromCategories } from '../services/api';

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
          <div key={ item.id } data-testid="product">
            <p>{item.title}</p>
            <img src={ item.thumbnail } alt="oi" />
            <p>{item.price}</p>
          </div>
        ))}
      </div>

    );
  }
}

export default Categories;
