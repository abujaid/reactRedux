import React, { Component } from 'react'
import
{
    Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, Input, Form,
    FormGroup, Label
} from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions'

class LoginModal extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            modal: false,
            email: '',
            password: ''
        };

    }

    toggle = () =>
    {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handleChange = (e) =>
    {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        const { email, password } = this.state;
        const user = {
            email,
            password
        }
        this.props.login(user)
    }
    render ()
    {
        console.log(this.props)
        return (
            <div>
                <NavLink href="#" onClick={this.toggle}>{this.props.buttonLabel}</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                    <Form onSubmit={this.handleSubmit}>
                        <ModalBody>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input type="text" name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Password</Label>
                                <Input type="password" name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success">Sign In</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth
    // error: state.error
});
export default connect(mapStateToProps, { login })(LoginModal)