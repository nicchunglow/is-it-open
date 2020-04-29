import React from "react";
import "./Home.css";
import restaurants from "../Resources/restaurants";
import SingleRestaurantCard from "../Components/SingleRestaurantCard";
import { Container } from "semantic-ui-react";
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
        <SingleRestaurantCard
          singleRestaurantData={this.state.allRestaurants[0]}
        />
      </Container>
    );
  }
}

export default Home;
