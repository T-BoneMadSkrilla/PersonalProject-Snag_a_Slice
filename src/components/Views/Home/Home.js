import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render(){
        return(
            <div className = "Home_Container">
                <div className = "Header_Container">
                    <div className = "EditorsChoice_Container"></div>
                    <button className = "ExploreBelow_Container">
                        <p className = "Explore_Below"> Explore Below </p>
                        <img class = "Arrow_Down" src = "https://image.flaticon.com/icons/svg/25/25623.svg" alt = "Arrow Down" title = "Filter" height="10" width="10" />
                    </button>
                </div>
                <div className = "MainContent_Container"></div>
            </div>
        )
    }
};

export default Home;