import React from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import {
  Label,
  Container,
  Divider,
  Card,
  Input,
  Button,
} from "semantic-ui-react";

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

  RegisterUser = async () => {
    try {
      const payload = {
        email: this.state.email,
        password: this.state.password,
      };

      await axios.post("/users/register", payload);
      this.onRegisterSuccess();
    } catch (error) {
      if (error.response.status === 400) {
        alert("Registration failed. Input of email and address invalid.");
      } else if (error.response.status === 422) {
        alert("Email is already in use. Please try again.");
      }
    }
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
                <Button
                  circular
                  color="orange"
                  onClick={this.RegisterUser}
                  content="Register now!"
                />
              </Container>
            </Card.Content>
            {this.state.registerSuccess === true && (
              <Card.Header as="h3">
                <Divider hidden />
                Register Successful!
              </Card.Header>
            )}
            <Divider horizontal>Or</Divider>
            <Card.Description as="h3">Already a user?</Card.Description>
            <Link to="/users/login">
              <Button circular color="orange" content="Login here!"></Button>
            </Link>
          </Card.Content>
        </Card>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Container>
    );
  }
}

export default RegisterUser;
