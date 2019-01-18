import React, { Component } from 'react';
import './Home.css'
import { Link } from "react-router-dom";


class Home extends Component {
    render(){
        return(
            <div className = "Home_Container">
                <div className = "Header_Container">
                    <div className = "EditorsChoice_Container">
                        <p className = "EditorsChoice_Text"> Editors Choice </p>
                        <p className = "EditorsChoice_Pizzeria_Text"> Lupi's Pizza Pie </p>
                        <p className = "EditorsChoice_Pizzeria_Location_Text"> Chattanooga, Tennessee </p>
                        <a className = "EditorsChoice_Pizzeria_ViewInformation_Button" href = "https://www.lupi.com/" >
                            <p className = "View_Information_Text"> View Website </p>
                        </a>
                    </div>
                    <Link to = "/pizzerias">
                    <div className = "Explore_Pizzerias_Container">
                        <p className = "Explore_Pizzeria_Text"> Explore Pizzerias </p>
                        <img class = "Explore_Pizza" src="pizza-slice.png" alt="Pizza Pie" title = "Welcome" height="20" width="20" />
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Home;