import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import Formsy from 'formsy-react'; 
import Loadable from 'react-loadable';
import Select from 'react-select';

import ErrorLoading from '../components/error_page/ErrorLoading';   
import { saveProfile } from '../actions/profileActions';   
 
const Input = Loadable({ loader: () => import('../components/fields/Input'), loading : ErrorLoading });

class CreateProfile extends Component {

    constructor() {
        super();

        this.state = {
            fullname : '',
            age : '',
            address : '',
            email : '',
            message : '',

            selectedItems: '',
            options : []
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    saveProf() {

        const { fullname, age, address, email, selectedItems } = this.state

        if(!selectedItems || selectedItems.length == 0) {
            this.inValid()
            return false;
        }

        let items = []

        for(let item of selectedItems)
            items.push({ skills : item.value });

        let data = {
            fullname : fullname,
            age : age,
            address : address,
            email : email
        }
        this.props.saveProfile(data, items)
    }

    inValid ()  {
        this.setState({ message: 'Please fill up required field. (*) ' });
    }
    
    valid ()  {
        this.setState({ message: '' });
    }

    changeHandler(event){
        const { name, value } = event.currentTarget;
        this.setState({ [name] : value });
    }

    handleChange (selectedItems) {
        this.setState({ selectedItems });
    }

    componentDidMount() {
     
        let options = []
        for (let item of this.props.skills)
            options.push({
                label : item.skills,
                value : item.skills
            });
        
        this.setState({ options })
    }

    render() { 

        const { fullname, age, address, email, message, selectedItems, options } = this.state;
        return (
            <Formsy onValidSubmit={() => this.saveProf() } onValid={() => this.valid()} onInvalid={() => this.inValid()}>
                <div className="container col-sm-offset-3 col-sm-6">
                    <h3>Create Profile </h3>
                    <hr/> 
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <span className="text-danger">{message}</span>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <label >Name: <span className="text-danger">*</span></label>
                            <Input 
                                className = 'form-control input-sm'
                                type = 'fullname' 
                                value = { fullname } 
                                name = "fullname" 
                                required
                                changeHandler = {this.changeHandler}
                            />
                        </div>
                        <div className="col-xs-6 col-md-5">
                            <label >Age: <span className="text-danger">*</span></label>
                            <Input 
                                className = 'form-control input-sm text-right'
                                type = 'age' 
                                value = { age } 
                                name = "age" 
                                required
                                changeHandler = {this.changeHandler}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <label >Address: <span className="text-danger">*</span></label>
                            <Input 
                                className = 'form-control input-sm'
                                type = 'address' 
                                value = { address } 
                                name = "address" 
                                validationError = "This field is required" 
                                required
                                changeHandler = {this.changeHandler}
                            />
                        </div>
                        <div className="col-xs-6 col-md-5">
                            <label >Email: <span className="text-danger">*</span></label>

                            <Input 
                                className='form-control input-sm'
                                type='email' 
                                value={email} 
                                name="email" 
                                validations="isEmail" 
                                validationError="This is not a valid email" 
                                required
                                changeHandler={this.changeHandler}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-xs-12 col-md-12">
                        <label >Skills: <span className="text-danger">*</span></label>

                            <Select
                                value={selectedItems}
                                onChange={this.handleChange}
                                options={options}
                                isMulti={true}
                            />
                        </div>
                    </div>
                    <br />

                    <div className="btn-group">
                        <button className="btn btn-primary" type="submit" disabled={this.props.loading} >Save</button>
                        <Link to="/profiles" className="btn btn-warning" >Return</Link>
                    </div>


                </div>
            </Formsy>
        );
    }
} 

const mapStateToProps = (state) => {

    return {
        loading : state.loading,
        skills : state.skills
    };
}

export default connect(mapStateToProps, { saveProfile })(CreateProfile);