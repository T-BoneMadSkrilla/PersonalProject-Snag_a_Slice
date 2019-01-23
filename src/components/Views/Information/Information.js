import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {getPizzeria} from '../../../ducks/user';

import './Information.css'

class Information extends Component {
    constructor(){
        super()

        this.state = {
            userInput: ''
        };
    };

    componentDidMount(){
        this.props.getPizzeria()
    };

    // User Section

    addComment(){}

    deleteComment(){}

    render(){
        // console.log(this.props.user[+this.props.match.params.id])
        return(
            <div className = "Information" id = {this.props.user[+this.props.match.params]}>
                <div className = "Information_Container">
                    <div className = "Information_Container_Top">
                        <div className = "Information_Container_Top_Top">
                            <div className = "Information_Container_Top_Top_Title">
                                <p className = "Information_Container_Top_Top_Title_Text"> {this.props.user[+this.props.match.params.id].name} </p>
                            </div>
                            <div className = "Information_Container_Top_Top_Content">
                                <img src = {this.props.user[+this.props.match.params.id].pizzeria_image}className = "Information_Container_Top_Top_Image" />
                                <div className = "Information_Container_Top_Top_Rating">
                                    <p className = "Information_Container_Top_Top_Rating_Text"> {this.props.user[+this.props.match.params.id].aggregate_rating} </p>
                                </div>
                            </div>
                        </div>
                        <div className = "Information_Container_Top_Bottom">
                            <div className = "Information_Container_Top_Bottom_Left">
                                <p className = "Information_Container_Top_Bottom_Text"> Address: {this.props.user[+this.props.match.params.id].address} </p>
                                <p className = "Information_Container_Top_Bottom_Text"> Zipcode: {this.props.user[+this.props.match.params.id].zipcode} </p>
                                <p className = "Information_Container_Top_Bottom_Text"> City: {this.props.user[+this.props.match.params.id].city} </p>
                                <p className = "Information_Container_Top_Bottom_Text"> State: {this.props.user[+this.props.match.params.id].state} </p>
                            </div>
                            <div className = "Information_Container_Top_Bottom_Right">
                                <p className = "Information_Container_Top_Bottom_Bottom_Text" > Phone Number: {this.props.user[+this.props.match.params.id].phone_number} </p>
                                <p className = "Information_Container_Top_Bottom_Bottom_Text" > Website: {this.props.user[+this.props.match.params.id].website_url} </p>
                                <p className = "Information_Container_Top_Bottom_Bottom_Text" > Add Comment Below </p>
                                <p className = "Information_Container_Top_Bottom_Bottom_Text" > View Pizzeria Reviews Below  </p>
                            </div>
                        </div>
                    </div>
                    <div className = "Information_Container_Bottom">
                        <div className = "Information_Container_Bottom_Top">
                            <div className = "Information_Container_Bottom_Top_Title">
                                <p className = "Information_Container_Bottom_Top_Title_Text"> Add a Comment: {this.props.user[+this.props.match.params.id].name} </p>
                            </div>
                            <input className = "Information_Container_Bottom_Top_Input_Field" placeholder = "Type Here ...."></input>
                            <div className = "Information_Container_Bottom_Top_Post_Delete">
                                <button className = "Information_Container_Bottom_Top_Post_Delete_Button"> 
                                    <p className = "Information_Container_Bottom_Top_Post_Button_Text"> Post </p>
                                </button>
                                <button className = "Information_Container_Bottom_Top_Post_Delete_Button"> 
                                    <p className = "Information_Container_Bottom_Top_Delete_Button_Text"> Delete </p>
                                </button>
                            </div>
                            <div className = "Information_Container_Bottom_Top_Input_Field_Result">
                                <p className = "Information_Container_Bottom_Top_Input_Field_Result_Text" > {this.props.user[+this.props.match.params.id].pizzeria_review} </p>
                            </div>
                        </div>
                        <div className = "Information_Container_Bottom_Bottom"></div>                        
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.pizzeria
    };
};

export default connect(mapStateToProps, {getPizzeria: getPizzeria}) (Information);
