import React, { Component } from 'react';
import './Signup.css'
import { Link } from "react-router-dom";

class Signup extends Component {
    render(){
        return(
            <div className = "Signup">
                <div className = "Signup_Container">
                    <div className = "Pizza_Image_Signup">
                    <img class = "Navigation_Pizza" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" title = "Welcome" height="80" width="80" />
                    </div>
                    <div className = "Name_Signup">
                    <p className = "Name_Text_Login"> Sign-Up </p>
                    </div>
                    <p className = "Text_Signup"> First Name: </p>
                    <input className = "Input_Signup" type = "text" placeholder = "Type Here" />
                    <p className = "Text_Signup"> Last Name: </p>
                    <input className = "Input_Signup" type = "text" placeholder = "Type Here" />
                    <p className = "E-mail_Text_Signup"> E-mail: </p>
                    <input className = "Input_Signup" type = "text" placeholder = "Type Here" />
                    <p className = "Text_Signup"> Username: </p>
                    <input className = "Input_Signup" type = "text" placeholder = "Type Here" />
                    <p className = "Text_Signup"> Password: </p>
                    <input className = "Input_Signup" type = "text" placeholder = "Type Here" />
                    <button className = "Submit_Signup">
                        <p className = "Submit_Text_Signup"> Submit </p>
                    </button>
                    <Link to = "/login">
                    <p className = "AlreadyMember_Text"> Already a member? Login in now.</p>
                    </Link>
                </div>
            </div>
        )
    };
};

export default Signup;