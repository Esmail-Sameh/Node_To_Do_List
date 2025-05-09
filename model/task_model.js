const mongoose = require('mongoose');

const tasks = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require: false
    },
    isComplete:{
        type:Boolean,
        require:false
    }

});

module.exports = mongoose.model("Task", tasks);