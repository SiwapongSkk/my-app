import React, { Component } from 'react';
//import axios from 'axios';

import { Link } from 'react-router-dom';


export default class Navbar extends Component{



    render(){
        return(
            <div>
               <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/" className="navbar-brand">Patient List</Link>
                    <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/doctor_list" className="nav-link">Doctor List</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/examination_list" className="nav-link">Examination List</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create_patient" className="nav-link">Create Patient</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create_doctor" className="nav-link">Create Doctor</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create_examination" className="nav-link">Create Examination</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Patient show detail</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/patient_chart" className="nav-link">Patient show chart</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/register" className="nav-link">Register Doctor</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/login" className="nav-link">Login Doctor</Link>
                    </li>
                    </ul>
                    </div>
                </nav>
            </div>           

        )
    }


}