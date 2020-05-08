import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";
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

  PostLogout = async () => {
    await axios.post("/users/logout");
    this.onLogoutSuccess();
    alert("Logout Successful.");
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
            onClick={this.PostLogout}
          ></Button>
          {!!this.state.logoutSuccess && <Redirect path="/" />}
        </Menu.Item>
      </Menu>
    );
  }
}
export default headerBar;
