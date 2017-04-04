import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Menu extends React.PureComponent {
  render(){
    return (
      <Navbar inverse fixedTop fluid>
          <Navbar.Header>
              <Navbar.Brand>
                  {this.props.name} {this.props.surname}
              </Navbar.Brand>
              <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <Nav role="tablist" bsStyle="pills" pullRight activeKey={this.props.scrollKey} id="navbar">
                  <NavItem eventKey={1} href="#me">
                      Me
                  </NavItem>
                  <NavItem eventKey={2} href="#exp">
                      Experience
                  </NavItem>
                  <NavItem eventKey={3} href="#form">
                      Formation
                  </NavItem>
                  <NavItem eventKey={4} href="#int">
                      Interests
                  </NavItem>
                  <NavItem eventKey={5} href="#links">
                      Contact
                  </NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

Menu.propTypes = {
  scrollKey: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired
}

export default Menu;
