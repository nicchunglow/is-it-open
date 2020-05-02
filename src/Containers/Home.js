import React from "react";
import SingleRestaurantCard from "../Components/SingleRestaurantCard";
import { Container, Card, Statistic, Button } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import Papa from "papaparse";
import LoadingCircle from "../Components/Loader";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: [["KFC", "Everyday"]],
      isLoading: true,
      myCollections: ["Korean", "Chinese", "Indian"],
      limit: 5,
    };
  }

  componentDidMount() {
    Papa.parse(
      "https://gist.githubusercontent.com/seahyc/7ee4da8a3fb75a13739bdf5549172b1f/raw/f1c3084250b1cb263198e433ae36ba8d7a0d9ea9/hours.csv",
      {
        download: true,
        header: false,
        complete: (results) => {
          this.updateAllRestaurants(results);
          this.updateLoading();
        },
      }
    );
  }

  updateAllRestaurants = (results) => {
    this.setState({
      allRestaurants: results.data,
    });
  };

  updateLoading = () => {
    this.setState({ isLoading: false });
  };
  increaseLimit = () => {
    this.setState({
      limit: this.state.limit + 5,
    });
    console.log(this.state.limit);
  };

  renderRestaurants = () => {
    return this.state.allRestaurants
      .slice(0, this.state.limit)
      .map((restaurant) => (
        <SingleRestaurantCard
          key={uuidv4()}
          singleRestaurantData={restaurant}
          myCollectionData={this.state.myCollections}
        />
      ));
  };

  render() {
    return (
      <Container>
        <Statistic>
          <Statistic.Value>{this.state.allRestaurants.length}</Statistic.Value>
          <Statistic.Label aria-label="stats">
            Restaurants for you to choose!
          </Statistic.Label>
        </Statistic>
        <LoadingCircle isLoading={this.state.isLoading} />
        <Card.Group stackable itemsPerRow="5" centered>
          {this.renderRestaurants()}
          <Button
            color="orange"
            content="Load More"
            onClick={this.increaseLimit}
          />
        </Card.Group>
      </Container>
    );
  }
}

export default Home;
