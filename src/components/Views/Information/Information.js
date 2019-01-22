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
                            <div className = "Information_Container_Top_Bottom_Middle"></div>
                            <div className = "Information_Container_Top_Bottom_Right">
                                <p className = "Information_Container_Top_Bottom_Bottom_Text" > Phone Number: {this.props.user[+this.props.match.params.id].phone_number} </p>
                                <p className = "Information_Container_Top_Bottom_Bottom_Text" > Website: {this.props.user[+this.props.match.params.id].website_url} </p>
                            </div>
                        </div>
                    </div>
                    <div className = "Information_Container_Bottom"></div>
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
