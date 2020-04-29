import React from "react";
import "./Home.css";
import restaurants from "../Resources/restaurants";
import SingleRestaurantCard from "../Components/SingleRestaurantCard";
import { Container, Card, Divider } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: restaurants,
    };
  }

  render() {
    return (
      <Container>
        <span className="Home-border">
          <h1>Is it Open?</h1>
        </span>
        <Divider />
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
