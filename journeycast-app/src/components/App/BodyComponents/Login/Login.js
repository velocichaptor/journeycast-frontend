import React, {useState, useEffect} from "react";
import SignUp from "./SignUp"
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
const endpoint = "http://localhost:3090/users"

function Login() {

  const [signup, setSignup] = useState(false)

  useEffect(() => {
    fetch(endpoint + "/1")
    .then(res => res.json())
    .then(user => {
      // console.log(transactions)
      loginHandle(user)
    })
  }, [])

  const signupInit = () => {
    setSignup(signup => !signup)
  }

  const loginHandle = (user) => {
    return null
  }

return (
    <div>  
      { signup ? <SignUp loginHandle={loginHandle}/> :
       ( <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
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
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button onClick={signupInit} content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>)}
    </div>
)
}

export default Login