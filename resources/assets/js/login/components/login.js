import React, { Component } from 'react';

import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';

class LoginPage extends Component {

    render() { 

        return (

            <AvForm className="container col-sm-offset-4 col-md-4">
                <br />
                <h3>Login </h3>
                <hr/>
                <AvField name="username" label="Username" required />

                <AvField name="password" label="Password" type="password" required />

                <FormGroup>
                    <Button color="primary" >Log In</Button>
                </FormGroup>
            </AvForm>
        );
    }
}
  
export default LoginPage;