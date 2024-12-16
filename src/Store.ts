import { create } from "zustand";
import { Todo } from "./model";

interface Store {
  todo: Todo;
  todoList: Todo[];
}

interface Actions {
  updateTodo: (updatedTodo: Todo) => void;
  newTodo: (newTodo: Todo) => void;
  loadTodo: (arrayPos: number) => void;
}

export const useTodoStore = create<Store & Actions>((set) => ({
  todo: { id: "0", title: "", content: "" },
  todoList: [],
  updateTodo: (updatedTodo: Todo) =>
    set((state) => ({
      todo: { ...state.todo, ...updatedTodo },
      todoList: [
        { ...state.todo, ...updatedTodo },
        ...state.todoList.filter((val) => val.id !== updatedTodo.id),
      ],
    })),
  newTodo: (newTodo: Todo) =>
    set((state) => ({ todo: newTodo, todoList: [newTodo, ...state.todoList] })),
  loadTodo: (arrayPos: number) =>
    set((state) => ({ todo: { ...state.todoList[arrayPos] } })),
}));
