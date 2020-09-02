import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



export default class Create_examination extends Component{

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          description: '',
          duration: '',
          date: new Date(),
          users: []
        }
      }
    
      componentDidMount() {
        axios.get('https://ehr-system-project.herokuapp.com/api/patient/')
          .then(response => {
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.user_name_patient),
                // user_name_patient มาจากฐานข้อมูล ต้องเปลี่ยน เมื่อจะใช้ที่อื่น
                username: response.data[0].username
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
    
      onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
    
      onChangeDuration(e) {
        this.setState({
          duration: e.target.value
        })
      }
    
      onChangeDate(date) {
        this.setState({
          date: date
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const exercise = {
            user_name_patient: this.state.username,
            weight_patient: this.state.description,
            height_patient: this.state.duration,
            date_of_update_patient: this.state.date
        }
    
        console.log(exercise);
    
        axios.post('https://ehr-system-project.herokuapp.com/api/examination', exercise)
          .then(res => console.log(res.data));
    
       // window.location = '/';
      }

    render(){
        return(
            <div>
                <h3>
                Create_examination
                </h3>

                <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Weight: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Height: </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
            </div>
        )
    }


}