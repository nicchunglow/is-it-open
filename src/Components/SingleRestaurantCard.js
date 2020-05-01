import React from "react";
import { Card } from "semantic-ui-react";

const SingleRestaurantCard = ({ singleRestaurantData }) => {
  return (
    <Card color="orange">
      <Card.Content>
        <Card.Header>{singleRestaurantData[[0]]}</Card.Header>
        <Card.Description>{singleRestaurantData[[1]]}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default SingleRestaurantCard;
