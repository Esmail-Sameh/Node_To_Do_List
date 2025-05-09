const mongoose = require("mongoose");

const dbConnect = async()=>{
    try{
       await mongoose.connect(process.env.DATABASE_URL);
       console.log("Connection is Done");
    }catch(error){
        console.log(error.message);
    }
 }

 module.exports = dbConnect;