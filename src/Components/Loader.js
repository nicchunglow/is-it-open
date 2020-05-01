import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const LoadingCircle = ({ isLoading }) => {
  return (
    <Dimmer active={isLoading}>
      <Loader content="Loading..." />
    </Dimmer>
  );
};
export default LoadingCircle;
