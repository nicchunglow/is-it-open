import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Container } from "semantic-ui-react";
import axios from "../utils/axios";
class headerBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoutSuccess: false,
    };
  }
  onLogoutSuccess = () => {
    this.setState({
      logoutSuccess: true,
    });
  };

  PostLogin = async () => {
    await axios.post("/users/logout");
    this.onLogoutSuccess();
  };

  render() {
    return (
      <Menu
        color="orange"
        stackable
        fluid
        widths={5}
        activeIndex={this.state.headerNumber}
      >
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
        <Menu.Item name="Logout">
          <Button
            circular
            color="linkedin"
            content="Logout"
            onClick={this.PostLogin}
          ></Button>
        </Menu.Item>
      </Menu>
    );
  }
}
export default headerBar;
