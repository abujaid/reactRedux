import React, { Component } from 'react'
import
{
    Button, Modal, ModalHeader,
    ModalBody, ModalFooter, NavLink,
    Input, Form, FormGroup, Label
} from 'reactstrap';
import { register } from '../../actions/authActions'
import { connect } from 'react-redux';

class RegisterModal extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            modal: false,
            name: '',
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
        e.preventDefault()
        const { name, email, password } = this.state;
        const newUser = {
            name,
            email,
            password
        };
        this.props.register(newUser);
        this.toggle()
    }
    render ()
    {
        // console.log(this.props)
        return (
            <div>
                <NavLink href="#" onClick={this.toggle}>Register</NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input type="text" name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
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
                            <Button color="success">Sign Up</Button>{' '}
                            <Button color="danger" onClick={this.toggle}>Cancel</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
export default connect(mapStateToProps, { register })(RegisterModal)