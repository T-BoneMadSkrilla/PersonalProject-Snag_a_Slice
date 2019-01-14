import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render(){
        return(
            <div className = "Login">
                <div className = "Login_Container">
                    <div className = "Pizza_Image_Login">
                    <img class = "Navigation_Pizza" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" title = "Welcome" height="80" width="80" />
                    </div>
                    <div className = "Name_Login">
                        <p className = "Name_Text_Login"> Snag A Slice </p>
                    </div>
                    <input className = "Text_Username_Login" type = "text" placeholder = "Enter Username" />
                    <input className = "Text_Password_Login" type = "text" placeholder = "Enter Password" />
                    <button className = "Submit_Login">
                        <p className = "Submit_Text_Login"> Submit </p>
                    </button>
                </div>
            </div>
        )
    };
};

export default Login;