import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const headerBar = () => {
  return (
    <Menu>
      <Menu.Item name="All Restaurants">
        <Link to="/">All Restaurants</Link>
      </Menu.Item>
      <Menu.Item name="Your Collections">
        <Link to="/restaurants/yourcollection">Your Collections</Link>
      </Menu.Item>
    </Menu>
  );
};
export default headerBar;
