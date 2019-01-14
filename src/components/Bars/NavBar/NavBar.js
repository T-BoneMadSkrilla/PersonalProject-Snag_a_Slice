import React, { Component } from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render(){
        return(
            <div className = "NavBar_Container">
                <Link to = "/">
                <div className = "Signage_Navigation">
                    <div className = "Logo_Navigation">
                        <img class = "Navigation_Pizza" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" title = "Welcome" height="54" width="62" />
                    </div>
                    <div className = "Name_Navigation">
                        <h3 className = "Logo_Text" title = "Landing"> Snag A Slice </h3>
                    </div>
                </div>
                </Link>
                <div className = "Search_Navigation">
                    <input class = "Search_Field" type = "text" title = "Search"/>
                    <img class = "Search_Image" src = "https://image.flaticon.com/icons/svg/126/126474.svg" alt = "Magnifing Glass" title = "Search" height="20" width="20" />
                    <img class = "Filter_Image" src = "https://image.flaticon.com/icons/svg/25/25623.svg" alt = "Arrow Down" title = "Filter" height="20" width="20" />
                </div>
                <div className = "User_Navigation">
                    <Link to = "/home">
                    <div className = "Home_Navigation">
                        <p className = "User_Text"> Home </p>
                    </div>
                    </Link>
                    <Link to = "/about">
                    <div className = "About_Navigation">
                        <p className = "User_Text"> About </p>
                    </div>
                    </Link>
                    <Link to = "/signup">
                    <div className = "Signup_Navigation">
                        <p className = "User_Text"> Sign up </p>
                    </div>
                    </Link>
                    <Link to = "/login">
                    <div className = "Login_Navigation">
                        <p className = "User_Text"> Login </p>
                    </div>
                    </Link>
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