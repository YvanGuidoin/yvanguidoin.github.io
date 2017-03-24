import React from 'react';
import { Col, Grid, Navbar, Nav, NavItem } from 'react-bootstrap';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              Yvan Guidoin
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="#">
                Test
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        // <p>{this.props.ex}</p>
      </div>
    )
  }
}

export default App;
