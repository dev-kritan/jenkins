import type { Todo } from "../models/todo.model.js";

class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getAll(): Todo[] {
    return this.todos;
  }

  getById(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }

  create(title: string): Todo {
    const todo: Todo = {
      id: this.nextId++,
      title,
      completed: false,
      createdAt: new Date(),
    };

    this.todos.push(todo);

    return todo;
  }

  update(
    id: number,
    data: Partial<Pick<Todo, "title" | "completed">>,
  ): Todo | undefined {
    const todo = this.getById(id);

    if (!todo) {
      return undefined;
    }

    if (data.title !== undefined) {
      todo.title = data.title;
    }

    if (data.completed !== undefined) {
      todo.completed = data.completed;
    }

    return todo;
  }

  delete(id: number): boolean {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
      return false;
    }

    this.todos.splice(index, 1);

    return true;
  }
}

export const todoService = new TodoService();
