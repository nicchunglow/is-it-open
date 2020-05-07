import React from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import { Container, Divider, Card, Input, Button } from "semantic-ui-react";

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
      <Container>
        <Divider hidden />
        <Card centered raised>
          <Card.Content>
            <Card.Content>
              <Card.Header as="h2">Register</Card.Header>
            </Card.Content>
            <Divider hidden />
            <Card.Content>
              <Card.Header>Email</Card.Header>
              <Container>
                <Input onChange={this.onChangeEmail} />
                <Card.Header>password</Card.Header>
                <Input onChange={this.onChangePassword} />
                <Divider hidden />
                <Button onClick={this.PostLogin} content="Login!" />
              </Container>
            </Card.Content>
            <Divider horizontal>Or</Divider>
            <Card.Description as="h3">Already a user?</Card.Description>
            <Button onClick={<Link to="/users/login" />}>Login here!</Button>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default RegisterUser;
