import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import App from '../App';

export default (
    <div>
   <Router history={hashHistory}>
   <Route path="/" component={App}>
   <Route path="/Header" component={Header}></Route>
   <Route path="/Footer" component={Footer}></Route>
   <Route path="/Menu" component={Menu}></Route>
    <Route path="/Contact" component={Contact}>
    </Route>
    </Route>
    </Router>

    </div>
)