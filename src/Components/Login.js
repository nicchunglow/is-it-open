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
      <Container>
        <Divider hidden />
        <Card centered raised>
          <Card.Content>
            <Card.Content>
              <Card.Header as="h2">Login</Card.Header>
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
            {this.state.loginSuccess === true && (
              <Card.Header as="h3">
                <Divider hidden />
                Login Successful!
              </Card.Header>
            )}
            <Divider horizontal>Or</Divider>
            <Card.Description as="h3">Not yet a user?</Card.Description>
            <Button onClick={<Link to="/users/register" />}>
              Sign up today!
            </Button>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

export default Login;
