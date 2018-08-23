import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header';
import Menu from '../src/Components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu />
      <Header />
  
      </div>
    );
  }
}

export default App;
