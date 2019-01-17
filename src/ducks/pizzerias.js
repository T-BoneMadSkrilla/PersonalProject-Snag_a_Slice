import axios from "axios";

const initialState = {
    pizzeria: {},
    error: ""
};

// Action Types
const Get_Pizzeria_Data = "Pizzeria_Data";

// Pizzeria Action Creator
export function getPizzeria(name, address, zipcode, city, state, aggregate_rating, website_url, phone_number, logo_image, pizzeria_image, pizza_image) {
    return {
      type: Get_Pizzeria_Data,
      payload: axios.get("/pizzerias/all", {name, address, zipcode, city, state, aggregate_rating, website_url, phone_number, logo_image, pizzeria_image, pizza_image})
    };
};

// Reducer Function
export default function reducer(state = initialState, action){
    switch (action.type){
        case Get_Pizzeria_Data + "_FULFILLED":
            return { ...state, pizzeria: action.payload.data};
        case Get_Pizzeria_Data + "_REJECTED":
            return { ...state, error: "Pizzeria Data Could Not Be Found"};
        default:
            return state;
    };
};