import React, {useState} from "react";
import Signup from "./Signup"
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

function Login() {

  const [signup, setSignup] = useState(false)

  const signupInit = () => {
    setSignup(signup => !signup)
  }

return (
    <div>  
      { signup ? <Signup/> :
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