import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './addReviews.css'

class addReviews extends Component {
    constructor(props){
        super(props)
        
        this.state = {};
    };

    render(){
        return(
            <div className = "addReview_Container">
                <div className = "addReview_Card">
                    <div className = "addReview_Card_Top">
                        <p className = "addReview_Card_Top_Review_Text"> Leave a Review </p>
                        <p className = "addReview_Card_Top_Email_Text"> Your email address will not be published. </p>
                    </div>
                    <div className = "addReview_Card_Middle">
                        <p className = "addReview_Card_Middle_Comment_Text"> Comment </p>
                        <input className = "addReview_Card_Middle_Comment_Field">
                        </input>
                        <div className = "addReview_Card_Middle_Buttons">
                            <button className = "addReview_Card_Middle_Buttons_Container">
                                <p className = "addReview_Card_Middle_Buttons_Text" title = "Click Here to Update Comment"> Update </p>
                            </button>
                            <button className = "addReview_Card_Middle_Buttons_Container">
                                <p className = "addReview_Card_Middle_Buttons_Text" title = "Click Here to Delete Comment"> Delete </p>
                            </button>
                        </div>
                    </div>
                    <div className = "addReview_Card_Bottom">
                        <p className = "addReview_Card_Bottom_Text"> Name: </p>
                        <input className = "addReview_Card_Bottom_Input"></input>
                        <p className = "addReview_Card_Bottom_Text"> E-mail: </p>
                        <input className = "addReview_Card_Bottom_Input"></input>
                        <p className = "addReview_Card_Bottom_Text"> Pizzeria Name: </p>
                        <input className = "addReview_Card_Bottom_Input"></input>
                        <button className = "addReview_Card_Bottom_Button">
                            <p className = "addReview_Card_Bottom_Button_Text" title = "Click Here to Post Your Comment"> Post </p>
                        </button>
                        <Link to = "viewreview">
                        <button className = "addReview_Card_Bottom_Button">
                            <p className = "addReview_Card_Bottom_Button_Text" title = "Go to View Reviews Page"> View Reviews </p>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
};

export default addReviews;