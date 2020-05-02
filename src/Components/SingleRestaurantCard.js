import React from "react";
import { Card } from "semantic-ui-react";
import AddCollectionModal from "./AddCollectionModal";

class SingleRestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    const singleRestaurantData = this.props.singleRestaurantData;
    const myCollectionData = this.props.myCollectionData;
    this.state = {
      singleRestaurantData: singleRestaurantData,
      myCollectionData: myCollectionData,
    };
  }

  render() {
    return (
      <Card color="orange" aria-label="restaurant card">
        <Card.Content>
          <Card.Header>{this.state.singleRestaurantData[0]}</Card.Header>
          <Card.Description>
            {this.state.singleRestaurantData[1]}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <AddCollectionModal 
          aria-label="add to collection button"
          myCollectionData={this.state.myCollectionData} />
        </Card.Content>
      </Card>
    );
  }
}

export default SingleRestaurantCard;
