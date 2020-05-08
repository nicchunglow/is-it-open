import React from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import {
  Header,
  Divider,
  Card,
  Input,
  Button,
  Container,
  Label,
} from "semantic-ui-react";
import ConfettiExplosion from "./Confetti";

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
    try {
      const payload = {
        email: this.state.email,
        password: this.state.password,
      };
      await axios.post("/users/login", payload);

      this.onLoginSuccess();
    } catch (error) {
      if (error.response.status === 401) {
        alert("Input of email or address invalid.");
      } else if (error.response.status === 400) {
        alert("Please enter the email and password.");
      }
    }
  };

  render() {
    return (
      <Container>
        {this.state.loginSuccess === true && ConfettiExplosion()}
        <Divider hidden />
        <Card centered raised>
          <Card.Content>
            <Card.Content>
              <Card.Header as="h2">Login</Card.Header>
            </Card.Content>
            <Divider hidden />
            <Card.Content>
              <Card.Header>Email</Card.Header>
              <Input onChange={this.onChangeEmail} />
              <Card.Header>password</Card.Header>
              <Input onChange={this.onChangePassword} />
              <Divider hidden />
              <Button
                circular
                color="orange"
                onClick={this.PostLogin}
                content="Login now!"
              />
            </Card.Content>
            {this.state.loginSuccess === true && (
              <Card.Header as="h3">
                <Divider hidden />
                Login Successful!
              </Card.Header>
            )}
            <Divider horizontal>Or</Divider>
            <Card.Description as="h3">Not yet a user?</Card.Description>
            <Link to="/users/register">
              <Button circular color="orange" content="Register here!"></Button>
            </Link>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Login;
