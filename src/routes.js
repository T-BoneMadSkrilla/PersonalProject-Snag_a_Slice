import React from "react";
import { Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import Landing from "./components/Views/Landing/Landing";
import Home from "./components/Views/Home/Home";
import Pizzerias from "./components/Views/Pizzerias/Pizzerias";
import Account from "./components/Views/Account/Account";
import Signup from "./components/Views/Signup/Signup";
import Login from "./components/Views/Login/Login";
import About from "./components/Views/About/About";
import store from './store';


export default (
    <Provider store = {store}>
        <Switch>
            <Route path = "/" exact component = {Landing} />
            <Route path = "/home" component = {Home} />
            <Route path = "/pizzerias" component = {Pizzerias} />
            <Route path = "/account" component = {Account} />
            <Route path = "/signup" component = {Signup} />
            <Route path = "/login" component = {Login} />
            <Route path = "/about" component = {About} />
        </Switch>
    </Provider>
);