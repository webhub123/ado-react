import React, { Component } from 'react';

import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup } from 'reactstrap';

class LoginPage extends Component {

    render() { 
     
        return (

            <AvForm className="container col-sm-offset-4 col-sm-4">
               
                    <h3>Login </h3>
                    <hr/>
                    <AvField name="username" label="Username" required />

                    <AvField name="password" label="Password" type="password" required />

                    <FormGroup>
                        <Button className = "btn btn-primary btn-sm" >Log In</Button>
                    </FormGroup>

            </AvForm>

            // <div className="container col-sm-offset-4 col-sm-4">
            //     <h3>Login </h3>
            //     <hr/>
            //     <div className="form-group">
            //         <label >Username:</label>
                   
            //         <input type="text" className="form-control" ref="username"  />
            //     </div>
            //     <div className="form-group">
            //         <label >Password:</label>
                   
            //         <input type="password" className="form-control" ref="password"  />
            //     </div>
            //     <button className="btn btn-primary">Log In</button>
            // </div>
        );
    }
  }
  
  export default LoginPage;