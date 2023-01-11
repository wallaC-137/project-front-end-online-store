import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

class App extends React.Component {
  state = {
    search: '',
    searchVoid: true,
  };

  render() {
    const { search, searchVoid } = this.state;
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
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
