import React, { Component } from 'react'
import * as firebase from "firebase"

export class edituser extends Component {

    constructor (props){
        super(props)
 
 
        this.state={
        name:'',
        id:'',
        age:''
    }
    this.onDelete=this.onDelete.bind(this);  
 
    }



    componentDidMount() {
     
        // fetching data in firebase
         firebase
          .database()
          .ref("tb_users")
          .child(this.props.match.params.id)
          .once("value")
          .then (snapshot=> {
              
            this.setState({
                    id:snapshot.key,
                     name: snapshot.val().name,
                     age: snapshot.val().age
                   });

                   console.log(this.state)
      
      })
    }

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
                .child(this.props.match.params.id)
                .update({
                  name: this.state.name,
                  age: this.state.age
                });
            }
         // });
    //  };

   onDelete(){
      
      
        firebase
         .database()
         .ref("tb_users")
         .child(this.props.match.params.id)
         .remove();


         this.props.history.push('/c');
      
    } 


    render() {
        console.log(this.state.name)
        return (
            
            <div>
                {this.state.id}
                {this.state.name}
                {this.state.age}
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
          <button  onClick={this.onDelete}>Delete</button>
            </div>
        )
    }
}

export default edituser
