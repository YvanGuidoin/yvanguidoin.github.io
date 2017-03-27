import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends React.PureComponent {
  render(){
    return (
      <Navbar inverse>
          <Navbar.Header>
              <Navbar.Brand>
                  {this.props.name} {this.props.surname}
              </Navbar.Brand>
              <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav pullRight>
                  <NavItem href="#me">
                      Me
                  </NavItem>
                  <NavItem href="#exp">
                      Experience
                  </NavItem>
                  <NavItem href="#form">
                      Formation
                  </NavItem>
                  <NavItem href="#links">
                      Contact
                  </NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

Menu.propTypes = {
  name: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired
}

export default Menu;
