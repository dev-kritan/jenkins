import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
