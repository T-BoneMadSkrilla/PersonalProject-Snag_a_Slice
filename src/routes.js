import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Views/Landing/Landing";
import Home from "./components/Views/Home/Home";
import Pizzerias from "./components/Views/Pizzerias/Pizzerias";
import Signup from "./components/Views/Signup/Signup";
import Login from "./components/Views/Login/Login";
import About from "./components/Views/About/About";


export default (
    <Switch>
        <Route path = "/" exact component = {Landing} />
        <Route path = "/home" component = {Home} />
        <Route path = "/pizzerias" component = {Pizzerias} />
        <Route path = "/signup" component = {Signup} />
        <Route path = "/login" component = {Login} />
        <Route path = "/about" component = {About} />
    </Switch>
);