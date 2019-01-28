import axios from "axios";

const initialState = {
    user: {},
    pizzeria: [],
    error: "",
    comment: []
};

// Action types
const LOGIN = "LOGIN";
const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";
const Get_Pizzeria_Data = "Pizzeria_Data";
const GET_Pizzeria_Comment = "User_Adds_Comment";
const POST_Pizzeria_Comment = "User_Post_Comment";
const PUT_Pizzeria_Comment = "User_Update_Comment";
const Delete_Pizzeria_Comment = "User_Delete_Comment";


// Login Action Creator
export function login(username, password) {
    return {
      type: LOGIN,
      payload: axios.post("/auth/login", { username: username, password })
    };
};

// Sign Up Action Creator
export function signup(username, password, first_name, last_name, email) {
    return {
        type: SIGN_UP,
        payload: axios.post("/auth/signup", { username, password, first_name, last_name, email })
    };
};

// Get User Action Creator
export function getUser() {
    return {
      type: GET_USER,
      payload: axios.get("/auth/user")
    };
};

// Get Pizzeria Action Creator
export function getPizzeria() {
    return {
      type: Get_Pizzeria_Data,
      payload: axios.get("/pizzeria/all")
    };
};

// Get Pizzeria Comment Action Creator
export function getComment(id){
    // console.log(id)
    return {
        type: GET_Pizzeria_Comment,
        payload: axios.get(`/pizzeria/comments/${id}`)
    };
};

// Post Pizzeria Comment Acton Creator
export function postComment(username, review, id){
    return {
        type: POST_Pizzeria_Comment,
        payload: axios.post("/pizzeria/postComments", { username, review, id})
    };
};

// Put Pizzeria Comment Action Creator
export function updateComment(review){
    return {
        type: PUT_Pizzeria_Comment,
        payload: axios.put("/pizzeria/updateComments/:id", {review})
    };
};

// Delete Pizzeria Comment Action Creator
export function deleteComment(id){
    return {
        type: Delete_Pizzeria_Comment,
        payload: axios.delete(`/pizzeria/deleteComments/${id}`)
    };
};

// Reducer Function
export default function reducer(state = initialState, action){
    switch (action.type){
        case LOGIN + "_FULFILLED":
            return { ...state, user:action.payload.data};
        case LOGIN + "_REJECTED":
            return { ...state, error: "Bad login"};
        case SIGN_UP + "_FulFilled":
            return { ...state, user: action.payload.data};
        case GET_USER + "_FULFILLED":
            return { ...state, user: action.payload.data };
        case Get_Pizzeria_Data + "_FULFILLED":
            return { ...state, pizzeria: action.payload.data};
        case Get_Pizzeria_Data + "_REJECTED":
            return { ...state, error: "Pizzeria Data Could Not Be Found"};
        case GET_Pizzeria_Comment + "_FULFILLED":
            return { ...state, comment: action.payload.data};
        case GET_Pizzeria_Comment + "_PENDING":
            return { ...state };

        case POST_Pizzeria_Comment + "_FULLFILLED":
            console.log(action.payload.data)
            return { ...state, comment: action.payload.data};
        case POST_Pizzeria_Comment + "_PENDING":
            return { ...state };
        case PUT_Pizzeria_Comment + "_FULLFILLED":
            return { ...state, comment: action.payload.data};
        case PUT_Pizzeria_Comment + "_PENDING":
            return { ...state };
        case Delete_Pizzeria_Comment + "_FULLFILLED":
            return { ...state, pizzeria: action.payload.data};
        case Delete_Pizzeria_Comment + "_PENDING":
            return { ...state};
        default:
            return state;
    };
};