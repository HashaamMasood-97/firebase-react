import React, { Component } from 'react'



import * as firebase from "firebase";
import { throwStatement } from "@babel/types";




export class firebaseindian extends Component {
    
       state = {
      
        name: "",
        age: ""
      };

     
    
      Submit = e => {
        e.preventDefault();
    
       /* let isValid = false;
    
        firebase
          .database()
          .ref("tb_users")
          .once("value")
          .then(snapshot => {
            snapshot.forEach(item => {
              if (item.val().name == this.state.name) {
                isValid = true;
              }
            });
          })
          .then(() => {
            if (isValid) {
              alert("duplcate name");
            } else { */
              firebase
                .database()
                .ref("tb_users")
                .push({
                  name: this.state.name,
                  age: this.state.age
                });
            }
         // });
    //  };

  
    
      render() {
        return (
          <div>
          <div>
            <form onSubmit={e => this.Submit(e)}>
            
              <input
                placeholder="name"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
              <input
                placeholder="age"
                onChange={e => this.setState({ age: e.target.value })}
                value={this.state.age}
              />
              <input type="submit" />
            </form>
            <li><a href="http://localhost:3000/c">retrieve</a></li>
          </div>
          
          </div>
        );
      }
    }
    
  
export default firebaseindian
