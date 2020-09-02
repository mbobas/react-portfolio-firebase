  
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
        <li><Link to={'/projects'} className="nav-link">Projects</Link></li>
        </ul>
        </nav>
        <hr />
    </div>
    );
  }
}

export default Menu;