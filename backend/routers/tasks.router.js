const express = require("express");
const TasksController = require("../controllers/tasks.controller");
const router = express.Router();

router.post("/getAllTasks", TasksController.getAllTasks);
router.post("/createTask", TasksController.createTask);
router.post("/deleteTask", TasksController.deleteTask);

module.exports = router;