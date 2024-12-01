import { create } from "zustand";
import { Todo } from "./model";

interface TodoState {
  todo: Todo;
  todoList: Todo[];
  updateTodo: (updatedTodo: Todo) => void;
  addTodo: (newTodo: Todo) => void;
  openTodo: (arrayPos: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todo: {
    id: "0",
  },
  todoList: [
    {
      id: new Date().getTime().toString(),
      title: "Test Title",
      content: "Test content",
    },
  ],
  updateTodo: (updatedTodo: Todo) =>
    set((state) => ({
      todo: { ...state.todo, ...updatedTodo },
      todoList: [
        ...state.todoList.filter((val) => val.id !== updatedTodo.id),
        { ...state.todo, ...updatedTodo },
      ],
    })),
  addTodo: (newTodo: Todo) =>
    set((state) => ({
      todo: newTodo,
      todoList: [...state.todoList, newTodo],
    })),
  openTodo: (arrayPos: number) =>
    set((state) => ({
      todo: { ...state.todoList[arrayPos] },
    })),
}));
