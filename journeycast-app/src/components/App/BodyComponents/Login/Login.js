import React, { useState, useEffect } from "react";
import SignUp from "./SignUp";
import {
  Button,
  Divider,
  Form,
  Grid,
  SearchCategory,
  Segment,
} from "semantic-ui-react";
const endpoint = "http://localhost:3000/users";

function Login({ loginToggle }) {
  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  const signupInit = () => {
    setSignup((signup) => !signup);
  };

  const loginSubmit = (e) => {
    //reference the username and password with the database
    //return
    const user = { username, password };
    e.preventDefault();
    loginHandle(user);
  };

  function loginHandle(userObj) {
    const userToLogin = user.filter(
      (userItem) => userItem.username === userObj.username
    );
    const userId = userToLogin[0].id;
    loginToggle(userId);
  }

  function signUpHandle(userObj) {
    const userId = userObj.id;

    loginToggle(userId);
  }

  return (
    <div>
      {signup ? (
        <SignUp signUpHandle={signUpHandle} />
      ) : (
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={loginSubmit}>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />

                <Button content="Login" primary />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button
                onClick={signupInit}
                content="Sign up"
                icon="signup"
                size="big"
              />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      )}
    </div>
  );
}

export default Login;
