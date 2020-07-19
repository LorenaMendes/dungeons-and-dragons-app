import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Container, NavLink } from './styles';
import About from '../../About';

function MenuBar() {

  const navStyle = {
    color: 'white',
  }

  return (
    <Container>
      
        <Link style={navStyle} to='/about'>
          <NavLink>About</NavLink>
        </Link>
        
        <Link style={navStyle} to='/classes'>
          <NavLink>Classes</NavLink>
        </Link>
        
    </Container>
  );
}

export default MenuBar;