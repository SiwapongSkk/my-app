import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Patient_list from "./components/patient_list"
import Navbar from "./components/navbar"
import Create_doctor from "./components/create_doctor"
import Create_examination from "./components/create_examination"
import Create_patient from "./components/create_patient"
import Doctor_list from "./components/doctor_list"
import Examination_list from "./components/examination_list"
import Patient_chart from './components/patient_chart'
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className="App">
      <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Patient_list} />
      <Route path="/edit/:id" component={Examination_list} />
      <Route path="/doctor_list" component={Doctor_list} />
      <Route path="/examination_list" component={Examination_list} />
      <Route path="/create_patient" component={Create_patient} />
      <Route path="/create_examination" component={Create_examination} />
      <Route path="/create_doctor" component={Create_doctor} />
      <Route path="/patient_chart" component={Patient_chart} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </div>
    </Router>
      
    </div>
  );
}

export default App;
