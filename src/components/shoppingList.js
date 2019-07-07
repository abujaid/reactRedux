import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';

class ShoppingList extends Component
{
  componentDidMount ()
  {
    this.props.getItems();
  }

  onDeleteClick = id =>
  {
    this.props.deleteItem(id);
  };

  render ()
  {
    const { items } = this.props.item;
    return (
      <Container className="text-left">
        <ListGroup>
          {items.map(({ _id, name }) => (
            <ListGroupItem>
              {this.props.isAuthenticated ? (
                <Button
                  className='remove-btn'
                  color='danger'
                  size='sm'
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  &times;
                    </Button>
              ) : null}
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
