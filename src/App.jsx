import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  async componentDidMount() {
    console.log(await getCategories());
  }

  render() {
    return (
      <div className="App">
        bode
      </div>
    );
  }
}

export default App;
