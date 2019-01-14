import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Views/Home/Home";
import Landing from "./components/Views/Landing/Landing";


export default (
    <Switch>
        <Route path = "/" exact component = {Landing} />
        <Route path = "/home" component = {Home} />
    </Switch>
);