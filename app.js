require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const taskRoute = require('./routes/task_route');

app.use(bodyParser.json());
app.use( "/tasks", taskRoute);

dbConnect();

 mongoose.connection.once("open" , ()=>{
    console.log("Connected to MongoDB");
    app.listen( PORT ,()=>{
        console.log(`http://localhost:${PORT}`);
    });
 });

 mongoose.connection.on("error" , (error)=>{
    console.log(error.message);
 });

 app.get("/" , (req , res)=>{
    res.json({
        "Message": "Wellcome to my server",
    });
 });

