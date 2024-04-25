// src/store.ts
import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface StoreState {
  todos: Todo[];
  inputText: string;
  setInputText: (text: string) => void;
  addTodo: () => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

const useStore = create<StoreState>((set) => {
  // Load todos from local storage on initialization
  const savedTodos = localStorage.getItem("todos");
  const initialTodos = savedTodos ? JSON.parse(savedTodos) : [];

  return {
    todos: initialTodos,
    inputText: "",
    setInputText: (text) => set({ inputText: text }),
    addTodo: () => {
      set((state) => {
        const newTodo: Todo = {
          id: Date.now(),
          text: state.inputText,
          completed: false,
        };
        return {
          todos: [...state.todos, newTodo],
          inputText: "",
        };
      });
    },
    toggleTodo: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
    editTodo: (id, newText) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, text: newText } : todo
        ),
      })),
    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  };
});

// Subscribe to changes in todos and save to local storage
useStore.subscribe((todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
});

export default useStore;


// // src/store.ts
// import { create } from "zustand";

// interface Todo {
//   id: number;
//   text: string;
//   completed: boolean;
// }

// interface StoreState {
//   todos: Todo[];
//   addTodo: (todo: Todo) => void;
//   toggleTodo: (id: number) => void;
//   editTodo: (id: number, newText: string) => void;
//   deleteTodo: (id: number) => void;
// }

// const useStore = create<StoreState>((set) => ({
//   todos: [],
//   addTodo: (todo) =>
//     set((state) => ({
//       todos: [...state.todos, { ...todo, completed: false }],
//     })),
//   toggleTodo: (id) =>
//     set((state) => ({
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     })),
//   editTodo: (id, newText) =>
//     set((state) => ({
//       todos: state.todos.map((todo) =>
//         todo.id === id ? { ...todo, text: newText } : todo
//       ),
//     })),
//   deleteTodo: (id) =>
//     set((state) => ({
//       todos: state.todos.filter((todo) => todo.id !== id),
//     })),
// }));

// export default useStore;

