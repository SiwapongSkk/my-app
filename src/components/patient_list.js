import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';



const Patient_list = props => (
    <tr>
      <td>{props.patient_list.user_name_patient}</td>
      <td>{props.patient_list.password_patient}</td>
      <td>{props.patient_list.name_patient}</td>
      <td>{props.patient_list.surname_patient}</td>
      <td>
        <Link to={"/edit/"+props.patient_list._id}>edit</Link> | <a href="#" onClick={() => { props.deletePatient_list(props.patient_list._id) }}>delete</a>
      </td>
      <td> <a href="" onClick={()=>{ props.show(props.patient_list._id) }} ></a> show </td>
    </tr>
  )


export default class patient_list extends Component{

    constructor(props) {
        super(props);
    
        this.deletePatient_list = this.deletePatient_list.bind(this)
    
        this.state = {patient_list: []};
      }
    
      componentDidMount() {
        axios.get('https://ehr-system-project.herokuapp.com/api/patient')
          .then(response => {
            this.setState({ patient_list: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
    
      
      deletePatient_list(id) {
        axios.delete('https://ehr-system-project.herokuapp.com/api/patient/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            patient_list: this.state.patient_list.filter(el => el._id !== id)
        })
      }

      show(id){}


    patient_list() {
        return this.state.patient_list.map(currentpatient_list => {
          return <Patient_list patient_list={currentpatient_list} deletePatient_list={this.deletePatient_list} key={currentpatient_list._id}/>;
        })
    }


    render(){
        return(
          <div>
            
              <Row>
                <Col>
                  <div>
                      <h3>Patient_list</h3>
                      <table className="table">
                          <thead className="thead-light">
                              <tr>
                              <th>user_name_patient</th>
                              <th>password_patient</th>
                              <th>name_patient</th>
                              <th>surname_patient</th>
                              <th>gender_patient</th>
                              <th>Actions</th>
                              </tr>
                            </thead>

                            <tbody>
                                { this.patient_list() }
                            </tbody>
                      </table>
                  </div>
                  </Col>

                  <Col>
                    <div
                    style={ { backgroundColor: 'beige'}}>

                      <h3>ข้อมูลผู้ป่วยรายบุคคล</h3>
                      <div>
                      <Row>
                        <Col><div><p>ชื่อ-นามสกุล</p> </div></Col>
                        <Col><div><p>นาย ศิวงพษ์ กอบกิจ</p> </div></Col>
                      </Row>
                      <Row>
                        <Col><div><p>ปรับปรุงข้อมูลล่าสุด</p> </div></Col>
                        <Col><div><p>วันที่ 5 สิงหาคม พ.ศ.2563 เวลา 16.06 น.</p> </div></Col>
                      </Row>
                      <Row>
                        <Col><div><p>ความดันเลือดสูงสุด</p> <p>126</p> </div></Col>
                        <Col><div><p>ความดันเลือดต่ำสุด</p> <p>75</p> </div></Col>
                        <Col><div><p>อัตราการเต้นของหัวใจ</p> <p>57</p> </div></Col>
                      </Row>
                      <Row>
                        <Col><div><p>น้ำหนัก</p> <p>80</p> </div></Col>
                        <Col><div><p>ส่วนสูง</p> <p>170</p> </div></Col>
                      </Row>
                      <Row>
                        <Col><div><p>อุณหภูมิร่างกาย 36.3 องศาเซลเซียส </p> </div></Col>
                      </Row>
                      <Row>
                        <Col><div><p>สถานะสุขภาพ ปกติ</p> </div></Col>
                      </Row>
                      <Row>
                        <Col><div><button  >แสดงรายละเอียดทั้งหมด</button> </div></Col>
                      </Row>


                      </div>
                    </div>
                  </Col>
              </Row>
            
            </div>
        )
    }


}