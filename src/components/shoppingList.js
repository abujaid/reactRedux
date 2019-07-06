import React, { Component } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getItems, delteItem } from '../actions/itemActions';
import ItemModel from './ItemModel';


class shoppingList extends Component
{

    componentDidMount ()
    {
        this.props.getItems();
    }
    onDeleteClick = (id) =>
    {
        let token = localStorage.getItem('token')
        this.props.delteItem(id, token)
    }
    render ()
    {
        const { items } = this.props.item
        console.log(this.props)
        return (
            <Container>
                <ItemModel />
                <ListGroup className="mt-2">
                    {

                        items.map(({ name, _id }) =>
                            <ListGroupItem key={_id}>
                                <Button color="danger" size="sm"
                                    onClick={() => this.onDeleteClick(_id)}>X</Button>
                                {name}
                            </ListGroupItem>
                        )
                    }
                </ListGroup>
            </Container>
        )
    }
}
const mapStateToProps = (state) =>
{
    return {
        item: state.item
    }
}
export default connect(mapStateToProps, { getItems, delteItem })(shoppingList)