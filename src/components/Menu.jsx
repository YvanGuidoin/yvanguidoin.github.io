import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

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
                  <NavItem eventKey={1} href="#me">Me</NavItem>
                  <NavItem eventKey={2} href="#desc">Introduction</NavItem>
                  <NavItem eventKey={3} href="#exp">Experience</NavItem>
                  <NavItem eventKey={4} href="#form">Formation</NavItem>
                  <NavItem eventKey={5} href="#int">Interests</NavItem>
                  <NavItem eventKey={6} href="#links">Contact</NavItem>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

Menu.propTypes = {
  scrollKey: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired
}

export default Menu;
