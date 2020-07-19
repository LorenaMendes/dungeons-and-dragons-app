import React from 'react'

import About from '../../About';

import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClassDetail from '../ClassDetail';
import Classes from '../Classes';
import MenuBar from '../MenuBar';

function Layout() {
  return (
    <Container>
      <Router>
        <MenuBar />
        
        <Switch>
          {/* <Route path="/" component={Home} exact/> */}
          <Route path="/about" component={About}/>
          <Route path="/classes" component={Classes} exact/>
          <Route path="/classes/:id" component={ClassDetail}/>
        </Switch>
      
      </Router>
    </Container>
  );
}

export default Layout;