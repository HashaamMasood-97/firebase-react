import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Contacts from './components/Contacts'
import firebaseindian from './components/firebase-indian'
import Header from './components/Header'

function App() {
  return (
    <Router>    
      <div className="row">
      <div className="col-md-8 offset-md-2">
 
        
        <Header />
        <Route path ="/a" component= {Contacts} /> 
        <Route path ="/b" component= {firebaseindian} /> 
      </div>
    </div>
    </Router>

  );
}



export default App;
