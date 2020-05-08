import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const headerBar = () => {
  return (
    <Menu stackable compact fluid>
      <Menu.Item name="All Restaurants">
        <Link to="/">All Restaurants</Link>
      </Menu.Item>
      <Menu.Item name="Your Collections">
        <Link to="/users/collections">Your Collections</Link>
      </Menu.Item>
      <Menu.Item name="Register">
        <Link to="/users/register">Register</Link>
      </Menu.Item>
      <Menu.Item name="Login">
        <Link to="/users/login">Login?</Link>
      </Menu.Item>
    </Menu>
  );
};
export default headerBar;
