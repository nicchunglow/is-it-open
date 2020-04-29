import React from "react";
import restaurants from "../Resources/restaurants";
import SingleRestaurantCard from "../Components/SingleRestaurantCard";
import { Container, Card, Statistic} from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: restaurants,
      isLoading : false
    };
  }


  render() {
    return (
      <Container>
        <Statistic>
    <Statistic.Value>{this.state.allRestaurants.length}</Statistic.Value>
          <Statistic.Label>Restaurants for you to choose!</Statistic.Label>
        </Statistic>
        
        <Card.Group stackable itemsPerRow="5">
          {this.state.allRestaurants.map((restaurant) => (
            <SingleRestaurantCard
              key={uuidv4()}
              singleRestaurantData={restaurant}
            />
          ))}
        </Card.Group>
      </Container>
    );
  }
}

export default Home;
