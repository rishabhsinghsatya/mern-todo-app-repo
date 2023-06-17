import express from "express";
import {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos", getAllTodos);
route.get("/todos/:id", toggleTodoDone); //  :id means it is a variable ,it can be changes
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
