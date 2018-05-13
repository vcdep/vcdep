import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            VCDEP
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/download">
                  Download
                </NavLink>
              </NavItem>
              <UncontrolledDropdown dark nav inNavbar>
                <DropdownToggle nav caret>
                  Wiki
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/wiki/checkout">
                    Checkout
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/wiki/static">
                    Static Analysis
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/wiki/unit">
                    Unit Testing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/wiki/integration">
                    Integration Testing
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/wiki/deploy">
                    Deploy
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/wiki/build">
                    Build
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
