import axios from "axios";

const initialState = {
    user: {},
    pizzeria: [],
    error: ""
};

// Action types
const LOGIN = "LOGIN";
const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";
const Get_Pizzeria_Data = "Pizzeria_Data";
const Put_Pizzeria_Comment = "User_Adds_Comment";
const Delete_Pizzeria_Comment = "User_Deletes_Comment";


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
      payload: axios.get("/pizzerias/all")
    };
};

// Put Pizzeria Comment Action Creator
export function postComment(){
    return {
        type: Put_Pizzeria_Comment,
        
    }
}

// Delete Pizzeria Comment Action Creator
export function deleteComment(){
    return {
        type: Delete_Pizzeria_Comment,
    
    }
}

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
        case Put_Pizzeria_Comment + "_FULFILLED":
            return { ...state, pizzeria: action.payload.data};
        case Delete_Pizzeria_Comment + "_FULFILLED":
            return { ...state, pizzeria: action.payload.data};
        default:
            return state;
    };
};