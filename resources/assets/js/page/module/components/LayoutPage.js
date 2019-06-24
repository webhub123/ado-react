import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomInput, Card, CardHeader, CardBody, CardFooter, Form, FormText, FormFeedback, Alert, Button, Row, Container, Col, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import moment from 'moment'; 
import axios from 'axios'; 

class LayoutPage extends Component {

    constructor(){
        super();

        this.now = moment();

        let lastMinute = this.now.minutes() % 10;
        let minuteInterval = (10 - lastMinute) + this.now.minutes();

        minuteInterval = (lastMinute == 0) ? this.now.minutes() : minuteInterval;

        this.state = {
            invalid : true,
            valid : true,
            date: new Date(),
            from: new Date(new Date().setHours(this.now.hours(), minuteInterval, 0)),
            to: new Date(new Date().setHours(this.now.hours(), minuteInterval + 10, 0)),
            name: '',
            phoneNumber: '',
            memo : '',
            memoLength : 500,
            disable: false,
            uploadedFile: '',
            fileName: '',
            loaded : 0
        } 

        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeFrom = this.handleChangeFrom.bind(this)
        this.handleChangeTo = this.handleChangeTo.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.uploadUsers = this.uploadUsers.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
    }

    handleChangeDate(date) {
        this.setState({ date })
    }
    handleChangeFrom(from) {
        this.setState({ from })
    }
    handleChangeTo(to) {
        this.setState({ to })
    }

    handleChange(event){
        const { name, value } = event.currentTarget;

        if(name == 'memo')
            this.setState({ memoLength : 500 - value.length })

        this.setState({ [name] : value });
    }

    disableButtons() {
        this.setState({ disable: !this.state.disable })
    }

    onSubmitSchedule() {

        let { from, to, date, name, phoneNumber, memo } = this.state;
        date = moment(date).format('YYYY-MM-DD');
        from = moment(from).format('HH:mm');
    
        let rawDate = moment(date + ' ' +  from)
        let selectedDate = new Date(rawDate)
        let nowDate = new Date()

        if (moment(selectedDate) < moment(nowDate) && moment(selectedDate) != moment(nowDate)) 
            return console.log('false')

        const data = {
            date : date,
            from : from,
            to : moment(to).format('HH:mm'),
            name : name,
            phone_number : phoneNumber,
            memo : memo,
        };
        
        axios.post('api/schedule', data)
        .then(({data})=> {
            if (data.errorMessage) return console.log('fail')
            console.log(data)
        })
        .catch((err)=>{
            TmjPrompt.error(err)
        })
    }

    componentDidMount(){
  
        const datePickerInputs = document.getElementsByClassName("react-datepicker__input-container");
        
        for(let dateObjects of datePickerInputs)
            dateObjects.childNodes[0].setAttribute('readOnly', true);

        this.disableButtons()

        this.fetchData()
    }

