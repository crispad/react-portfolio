import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

// class SimpleMenu extends Component {
//   render() {
//     return (
      // <div className="Menu">
      //   <ul>
      //     <Link to = '/about me'><span className='text-dark'>About Me</span></Link>
      //     <Link to = '/projects'><span className='text-dark'>Projects</span></Link>
      //     <Link to = '/blogs'><span className='text-dark'>Blogs</span></Link>
      //     <Link to = '/contact'><span className='text-dark'>Contact</span></Link>
          

      //   </ul>
      // </div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//       <li class="nav-item active">
//         <a class="nav-link" href="/Home">Home <span class="sr-only"></span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/About Me">About Me</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/Projects">Projects</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="/Blogs">Blogs</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="/Contacts">Contact</a>
//       </li>
//     </ul>
//   </div>
// </nav>

class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Cristina Laryea</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/About Me/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Projects/">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Blogs/">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contact/">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
//     )
//   }
// }


export default SimpleMenu;