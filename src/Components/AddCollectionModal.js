import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal, Button, Header, Input, List, Label } from "semantic-ui-react";

class AddCollectionModal extends React.Component {
  constructor(props) {
    super(props);
    const myCollectionData = this.props.myCollectionData;
    this.state = {
      searchCollectionName: "",
      myCollectionData: myCollectionData,
    };
  }

  onCollectionNameChange = (event) => {
    this.setState({
      searchCollectionName: event.target.value,
    });
  };

  render() {
    const filterCollectionName = this.state.myCollectionData.filter(
      (perCollection) =>
        perCollection
          .toLowerCase()
          .startsWith(this.state.searchCollectionName.toLowerCase())
    );
    return (
      <Modal
        size="small"
        trigger={
          <Button size="small">
            <Button.Content visible>Add to collection</Button.Content>
          </Button>
        }
      >
        <Modal.Header floated="left">Adding to collection</Modal.Header>
        <Modal.Content>
          <Header>
            Search your collections and save this restuarant in it!
          </Header>
          <Modal.Description>
            <Input
              aria-label="Search Collection Box"
              placeholder="Search Collection"
              onChange={this.onCollectionNameChange}
            />
            {!!this.state.searchCollectionName &&
              filterCollectionName.map((collection) => {
                return (
                  <List key={uuidv4()}>
                    <List.Item>
                      <Label color="orange" >
                        {collection}
                      </Label>
                    </List.Item>
                  </List>
                );
              })}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button>Save</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}
export default AddCollectionModal;
