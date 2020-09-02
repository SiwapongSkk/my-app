
import React, { Component } from 'react';
import axios from 'axios'; 

export default class Create_patient extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          surname_patient:'kopkit'
        }
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
            user_name_patient: this.state.username,
            surname_patient: this.state.surname_patient
        }
    
        console.log(user);
    
        axios.post('https://ehr-system-project.herokuapp.com/api/patient', user)
          .then(res => console.log(res.data));
    
          this.setState({
            username: ''
          })
      }
      
    render(){
        return(
            <div>
                <h3>Create_patient</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
                </form>   
            </div>
        )
    }


}