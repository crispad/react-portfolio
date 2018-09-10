import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/nav';
import Footer from '../src/Components/Footer';
import AboutMe from './Components/aboutMe';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Nav />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact/>
      <Footer />
      
      </div>
      
    );
  }
}

export default App;
