import React, { Component } from 'react';
import './Landing.css';
import { Link } from "react-router-dom";

class Landing extends Component {
    render(){
        return(
            <div className = "Landing_Container">
                <div className = "Center_Landing">
                    <div className = "Welcome_Landing">
                        <p className = "Welcome_Text"> Welcome! </p>
                    </div>
                    <div className = "Message_Landing">
                        <p className = "Message_Text"> SnagaSlice is a restaurant app for pizza lovers. </p>
                    </div>
                    <Link to = "/home">
                    <div className = "Button_Landing">
                        <div className = "Button_Landing_Container">
                            <p className = "Button_Landing_Text"> Explore Pizzerias </p>
                        </div>
                        <div className = "Button_Landing_Image_Container">
                            <img src="https://image.flaticon.com/icons/svg/1161/1161623.svg" alt="Pizza Slice" title = "Explore Pizzerias" height="20" width="20" />
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Landing;