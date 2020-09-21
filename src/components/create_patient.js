
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
        this.onChangeprefix_patient = this.onChangeprefix_patient.bind(this);
        this.onChangecurrent_address_patient = this.onChangecurrent_address_patient.bind(this);
        this.onChangedistrict_patient = this.onChangedistrict_patient.bind(this);
        this.onChangeprovince_patient = this.onChangeprovince_patient.bind(this);
        this.onChangepostal_code_patient = this.onChangepostal_code_patient.bind(this);
        this.onChangehouse_number_patient = this.onChangehouse_number_patient.bind(this);
        this.onChangemobile_phone_number_patient = this.onChangemobile_phone_number_patient.bind(this);
        this.onChangeemail_patient = this.onChangeemail_patient.bind(this);
        this.onChangecongenital_disease_patient = this.onChangecongenital_disease_patient.bind(this);
        this.onChangeallergic_drugs_patient = this.onChangeallergic_drugs_patient.bind(this);
        this.onChangeallergic_food_patient = this.onChangeallergic_food_patient.bind(this);
        this.onChangediagnosis_patient = this.onChangediagnosis_patient.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password_patient:'',
          name_patient:'',
          surname_patient:'',
          gender_patient:'',
          prefix_patient:'',
          current_address_patient:'',
          district_patient:'',
          province_patient:'',
          postal_code_patient:'',
          house_number_patient:'',
          mobile_phone_number_patient:'',
          email_patient:'',
          congenital_disease_patient:'',
          allergic_drugs_patient:'',
          allergic_food_patient:'',
          diagnosis_patient:''

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
          name_patient: e.target.value
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
      onChangeprefix_patient(e) {
        this.setState({
          prefix_patient: e.target.value
        })
      }
      onChangecurrent_address_patient(e) {
        this.setState({
          current_address_patient: e.target.value
        })
      }
      onChangedistrict_patient(e) {
        this.setState({
          district_patient: e.target.value
        })
      }
      onChangeprovince_patient(e) {
        this.setState({
          province_patient: e.target.value
        })
      }
      onChangepostal_code_patient(e) {
        this.setState({
          postal_code_patient: e.target.value
        })
      }
      onChangehouse_number_patient(e) {
        this.setState({
          house_number_patient: e.target.value
        })
      }
      onChangemobile_phone_number_patient(e) {
        this.setState({
          mobile_phone_number_patient: e.target.value
        })
      }
      onChangeemail_patient(e) {
        this.setState({
          email_patient: e.target.value
        })
      }
      onChangecongenital_disease_patient(e) {
        this.setState({
          congenital_disease_patient: e.target.value
        })
      }
      onChangeallergic_drugs_patient(e) {
        this.setState({
          allergic_drugs_patient: e.target.value
        })
      }
      onChangeallergic_food_patient(e) {
        this.setState({
          allergic_food_patient: e.target.value
        })
      }
      onChangediagnosis_patient(e) {
        this.setState({
          diagnosis_patient: e.target.value
        })
      }
    
    


      onSubmit(e) {
        e.preventDefault();
    
        const user = {
            user_name_patient: this.state.username,
            password_patient: this.state.password_patient, 
            name_patient: this.state.name_patient,
            surname_patient: this.state.surname_patient,
            gender_patient: this.state.gender_patient,
            prefix_patient: this.state.prefix_patient,
            current_address_patient: this.state.current_address_patient,
            district_patient: this.state.district_patient,
            province_patient: this.state.province_patient,
            postal_code_patient: this.state.postal_code_patient,
            house_number_patient: this.state.house_number_patient,
            mobile_phone_number_patient: this.state.mobile_phone_number_patient,
            email_patient: this.state.email_patient,
            congenital_disease_patient: this.state.congenital_disease_patient,
            allergic_drugs_patient: this.state.allergic_drugs_patient,
            allergic_food_patient: this.state.allergic_food_patient,
            diagnosis_patient: this.state.diagnosis_patient,

        }
    
        console.log(user);
    
        axios.post('https://ehr-system-project.herokuapp.com/api/patient', user)
          .then(res => console.log(res.data));
    
          this.setState({
            username: '',
            password_patient:'',
            name_patient:'',
            surname_patient:'',
            gender_patient:'',
            prefix_patient:'',
            current_address_patient:'',
            district_patient:'',
            province_patient:'',
            postal_code_patient:'',
            house_number_patient:'',
            mobile_phone_number_patient:'',
            email_patient:'',
            congenital_disease_patient:'',
            allergic_drugs_patient:'',
            allergic_food_patient:'',
            diagnosis_patient:''

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
                        value={this.state.name_patient}
                        onChange={this.onChangename_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>surname_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.surname_patient}
                        onChange={this.onChangesurname_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>gender_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.gender_patient}
                        onChange={this.onChangegender_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>prefix_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.prefix_patient}
                        onChange={this.onChangeprefix_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>current_address_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.current_address_patient}
                        onChange={this.onChangecurrent_address_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>district_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.district_patient}
                        onChange={this.onChangedistrict_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>province_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.province_patient}
                        onChange={this.onChangeprovince_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>postal_code_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.postal_code_patient}
                        onChange={this.onChangepostal_code_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>house_number_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.house_number_patient}
                        onChange={this.onChangehouse_number_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>mobile_phone_number_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.mobile_phone_number_patient}
                        onChange={this.onChangemobile_phone_number_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>email_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.email_patient}
                        onChange={this.onChangeemail_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>congenital_disease_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.congenital_disease_patient}
                        onChange={this.onChangecongenital_disease_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>allergic_drugs_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.allergic_drugs_patient}
                        onChange={this.onChangeallergic_drugs_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>allergic_food_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.allergic_food_patient}
                        onChange={this.onChangeallergic_food_patient}
                        />
                </div>

                <div className="form-group"> 
                    <label>diagnosis_patient</label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.diagnosis_patient}
                        onChange={this.onChangediagnosis_patient}
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