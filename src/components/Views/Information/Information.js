import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {getPizzeria} from '../../../ducks/user';
import './Information.css'

class Information extends Component {
    constructor(){
        super()

        this.state = {}
    };

    componentDidMount(){
        this.props.getPizzeria()
    };

    render(){
        return(
            <div className = "Information" id = {this.props.user.id}>
                <div className = "Information_Container">
                    <div className = "Information_Navigation_Bar">
                        <img src = {this.props.user.logo_image} className = "Information_Navigation_Bar_Image" />
                        <div className = "Information_Navigation_Bar_Bar">

                            <Link to = "/pizzerias">
                            <img className = "Information_Navigation_Bar_Bar_Icon" src = "https://image.flaticon.com/icons/svg/831/831515.svg" title = "Go to the Pizzeria Page" />
                            </Link>

                            <Link to = "/addreview">
                            <img className = "Information_Navigation_Bar_Bar_Icon" src = "https://image.flaticon.com/icons/svg/1381/1381552.svg" title = "Go to the Add Review Page" />
                            </Link>

                            <Link to = "/viewreview">
                            <img className = "Information_Navigation_Bar_Bar_Icon" src = "https://image.flaticon.com/icons/svg/179/179772.svg" title = "Go to the View Reviews Page" />
                            </Link>

                            <img className = "Information_Navigation_Bar_Bar_Icon" src = "https://image.flaticon.com/icons/svg/148/148839.svg" title = "Add Pizzeria to Favorites"/>

                        </div>
                    </div>
                    <div className = "Information_Content">
                        <img src = {this.props.user.pizzeria_image} className = "Information_Content_Image" />
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> Name: {this.props.user.name} </p>
                        </div>
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> Address: {this.props.user.address} </p>
                        </div>
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> Zip Code: {this.props.user.zipcode} </p>
                        </div>
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> City: {this.props.user.city} </p>
                        </div>
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> State: {this.props.user.state} </p>
                        </div>
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> Website: {this.props.user.website_url} </p>
                        </div>
                        <div className = "Information_Content_Text_Container" >
                            <p className = "Information_Content_Text"> Phone Number: {this.props.user.phone_number} </p>
                        </div>
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
