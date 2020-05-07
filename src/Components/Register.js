import React from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import { Card, Segment, Input, Button } from "semantic-ui-react";

class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      registerSuccess: false,
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

  onRegisterSuccess = () => {
    this.setState({
      registerSuccess: true,
    });
  };

  RegisterUser = async (event) => {
    const payload = {
      username: this.state.email,
      password: this.state.password,
    };

    await axios.post(
      "https://is-it-open-backend.herokuapp.com/users/register",
      payload
    );
    this.onRegisterSuccess();
  };

  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Content>
            <Card.Header as="h2">Register</Card.Header>
          </Card.Content>
          <Segment>
            <Card.Header>Email</Card.Header>
            <Input onChange={this.onChangeEmail} />
            <Card.Header>password</Card.Header>
            <Input onChange={this.onChangePassword} />
          </Segment>
          <Button onClick={this.PostLogin} />
          <Card.Description>Already a user?</Card.Description>
          <Button onClick={<Link to="/users/login" />}>Sign up today!</Button>
        </Card.Content>
      </Card>
    );
  }
}

export default RegisterUser;
