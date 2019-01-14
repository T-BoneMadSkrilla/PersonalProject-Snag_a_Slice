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
                        <p className = "EditorsChoice_Pizzeria_Text"> Five Points Pizza </p>
                        <p className = "EditorsChoice_Pizzeria_Location_Text"> Nashville, Tennessee </p>
                        <div className = "EditorsChoice_Pizzeria_ViewInformation_Button">
                            <p className = "View_Information_Text"> View Information </p>
                        </div>
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