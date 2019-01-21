import React, { Component } from 'react';
// import './Home.css'
import './Home.scss'
import { Link } from "react-router-dom";
import {TwitterTimelineEmbed} from "react-twitter-embed";


class Home extends Component {
    render(){
        return(
            <div className = "Home_Container">
                <div className = "Home_Editor_Content_Container">
                    <div className = "Home_Editor_Content_Top">
                        <p className = "Home_Editor_Content_Top_Text"> Editor's Pizzeria Choice </p>
                        <p className = "Home_Restaurant_Content_Top_Text"> Five Points Pizza </p>
                    </div>
                    <div className = "Home_Editor_Content_Bottom">
                        <p className = "Home_Location_Content_Bottom_Text"> Address: 1012 Woodland St</p>
                        <p className = "Home_Location_Content_Bottom_Text"> City: Nashville </p>
                        <p className = "Home_Location_Content_Bottom_Text"> State: Tennessee </p>
                        <p className = "Home_Location_Content_Bottom_Text"> Zip Code: 37206 </p>
                        <p className = "Home_Location_Content_Bottom_Text"> Phone: (615) 915-4174 </p>
                        <p className = "Home_Location_Content_Bottom_Text"> Website: fivepointspizza.com </p>
                    </div>
                </div>
                <div className = "Home_Content_Container">
                    <p className = "Home_Content_Middle_Title_Text"> Find Your Slice.... </p>
                    <div className = "Home_Content_Middle_Search_Container">
                        <input className = "Home_Content_Middle_Input" placeholder = "Type Here....." />
                        <button className = "Home_Content_Middle_Search_Button">
                            <img className = "Home_Content_Middle_Search_Filter_Icon" src = "https://image.flaticon.com/icons/svg/34/34097.svg" title = "Click to Search" />
                        </button>
                        <button className = "Home_Content_Middle_Filter_Button">
                            <img className = "Home_Content_Middle_Search_Filter_Icon" src = "https://image.flaticon.com/icons/svg/60/60954.svg" title = "Click to Filter" />
                        </button>
                    </div>
                    <Link to = "/pizzerias">
                    <div className = "Home_Content_Bottom_Button">
                        <p className = "Home_Content_Bottom_Button_Text"> View All Pizzerias </p>
                    </div>
                    </Link>
                </div>
                <div className = "Home_Social_Content_Container">
                    <div className = "Home_Social_Container">
                        <div className = "Home_Twitter_Container">
                            <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="fivepointspizza"
                            options = {{height: 600}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Home;