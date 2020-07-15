/////////////// this is
// import { Request, Response, NextFunction } from "express";
// export const createTodo = (  req: Request,  res: Response,  next: NextFunction) => {};
//
/////////////// same as this
// export const createTodo: RequestHandler = (req, res, next) => {};

import { RequestHandler } from "express";
import { Todo } from "../models/todo.models";
const TODOS: Todo[] = [];

// ========== //
//   CREATE   //
// ========== //
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text; // variable <name> = (req.body) as object with a text key of type string. Then call that key with dot notation or bracket notation.
  const newTodo = new Todo(Math.random().toString(), text);

  // send to array
  TODOS.push(newTodo);

  res.status(201).json({
    msg: "Created todo",
    createTodo: newTodo,
  });
};

// ======== //
//   READ   //
// ======== //
export const getTodo: RequestHandler = (req, res, next) => {
  res.status(201).json({
    todos: TODOS,
  });
};

// ========== //
//   UPDATE   //
// ========== //
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  // add generic type that extends RequestHandler and let it know about the object it will receive. This adds support
  const todoId = req.params.id;
  const updatedText = (req.body as { text: string }).text;

  const todoIndex: number = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error("Could not find todo in array.");
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText); // make a new object and replace it. Do not update the current object

  res.status(201).json({
    msg: `${todoIndex} has been updated to say: ${updatedText}`,
    updatedTodo: TODOS[todoIndex],
  });
};

// ========== //
//   DELETE   //
// ========== //
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex: number = TODOS.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw new Error("Could not find todo in array.");
  }

  TODOS.splice(todoIndex, 1);

  res.status(201).json({ msg: "Todo deleted" });
};
