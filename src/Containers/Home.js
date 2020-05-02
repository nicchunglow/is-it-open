import React from "react";
import SingleRestaurantCard from "../Components/SingleRestaurantCard";
import {
  Container,
  Card,
  Statistic,
  Button,
  Input,
  Divider,
  Segment,
  Header,
} from "semantic-ui-react";
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
      numberOfRestaurantsShown: 5,
      searchRestaurantName: "",
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

  showMoreRestaurants = () => {
    this.setState({
      numberOfRestaurantsShown: this.state.numberOfRestaurantsShown + 5,
    });
  };

  renderRestaurants = () => {
    return this.state.allRestaurants
      .slice(0, this.state.numberOfRestaurantsShown)
      .map((restaurant) => (
        <SingleRestaurantCard
          key={uuidv4()}
          singleRestaurantData={restaurant}
          myCollectionData={this.state.myCollections}
        />
      ));
  };

  filterByName = () => {
    return this.state.allRestaurants
      .filter((perRestaurant) =>
        perRestaurant[0]
          .toLowerCase()
          .includes(this.state.searchRestaurantName.toLowerCase())
      )
      .map((restaurant) => {
        return (
          <SingleRestaurantCard
            key={uuidv4()}
            singleRestaurantData={restaurant}
            myCollectionData={this.state.myCollections}
          />
        );
      });
  };
  onSearchRestaurantNameChange = (event) => {
    this.setState({
      searchRestaurantName: event.target.value,
    });
  };
  render() {
    return (
      <Container aria-label="Home Container">
        <LoadingCircle isLoading={this.state.isLoading} />
        <Segment.Group>
          <Segment>
            <Statistic>
              <Statistic.Value>
                {this.state.allRestaurants.length}
              </Statistic.Value>
              <Statistic.Label aria-label="stats">
                Restaurants for you to choose!
              </Statistic.Label>
            </Statistic>
          </Segment>
          <Segment>
            <Header>Can't find your restaurant?</Header>
            <h4>Search your restaurant by name!</h4>
            <Input
              placeholder="Search by Name"
              onChange={this.onSearchRestaurantNameChange}
            />
            <h4>Search your restaurant by Opening day!</h4>
            <Input placeholder="Search by Opening Day" />
          </Segment>
          <Segment>
            <Card.Group stackable itemsPerRow="5" centered>
              {this.state.searchRestaurantName !== "" && this.filterByName()}
              {this.state.searchRestaurantName === "" &&
                this.renderRestaurants()}
              {this.state.searchRestaurantName === "" && (
                <Button
                  color="orange"
                  content="Load More"
                  onClick={this.showMoreRestaurants}
                />
              )}
            </Card.Group>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default Home;
