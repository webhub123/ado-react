import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormText, FormFeedback, Button, Row, Container, Col, FormGroup, Label, Input } from 'reactstrap';
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import axios from 'axios'; 

class TestPage extends Component {

    constructor(){
        super();

        this.state = {
            invalid : true,
            valid : true,
        } 

    }

    componentDidMount(){
 
        let data = [
            { username: 'u1', password: '1', first_name: 'a', middle_name: 'b', last_name: 'c', email: 'a@email.com' },
            { username: '', password: '2', first_name: 'd', middle_name: '', last_name: 'f', email: 'b@email.com' },
            { username: 'u3', password: '3', first_name: 'g', middle_name: '', last_name: 'i', email: 'c@email.com' },
            { username: '', password: '4', first_name: 'j', middle_name: '', last_name: 'l', email: 'd@email.com' },
        ]
        let requiredColumns = ['username', 'password', 'first_name', 'middle_name', 'last_name', 'email']
        let fileColumns = ['username', 'password', 'first_name', 'middle_name', 'last_name', 'email']
        let checkedColumns = this.columnChecker(fileColumns, requiredColumns)

        let summarizeData = this.summarizeData(data, requiredColumns)
        // console.table(summarizeData.finalizeData)
        // console.table(checkedColumns)
        console.table(data)
        this.fetchUnitTest()
    }

    fetchUnitTest() {

        axios.get('api/get-profile/'+ 1)
        .then(({data})=> {
            console.log(data)
        })
        .catch(err => err.response)        
    }

    summarizeData(data, requiredColumns) {
        let invalidColumns = []
        let finalizeData = []

        for (let items of data) {

            let skipData = this.validateColumnData(items, requiredColumns)

            if (skipData.result) {
                invalidColumns.push(skipData.invalidColumns)
                continue
            }

            finalizeData.push({
                first_name: items.first_name,
                middle_name: items.middle_name,
                last_name: items.last_name,
                username: items.username,
                password: items.password,
                email: items.email,
            })
        }
        return { finalizeData , invalidColumns }
    }

    columnChecker(fileColumns, requiredColumns) {
        for (let item of requiredColumns) 
            if (fileColumns.indexOf(item) <= -1)
                fileColumns.push(item)

        return fileColumns
    }

    validateColumnData(items, requiredColumns) {
        for (let req of requiredColumns) {
            items[req] = (req in items) ? items[req] : ''

            if (items[req].toString().trim().length <= 0 && req !== 'middle_name') {
                return {
                    result: true,
                    invalidColumns: items.first_name + ' ' + items.last_name + ' ' + ' missing/empty fields.' 
                }
            }
        }
        return false
    }


    render() { 
        
        const { invalid, valid } = this.state;

        return (
            <React.Fragment>
                <Container className='col-lg-8 col-md-8' >
                    <br />
                    <h3>Testing </h3>
                    <hr/>
                    
                </Container>
            </React.Fragment>
        );
    }
  }
  
  export default TestPage;