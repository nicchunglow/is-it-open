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
      createSuccess: false,
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

  createCollection = async () => {
    try {
      const payload = {
        collectionName: this.state.collectionCreateInput,
      };
      await axios.post("/collections", payload);
      this.onCreateSuccess(payload);
    } catch (error) {
      if (error.response.status === 400) {
        alert("Input is empty or your collection exist.");
      }
    }
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
        <Card color="yellow" as="h2">
          {collection}
        </Card>
      );
    });
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
        <Header>Your Current Collections!</Header>
        <Card.Group stackable itemsPerRow="3" centered>
          {this.renderAllCollections()}
        </Card.Group>
        <Divider horizontal />
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
