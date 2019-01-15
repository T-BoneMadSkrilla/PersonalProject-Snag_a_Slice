import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/user";
import './Account.css';

class Account extends Component {
  componentDidMount() {
      this.props.getUser();
  }
  render() {
    if (!this.props.user.username){
        return <h1> Please log in </h1>
    }
    return(
      <div className = "Account">
        <div className = "Account_Container">
          <div className = "User_Bar_Account">
            <div className = "User_Tab">
              <div className = "Image_Tab">
                <img className = "Icon_Tab" src="https://image.flaticon.com/icons/svg/61/61159.svg" alt="Add Restaurant" title = "Add a Pizzeria" />
              </div>
              <div className = "Text_Tab">
                <p className = "Icon_Text"> Add a Pizzeria </p>
              </div>
            </div>
            <div className = "User_Tab">
              <div className = "Image_Tab">
                <img className = "Icon_Tab" src="https://image.flaticon.com/icons/svg/84/84139.svg" alt="Add a Review" />
              </div>
              <div className = "Text_Tab">
                <p className = "Icon_Text"> Add a Review </p>
              </div>
            </div>
            <div className = "User_Tab">
              <div className = "Image_Tab">
                <img className = "Icon_Tab" src="https://image.flaticon.com/icons/svg/121/121724.svg" alt="Rate" />
              </div>
              <div className = "Text_Tab">
                <p className = "Icon_Text"> Rate a Pizzeria </p>
              </div>
            </div>
            <div className = "User_Tab">
              <div className = "Image_Tab">
                <img className = "Icon_Tab" src="https://image.flaticon.com/icons/svg/121/121727.svg" alt="Add to Favorite" />
              </div>
              <div className = "Text_Tab">
                <p className = "Icon_Text"> Add to Favorites </p>
              </div>
            </div>
          </div>
          <div className = "Restaurant_Information_Card"></div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Account);