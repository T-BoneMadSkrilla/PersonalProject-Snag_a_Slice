import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import './NavBar.css';
import './NavBar.scss';

class NavBar extends Component {
    render(){
        return(
            <div className = "Navigation_Container">
                <div className = "Navigation_Signage_Container">
                    <img className = "Navigation_Signage_Image" src="https://image.flaticon.com/icons/svg/1404/1404945.svg" alt="Pizza Pie" />
                    <p className = "Navigation_Signage_Text"> Snag A Slice </p>
                </div>
                <div className = "Navigation_Search_Container">
                    <input className = "Navigation_Input_Field" title = "Type Here " placeholder = "Search Here..." />
                    <button className = "Navigation_Search_Filter_Button" >
                        <img className = "Navigation_Search_Filter_Icon" src = "https://image.flaticon.com/icons/svg/34/34097.svg" title = "Click Search" />
                    </button>
                    <button className = "Navigation_Search_Filter_Button">
                        <img className = "Navigation_Search_Filter_Icon" src = "https://image.flaticon.com/icons/svg/60/60954.svg" title = "Click Filter" />
                    </button>
                </div>
                <div className = "Navigation_Tab_Container">
                    
                    <Link to = "/home">
                    <p 
                        className = "Navigation_Tab_Text" 
                        title = "Go to the Home Page"> Home 
                    </p>
                    </Link>

                    <Link to = "/about">
                    <p 
                        className = "Navigation_Tab_Text" 
                        title = "Go to the About Page"> About 
                    </p>
                    </Link>

                    <Link to = "/signup">
                    <p 
                        className = "Navigation_Tab_Text" 
                        title = "Go to the Sign up Page"> Sign Up 
                    </p>
                    </Link>

                    <Link to = "login">
                    <p 
                        className = "Navigation_Tab_Text" 
                        title = "Go to the Login Page"> Login 
                    </p>
                    </Link>


                </div>
                <button className = "Navigation_Signage_Media_Hamburger_Button">
                    <img className = "Navigation_Signage_Media_Hamburger" src="https://image.flaticon.com/icons/svg/56/56763.svg" alt="Hamburger" title = "Menu" />
                </button>
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