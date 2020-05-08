import React from "react";
import { Card, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

class SingleCollectionCard extends React.Component {
  constructor(props) {
    super(props);
    const singleCollectionName = this.props.singleCollectionName;
    this.state = {
      singleCollectionName: singleCollectionName,
    };
  }

  render() {
    return (
      <Link to={`/users/collections/${this.state.singleCollectionName}`}>
        <Card raised>
          <Card.Content>
            <Card.Header as="h2">{this.state.singleCollectionName}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Label size="small" color="orange" circular>
              View collection Restaurants
            </Label>
          </Card.Content>
        </Card>
      </Link>
    );
  }
}

export default SingleCollectionCard;
