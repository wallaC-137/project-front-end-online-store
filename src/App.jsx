import React from 'react';
import './App.css';
import Rotas from './components/Rotas';
import Header from './components/Header';
import { getProductsFromCategoryAndQuery } from './services/api';

class App extends React.Component {
  state = {
    search: '',
    productList: [],
    searchVoid: true,
    apiEmpty: true,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  };

  queryApi = async () => {
    const { search } = this.state;
    const infoCard = await getProductsFromCategoryAndQuery(null, search);
    if (infoCard.results.length === 0) {
      this.setState({
        apiEmpty: false,
      });
    } else {
      this.setState({
        productList: infoCard.results,
        apiEmpty: true,
        searchVoid: false,
      });
    }
  };

  render() {
    const { search, searchVoid, productList, apiEmpty } = this.state;
    return (
      <div className="App">
        <Header
          input={ this.handleChange }
          queryButton={ this.queryApi }
          search={ search }
        />
        <Rotas
          searchVoid={ searchVoid }
          productList={ productList }
          apiEmpty={ apiEmpty }
        />
      </div>
    );
  }
}

export default App;
