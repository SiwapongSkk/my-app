import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Patient_list = props => (
    <tr>
      <td>{props.patient_list.user_name_patient}</td>
      <td>{props.patient_list.date_of_update_patient}</td>
      <td>{props.patient_list.weight_patient}</td>
      <td>{props.patient_list.height_patient}</td>
      <td>
        <Link to={"/edit/"+props.patient_list._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatient_list(props.patient_list._id) }}>delete</a>
      </td>
    </tr>
  )


export default class Examination_list extends Component{


    constructor(props) {
        super(props);
    
        this.deletePatient_list = this.deletePatient_list.bind(this)
    
        this.state = {patient_list: []};
      }
    
      componentDidMount() {
        axios.get('https://ehr-system-project.herokuapp.com/api/examination')
          .then(response => {
            this.setState({ patient_list: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      deletePatient_list(id) {
        axios.delete('https://ehr-system-project.herokuapp.com/api/examination/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            patient_list: this.state.patient_list.filter(el => el._id !== id)
        })
      }

    patient_list() {
        return this.state.patient_list.map(currentpatient_list => {
          return <Patient_list patient_list={currentpatient_list} deletePatient_list={this.deletePatient_list} key={currentpatient_list._id}/>;
        })
    }


    render(){
        return(
            <div>
            <h3>Examination list</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>user_name_patient</th>
                    <th>date_of_update_patient</th>
                    <th>weight_patient</th>
                    <th>height_patient</th>
                    <th>gender_patient</th>
                    <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                      { this.patient_list() }
                  </tbody>
            </table>
        </div>
        )
    }


}