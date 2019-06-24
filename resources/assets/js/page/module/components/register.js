import React, { Component } from 'react';

class RegisterPage extends Component {

    render() { 
    
        return (
            <div className="container col-sm-offset-4 col-sm-4">
                <h3>Register </h3>
                <hr/>
                <div className="form-group">
                    <label >Username:</label>
                   
                    <input type="text" className="form-control" ref="username"  />
                </div>
                <div className="form-group">
                    <label >Password:</label>
                   
                    <input type="password" className="form-control" ref="password"  />
                </div>

                <div className="form-group">
                    <label >Retype Password:</label>
                   
                    <input type="password" className="form-control" ref="retype_password"  />
                </div>
                <button className="btn btn-primary">Save</button>
            </div>
        );
    }
  }
  
  export default RegisterPage;