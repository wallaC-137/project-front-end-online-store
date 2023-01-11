import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Cart from './page/Cart';

class App extends React.Component {
  state = {
    search: '',
    searchVoid: true,
    cartVoid: true,
  };

  render() {
    const { search, searchVoid, cartVoid } = this.state;
    return (

      <div className="App">
        <input
          type="text"
          value={ search }
          onChange={ ({ target: { value } }) => {
            this.setState({
              search: value,
            });
          } }
        />
        {searchVoid && (
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>)}
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" render={ () => <Cart cartVoid={ cartVoid } /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
