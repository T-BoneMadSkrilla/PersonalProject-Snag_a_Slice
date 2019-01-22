require('dotenv').config();
const express = require("express");
const {json} = require("body-parser");
const massive = require("massive");
const session = require('express-session');
const app = express();
const authController = require("./controllers/authController");
const pizzeriaController = require("./controllers/pizzeriaController");

app.use(json());
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Cowabunga! Your Database is Connected!")
});

// Users Endpoints
app.post("/auth/login", authController.login);
app.post("/auth/signup", authController.signup);
app.get("/auth/user", authController.user);

// Pizzerias Endpoints
app.get("/pizzerias/all", pizzeriaController.getPizzerias);

// Pizza Review Endpoints
app.get("/pizzeria/getReview")
app.post("/pizzeria/postReview")
app.put("/pizzeria/updateReview")
app.delete("/pizzeria/deleteReview")

app.listen(process.env.EXPRESS_PORT || 3056, () => {
    console.log(`Listening on ${process.env.EXPRESS_PORT}`);
});