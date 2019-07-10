import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import ReactTable from "react-table";
import 'react-table/react-table.css'

import { setProfile, removeProfile } from '../profile-actions';

class ProfileLists extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.setProfile()
    }
    

    selectProfile(id) {

        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this file.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((ok) => {
            if (ok) 
                this.props.removeProfile(id);
        });

    } 

    render() {  

        const { list, loading } = this.props;

        const columns = [
            {
                Header: () => (<b>NAME</b>),
                accessor: 'fullname'
            },
            {
                Header: () => (<b>AGE</b>),
                accessor: 'age',
                Cell: row => (<div className="text-center">{row.value}</div>)
            },
            {
                Header: () => (<b>EMAIL</b>),
                accessor: 'email'
            },
            {
                Header: () => (<b>ADDRESS</b>),
                accessor: 'address'
            },
            {
                Header: () => (<b>ACTION</b>),
                accessor: 'id',
                Cell: row => (
                    <div className="text-center">
                        <div className="btn-group text-center">
                            <Link to={'edit/'+row.value}  className="btn btn-primary btn-sm">Edit</Link>
                            <button className="btn btn-danger btn-sm" onClick={ () => this.selectProfile( row.value ) } >Delete</button>
                        </div>
                    </div>
                )
            },
        ]
        
        return (
            <div className="container">
                <br/>
                <div className="row ">
                    <div className="col-6">
                        <h3>Profile List </h3>
                    </div>
                    <div className="col-6">
                        <Link to="/create" disabled={ loading } className="btn btn-primary btn-sm float-right" >Add New</Link>
                    </div>
                </div>
                <hr/>
                <div className="row ">
                    <div className="col-sm-4">
                    </div>
                </div>
                <ReactTable
                    data={ list }
                    columns={columns}

                    loading={loading}
                    pageSizeOptions= {[5,10,20]}
                    defaultPageSize={5}
                />
                <br/>      
                <hr/>   
            </div>
        );
    }
}  

const mapStateToProps = (state) => {
    return {
        list : state.profile.list,
        loading : state.profile.loading
    };
}

export default connect(mapStateToProps, { setProfile, removeProfile })(ProfileLists);