const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
  updateTaskPatch,
} = require("../controllers/taskController");
const router = express.Router();

//Create a Task:
router.post("/", createTask);

//Get //Read Data
router.get("/", getTasks);

router.get("/:id", getTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

router.patch("/:id", updateTaskPatch);

module.exports = router;
