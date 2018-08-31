import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Menu from '../src/Components/Menu';
import Footer from '../src/Components/Footer';
import AboutMe from './Components/aboutMe';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Menu />
      <Home />
      <AboutMe />
      <Projects />
      <Contact/>
      <Footer />
      
      </div>
      
    );
  }
}

export default App;