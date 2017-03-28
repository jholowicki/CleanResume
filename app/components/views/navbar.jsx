import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

const navbar = React.createClass({
  render: function() {
    return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a Linkto="/">Clean Resume Services</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/login">Login</NavItem>
                        <NavItem eventKey={2} href="/logout">Sign-Up</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
  }
});
export default navbar;