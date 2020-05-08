import React from "react";
import {
  Container,
  Statistic,
  Segment,
  Card,
  Button,
  Divider,
  Input,
} from "semantic-ui-react";
import singleCollectionCard from "../Components/singleCollectionCard";
import { v4 as uuidv4 } from "uuid";

import axios from "../utils/axios";
import SingleCollectionCard from "../Components/singleCollectionCard";
class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCollections: [],
      collectionNameInput: "",
    };
  }

  componentDidMount() {
    axios.get("/collections").then((res) => {
      this.setState({
        allCollections: res.data,
      });
    });
  }
  onChangeCollection = (event) => {
    this.setState({
      collectionNameInput: event.target.value,
    });
  };

  onCreateSuccess = (payload) => {
    this.setState({
      createSuccess: true,
      allCollections: this.state.allCollections.concat(payload.collectionName),
    });
  };

  createCollection = async () => {
    try {
      const payload = {
        collectionName: this.state.collectionNameInput,
      };
      await axios.post("/collections", payload);
      this.onCreateSuccess(payload);
    } catch (error) {
      if (error.response.status === 400) {
        alert("Input is empty or your collection exist.");
      }
    }
  };

  render() {
    return (
      <Container>
        <Card centered raised>
          <Divider hidden />
          <Card.Header as="h2">Create Collection</Card.Header>
          <Divider hidden />
          <Card.Description>
            Add your collection name and save!
          </Card.Description>
          <Divider hidden />
          <Container>
            <Input onChange={this.onChangeCollection} />
          </Container>
          <Divider hidden />
          <Card.Content>
            <Button
              circular
              color="orange"
              onClick={this.createCollection}
              content="Create Collection!"
            />
            {this.state.createSuccess === true && (
              <Card.Header as="h3">
                <Divider hidden />
                {`${this.state.collectionNameInput} collection has been created!`}
              </Card.Header>
            )}
          </Card.Content>
        </Card>
        <Divider hidden />
        <Segment.Group>
          <Segment>
            <Statistic>
              <Statistic.Value>
                {this.state.allCollections.length}
              </Statistic.Value>
              <Statistic.Label> number of collections made!</Statistic.Label>
            </Statistic>
          </Segment>
          <Segment>
            <Card.Group stackable itemsPerRow="" centered>
              {this.state.allCollections.map((data) => {
                return (
                  <SingleCollectionCard
                    key={uuidv4()}
                    singleCollectionName={data}
                  />
                );
              })}
            </Card.Group>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

export default Collection;
