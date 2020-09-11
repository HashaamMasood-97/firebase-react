import React, { Component } from 'react'
import {fire} from '../firebase';
import Login from './Login'
import Home from './Home'

export class authentication extends Component {
    constructor(props)
    {
      super(props);
      this.state={
        user : {}
      }
    }
    componentDidMount()
    {
      this.authListener();
    }
    authListener(){
      fire.auth().onAuthStateChanged((user)=>{
        if(user)
        {
          this.setState({user})
        }
        else{
          this.setState({user : null})
        }
      })
    }
  
    render(){
      return (
        <div >
        
          {this.state.user ? (<Home/>) : (<Login/>)}
        </div>
      );
    }
  }

export default authentication
