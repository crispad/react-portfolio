import React from 'react';
import { Link } from 'react-router-dom';



class Header extends React.Component {
    render() {
        return (
            <div>
                <Link to="/">
                <img src={require('../Assets/IMG_0014.jpg')} alt='Cristina Laryea'/>
                <h1>CRISTINA LARYEA</h1>
                </Link>
                <div>
                    <Link to='/'>ABOUT</Link>
                    <Link to='/'>PROJECTS</Link>
                    <Link to='/'>BLOG</Link>
                    <Link to='/'>LIFE</Link>
                    <Link to='/'>CONTACT</Link>
                </div>
                <hr />
            </div>
        );
    }
}



export default Header;