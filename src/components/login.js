import React, { Component } from 'react';
import axios from 'axios';



export default class Login extends Component{

  
   

    render(){
        return(
            <div>
                <h3>login</h3>
                
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
                        <input type="submit" value="ลงทะเบียน" className="btn btn-primary"  />
                        </div>
                    </form>

            </div>
        )
    }


}