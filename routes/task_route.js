const express = require('express');
const mongoose = require('mongoose');
const route = express.Router();
const taskModel = require('../model/task_model');

route.get("/", async (req, res) => {
    try {
        const data = await taskModel.find();
        res.json({
            'status': true,
            'tasks': data
        });
    } catch (error) {
        console.log(error.message);
    }

});

route.post("/", async (req, res) => {
    try {
        const task = new taskModel(
            {
                title: req.body.title,
                description: req.body.description,
                isComplete: req.body.isComplete
            }
        );
        const data = await task.save();
        res.json(
            {
                'status': true,
                'data': data
            }
        );
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = route;
