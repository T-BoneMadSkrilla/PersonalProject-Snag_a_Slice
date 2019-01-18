import React, { Component } from 'react';
import './viewReviews.css'

class viewReviews extends Component {
    constructor(props){
        super(props)
        
        this.state = {};
    };

    render(){
        return(
            <div className = "viewReview_Container">
                <div className = "viewReview_Card"></div>
            </div>
        );
    };

};

export default viewReviews;