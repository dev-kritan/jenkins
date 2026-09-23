import type { Request, Response } from "express";
import { todoService } from "../services/todo.service.js";

export const getTodos = (_req: Request, res: Response): void => {
  const todos = todoService.getAll();

  res.json(todos);
};

export const getTodoById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      message: "Invalid todo ID",
    });

    return;
  }

  const todo = todoService.getById(id);

  if (!todo) {
    res.status(404).json({
      message: "Todo not found",
    });

    return;
  }

  res.json(todo);
};

export const createTodo = (req: Request, res: Response): void => {
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    res.status(400).json({
      message: "Title is required",
    });

    return;
  }

  const todo = todoService.create(title.trim());

  res.status(201).json(todo);
};

export const updateTodo = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      message: "Invalid todo ID",
    });

    return;
  }

  const { title, completed } = req.body;

  if (title !== undefined && typeof title !== "string") {
    res.status(400).json({
      message: "Title must be a string",
    });

    return;
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    res.status(400).json({
      message: "Completed must be a boolean",
    });

    return;
  }

  const todo = todoService.update(id, {
    title: title?.trim(),
    completed,
  });

  if (!todo) {
    res.status(404).json({
      message: "Todo not found",
    });

    return;
  }

  res.json(todo);
};

export const deleteTodo = (req: Request, res: Response): void => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(400).json({
      message: "Invalid todo ID",
    });

    return;
  }

  const deleted = todoService.delete(id);

  if (!deleted) {
    res.status(404).json({
      message: "Todo not found",
    });

    return;
  }

  res.status(204).send();
};
