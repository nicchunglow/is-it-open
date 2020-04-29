import React from "react";
import { Card } from "semantic-ui-react";

const SingleRestaurantCard = ({singleRestaurantData}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{singleRestaurantData.name}</Card.Header>
        <Card.Description>
          {singleRestaurantData.operatingSchedule}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default SingleRestaurantCard;
