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
        this.getAllComments()
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
        let newArray = this.state.comments.filter(comment => {
            return comment.id !== this.state.id
        })
        this.setState({comments:newArray})
        axios.delete(`/pizzeria/deleteComments/${this.state.id}`)
    };

    render(){
        console.log(this.props)
        let DisplayComments = this.state.comments.map(comment => {
            return(
                <div onClick = {()=>this.getId(comment.id)}>
                    <p> {comment.username}: {comment.review}</p>
                </div>
            )
        })

        // console.log(this.props.user[+this.props.match.params.id])
        return(
            <div className = "Information" id = {this.props.user[+this.props.match.params]}>
                <div className = "Information_Card">
                    <div className = "Information_Left_Inner_Container">
                        <div className = "Information_Left_Inner_Top_Container">
                            <div className = "Information_Left_Inner_Top_Container_Title">

                                <p 
                                    className = "Information_Left_Inner_Top_Container_Title_Text"
                                >
                                {this.props.user[+this.props.match.params.id].name} 
                                </p>

                            </div>
                            <div className = "Information_Left_Inner_Top_Container_Content">
                                <div className = "Information_Left_Inner_Top_Container_Image">
                                    <img 
                                        src = {this.props.user[+this.props.match.params.id].pizzeria_image}className = "Information_Left_Inner_Top_Container_Image_Image" 
                                    />
                                </div>
                            </div>
                        </div>
                        <div className = "Information_Left_Inner_Middle_Container"></div>
                        <div className = "Information_Left_Inner_Bottom_Container">
                            <div className = "Information_Left_Inner_Bottom_Photo_Container">
                                <img className = "Information_User_Photo" src = "https://image.nola.com/home/nola-media/width600/img/lsu_impact/photo/ed-orgeron-lsu-vs-chattanooga-7c293b27512a8969.jpg" alt = "User Photo" />
                            </div>
                            <div className = "Information_Left_Inner_Bottom_Field_Container">

                                <input 
                                    className = "Information_Left_Inner_Bottom_Field_Input" 
                                    onChange = {this.handleChange}
                                    // value = {this.state.review} 
                                    type = "text"
                                    name = "review"
                                    placeholder = "Type Here ...."
                                />
                                <button
                                    className = "Information_Left_Inner_Bottom_Post_Button"
                                    title = "Post your Comment"
                                    onClick = {this.handlePost} 
                                > 
                                <p className = "Information_Left_Inner_Bottom_Post_Button_Text"> Post </p>
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className = "Information_Right_Inner_Container">
                        <div className = "Information_Right_Inner_Container_Title"> User's Reviews </div>
                        <div className = "Information_Right_Inner_Container_Field">
                            <div className = "Comment_Container">
                                <div className = "Comment_Container_Top">
                                    <input className = "Comment_Checkbox" type = "Checkbox" />
                                    <p className = "Comment_UserName"> wamontgomery0068 </p>
                                </div>
                                <div className = "Comment_Container_Middle">
                                    <p className = "Comment_Text"> "Garlic Knots the size of your fist, tasty brews, and the best pizza in town." </p>
                                </div>
                                <button 
                                    className = "Comment_Container_Bottom" 
                                    onClick = {this.handleDelete}>
                                    <img className = "Comment_Delete" src="https://image.flaticon.com/icons/svg/1400/1400390.svg" alt="Delete" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className = "Information_Container">
                    <div className = "Information_Container_Top">
                        <div className = "Information_Container_Top_Top">
                            <div className = "Information_Container_Top_Top_Title">
                            
                                <p 
                                    className = "Information_Container_Top_Top_Title_Text"> 
                                        {this.props.user[+this.props.match.params.id].name} 
                                </p>

                            </div>
                            <div className = "Information_Container_Top_Top_Content">

                                <img 
                                    src = {this.props.user[+this.props.match.params.id].pizzeria_image}className = "Information_Container_Top_Top_Image" 
                                />

                                <div className = "Information_Container_Top_Top_Rating">

                                    <p 
                                        className = "Information_Container_Top_Top_Rating_Text"> 
                                            {this.props.user[+this.props.match.params.id].aggregate_rating} 
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className = "Information_Container_Top_Bottom">
                            <div className = "Information_Container_Top_Bottom_Left">

                                <p 
                                    className = "Information_Container_Top_Bottom_Text"> 
                                        Address: {this.props.user[+this.props.match.params.id].address} 
                                </p>
                                
                                <p 
                                    className = "Information_Container_Top_Bottom_Text"> 
                                        Zipcode: {this.props.user[+this.props.match.params.id].zipcode} 
                                </p>

                                <p 
                                    className = "Information_Container_Top_Bottom_Text"> 
                                        City: {this.props.user[+this.props.match.params.id].city} 
                                </p>

                                <p 
                                    className = "Information_Container_Top_Bottom_Text"> 
                                        State: {this.props.user[+this.props.match.params.id].state} 
                                </p>

                            </div>
                            <div className = "Information_Container_Top_Bottom_Right">

                                <p 
                                    className = "Information_Container_Top_Bottom_Bottom_Text" > 
                                        Phone Number: {this.props.user[+this.props.match.params.id].phone_number} 
                                </p>

                                <p 
                                    className = "Information_Container_Top_Bottom_Bottom_Text" > 
                                        Website: {this.props.user[+this.props.match.params.id].website_url} 
                                </p>

                                <p 
                                    className = "Information_Container_Top_Bottom_Bottom_Text" > 
                                        Add Comment Below 
                                </p>

                                <p 
                                    className = "Information_Container_Top_Bottom_Bottom_Text" > 
                                        View Pizzeria Reviews Below  
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className = "Information_Container_Bottom">
                        <div className = "Information_Container_Bottom_Top">
                            <div className = "Information_Container_Bottom_Top_Title">

                                <p 
                                    className = "Information_Container_Bottom_Top_Title_Text">
                                         Add a Comment: {this.props.user[+this.props.match.params.id].name} 
                                </p>

                            </div>

                            <input 
                                onChange = {this.handleChange}
                                // value = {this.state.review} 
                                type = "text"
                                name = "review"
                                placeholder = "Type Here ...."
                                className = "Information_Container_Bottom_Top_Input_Field" 
                            />

                            <div className = "Information_Container_Bottom_Top_Post_Delete">
                                
                                <button 
                                    className = "Information_Container_Bottom_Top_Post_Delete_Button" 
                                    title = "Edit your Comment" 
                                    onClick = {this.handleUpdate}>
                                        <p className = "Information_Container_Bottom_Top_Edit_Button_Text"> Edit </p>
                                </button>
                                
                                <button 
                                    className = "Information_Container_Bottom_Top_Post_Delete_Button" 
                                    title = "Post your Comment" 
                                    onClick = {this.handlePost}> 
                                        <p className = "Information_Container_Bottom_Top_Post_Button_Text"> Post </p>
                                </button>
                                
                                <button 
                                    className = "Information_Container_Bottom_Top_Post_Delete_Button" 
                                    title = "Delete your Comment" 
                                    onClick = {this.handleDelete}> 
                                        <p className = "Information_Container_Bottom_Top_Delete_Button_Text"> Delete </p>
                                </button>

                            </div>

                        </div>
                        <div className = "Information_Container_Bottom_Bottom">
                            <p className = "Information_Container_Bottom_Bottom_Text"> View Pizzeria Reviews </p>
                            <div className = "Information_Container_Bottom_Bottom_Review_Field"> {DisplayComments} </div>
                        </div>                        
                    </div>
                </div> */}
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
