import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModel extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            modal: false,
            name: ''
        };
    }
    toggle = () =>
    {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    handelChange = (e) =>
    {
        this.setState({ [e.target.name]: e.target.value })
    }
    handelSubmit = (e) =>
    {
        e.preventDefault()
        const item = {
            name: this.state.name
        }
        this.props.addItem(item)
    }
    render ()
    {
        console.log(this.props)
        return (
            <div>
                <Button color="dark" onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Item</ModalHeader>
                    <Form onSubmit={this.handelSubmit}>
                        <ModalBody>
                            <Input type="text"
                                placeholder="Item name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handelChange}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" size="sm">Add item</Button>{' '}
                            <Button color="secondary" size="sm" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    return {
        item: state.item
    }
}
export default connect(mapStateToProps, { addItem })(ItemModel)