import React, { Component } from 'react';
import GoogleLogin from 'react-google-login'
import './App.css';
import { Container, Card } from '@material-ui/core';

class App extends Component {


  responseGoogle = (response) => {
    console.log(response);
  }
  render(){
    return( 
      <Container maxWidth='sm'>
        <Card className='card'>
          <h1>Sign in With Google</h1>
          <p>This is an api Test app. To test  Click the Button</p>
          <GoogleLogin
            clientId="1073306259932-4dqh1i9lk9l3rr5msm52aausp1ecffhh.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </Card>
      </Container>
    )
  }
}

export default App;
