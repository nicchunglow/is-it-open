import React from "react";
import SingleRestaurantCard from "../Components/SingleRestaurantCard";
import {
  Container,
  Card,
  Statistic,
  Button,
  Input,
  Segment,
  Header,
  Loader,
} from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import Papa from "papaparse";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRestaurants: [],
      isLoading: true,
      myCollections: ["Korean", "Chinese", "Indian"],
      numberOfRestaurantsShown: 10,
      searchRestaurantName: "",
      searchRestaurantDatesAndTime: "",
      filteredNamesLength: 0,
    };
  }

  componentDidMount() {
    Papa.parse(
      "https://gist.githubusercontent.com/seahyc/7ee4da8a3fb75a13739bdf5549172b1f/raw/f1c3084250b1cb263198e433ae36ba8d7a0d9ea9/hours.csv",
      {
        download: true,
        header: false,
        complete: (response) => {
          this.updateAllRestaurants(response.data);
          this.updateLoadingFalse();
        },
      }
    );
  }

  updateAllRestaurants = (results) => {
    this.setState({
      allRestaurants: results,
    });
  };

  updateLoadingFalse = () => {
    this.setState({ isLoading: false });
  };
  updateLoadingTrue = () => {
    this.setState({ isLoading: true });
  };

  showMoreRestaurants = () => {
    this.setState({
      numberOfRestaurantsShown: this.state.numberOfRestaurantsShown + 10,
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
    const filteredNames = this.state.allRestaurants
      .filter((perRestaurant) =>
        perRestaurant[0]
          .toLowerCase()
          .includes(this.state.searchRestaurantName.toLowerCase())
      )
      .slice(0, this.state.numberOfRestaurantsShown)
      .map((restaurant) => {
        return (
          <SingleRestaurantCard
            key={uuidv4()}
            singleRestaurantData={restaurant}
            myCollectionData={this.state.myCollections}
          />
        );
      });

    return filteredNames;
  };

  filterByDate = () => {
    return this.state.allRestaurants
      .filter((perRestaurant) =>
        perRestaurant[1]
          .toLowerCase()
          .includes(this.state.searchRestaurantDatesAndTime.toLowerCase())
      )
      .slice(0, this.state.numberOfRestaurantsShown)
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

  onSearchRestaurantDateChange = (event) => {
    this.setState({
      searchRestaurantDatesAndTime: event.target.value.trim(),
    });
  };

  render() {
    return (
      <Container aria-label="Home Container">
        {<Loader active={this.state.isLoading} />}
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
            <h4>Search your restaurant by day or time!</h4>
            <Input
              placeholder="e.g Tues or 4 am "
              onChange={this.onSearchRestaurantDateChange}
            />
          </Segment>
          <Segment loading={this.state.isLoading}>
            <Card.Group stackable itemsPerRow="5" centered>
              {this.state.searchRestaurantName !== "" && this.filterByName()}
              {this.state.searchRestaurantDatesAndTime !== "" &&
                this.filterByDate()}
              {this.state.searchRestaurantName === "" &&
                this.renderRestaurants()}
              <Container>
                {this.state.numberOfRestaurantsShown <
                  this.state.allRestaurants.length && (
                  <Button color="orange" onClick={this.showMoreRestaurants}>
                    Load More
                  </Button>
                )}
              </Container>
            </Card.Group>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default Home;
