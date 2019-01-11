import React, { Component } from 'react';
import './NavBar.css';
// import { Link } from "react-router-dom";

class NavBar extends Component {
    render(){
        return(
            <div className = "NavBar_Container">
                <div className = "Signage_Navigation">
                    <div className = "Logo_Navigation">
                        <img class = "Navigation_Pizza" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" title = "Welcome" height="54" width="62" />
                    </div>
                    <div className = "Name_Navigation">
                        <h3 className = "Logo_Text" title = "Home"> Snag A Slice </h3>
                    </div>
                </div>
                <div className = "Search_Navigation"></div>
                <div className = "User_Navigation">
                    <div className = "Location_Navigation">
                        <p className = "User_Text"> Location </p>
                    </div>
                    <div className = "About_Navigation">
                        <p className = "User_Text"> About </p>
                    </div>
                    <div className = "Signup_Navigation">
                        <p className = "User_Text"> Sign up </p>
                    </div>
                    <div className = "Login_Navigation">
                        <p className = "User_Text"> Login </p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NavBar;

// This component will be consistent throughout the website.
//  <div className = "Search_Navigation">
//     <input class = "Search_Field_Navigation" type = "text" placeholder = "Search Here" />
//     <button class = "Filter_Button_Navigation"><img src="https://image.flaticon.com/icons/svg/32/32195.svg" alt="Arrow Down" title = "Filter" height="10" width="20"></img></button>
//     <button class = "Search_Button_Navigation"><img src="https://image.flaticon.com/icons/svg/149/149852.svg" alt="Search" title = "Search" height="10" width="20"></img></button> */}
// </div> 