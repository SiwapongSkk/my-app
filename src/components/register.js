import React, { Component } from 'react';
import axios from 'axios';



export default class Register extends Component{

  
   

    render(){
        return(
            <div>
                <h3>Register Doctor</h3>
                
                <form onSubmit={this.onSubmit}>
                        <div className="form-group"> 
                        <label>ชื่อผู้ใช้งาน</label>
                        <input  type="text"
                            required
                            className="form-control"
                            
                            />
                        </div>
                        <div className="form-group"> 
                        <label>รหัสผ่าน</label>
                        <input  type="text"
                            required
                            className="form-control"
                            
                            />
                        </div>
                        <div className="form-group">
                        <label>ยืนยันรหัสผ่าน</label>
                        <input 
                            type="text" 
                            className="form-control"
                           
                            />
                        </div>
                        <div className="form-group">
                        <label>คำนำหน้าชื่อ</label>
                        <input 
                            type="text" 
                            className="form-control"
                           
                            />
                        </div>
                        <div className="form-group">
                        <label>ชื่อ</label>
                        <input 
                            type="text" 
                            className="form-control"
                           
                            />
                        </div>
                        <div className="form-group">
                        <label>นามสกุล</label>
                        <input 
                            type="text" 
                            className="form-control"
                           
                            />
                        </div>
                        <div className="form-group">
                        <label>ศูนย์การรักษา</label>
                        <input 
                            type="text" 
                            className="form-control"
                           
                            />
                        </div>
                        <div className="form-group">
                        <label>เพศ</label>
                        <input 
                            type="text" 
                            className="form-control"
                           
                            />
                        </div>


                        <div className="form-group">
                        <input type="submit" value="ลงทะเบียน" className="btn btn-primary"  />
                        </div>
                    </form>
                
            </div>
        )
    }


}