import React from "react";
import { Container, Card, Statistic } from "semantic-ui-react";
class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: "",
    };
  }

  render() {
    return (
      <Container>
        <Statistic>
          <Statistic.Value>{this.state.allRestaurants.length}</Statistic.Value>
          <Statistic.Label>restaurants in your collection!</Statistic.Label>
        </Statistic>
        <Card.Group stackable itemsPerRow="4"></Card.Group>
      </Container>
    );
  }
}

export default Collection;
