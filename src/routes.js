import React from "react";
import { Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import About from "./components/Views/About/About";
import Account from "./components/Views/Account/Account";
import addReviews from "./components/Views/addReviews/addReviews";
import viewReviews from "./components/Views/viewReviews/viewReviews";
import Home from "./components/Views/Home/Home";
import Landing from "./components/Views/Landing/Landing";
import Information from "./components/Views/Information/Information";
import Login from "./components/Views/Login/Login";
import Pizzerias from "./components/Views/Pizzerias/Pizzerias";
import Signup from "./components/Views/Signup/Signup";
import store from './store';


export default (
    <Provider store = {store}>
        <Switch>
            <Route path = "/" exact component = {Landing} />
            <Route path = "/home" component = {Home} />
            <Route path = "/pizzerias" component = {Pizzerias} />
            <Route path = "/pizzeria/information/:id" component = {Information} />
            <Route path = "/account" component = {Account} />
            <Route path = "/signup" component = {Signup} />
            <Route path = "/login" component = {Login} />
            <Route path = "/about" component = {About} />
            <Route path = "/addreview" component = {addReviews} />
            <Route path = "/viewreview" component = {viewReviews} />
        </Switch>
    </Provider>
);