require('dotenv').config();
const express = require("express");
const {json} = require("body-parser");
const massive = require("massive");
const session = require('express-session');
const bcrypt = require("bcryptjs");
const app = express();
// const authController = require("./controllers/authController");