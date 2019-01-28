import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {getPizzeria} from '../../../ducks/user';

import './Pizzerias.css'
import axios from 'axios';

class Pizzerias extends Component {
    constructor(){
        super()

        this.state = {
            counter: 0,
            comments: ''
        };

        this.handleClickPrevious = this.handleClickPrevious.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleCommentCount = this.handleCommentCount.bind(this);
    };

    componentDidMount(){
        this.props.getPizzeria()
        this.handleCommentCount(0)
    };

    handleCommentCount(id){
        axios.get(`/pizzeria/comment/count/${id}`).then(response => {
            console.log(response)
            this.setState({comments:response.data[0].count})
        })
    };

    handleClickPrevious(){
        if (this.state.counter === 0){
            this.setState ( { counter: this.props.user.length - 1} )
            
        }
        else {
            this.setState( { counter: this.state.counter -1 } )

        };
        this.handleCommentCount(this.props.user[this.state.counter].id)
    };

    handleClickNext(){
        if (this.state.counter >= this.props.user.length - 1) {
            this.setState ( { counter: 0 } )
        }
        else {
            this.setState ( { counter: this.state.counter +1 } )
        };
        this.handleCommentCount(this.props.user[this.state.counter].id)
    };

    render(){
        // console.table(this.state)
        // console.log(this.props)
        // let frontcardDiplay = this.props.user[this.props.currentIndex];
            return(
                this.props.user[this.state.counter] ?
                <div className = "Pizzeria" id={this.props.user[this.state.counter].id}>
                    <button className = "Left_Right_Arrow" onClick={ () => this.handleClickPrevious()}>
                        <img
                            className = "Arrow_Icon" 
                            src = "https://image.flaticon.com/icons/svg/17/17264.svg" 
                            alt ="Left Arrow" 
                            title = "Previous"
                        />
                    </button>
                    <div className = "Front_Pizzeria_Card">
                        <div className = "Front_Middle_Pizzeria_Card_Content">
                            <div className = "Front_Middle_Pizzeria_Card_Title">
                                <div className = "Front_Middle_Pizzeria_Card_Title_Text"> {this.props.user[this.state.counter].name} </div>
                            </div>
                            <div className = "Front_Middle_Pizzeria_Card_Location">
                                <p className = "Front_Middle_Pizzeria_Card_Location_Text"> {this.props.user[this.state.counter].city}, </p>
                                <br />
                                <br />
                                <p className = "Front_Middle_Pizzeria_Card_Location_Text"> {this.props.user[this.state.counter].state} </p>
                            </div>
                            <Link className = "Front_Middle_Pizzeria_Card_Button" to = {`/pizzeria/information/${this.state.counter}`}>
                                <p className = "Front_Middle_Pizzeria_Card_Button_Text"> View Information </p>
                            </Link>
                        </div>
                        <div className = "Front_Right_Pizzeria_Card_Content">
                            <div className = "Front_Right_Pizzeria_Rating_Content">
                                <p className = "Front_Right_Pizzeia_Rating_Text"> {this.props.user[this.state.counter].aggregate_rating} </p>
                            </div>
                            <div className = "Front_Right_Pizzeria_Rating_Content">
                                <p className = "Front_Right_Pizzeia_Rating_Text"> {this.state.comments}</p>
                            </div>
                        </div>
                        <img src = {this.props.user[this.state.counter].pizza_image}  className = "Front_Pizzeria_Card_Image"alt="pizza" />
                    </div>
                    <button className = "Left_Right_Arrow" onClick={ () => this.handleClickNext()}>
                        <img 
                            className = "Arrow_Icon" 
                            src="https://image.flaticon.com/icons/svg/17/17944.svg" 
                            alt="Right Arrow" 
                            title = "Next" 
                        />
                    </button>
                </div>

                : <div className = "error_page">
                    <img className = "Error_Page_Image" src = "https://i.gifer.com/D1pJ.gif" />
                </div>
                
            )
        
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.pizzeria
    };
};

export default connect(mapStateToProps, {getPizzeria: getPizzeria}) (Pizzerias);