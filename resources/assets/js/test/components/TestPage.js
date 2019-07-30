import React, { Component } from 'react';
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
 
        // let data = [
        //     { username: 'u1', password: '1', first_name: 'a', middle_name: 'b', last_name: 'c', email: 'a@email.com' },
        //     { username: 'u2', password: '2', first_name: 'd', middle_name: '', last_name: 'f', email: 'b@email.com' },
        //     { username: 'u2', password: '3', first_name: 'g', middle_name: '', last_name: 'i', email: 'c@email.com' },
        //     { username: '', password: '4', first_name: 'j', middle_name: '', last_name: 'l', email: 'd@email.com' },
        // ]
        // let requiredColumns = ['username', 'password', 'first_name', 'middle_name', 'last_name', 'email']
        // let fileColumns = ['username', 'password', 'first_name', 'middle_name', 'last_name', 'email']
        // let checkedColumns = this.columnChecker(fileColumns, requiredColumns)

        // let summarizeData = this.summarizeData(data, checkedColumns)
        // console.table(summarizeData.finalizeData)
        // console.table(summarizeData.errorData)
    }

    summarizeData(data, requiredColumns) {
        let errorData = []
        let finalizeData = []

        for (let items of data) {

            let emptyRequiredFieldData = this.validateForEmptyData(items, requiredColumns)

            if (emptyRequiredFieldData.result) {
                errorData.push(emptyRequiredFieldData.data)
                continue
            }

            let duplicateData = this.checkForDuplicateData(items, data)

            if (duplicateData.result) {
                errorData.push(duplicateData.data)
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
        return { finalizeData , errorData }
    }

    columnChecker(fileColumns, requiredColumns) {
        for (let item of requiredColumns) 
            if (fileColumns.indexOf(item) <= -1)
                fileColumns.push(item)

        return fileColumns
    }

    checkForDuplicateData(currentData, extractedData) {
        let uniqueData = ['email', 'username']

        for (let column of uniqueData) {
            let checker = extractedData.filter(data => data[column] == currentData[column])

            if (checker.length > 1) {
                return {
                    result: true,
                    data: `${currentData.first_name} ${currentData.last_name} did not save because of duplicate fields in ${column}.`
                }
            }
        }

        return false
    }

    validateForEmptyData(currentData, requiredColumns) {
        for (let column of requiredColumns) {
            currentData[column] = (column in currentData) ? currentData[column] : ''

            if (currentData[column].toString().trim().length <= 0 && column != 'middle_name') {
                return {
                    result: true,
                    data: `${currentData.first_name} ${currentData.last_name} did not save because of missing/empty fields in ${column}.`
                }
            }
        }
        return false
    }


    render() { 
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