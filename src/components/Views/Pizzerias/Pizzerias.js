import React, { Component } from 'react';
import './Pizzerias.css'

class Pizzerias extends Component {
    render(){
        return(
            <div className = "Pizzeria">
                <button className = "Left_Right_Arrow">
                    <img className = "Arrow_Icon" src="https://image.flaticon.com/icons/svg/17/17264.svg" alt="Left Arrow" title = "Previous" />
                </button>
                <div className = "Front_Pizzeria_Card">
                    <div className = "Middle_Content_Pizzeria">
                        <div className = "Middle_Title_Pizzeria">
                            <p className = "Middle_Title_Text"> Lupi's Pizza Pies </p>
                        </div>
                        <div className = "Middle_Location_Pizzeria">
                            <p className = "Middle_Location_Text"> Chattanooga, TN </p>
                        </div>
                        <div className = "Middle_Button_Pizzeria">
                            <p className = "Middle_Button_Text"> View Information </p>
                        </div>
                    </div>
                    <div className = "Right_Content_Pizzeria">
                        <div className = "Right_Rating_Container">
                            <p className = "Right_Rating_Number_Text"> 5.0 </p>
                        </div>
                        <div className = "Right_Rating_Container">
                            <p className = "Right_Rating_Word_Text"> Excellent </p>                            
                        </div>
                    </div>
                </div>
                <button className = "Left_Right_Arrow">
                    <img className = "Arrow_Icon" src="https://image.flaticon.com/icons/svg/17/17944.svg" alt="Right Arrow" title = "Next" />
                </button>
            </div>
        )
    };
};

export default Pizzerias;