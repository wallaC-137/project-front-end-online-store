import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const data = await getCategories();
    this.setState({
      categories: data,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map((category) => (
          <div key={ category.id }>
            <button data-testid="category" type="button">{category.name}</button>
          </div>
        ))}
      </div>

    );
  }
}

export default Categories;