    fetchData() {
        axios.get('api/fetch/schedule')
        .then(({data})=> {
            if (data.errorMessage) return console.log('fail')
            let dateFormat = moment(data.date).format('YYYY/MM/DD')
            let timeFrom = (data.from == ' ' || data.from == '00:00') ? '' : new Date(dateFormat+ ' ' + data.from)
            let timeTo = (data.to == ' ' || data.to == '00:00') ? '' : new Date(dateFormat+ ' ' + data.to)
            this.setState({
                name : data.name,
                phoneNumber : data.phone_number,
                date : new Date(dateFormat),
                from : timeFrom,
                to : timeTo,
                memo : data.memo,
                memoLength : 500 - data.memo.length,
            })
            this.disableButtons()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    onFileChange(e) {
        const getFileLength = e.target.files.length
        const getSelectedFile = e.target.files[0]
        
        if (getFileLength <= 0)
            return this.setState({ fileName: 'Choose File' })
        
        this.setState({ uploadedFile: getSelectedFile, fileName: getSelectedFile.name })
    }

    uploadUsers() {
        const { uploadedFile } = this.state
        
        let data = new FormData()

        data.append('uploadedFile', uploadedFile)

        this.disableButtons()
        axios.post('api/upload/', data, {
            onUploadProgress: ProgressEvent => {
              this.setState({
                loaded: (ProgressEvent.loaded / ProgressEvent.total * 100)
              })
            },
          })
          .then(res => {
            this.disableButtons()
          })
          .catch((err)=>{
              console.log(err)
          })
    }
   
    render() { 
        
        const { list, invalid, valid, date, from, to, name, phoneNumber, memo, memoLength, disable, fileName, loaded } = this.state;
        
        let dateFormat = moment(date).format('YYYY-MM-DD');
        let setMinDate = (new Date(date) > new Date() ) ? 
                        new Date(dateFormat + ' 00:00') :
                        new Date(new Date().setHours(this.now.hours(), this.now.minutes(), 0));

        return (
            <React.Fragment>
                <Container className='col-lg-8 col-md-8' >
                    <br />
                    <h3>Test </h3>
                    <hr/>
                    <FormGroup>
                        <Label for="fileUpload" >File</Label>
                        <CustomInput type="file" name="fileUpload" id="fileUpload" onChange={this.onFileChange} accept='.xlsx, .xls' label={fileName} />
                        <FormText color="info">
                            .xls or xlsx - { loaded } %
                        </FormText>
                    </FormGroup>
                    <Button color='primary' onClick={this.uploadUsers} disabled={disable}>Save</Button>
                </Container>  

                <Container className='col-lg-8 col-md-8' >
                    <br />
                    <h3>Layout </h3>
                    <hr/>
                    <FormGroup>
                    
                        <Row >
                            <Col lg={4} md={4}>
                                <Label for="name" >First Name</Label>
                                <Input invalid={ invalid } type="text" name="name" id="name" bsSize='sm'  />
                                <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                                <FormText>Example help text that remains unchanged.</FormText>
                            </Col>
                            <Col lg={4} md={4}>
                                <Label for="middlename" >Middle Name</Label>
                                <Input type="text" name="middlename" id="middlename" bsSize='sm'  />
                            </Col>

                            <Col lg={4} md={4}>
                                <Label for="lastname" >Last Name</Label>
                                <Input type="text" name="lastname" id="lastname" bsSize='sm'  />
                            </Col>
                        </Row>
                        <Row >
                            <Col lg={8} md={8}>
                                <Label for="name" >Address</Label>
                                <Input type="text" name="name" id="name" bsSize='sm'  />
                            </Col>
                        

                            <Col lg={4} md={4}>
                                <Label for="email" >Email</Label>
                                <Input valid={valid} type="email" name="email" id="email" bsSize='sm'  />
                                <FormFeedback valid={valid} >Email is available</FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Button color='primary' >Save</Button>
                </Container>

                <Container className='col-lg-8 col-md-8' >
                    <br />
                    <h3>Layout Inline </h3>
                    <hr/>
                    <FormGroup row>
                        <Label for="firstname" lg={2}>First Name</Label>
                        <Col lg={4}>
                            <Input invalid={ invalid } type="text" name="firstname" id="firstname" bsSize='sm'  />
                            <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                            <FormText>Example help text that remains unchanged.</FormText>
                        </Col>  

                        <Label for="middlename" lg={2}>Middle Name</Label>
                        <Col lg={4}>
                            <Input type="text" name="middlename" id="middlename" bsSize='sm'  />
                        </Col>        
                    </FormGroup>

                    <FormGroup row>
                        <Label for="lastname" lg={2}>Last Name</Label>
                        <Col lg={4}>
                            <Input type="text" name="lastname" id="lastname" bsSize='sm'  />
                        </Col>  

                        <Label for="email" lg={2}>Email</Label>
                        <Col lg={4}>
                            <Input valid={ valid } type="email" name="email" id="email" bsSize='sm'  />
                            <FormFeedback valid={ valid } >Email is available</FormFeedback>
                        </Col>        
                    </FormGroup>

                    <FormGroup row>
                        <Label for="address" lg={2}>Address</Label>
                        <Col lg={6}>
                            <Input type="text" name="address" id="address" bsSize='sm'  />
                        </Col>  

                        <Label for="zip" lg={1}>ZIP</Label>
                        <Col lg={3}>
                            <Input type="text" className="text-right" name="zip" id="zip" bsSize='sm'  />
                        </Col>        
                    </FormGroup>
                    <Button color='primary'>Save</Button>
                </Container>

            </React.Fragment>

        );
    }
  }
  
  export default LayoutPage;