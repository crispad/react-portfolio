import React, { Component } from 'react';
import '../Css/nav.css';

class Nav extends Component{
  render() {
    return (
      <div>
      <ul>
  <li><a href="default.asp">Home</a></li>
  <li><a href="/About Me">About Me</a></li>
  <li><a href="/Projects">Projects</a></li>
  <li><a href="/Skills">Skills</a></li>
</ul>
</div>
    )
  }
}


export default Nav;