import express from "express";
import { addTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controller/todoController.js";
const router = express.Router();
router.post("/add", addTodo);
router.get("/get", getTodos);
router.delete("/delete/:id", deleteTodo);
router.get("/:id", getTodo);
router.put("/update/:id", updateTodo)
export default router; 