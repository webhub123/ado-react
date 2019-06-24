import React, { Component } from 'react';
import { NavLink  } from "react-router-dom";

const header = () => { 
    return (
     
            <nav className="navbar navbar-default navbar-static-top ">
                <div className="container">
                    <div className="navbar-header">

                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink activeClassName="active" className="navbar-brand"  to="/">Web</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul className="nav navbar-nav">&nbsp;</ul>
                        <ul className="nav navbar-nav navbar-left">
                                         
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink activeClassName="active" to="/profiles">Profiles</NavLink >
                            </li>
                            {/*<li><NavLink  to="/register">Register</NavLink></li>
                            <li><NavLink  to="/login">Login</NavLink></li> */}
                        </ul>				
                    </div>
                </div>
            </nav>

    );
};
export default header;