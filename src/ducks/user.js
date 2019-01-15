import axios from "axios";

const initialState = {
    user: {},
    error: ""
};

// action types
const LOGIN = "LOGIN";
const SIGN_UP = "SIGN_UP";
const GET_USER = "GET_USER";


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


// reducer function
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
        default:
            return state;
    };
};