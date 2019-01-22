import React, { Component } from 'react';
import './About.scss'

class About extends Component {
    render(){
        return(
            <div className = "About">
                <div className = "About_Container">
                    <div className = "About_Title"> 
                        <p className = "About_Title_Text"> About </p>
                    </div>
                    <div className = "About_Paragraph">
                        <p className = "About_Paragraph_Text"> 
                            One of the best ways to meet and interact with people is through food.
                            In this case the food in mind is Pizza. Snag a slice is intended to be a restaurant and community application for
                            individuals who love pizza.
                        </p>
                        <br/>
                        <br/>
                        <br/>
                        <p className = "About_Quote_Text">“Wise men say, 'Forgiveness is divine, but never pay full price for late pizza.” - Teenage Mutant Ninja Turtles </p>
                    </div>
                </div>
            </div>
        )
    };
};

export default About;