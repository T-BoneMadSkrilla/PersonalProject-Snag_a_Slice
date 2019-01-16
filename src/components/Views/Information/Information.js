import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Information.css'

class Information extends Component {
    render(){
        return(
            <div className = "Information">
                <div className = "Back_Pizzeria_Card">
                    <div className = "Back_Top_Content_Pizzeria">
                        <div className = "Back_Top_Logo_Pizzeria"></div>
                        <div className = "Back_Top_Tab_Pizzeria">
                            <div className = "Back_Top_Tab_View_Review">
                                <p className = "Back_Top_Tab_View_Text"> View Reviews </p>
                            </div>
                            <div className = "Back_Top_Tab_Add_Review">
                                <p className = "Back_Top_Tab_Add_Text"> Add Reviews </p>
                            </div>
                        </div>
                    </div>
                    <div className = "Back_Bottom_Content_Pizzeria">
                        <div className = "Back_Left_Content_Pizzeria">
                            <div className = "Back_Left_Image_Pizzeria">
                            <img class = "Back_Left_Image" src="https://lh5.googleusercontent.com/-Uc7_19OCuyU/USl93I5nIXI/AAAAAAAAHEE/3cfFhbPx7jw/s800/681%2520LPP%252002.JPG" alt="Pizzeria" />
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> Name: Lupi's Pizza Pies </p>
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> Address: 406A Broad Street </p>
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> Zip Code: 37402 </p>
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> City: Chattanooga </p>
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> State: Tennessee </p>
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> Website: https://www.lupi.com/ </p>
                            </div>
                            <div className = "Back_Left_Pizzeria_Information">
                                <p className = "Back_Left_Pizzeria_Information_Text"> Phone Number: (423) 266-5874 </p>
                            </div>
                        </div>
                        <Link to = "/pizzerias">
                        <div className = "Back_Middle_Button_Pizzeria">
                            <p className = "Back_Middle_Button_Text"> Back </p>
                        </div>
                        </Link>
                        <div className = "Back_Right_Content_Pizzeria">
                            <div className = "Back_Right_Top_Content">
                                <div className = "Back-Right_Top_Leave">
                                    <p className = "Back-Right_Top_Leave_Text"> Leave a Review </p>
                                </div>
                                <div className = "Back-Right_Top_Email">
                                    <p className = "Back-Right_Top_Email_Text"> Your email address will not be published. </p>
                                </div>
                            </div>
                            <div className = "Back_Right_Middle_Content">
                                <div className = "Back_Right_Middle_Comment">
                                    <p className = "Back_Right_Middle_Comment_Text"> Comment </p>
                                </div>
                                <div className = "Back_Right_Middle_Input" />
                            </div>
                            <div className = "Back_Right_Bottom_Content">
                                <div className = "Back_Right-Bottom_Name">
                                    <p className = "Back_Right_Bottom_Text"> Name: </p>
                                    <input className = "Back_Right_Bottom_Input_Field" type = "text" placeholder = "Type Here"></input>
                                </div>
                                <div className = "Back_Right-Bottom_Email">
                                    <p className = "Back_Right_Bottom_Text"> E-mail: </p>
                                    <input className = "Back_Right_Bottom_Input_Field" type = "text" placeholder = "Type Here"></input>
                                </div>
                                <div className = "Back_Right-Bottom_Pizzeria_Name">
                                    <p className = "Back_Right_Bottom_Text"> Pizzeria Name: </p>
                                    <input className = "Back_Right_Bottom_Input_Field" type = "text" placeholder = "Type Here"></input>
                                </div>
                                <button className = "Back_Right-Bottom_Post_Button">
                                    <p className = "Back_Right_Bottom_Button_Text"> Post Comment </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Information;
