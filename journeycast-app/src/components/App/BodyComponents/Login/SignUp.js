import React, { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
const userEndpoint = "http://localhost:3000/users";

function Signup({ signUpHandle }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitNewUser = ({ name, age, username, password }) => {
    fetch(userEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        age: age,
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((newUser) => signUpHandle(newUser));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    submitNewUser({ name, age, username, password });
    setName("");
    setAge("");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Segment placeholder>
        <h1>Sign Up Here</h1>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={submitHandler}>
              <Form.Input
                icon="id badge"
                iconPosition="left"
                label="Name"
                type="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Form.Input
                icon="calendar"
                iconPosition="left"
                label="Age"
                type="age"
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
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
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button content="Register" primary />
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}

export default Signup;
