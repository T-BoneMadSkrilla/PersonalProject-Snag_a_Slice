import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {getPizzeria} from '../../../ducks/user';
import './Pizzerias.css'

class Pizzerias extends Component {
    constructor(){
        super()

        this.state = {
            restaurant: getPizzeria,
            counter: 0
        };

        this.handleClickPrevious = this.handleClickPrevious.bind(this);
        this.handleClickNext = this.handleClickNext.bind(this);
    };

    componentDidMount(){
        this.props.getPizzeria()
    };

    handleClickPrevious(){
        if (this.state.counter === 0){
            this.setState ( { counter: 0} )
        }
        else {
            this.setState( { counter: this.state.counter -1 } )
        };
    };

    handleClickNext(){
        if (this.state.counter === this.state.restaurant) {
            this.setState ( { counter: 0 } )
        }
        else {
            this.setState ( { counter: this.state.counter +1 } )
        };
    };

    render(){
        console.table(this.props.user)
        let frontcardDiplay = this.props.user.map(pizza => {
            return(
                <div className = "Pizzeria" id={pizza.id}>
                    <button className = "Left_Right_Arrow" onClick={ () => this.handleClickPrevious}>
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
                                <div className = "Front_Middle_Pizzeria_Card_Title_Text"> {pizza.name} </div>
                            </div>
                            <div className = "Front_Middle_Pizzeria_Card_Location">
                                <p className = "Front_Middle_Pizzeria_Card_Location_Text"> {pizza.city}, </p>
                                <br />
                                <br />
                                <p className = "Front_Middle_Pizzeria_Card_Location_Text"> {pizza.state} </p>
                            </div>
                            <Link className = "Front_Middle_Pizzeria_Card_Button" to = "/pizzeria/information">
                                <p className = "Front_Middle_Pizzeria_Card_Button_Text"> View Information </p>
                            </Link>
                        </div>
                        <div className = "Front_Right_Pizzeria_Card_Content">
                            <div className = "Front_Right_Pizzeria_Rating_Content">
                                <p className = "Front_Right_Pizzeia_Rating_Text"> {pizza.aggregate_rating} </p>
                            </div>
                            <div className = "Front_Right_Pizzeria_Rating_Content">
                                <p className = "Front_Right_Pizzeia_Rating_Text"></p>
                            </div>
                        </div>
                        <img src = {pizza.pizza_image} className = "Front_Pizzeria_Card_Image"alt="pizza" />
                    </div>
                    <button className = "Left_Right_Arrow" onClick={ () => this.handleClickNext}>
                        <img 
                            className = "Arrow_Icon" 
                            src="https://image.flaticon.com/icons/svg/17/17944.svg" 
                            alt="Right Arrow" 
                            title = "Next" 
                        />
                    </button>
                </div>
                
            )
        })
        return(
            // <div className = "Pizzeria">
            //     <button className = "Left_Right_Arrow" onClick={ () => this.handleClickPrevious}>
            //         <img 
            //             className = "Arrow_Icon" src="https://image.flaticon.com/icons/svg/17/17264.svg" alt="Left Arrow" title = "Previous" 
            //         />
            //     </button>
            //     <div className = "Front_Pizzeria_Card">
            //         <div className = "Middle_Content_Pizzeria">
            //             <div className = "Middle_Title_Pizzeria">
            //                 <p className = "Middle_Title_Text"> Pizzeria Name </p>
            //             </div>
            //             <div className = "Middle_Location_Pizzeria">
            //                 <p className = "Middle_Location_Text"> Chattanooga, TN </p>
            //             </div>
            //             <Link to = "/pizzeria/information">
            //             <div className = "Middle_Button_Pizzeria">
            //                 <p className = "Middle_Button_Text"> View Information </p>
            //             </div>
            //             </Link>
            //         </div>
            //         <div className = "Right_Content_Pizzeria">
            //             <div className = "Right_Rating_Container">
            //                 <p className = "Right_Rating_Number_Text"> 5.0 </p>
            //             </div>
            //             <div className = "Right_Rating_Container">
            //                 <p className = "Right_Rating_Word_Text"> Excellent </p>                            
            //             </div>
            //         </div>
            //     </div>
            //     <button className = "Left_Right_Arrow" onClick={ () => this.handleClickNext}>
            //         <img className = "Arrow_Icon" src="https://image.flaticon.com/icons/svg/17/17944.svg" alt="Right Arrow" title = "Next" />
            //     </button>
            // </div>
            <div>{frontcardDiplay}</div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.pizzeria
    };
};

export default connect(mapStateToProps, {getPizzeria: getPizzeria}) (Pizzerias);