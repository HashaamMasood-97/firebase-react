import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts'
import firebaseindian from './components/firebase-indian'
import Header from './components/Header'
import retrieve from './components/indian-retrieve'
import edituser from './components/edituser'

function App() {
  return (
    <Router>    
      <div className="row">
      <div className="col-md-8 offset-md-2">
 
        
        <Header />
        <Route path ="/a" component= {Contacts} /> 
        <Route path ="/b" component= {firebaseindian} />
        <Route path ="/c" component= {retrieve} /> 
        <Route path ="/edituser/:id" component= {edituser} /> 
      </div>
    </div>
    </Router>

  );
}



export default App;
