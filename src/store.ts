// src/store.ts
import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface StoreState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  toggleTodo: (id: number) => void;
}

const useStore = create<StoreState>((set) => ({
  todos: [],
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, { ...todo, completed: false }],
      })),
      toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
  }));

export default useStore;