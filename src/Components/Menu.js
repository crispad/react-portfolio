import React, { Component } from 'react';
//import { Link } from 'react-router-dom';


// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import { NavLink} from 'react-router-dom';
// import '../Css/Menu.css'

// class SimpleMenu extends React.Component {
//   state = {
//     anchorEl: null,
//   };

//   handleClick = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { anchorEl } = this.state;

//     return (
//       <div> 
//         <Button
//           aria-owns={anchorEl ? 'simple-menu' : null}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           Explore
//         </Button>
//         <div className="menu">
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={this.handleClose}
//         >

//           <MenuItem onClick={this.handleClose}>About Me</MenuItem>
//           <MenuItem onClick={this.handleClose}>Projects</MenuItem>
//           <MenuItem onClick={this.handleClose}>Blogs</MenuItem>
//           <MenuItem onClick={this.handleClose}>Contact</MenuItem>
//         </Menu>
//         </div>
//       </div>
//     );
//   }
// }

class SimpleMenu extends Component {
  render() {
    return (
      // <div className="Menu">
      //   <ul>
      //     <Link to = '/about me'><span className='text-dark'>About Me</span></Link>
      //     <Link to = '/projects'><span className='text-dark'>Projects</span></Link>
      //     <Link to = '/blogs'><span className='text-dark'>Blogs</span></Link>
      //     <Link to = '/contact'><span className='text-dark'>Contact</span></Link>
          

      //   </ul>
      // </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand" href="#">Cristina Laryea</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/Home">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/About Me">About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Projects">Projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/Blogs">Blogs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="/Contacts">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    )
  }
}


export default SimpleMenu;