import React from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import { Card, Input, Button, Segment } from "semantic-ui-react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginSuccess: false,
    };
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  onLoginSuccess = () => {
    this.setState({
      loginSuccess: true,
    });
  };

  PostLogin = async (event) => {
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    await axios.post(
      "https://is-it-open-backend.herokuapp.com/users/login",
      payload
    );

    this.onLoginSuccess();
  };
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Content>
            <Card.Header as="h2">Login</Card.Header>
          </Card.Content>
          <Segment>
            <Card.Header>Email</Card.Header>
            <Input onChange={this.onChangeEmail} />
            <Card.Header>password</Card.Header>
            <Input onChange={this.onChangePassword} />
          </Segment>
          <Button onClick={this.PostLogin} />
          <Card.Description>Not a user?</Card.Description>
          <Button onClick={<Link to="/users/register" />}>
            Sign up today!
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

export default Login;
