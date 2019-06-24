import React, { Component } from 'react';
import { connect } from 'react-redux';

import Formsy from 'formsy-react'; 
import Loadable from 'react-loadable';
import { Link } from "react-router-dom";
import Select from 'react-select';

import { retrieveProfile, editProfile } from '../actions/profileActions';
import ErrorLoading from '../components/error_page/ErrorLoading';   

const Input = Loadable({ loader: () => import('../components/fields/Input'), loading : ErrorLoading });

class EditProfile extends Component {

    constructor() {
        super();

        this.state = {
            id : '',
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

    updateProf() {
 
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
            email : email, 
        }
 
        this.props.editProfile(this.state.id, data, items)
    }

    componentDidMount() {
        this.props.retrieveProfile(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {

        const { fullname, age, address, email, id } = nextProps.list[0];
        const { skillValues } = nextProps;

        let options = []
        let selectedItems = []

        for (let data of this.props.skills)
            options.push({
                label : data.skills,
                value : data.skills
            });
   
        for(let item of skillValues[0].profile_skills)
            selectedItems.push({
                label : item.skills,
                value : item.skills
            });
 
        this.setState({ fullname, age, address ,email, id, options, selectedItems })
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

    render() { 

        const { fullname, age, address, email, message, selectedItems, options } = this.state;
  
        return (
            <Formsy onValidSubmit={() => this.updateProf() } onValid={() => this.valid()} onInvalid={() => this.inValid()}>
                <div className="container col-sm-offset-3 col-sm-6">
                    <h3>Edit Profile </h3>
                    <hr/>
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <span className="text-danger">{message}</span>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <label >Name:</label>
                            <Input 
                                className = 'form-control input-sm'
                                type = 'fullname' 
                                value = { fullname } 
                                name = "fullname" 
                                validationError = "This field is required" 
                                required
                                changeHandler = {this.changeHandler}
                            />
                        </div>
                        <div className="col-xs-6 col-md-5">
                            <label >Age:</label>
                            <Input 
                                className = 'form-control input-sm text-right'
                                type = 'age' 
                                value = { age } 
                                name = "age" 
                                validationError = "This field is required" 
                                required
                                changeHandler = {this.changeHandler}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-xs-12 col-md-7">
                            <label >Address:</label>
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
                            <label >Email:</label>
                            <Input 
                                className = 'form-control input-sm'
                                type = 'email' 
                                value = { email } 
                                name = "email" 
                                validationError = "This field is required" 
                                required
                                changeHandler = {this.changeHandler}
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
                        <button className="btn btn-primary" type="submit" disabled={this.props.loading} >Update</button>
                        <Link to="/profiles" className="btn btn-warning" >Return</Link>
                    </div>
                </div>
            </Formsy>
        );
    }
} 

const mapStateToProps = (state) => {

    return {
        list : state.profile,
        loading : state.loading,
        skills : state.skills,
        skillValues : state.profile      
    };
}

export default connect(mapStateToProps, { retrieveProfile, editProfile })(EditProfile);