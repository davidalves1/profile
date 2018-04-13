import React from 'react';
import { Navbar, NavItem, Row } from 'react-materialize';

const Header = () => (
    <Row>
        <Navbar className="blue darken-4">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/contact">Contact</NavItem>
        </Navbar>
    </Row>
);

export default Header;