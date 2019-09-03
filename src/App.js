import React, { Component } from 'react';
import {GoogleLogin, GoogleLogout} from 'react-google-login'
import './App.css';
import { Container, Card } from '@material-ui/core';
//import renderPro from './render.comp';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: false,
      profile: {}
    }
  }

  
  responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.w3.U3);
    // console.log(response.profileObj);
    if(response.w3.U3){
      this.setState({login: true});
      this.setState({profile: response.profileObj});
    }
  }
  logout = response => {
    this.setState({login: false});
  }
  render(){
    const { login, profile} = this.state;
    let rep = <p>Your login will appear here.</p>;
    if(login === true){
      rep = (
        <div>
            <h2>{profile.name}</h2>
            <h3>{profile.email}</h3>
            <img src={profile.imageUrl} alt="image" />
        </div>
      )
    }else{
      rep = <p>Your login will appear here.</p>
    }
    
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
          <GoogleLogout
            clientId="1073306259932-4dqh1i9lk9l3rr5msm52aausp1ecffhh.apps.googleusercontent.com"
            buttonText="Sign out"
            onLogoutSuccess={this.logout}
          >
          </GoogleLogout>
          <p>{rep}</p>
         
        </Card>
      </Container>
    )
  }
}

export default App;
