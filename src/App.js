import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts'
import firebaseindian from './components/firebase-indian'
import Header from './components/Header'
import retrieve from './components/indian-retrieve'
import edituser from './components/edituser'
import authenticaion from './components/authentication'
import firebaseAuth from './components/firebaseAuth';

function App() {
  return (
    <Router>    
      <div className="row">
      <div className="col-md-8 offset-md-2">
 
        
        <Header />
        <Route path ="/hooks" component= {Contacts} /> 
        <Route path ="/simple" component= {firebaseindian} />
        <Route path ="/c" component= {retrieve} /> 
        <Route path ="/edituser/:id" component= {edituser} /> 
        <Route path ="/auth" component= {authenticaion} /> 
        <Route path ="/fireauth" component= {firebaseAuth} /> 
      </div>
    </div>
    </Router>

  );
}



export default App;
