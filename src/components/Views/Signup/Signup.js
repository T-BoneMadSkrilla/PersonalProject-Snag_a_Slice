import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import {signup} from '../../../ducks/user';
import './Signup.css'

class Signup extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value} )
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state.username, this.state.password, this.state.first_name, this.state.last_name, this.state.email);
    };

    render(){
        // if (this.props.user.username){
        //     return <Redirect to = '/account' />
        // };
        return(
            <div className = "Signup">
                <form onSubmit={this.handleSubmit} className = "Signup_Container">
                    <div className = "Pizza_Image_Signup">
                    <img class = "Navigation_Pizza" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" height="80" width="80" />
                    </div>
                    <div className = "Name_Signup">
                    <p className = "Name_Text_Login"> Sign-Up </p>
                    </div>
                    <p className = "Text_Signup"> First Name: </p>
                    <input 
                        className = "Input_Signup" 
                        onChange={this.handleChange} 
                        value={this.state.first_name} 
                        name = "first_name" 
                        type = "text" 
                        placeholder = "Type Here" 
                    />
                    <p className = "Text_Signup"> Last Name: </p>
                    <input 
                        className = "Input_Signup" 
                        onChange={this.handleChange} 
                        value={this.state.last_name} 
                        name = "last_name" 
                        type = "text" 
                        placeholder = "Type Here" 
                    />
                    <p className = "E-mail_Text_Signup"> E-mail: </p>
                    <input 
                        className = "Input_Signup" 
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        name = "email" 
                        type = "text" 
                        placeholder = "Type Here" 
                    />
                    <p className = "Text_Signup"> Username: </p>
                    <input 
                        className = "Input_Signup" 
                        onChange={this.handleChange} 
                        value={this.state.username} 
                        name = "username" 
                        type = "text" 
                        placeholder = "Type Here" 
                    />
                    <p className = "Text_Signup"> Password: </p>
                    <input 
                        className = "Input_Signup" 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        name = "password" 
                        type = "text" 
                        placeholder = "Type Here" 
                    />
                    <button className = "Submit_Signup">
                        <p className = "Submit_Text_Signup"> Sign up </p>
                    </button>
                    <Link to = "/login">
                    <p className = "AlreadyMember_Text"> Already a member? Login in now.</p>
                    </Link>
                </form>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps, {signup: signup}) (Signup);