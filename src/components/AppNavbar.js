import React, { Component } from 'react'
import
{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';

export default class AppNavbar extends Component
{
    constructor (props)
    {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle = () =>
    {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render ()
    {
        const guestLinks = (
            <React.Fragment>
                <NavItem>
                    <LoginModal buttonLabel="Login" />
                </NavItem>
                <NavItem>
                    <RegisterModal />
                </NavItem>
            </React.Fragment>
        )
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">React with Redux</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {guestLinks}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
