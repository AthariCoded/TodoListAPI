const { Router } = require("express");
const express = require("express");

const {
  todoFetch,
  deleteTodo,
  createTodo,
  updateTodo,
} = require("./controllers");

const router = express.Router();

//fetch list
router.get("/", todoFetch);

//delete
router.delete("/:todoId", deleteTodo);

//add
router.post("/", createTodo);

//update
router.put("/:todoId", updateTodo);

module.exports = router;
