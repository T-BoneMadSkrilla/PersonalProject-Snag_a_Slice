import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './viewReviews.css'

class viewReviews extends Component {
    constructor(props){
        super(props)
        
        this.state = {};
    };

    render(){
        return(
            <div className = "viewReview_Container">
                <div className = "viewReview_Card">
                 <p className = "viewReview_Card_Top_Text"> View Reviews </p>
                 <div className = "viewReview_Card_Middle">
                    <div className = "viewReview_Card_Middle_Field"></div>
                 </div>
                 <div className = "viewReview_Card_Bottom">
                    <Link to = "/addreview">
                    <div className = "viewReview_Card_Bottom_Button" title = "Go to Add Review Page">
                        <p className = "viewReview_Card_Bottom_Button_Add_Text"> Add Review </p>
                    </div>
                    </Link>
                    <Link to = "/pizzerias">
                    <div className = "viewReview_Card_Bottom_Button" title = "Go to Pizzerias Page">
                        <p className = "viewReview_Card_Bottom_Button_Restaurant_Text"> Pizzerias </p>
                    </div>
                    </Link>
                 </div>
                </div>
            </div>
        );
    };

};

export default viewReviews;