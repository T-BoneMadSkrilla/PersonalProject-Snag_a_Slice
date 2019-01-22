import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Hamburger.scss';

class Hamburger extends Component {
    state = {
        sideNav: false,
        links: ['Home', 'About', 'Pizzerias', 'Signup', 'Login']
    };

    render(){
        const { sideNav, links} = this.state;
        
        const linkMap = links.map((e,i) => {
            return (
                <div className = "sideNav" key = {i}>
                    <Link to = {`/${e}`}><p className = "sideNav_Text">{e}</p></Link>
                </div>
            );
        });
        return(
            <div className = "Hamburger_Container">
                <div className = "Hamburger_Bar">
                    <button className = "Hamburger_Bar_Button" onClick={()=> this.setState({ sideNav: !sideNav})}>
                        <img className = "Hamburger_Icon" src = "https://image.flaticon.com/icons/svg/56/56763.svg" />
                    </button>
                    <p className = "Hamburger_Text"> Menu </p>
                </div>
                <div className = "Hamburger_DropDown">
                    <Link to = "/Home">
                    <p className = "Hamburger_Link_Text"> Home </p>
                    </Link>
                    <Link to = "/About">
                    <p className = "Hamburger_Link_Text"> About </p>
                    </Link>
                    <Link to = "/Pizzerias">
                    <p className = "Hamburger_Link_Text"> Pizzerias </p>
                    </Link>
                    <Link to = "/Signup">
                    <p className = "Hamburger_Link_Text"> Sign up </p>
                    </Link>
                    <Link to = "/Login">
                    <p className = "Hamburger_Link_Text"> Login </p>
                    </Link>
                </div>
                {sideNav && <div className="sideNav">{linkMap}</div>}
            </div>
        )
        
    }
    
};

export default Hamburger;
