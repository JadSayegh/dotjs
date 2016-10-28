import React, {Component} from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'React-Bootstrap'
import {Link} from 'react-router'
import {LinkContainer} from 'react-router-bootstrap'


export default class NavBar extends Component {
  render() {
    return (
      // Add your component markup and other subcomponent references here.
      
  <Navbar inverse>

    <Navbar.Header>
    <LinkContainer to="/">
	      <Navbar.Brand role="button" style={{color:"#00C78B"}}>
	        .JS
	      </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/blog"><NavItem >Blog</NavItem></LinkContainer>
        <NavDropdown title="Recent Experiments" id="basic-nav-dropdown">
          <LinkContainer to="/leads/tennis"><NavItem >Tennis</NavItem></LinkContainer>
          <LinkContainer to="/leads/French"><NavItem >French</NavItem></LinkContainer>
          <LinkContainer to="/leads/Baking"><NavItem >Baking</NavItem></LinkContainer>
          <LinkContainer to="/leads/English"><NavItem >English</NavItem></LinkContainer>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Login</NavItem>
        <NavItem eventKey={2} href="#">Sign Up!</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}
