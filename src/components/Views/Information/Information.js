import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {getPizzeria} from '../../../ducks/user';
import {getComment} from '../../../ducks/user';
import {postComment} from '../../../ducks/user';
import {updateComment} from '../../../ducks/user';
import {deleteComment} from '../../../ducks/user';

import './Information.css'

class Information extends Component {
    constructor(){
        super()

        this.state = {
            username: "",
            review: "",
            user_review: [],
            comments: [],
            id: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    componentDidMount(){
        this.props.getPizzeria()
        this.props.getComment(this.props.match.params.id)
        this.getUserInformation()
        // this.getAllComments()
    };

    getUserInformation = () => {
        axios.get("/pizzeria/comments/user").then(response => {
            // console.log(response)
            this.setState({username:response.data.username})
        })
    };

    getAllComments = () => {
        axios.get("/pizzeria/comments/all").then(response => {
            console.log(response)
            this.setState({comments:response.data})
        })
    };
    

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value})
    };

    handlePost(e){
        e.preventDefault();
        this.props.postComment(this.state.username, this.state.review, this.props.match.params.id)
    };

    handleUpdate(){
        this.props.put(this.state.review, this.props.match.params.id)
    }

    getId(id){
        console.log(id)
        this.setState({id})
    };

    handleDelete(){
        console.log(this.state.id)
        axios.delete(`/pizzeria/deleteComments/${this.state.id}`)
        this.props.getComment(this.props.match.params.id)
    };

    render(){
        console.log(this.props)
        let DisplayComments = this.props.comment.map(comment => {
            console.log(comment)
            return(
                <div className = "Comment_Container">

                    <div className = "Comment_Container_Top">

                        <input 
                            onClick = {() => this.getId(comment.id)} 
                            className = "Comment_CheckBox" type = "Checkbox" 
                        />

                        <p className = "Comment_UserName"> {comment.username} </p>

                    </div>

                    <div className = "Comment_Container_Middle">
                        <p className = "Comment_Text"> {comment.review} </p>
                    </div>

                    <div className = "Comment_Container_Buttons">
                        <button className = "Comment_Edit">
                            <p className = "Comment_Edit_Text"> Edit </p>
                        </button>
                        <button onClick = {this.handleDelete} className = "Comment_Container_Bottom">

                            <img className = "Comment_Delete" src="https://image.flaticon.com/icons/svg/1400/1400390.svg" alt="Delete" />
                    
                        </button>
                    </div>

                </div>
            )
        })

        return(
            <div className = "Information" id = {this.props.user[+this.props.match.params]}>
                <div className = "Information_Card">
                    <div className = "Information_Left_Inner_Container">
                        <div className = "Information_Left_Inner_Top_Container">
                            <div className = "Information_Left_Top_Box">
                                <p className = "Information_Left_Top_Box_Text"> {this.props.user[+this.props.match.params.id].name} </p>
                            </div>
                            <div className = "Information_Left_Bottom_Box">
                                <div className = "Information_Left_Bottom_Box_Image">
                                    <img src = {this.props.user[+this.props.match.params.id].pizzeria_image}className = "Information_Left_Bottom_Box_Image_Image" />
                                </div>
                                <div className = "Information_Left_Bottom_Box_Content">
                                    <div className = "Information_Left_Bottom_Box_Content_Content">
                                        <p className = "Information_Left_Bottom_Box_Content_Content_Text"> Address: {this.props.user[+this.props.match.params.id].address} </p>
                                        <p className = "Information_Left_Bottom_Box_Content_Content_Text"> Zipcode: {this.props.user[+this.props.match.params.id].zipcode} </p>
                                        <p className = "Information_Left_Bottom_Box_Content_Content_Text"> City: {this.props.user[+this.props.match.params.id].city} </p>
                                        <p className = "Information_Left_Bottom_Box_Content_Content_Text"> State: {this.props.user[+this.props.match.params.id].state} </p>
                                        <p className = "Information_Left_Bottom_Box_Content_Content_Text"> Phone Number: {this.props.user[+this.props.match.params.id].phone_number} </p>
                                        <p className = "Information_Left_Bottom_Box_Content_Content_Text"> Website: {this.props.user[+this.props.match.params.id].website_url} </p>
                                    </div>
                                    <Link to = "/Pizzerias">
                                    <div className = "Information_Left_Bottom_Box_Back_Button">
                                        <p className = "Information_Left_Bottom_Box_Back_Button_Text"> Return to Pizzerias </p>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className = "Information_Left_Inner_Bottom_Container">
                            <div className = "Information_Left_Box">
                                <img className = "Information_User_Photo" src = "http://profilepicturesdp.com/wp-content/uploads/2018/06/blank-user-profile-picture-5.png" alt = "User Photo" />
                                <p className = "Information_Left_Username_Text"> wamontgomery0068 </p>
                            </div>
                            <div className = "Information_Right_Box">
                                <input className = "Information_Right_Field" onChange = {this.handleChange} placeholder = "Type your Comment Here" type = "text" name = "review" />
                                <button className = "Information_Right_Post_Button" title = "Post Your Comment" onClick = {this.handlePost}>
                                    <p className = "Information_Right_Post_Button_Text"> Post </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className = "Information_Right_Inner_Container">
                        <div className = "Information_Right_Inner_Container_Title"> User's Reviews </div>
                        <div className = "Information_Right_Inner_Container_Field">
                            {DisplayComments}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        
        user: state.pizzeria,
        comment: state.comment
    };
};

export default connect(

    mapStateToProps, 

    {

        getPizzeria: getPizzeria, 
        getComment: getComment, 
        postComment: postComment,  
        updateComment: updateComment,
        deleteComment: deleteComment

    }) 

    (Information);

//{this.props.user[+this.props.match.params.id].review} 
