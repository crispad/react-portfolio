import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Header.css';


class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="navbar">
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                </div>
                <div className="background"></div>
                <div className="background2x">
                <div className="col justify-content-left topHeader"></div>
                <Link to="/">
                <img src={require('../Assets/IMG_0014.jpg')} alt='Cristina Laryea'/>
                <h1>CRISTINA LARYEA</h1>
                <h3>FULL STACK DEVELOPER</h3>
                </Link>
                
                {/* <div className="Links justiy-content">
                    <Link to='/About'>ABOUT</Link>
                    <Link to='/Projects'>PROJECTS</Link>
                    <Link to='/Blog'>BLOG</Link>
                    <Link to='/Life'>LIFE</Link>
                    <Link to='/Contact'>CONTACT</Link>
                </div> */}
                <div className="Header-text px-5"></div>
                <h1 className="mb-5 Intro">Hello Everyone!</h1>
                    <p className="summary">
                    Let me begin by telling you my story, I worked as a Pharmacy Technician for thirteen years. I enjoyed the interaction with patients, and
                    the work flow, but wanted more. I knew I was not going to become a pharmacist, so what else was there for me? I decided to go back to school for computer science,
                    as I took a few classes I realized I wanted more of hands-on experience. I researched and found Lambda School, a Computer Science and Software Engineering Academy.
                    Once I discovered my passion for web development I couldn’t get enough. 
                    I enjoy every moment, because there is always something new and great to learn.
                    The best part about programming that I enjoy is problem solving because there is always a solution. 
                    For instance, thinking meticulously and making a plan that will lead to a working solution. 
                    Lambda school opened a whole new world of opportunities for me. I learned different programming languages, along with different frameworks that have taught me how to create a front and back-end websites and applications. 
                    
                    </p>
                <hr />
            </div>
            </div>
        );
    }
}



export default Header;