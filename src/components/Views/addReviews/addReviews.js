import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {getPizzeria} from '../../../ducks/user';

import './addReviews.css'

class addReviews extends Component {
    constructor(props){
        super(props)
        
        this.state = {};
    };

    componentDidMount(){
        this.props.getPizzeria()
    };

    render(){
        console.log(this.props.user[+this.props.match.params.id])
        return(
            <div className = "addReview_Container">
                <div className = "addReview_Card">
                    <div className = "addReview_Card_Top">
                        <p className = "addReview_Card_Top_Review_Text"> Leave a Review </p>
                        <p className = "addReview_Card_Top_Email_Text"> Your email address will not be published. </p>
                    </div>
                    <div className = "addReview_Card_Middle">
                        <p className = "addReview_Card_Middle_Comment_Text"> Review Your Comment </p>
                        <input className = "addReview_Card_Middle_Comment_Field">
                        </input>
                        <div className = "addReview_Card_Middle_Buttons">
                            <button className = "addReview_Card_Middle_Buttons_Container">
                                <p className = "addReview_Card_Middle_Buttons_Text" title = "Click Here to Update Comment"> Update </p>
                            </button>
                            <Link to = "Viewreview">
                                <button className = "addReview_Card_Middle_Button">
                                    <p className = "addReview_Card_Bottom_Button_Text" title = "Go to View Reviews Page"> View Reviews </p>
                                </button>
                            </Link> 
                            <button className = "addReview_Card_Middle_Buttons_Container">
                                <p className = "addReview_Card_Middle_Buttons_Text" title = "Click Here to Delete Comment"> Delete </p>
                            </button>
                        </div>
                    </div>
                    <div className = "addReview_Card_Bottom">
                        <p className = "addReview_Card_Bottom_Text" placeholder = "Type Here"> E-mail: </p>
                        <input className = "addReview_Card_Bottom_Input" placeholder = "Type Here"></input>
                        <p className = "addReview_Card_Bottom_Text"> Pizzeria Name: </p>
                        <input className = "addReview_Card_Bottom_Input" placeholder = "Type Here"></input>
                        <p className = "addReview_Card_Bottom_Text"> Comment: </p>
                        <input className = "addReview_Card_Bottom_Input" placeholder = "Type Here"></input>
                        <br />
                        <button className = "addReview_Card_Post_Bottom_Button">
                            <p className = "addReview_Card_Bottom_Button_Text" title = "Click Here to Post Your Comment"> Post </p>
                        </button>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.pizzeria
    };
};

export default connect(mapStateToProps, {getPizzeria: getPizzeria}) (addReviews);