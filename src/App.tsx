  
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  border-color: grey;
  border: 2px;
  margin-top: 20px;
  margin-right: 5vw;
  margin-left: 5vw;
  @media only screen and (max-width: 400px) {
    margin-right: 10px;
  }
  @media only screen and (max-width: 600px) {
  }
`;

const MenuLink = styled.p`
  font-family: 'Exo';
  margin-left: 15px; 
  color: #141c3a;
  font-weight: 600;
`;

const SayButton = styled.button`
    margin-left: 10px;
    border-width: 2px;
    font-weight: 400;
    font-size: 18px;
    padding: 12px;
    background-color: transparent;
    border-color: #7510F7;
    color: #7510F7;
    border-radius: 50px;
    font-family: 'Exo';
    outline: none;
    :hover {
      background-color: #7510F7;
      color: white;
    }
`;

class App extends Component {
  render() {
    return (
  <Wrapper>
    <Router>
        <MenuWrapper>
        <Link to={'/contact'} ><SayButton>Say Hello5</SayButton></Link>
        <Link to={'/projects'} ><MenuLink>Projects</MenuLink></Link>
        <Link to={'/'} > <MenuLink>Home</MenuLink> </Link>
        </MenuWrapper>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Route path='/github' component={() => { 
                  window.location.href = 'https://github.com/mbobas'; 
                  return null;
              }}/>
          </Switch>
      </Router>
      
  </Wrapper>
    );
  }
}

export default App;