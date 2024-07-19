 //BackEnd/index.js
// const express = require('express')
 require("dotenv").config();

 var bodyParser = require('body-parser')

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const connection = require("./config/database.js");
const ItemRouter = require("./Routes/itemRoutes.js");
const UserRouter = require("./Routes/userRoutes.js");

// -----| Configuration |-----
const app = express();
const userApp = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.set('strictQuery', false);

userApp.use(cors());
userApp.use(express.urlencoded({ extended: true }));
userApp.use(express.json());
mongoose.set('strictQuery', false);


connection();

// Routes
app.use('/', ItemRouter);
userApp.use('/', UserRouter); 

// -----| App listening |------
const userPort = process.env.USER_PORT || 3001; // Port for handling user data
const companyPort = process.env.COMPANY_PORT || 3002; // Port for handling company data
// const jobPort = process.env.JOB_PORT || 5000; // Port for handling job data


app.listen(userPort, () => {
    console.log("\n                       -->>    User server is running on port: " + userPort +"    <<--");
});

userApp.listen(companyPort, () => {
    console.log("                      -->>    Company server is running on port: " + companyPort +"    <<--");
});