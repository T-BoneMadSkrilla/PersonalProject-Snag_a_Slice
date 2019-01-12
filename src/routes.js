import React from "react";
import { Switch, Route } from "react-router-dom";

// import Dashboard from "./components/Views/Dashboard/Dashboard";
import Landing from "./components/Views/Landing/Landing";


export default (
    <Switch>
        <Route path = "/" exact component = {Landing} />
        {/* <Route path = "/home" component = {Dashboard} /> */}
    </Switch>
);