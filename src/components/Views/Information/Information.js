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
        let DisplayComments = this.state.comments.map(comment => {
            return(
                <div onClick = {()=>this.getId(comment.id)}>
                    <p> {comment.username} {comment.review}</p>
                </div>
            )
        })

        // console.log(this.props.user[+this.props.match.params.id])
        return(
            <div className = "Information" id = {this.props.user[+this.props.match.params]}>
                <div className = "Information_Container">
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
