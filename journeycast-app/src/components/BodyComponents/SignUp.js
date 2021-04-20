import React, {useState} from "react";
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
const userEndpoint = "http://localhost:3090/users"


function Signup() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const submitNewUser = ({name, age, username, password}) => {

    fetch(userEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        name: name,
        age: age,
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    }



  const submitHandler = (e) => {
      e.preventDefault()
      submitNewUser({name, age, username, password})
      setName('')
      setAge('')
      setUsername('')
      setPassword('')
  }

    return (
        <div>
<Segment placeholder>
    <h1>Sign Up Here</h1>
    <Grid columns={1} relaxed='very' stackable>
      <Grid.Column>
        <Form>
        <Form.Input
            icon='id badge'
            iconPosition='left'
            label='Name'
            type='name'
            placeholder='Name'
          />
          <Form.Input
            icon='calendar'
            iconPosition='left'
            label='Age'
            type='age'
            placeholder='Age'
          />
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            placeholder='Password'
            type='password'
          />

          <Button onSubmit={submitHandler} content='Register' primary />
        </Form>
      </Grid.Column>
    </Grid>
  </Segment>
        </div>
    )
}

export default Signup