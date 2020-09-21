
import React, { Component } from 'react';
import axios from 'axios'; 

export default class Create_patient extends Component{

    constructor(props) {
        super(props);
    

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangepassword_patient = this.onChangepassword_patient.bind(this);
        this.onChangename_patient = this.onChangename_patient.bind(this);
        this.onChangesurname_patient = this.onChangesurname_patient.bind(this);
        this.onChangegender_patient = this.onChangegender_patient.bind(this);






        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password_patient:'',
          surname_patient:'',
          surname_patient:'',
          gender_patient:''

        }
      }
    

      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
      onChangepassword_patient(e) {
        this.setState({
          password_patient: e.target.value
        })
      }
      onChangename_patient(e) {
        this.setState({
          username: e.target.value
        })
      }
      onChangesurname_patient(e) {
        this.setState({
          surname_patient: e.target.value
        })
      }
      onChangegender_patient(e) {
        this.setState({
          gender_patient: e.target.value
        })
      }
    
    


      onSubmit(e) {
        e.preventDefault();
    
        const user = {
            user_name_patient: this.state.username,
            password_patient: this.state.password_patient,
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
                    <label>Username</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>password</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.password_patient}
                        onChange={this.onChangepassword_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>name_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangename_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>surname_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangesurname_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>gender_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>prefix_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>current_address_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>district_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>province_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>postal_code_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>house_number_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>mobile_phone_number_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>email_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>congenital_disease_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>allergic_drugs_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>allergic_food_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>

                <div className="form-group"> 
                    <label>diagnosis_patient</label>
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