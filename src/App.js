import React, { Component } from 'react';
import Header from './components/Header';
import Main from './pages/main';


import './style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < Main />
      </div>
    );
  }
}

export default App;
