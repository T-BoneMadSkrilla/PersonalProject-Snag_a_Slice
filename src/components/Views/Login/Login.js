import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from "react-router-dom";
import {login} from '../../../ducks/user';
import './Login.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value})
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };
    
    render(){
        if (this.props.user.username){
            return <Redirect to = '/account' />
        };
        return(
            <div className = "Login">
                <form onSubmit={this.handleSubmit} className = "Login_Container">
                    <div className = "Pizza_Image_Login">
                    <img class = "Navigation_Pizza" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" height="80" width="80" />
                    </div>
                    <div className = "Name_Login">
                        <p className = "Name_Text_Login"> Snag A Slice </p>
                    </div>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.username} 
                        className = "Text_Username_Login" 
                        type = "text" 
                        name = "username"  
                        placeholder = "Enter Username"
                    />
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.password} 
                        className = "Text_Password_Login" 
                        type = "password" 
                        name = "password" 
                        placeholder = "Enter Password" 
                    />
                    <button className = "Submit_Login">
                        <p className = "Submit_Text_Login"> Login </p>
                    </button>
                    <Link to = "/signup">
                    <p className = "AlreadyMember_Text"> Not a member? Sign Up now.</p>
                    </Link>
                </form>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {login: login}) (Login);