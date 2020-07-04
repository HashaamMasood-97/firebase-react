import React, { Component } from 'react'
import * as firebase from "firebase";
import {Link} from 'react-router-dom';

const User= props =>(
    <tr>
      
        <td>{props.user.name}  </td>
       <td>{props.user.age}</td>
       <td>{props.user.id}</td>
       <td><Link to= {"/edituser/" +  props.user.id}><p>Edit User</p>  </Link>  </td>
  
    </tr>
  
  
  
  )

export class retrieve extends Component {
    constructor(props) {
        super(props); 
        this.state={
            student: []
        }
    }



    componentDidMount() {
        // pushing data in firebase
        // firebase
        //   .database()
        //   .ref("tb_users")
        //   .child("01")
        //   .set({
        //     name: "ali haider",
        //     age: 21
        //   });
      
        // firebase
        //   .database()
        //   .ref("tb_users")
        //   .push({
        //     name: "Zeeshan",
        //     age: 21
        //   });
       
        // fetching data in firebase
         firebase
           .database()
           .ref("tb_users")
           .on( "value" ,snapshot => {    
           snapshot.forEach(res => {  
              this.state.student.push({  
                id: res.key,
                ...res.val()});
           });
           this.setState({student: this.state.student})
         })
        
    
        // update data
        // firebase
        //  .database()
         // .ref("tb_users")
        //  .child("-Lr3IVftNOEMP4ejtvq2")
        //  .update({ age: 22 });
    
        
        // remove data
        // firebase
        // .database()
        // .ref("tb_users")
        // .child("-Lr3IVftNOEMP4ejtvq2")
        // .remove();
      }


      PatientList(){
        return this.state.student.map(function(currentUser, i){
    
         return<User user={currentUser} key={i} />;
    
        });
    }
    render() {
        return (
<div>   
    <div>
    <table className="school" style={{marginTop:20}} >
           <thead>
                   <tr>
                      <th id="spc">Booking Status</th>
                      <th>Doctor Name</th>
                      <th>Specialisation</th>   
                                          
                   </tr>

           </thead>
           <tbody>
                     {this.PatientList()}

           </tbody>
           </table>
    
    </div>
            </div>
        )
    }
}

export default retrieve
