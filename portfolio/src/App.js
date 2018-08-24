import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../src/Components/Header';
import Menu from '../src/Components/Menu';
import Footer from '../src/Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu />
      <Header />
      <Footer />
  
      </div>
    );
  }
}

export default App;
