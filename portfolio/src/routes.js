import React from 'react';
import { Route } from 'react-router';
import Menu from './Components/Menu';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default (
    <Route path="/" component={Menu}>
    <Route path="/Header" component={Header}>
    <Route path="/Footer" component={Footer}>
    </Route>
    </Route>
    </Route>
    
)