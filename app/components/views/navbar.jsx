import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';

const navbar = React.createClass({
  render: function() {
    return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Clean Resume Services</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Link to="/login">Login</Link>
                        <Link to="/logout">Sign-Up</Link>
                        <NavItem eventKey={1} href="/login">Login</NavItem>
                        <NavItem eventKey={2} href="/logout">Sign-Up</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
  }
});
export default navbar;
