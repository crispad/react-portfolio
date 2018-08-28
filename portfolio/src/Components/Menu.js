import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink} from 'react-router-dom';
import '../Css/Menu.css'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div> 
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Explore
        </Button>
        <div className="menu">
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

          <MenuItem onClick={this.handleClose}>About Me</MenuItem>
          <MenuItem onClick={this.handleClose}>Projects</MenuItem>
          <MenuItem onClick={this.handleClose}>Blogs</MenuItem>
          <MenuItem onClick={this.handleClose}>Contact</MenuItem>
        </Menu>
        </div>
      </div>
    );
  }
}

export default SimpleMenu;