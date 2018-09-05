import React from 'react';
//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../Css/nav.css';

//import { toElement as scrollToElement } from './scroll.js';



class Nav extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  // scrollToPage(pageSelector) {
  //   const nextPage = document.querySelector(pageSelector);
  //   scrollToElement(nextPage);
  // }

  render() {

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    return (
      <div className="navbox"> 
      <div
        className={stickyClass} ref={(elem) => {
          this.nav = elem;
        }}
      >
        <div className="nav" data-aos="fade-down" data-aos-delay="3000">
          <div
            className="nav-item active hvr-grow"
            onClick={(e) => this.scrollToPage('.home-page')}
          >
            Home
          </div>
          <div
            className="nav-item hvr-grow"
            onClick={(e) => this.scrollToPage('.about me-page')}
          >
            About Me
          </div>
          <div
            className="nav-item hvr-grow"
            onClick={(e) => this.scrollToPage('.projects-page')}
          >
            Projects
          </div>
          <div
            className="nav-item hvr-grow"
            onClick={(e) => this.scrollToPage('blogs.-page')}
          >
            Skills
          </div>
          <div
            className="nav-item hvr-grow"
            onClick={(e) => this.scrollToPage('.contact-page')}
          >
            Blog
          </div>
          <div
            className="nav-item hvr-grow"
            onClick={(e) => this.scrollToPage('.contact-page')}
          >
            Contact
          </div>
        </div>
      </div>
      </div>
    );
  }
}



export default Nav;