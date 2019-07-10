import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    constructor() {
        super();
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Web</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/chat" className="nav-link">Chat</NavLink >
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profiles" className="nav-link">Profiles</NavLink >
                        </NavItem>
                        <NavItem>
                            <NavLink to="/register" className="nav-link">Register</NavLink >
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link">Login</NavLink >
                        </NavItem>
                        {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
};