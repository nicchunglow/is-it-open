import React from "react";
import {
  Container,
  Statistic,
  Segment,
  Card,
  Button,
  Divider,
  Input,
  Label,
  Header,
} from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import axios from "../utils/axios";
import SingleCollectionCard from "../Components/singleCollectionCard";
class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [],
      collectionCreateInput: "",
    };
  }

  componentDidMount() {
    axios.get("/collections").then((res) => {
      this.setState({
        allCollections: res.data,
      });
    });
  }
  onChangeCreateCollection = (event) => {
    this.setState({
      collectionCreateInput: event.target.value,
    });
  };
  onChangeSearchCollection = (event) => {
    this.setState({
      collectionSearchInput: event.target.value,
    });
  };

  onCreateSuccess = (payload) => {
    this.setState({
      createSuccess: true,
      allCollections: this.state.allCollections.concat(payload.collectionName),
    });
  };

  renderAllCollections = () => {
    return this.state.allCollections.map((collection) => {
      return (
        <Label color="yellow" size="huge">
          {collection}
        </Label>
      );
    });
  };

  renderAllRestaurants = () => {
    return this.state.allRestaurants.map((restaurant) => (
      <Card raised>
        <Card.Content>
          <Card.Header as="h2">{restaurant.restaurantName}</Card.Header>
        </Card.Content>
      </Card>
    ));
  };

  render() {
    return (
      <Container>
        <Segment>
          <Statistic>
            <Statistic.Value>
              {this.state.allCollections.length}
            </Statistic.Value>
            <Statistic.Label> number of collections made!</Statistic.Label>
          </Statistic>
        </Segment>
        <Segment>
          <Card.Header as="h2">Create Collection</Card.Header>
          <Input onChange={this.onChangeCreateCollection} />
          <Divider hidden />
          <Button
            circular
            color="orange"
            onClick={this.createCollection}
            content="Create Collection!"
          />
          {this.state.createSuccess === true && (
            <Card.Header as="h3">
              <Divider hidden />
              {`${this.state.collectionCreateInput} collection has been created!`}
            </Card.Header>
          )}
        </Segment>
        <Segment>
          <Header>Your Current Collections!</Header>
          {this.renderAllCollections()}
          <Divider horizontal />
        </Segment>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Container>
    );
  }
}

export default Collection;
